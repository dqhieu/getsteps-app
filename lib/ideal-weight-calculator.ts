/**
 * Ideal Weight Calculator Utilities
 *
 * Four clinical formulas plus the healthy BMI range.
 *
 * All four originated as drug-dosing tools, not as body composition targets,
 * and all four are height-and-sex-only: they cannot see muscle mass, frame
 * size or body fat. A muscular person will read as "overweight" on every one
 * of them. The healthy BMI range is included alongside because it gives a
 * band rather than a single number, which is the more honest answer.
 */

import type { Gender } from "./bmr-calculator";

export type { Gender };

const CM_PER_INCH = 2.54;
const BASE_HEIGHT_INCHES = 60; // 5 feet, the height every formula counts inches above

export type IdealWeightFormula = "devine" | "robinson" | "miller" | "hamwi";

interface FormulaSpec {
  key: IdealWeightFormula;
  name: string;
  year: string;
  base: Record<Gender, number>;
  perInch: Record<Gender, number>;
}

const FORMULA_SPECS: FormulaSpec[] = [
  {
    key: "devine",
    name: "Devine",
    year: "1974",
    base: { male: 50.0, female: 45.5 },
    perInch: { male: 2.3, female: 2.3 },
  },
  {
    key: "robinson",
    name: "Robinson",
    year: "1983",
    base: { male: 52.0, female: 49.0 },
    perInch: { male: 1.9, female: 1.7 },
  },
  {
    key: "miller",
    name: "Miller",
    year: "1983",
    base: { male: 56.2, female: 53.1 },
    perInch: { male: 1.41, female: 1.36 },
  },
  {
    key: "hamwi",
    name: "Hamwi",
    year: "1964",
    base: { male: 48.0, female: 45.5 },
    perInch: { male: 2.7, female: 2.2 },
  },
];

export interface FormulaEstimate {
  key: IdealWeightFormula;
  name: string;
  year: string;
  weightKg: number;
}

export interface IdealWeightResult {
  estimates: FormulaEstimate[];
  /** Mean of the four formulas: the headline figure. */
  averageKg: number;
  /** Lowest and highest of the four, showing how much they disagree. */
  rangeKg: { min: number; max: number };
  /** Weight band for BMI 18.5–24.9 at this height. */
  healthyBmiRangeKg: { min: number; max: number };
  /** Present only when a current weight was supplied. */
  comparison: {
    currentWeightKg: number;
    differenceKg: number;
    withinHealthyBmiRange: boolean;
  } | null;
}

export function calculateIdealWeight(
  gender: Gender,
  heightCm: number,
  currentWeightKg?: number | null
): IdealWeightResult {
  const heightInches = heightCm / CM_PER_INCH;
  const inchesOverBase = Math.max(0, heightInches - BASE_HEIGHT_INCHES);

  const estimates: FormulaEstimate[] = FORMULA_SPECS.map((spec) => ({
    key: spec.key,
    name: spec.name,
    year: spec.year,
    weightKg:
      Math.round((spec.base[gender] + spec.perInch[gender] * inchesOverBase) * 10) / 10,
  }));

  const weights = estimates.map((e) => e.weightKg);
  const averageKg =
    Math.round((weights.reduce((sum, w) => sum + w, 0) / weights.length) * 10) / 10;

  const heightM = heightCm / 100;
  const healthyBmiRangeKg = {
    min: Math.round(18.5 * heightM * heightM * 10) / 10,
    max: Math.round(24.9 * heightM * heightM * 10) / 10,
  };

  let comparison: IdealWeightResult["comparison"] = null;
  if (typeof currentWeightKg === "number" && currentWeightKg > 0) {
    const differenceKg = Math.round((currentWeightKg - averageKg) * 10) / 10;
    const withinHealthyBmiRange =
      currentWeightKg >= healthyBmiRangeKg.min &&
      currentWeightKg <= healthyBmiRangeKg.max;

    comparison = {
      currentWeightKg,
      differenceKg,
      withinHealthyBmiRange,
    };
  }

  return {
    estimates,
    averageKg,
    rangeKg: { min: Math.min(...weights), max: Math.max(...weights) },
    healthyBmiRangeKg,
    comparison,
  };
}
