import { describe, expect, it } from "vitest";
import {
  calculateRuck,
  pandolfWatts,
  generateLoadTable,
  TERRAINS,
} from "./rucking-calculator";

const BASE = {
  weightKg: 70,
  speedKmh: 4.8,
  gradePercent: 0,
  durationMinutes: 30,
  terrainFactor: 1.0,
};

describe("pandolfWatts", () => {
  it("matches a hand-derived value for a loaded level walk", () => {
    // W=70, L=20, V=1.3333 m/s, G=0, n=1.0
    //   standing     = 1.5 * 70                        = 105
    //   load penalty = 2.0 * 90 * (20/70)^2            =  14.69
    //   movement     = 1.0 * 90 * 1.5 * 1.3333^2       = 240.0
    const watts = pandolfWatts({ ...BASE, loadKg: 20 });
    expect(watts).toBeCloseTo(105 + 14.69 + 240.0, 0);
  });

  it("drops the load penalty entirely when carrying nothing", () => {
    // With L=0 the middle term vanishes: 105 + 0 + 1.0*70*1.5*1.3333^2.
    const watts = pandolfWatts({ ...BASE, loadKg: 0 });
    expect(watts).toBeCloseTo(105 + 186.67, 0);
  });

  it("scales movement cost by the terrain factor", () => {
    const paved = pandolfWatts({ ...BASE, loadKg: 15, terrainFactor: 1.0 });
    const sand = pandolfWatts({ ...BASE, loadKg: 15, terrainFactor: 2.1 });
    expect(sand).toBeGreaterThan(paved);
    // Only the movement term is scaled, so the ratio stays below the raw 2.1x.
    expect(sand / paved).toBeLessThan(2.1);
  });

  it("clamps downhill grades rather than extrapolating outside the model", () => {
    const level = pandolfWatts({ ...BASE, loadKg: 15, gradePercent: 0 });
    const downhill = pandolfWatts({ ...BASE, loadKg: 15, gradePercent: -10 });
    expect(downhill).toBe(level);
  });

  it("returns zero for a zero body weight instead of dividing by it", () => {
    expect(pandolfWatts({ ...BASE, weightKg: 0, loadKg: 10 })).toBe(0);
  });
});

describe("calculateRuck", () => {
  it("produces an unloaded burn within a few percent of the MET model", () => {
    // Cross-check against an independent model: 4.8 km/h level walking is
    // ~3.5 METs, so 3.5 * 3.5 * 70 / 200 = 4.29 kcal/min. Pandolf and the MET
    // table are separately derived, so agreement to a few percent is the most
    // that should be asserted here.
    const result = calculateRuck({ ...BASE, loadKg: 0 });
    const metModelKcalPerMin = (3.5 * 3.5 * 70) / 200;
    const relativeError =
      Math.abs(result.kcalPerMinute - metModelKcalPerMin) / metModelKcalPerMin;
    expect(relativeError).toBeLessThan(0.05);
    expect(result.calories).toBe(125);
  });

  it("attributes the extra burn to the load", () => {
    const result = calculateRuck({ ...BASE, loadKg: 20 });
    expect(result.caloriesFromLoad).toBe(
      result.calories - result.caloriesUnloaded
    );
    expect(result.caloriesFromLoad).toBeGreaterThan(0);
  });

  it("flags a load above a third of body weight", () => {
    expect(calculateRuck({ ...BASE, loadKg: 20 }).loadIsHeavy).toBe(false);
    expect(calculateRuck({ ...BASE, loadKg: 30 }).loadIsHeavy).toBe(true);
  });

  it("reports load as a fraction of body weight", () => {
    expect(calculateRuck({ ...BASE, loadKg: 14 }).loadRatio).toBeCloseTo(0.2, 3);
  });

  it("increases with grade", () => {
    const level = calculateRuck({ ...BASE, loadKg: 15, gradePercent: 0 });
    const uphill = calculateRuck({ ...BASE, loadKg: 15, gradePercent: 10 });
    expect(uphill.calories).toBeGreaterThan(level.calories);
  });

  it("reports a MET that reproduces the kcal/min shown beside it", () => {
    const result = calculateRuck({ ...BASE, loadKg: 15 });
    // The page prints both, so MET x 3.5 x kg / 200 must return kcal/min.
    expect((result.met * 3.5 * BASE.weightKg) / 200).toBeCloseTo(
      result.kcalPerMinute,
      6
    );
  });

  it("derives distance from speed and duration", () => {
    expect(calculateRuck({ ...BASE, loadKg: 10 }).distanceKm).toBeCloseTo(2.4, 5);
  });
});

describe("generateLoadTable", () => {
  it("rises monotonically with load", () => {
    const rows = generateLoadTable(BASE);
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i].calories).toBeGreaterThan(rows[i - 1].calories);
    }
  });

  it("anchors the zero-load row at no increase", () => {
    const rows = generateLoadTable(BASE);
    expect(rows[0].loadKg).toBe(0);
    expect(rows[0].percentOverUnloaded).toBeCloseTo(0, 6);
  });
});

describe("TERRAINS", () => {
  it("uses blacktop as the 1.0 reference and sand as the most costly", () => {
    expect(TERRAINS[0].factor).toBe(1.0);
    expect(Math.max(...TERRAINS.map((t) => t.factor))).toBe(2.1);
  });
});
