import { describe, expect, it } from "vitest";
import {
  paceBreakdown,
  formatPace,
  inclineEquivalent,
  elevationGain,
  requiredIncline,
  generateEquivalenceTable,
  MPH_TO_KMH,
} from "./treadmill-incline-calculator";
import { estimateVO2, WALK_RUN_THRESHOLD_KMH } from "./treadmill-calculator";

describe("paceBreakdown", () => {
  it("converts a speed into every pace unit", () => {
    const pace = paceBreakdown(6);
    expect(pace.mph).toBeCloseTo(6 / MPH_TO_KMH, 4);
    expect(pace.minPerKm).toBeCloseTo(10, 4);
    expect(pace.minPerMile).toBeCloseTo(60 / (6 / MPH_TO_KMH), 4);
  });

  it("returns zeros rather than dividing by a zero speed", () => {
    expect(paceBreakdown(0)).toEqual({
      kmh: 0,
      mph: 0,
      minPerKm: 0,
      minPerMile: 0,
    });
  });
});

describe("formatPace", () => {
  it.each([
    [10, "10:00"],
    [9.5, "9:30"],
    [7.25, "7:15"],
    [0, "—"],
  ])("formats %p as %p", (minutes, expected) => {
    expect(formatPace(minutes)).toBe(expected);
  });

  it("carries into the next minute instead of printing :60", () => {
    expect(formatPace(8.999)).toBe("9:00");
  });
});

describe("inclineEquivalent", () => {
  it("returns the same speed on a level belt", () => {
    const eq = inclineEquivalent(5, 0);
    expect(eq.kind).toBe("walk");
    expect(eq.flatSpeedKmh).toBeCloseTo(5, 4);
    expect(eq.effortMultiplier).toBeCloseTo(1, 4);
  });

  it("matches the oxygen cost of the flat walk it reports", () => {
    const eq = inclineEquivalent(4, 2);
    expect(eq.kind).toBe("walk");
    expect(estimateVO2(eq.flatSpeedKmh as number, 0)).toBeCloseTo(eq.vo2, 4);
  });

  it("matches the oxygen cost of the jog it reports", () => {
    const eq = inclineEquivalent(3 * MPH_TO_KMH, 12);
    expect(eq.kind).toBe("jog");
    expect(estimateVO2(eq.flatSpeedKmh as number, 0)).toBeCloseTo(eq.vo2, 4);
    expect((eq.flatSpeedKmh as number) / MPH_TO_KMH).toBeCloseTo(4.7, 1);
  });

  it("scales the walking equivalent by 1 + 18 x grade while it stays a walk", () => {
    // Walking VO2 net of rest is 0.1S(1 + 18G), so a 1% grade is 1.18x flat.
    const eq = inclineEquivalent(4, 1);
    expect(eq.kind).toBe("walk");
    expect(eq.effortMultiplier).toBeCloseTo(1.18, 4);
    expect(eq.flatSpeedKmh).toBeCloseTo(4 * 1.18, 4);
  });

  it("reports no level equivalent inside the walk/run gap", () => {
    // 4.8 km/h at 5% costs more than any flat walk and less than the slowest
    // flat jog. Inverting either equation here would be extrapolation.
    const eq = inclineEquivalent(4.8, 5);
    expect(eq.kind).toBe("between");
    expect(eq.flatSpeedKmh).toBeNull();
  });

  it("never reports an equivalent slower than the graded walk itself", () => {
    for (const speed of [3, 4, 4.8, 5.5, 6]) {
      for (const incline of [0, 1, 2, 3, 5, 8, 10, 12, 15]) {
        const eq = inclineEquivalent(speed, incline);
        if (eq.flatSpeedKmh !== null) {
          expect(eq.flatSpeedKmh).toBeGreaterThanOrEqual(speed - 1e-9);
        }
      }
    }
  });

  it("makes a steeper grade cost more than a shallow one", () => {
    const shallow = inclineEquivalent(5, 3);
    const steep = inclineEquivalent(5, 12);
    expect(steep.vo2).toBeGreaterThan(shallow.vo2);
    expect(steep.effortMultiplier).toBeGreaterThan(shallow.effortMultiplier);
  });
});

describe("elevationGain", () => {
  it("computes vertical rise as belt distance times grade", () => {
    // 5 km/h for 30 min is 2.5 km; at 10% that is 250 vertical metres.
    const result = elevationGain(5, 10, 30);
    expect(result.distanceKm).toBeCloseTo(2.5, 6);
    expect(result.meters).toBeCloseTo(250, 6);
    expect(result.feet).toBeCloseTo(820.21, 1);
  });

  it("expresses the climb in storeys and stair steps", () => {
    const result = elevationGain(5, 10, 30);
    expect(result.storeys).toBeCloseTo(250 / 3, 4);
    expect(result.stairSteps).toBeCloseTo(250 / 0.17, 4);
  });

  it("returns no climb on a level belt", () => {
    expect(elevationGain(6, 0, 45).meters).toBe(0);
  });
});

describe("requiredIncline", () => {
  it("finds the grade that matches a faster level pace", () => {
    const incline = requiredIncline(4, 6);
    expect(incline).not.toBeNull();
    expect(estimateVO2(4, incline as number)).toBeCloseTo(estimateVO2(6, 0), 4);
  });

  it("needs no incline when already at the target speed", () => {
    expect(requiredIncline(5, 5)).toBeCloseTo(0, 6);
  });

  it("returns null when the target is slower than the current speed", () => {
    expect(requiredIncline(6, 4)).toBeNull();
  });

  it("returns null when no grade within the ceiling can reach the target", () => {
    expect(requiredIncline(3, 12)).toBeNull();
  });

  it("returns null for a stopped belt", () => {
    expect(requiredIncline(0, 5)).toBeNull();
  });
});

describe("generateEquivalenceTable", () => {
  it("rises monotonically in effort with grade", () => {
    const rows = generateEquivalenceTable(5);
    for (let i = 1; i < rows.length; i++) {
      expect(rows[i].met).toBeGreaterThan(rows[i - 1].met);
      expect(rows[i].effortMultiplier).toBeGreaterThan(
        rows[i - 1].effortMultiplier
      );
    }
  });

  it("never shows a reported equivalent slower than a previous row", () => {
    const speeds = generateEquivalenceTable(5)
      .map((r) => r.flatSpeedKmh)
      .filter((v): v is number => v !== null);
    for (let i = 1; i < speeds.length; i++) {
      expect(speeds[i]).toBeGreaterThanOrEqual(speeds[i - 1]);
    }
  });

  it("starts at the unmodified speed with no effort penalty", () => {
    const rows = generateEquivalenceTable(5);
    expect(rows[0].incline).toBe(0);
    expect(rows[0].kind).toBe("walk");
    expect(rows[0].flatSpeedKmh).toBeCloseTo(5, 4);
  });

  it("passes through the gap and out into jogging as the grade climbs", () => {
    const kinds = generateEquivalenceTable(5).map((r) => r.kind);
    expect(kinds[0]).toBe("walk");
    expect(kinds).toContain("between");
    expect(kinds[kinds.length - 1]).toBe("jog");
  });
});
