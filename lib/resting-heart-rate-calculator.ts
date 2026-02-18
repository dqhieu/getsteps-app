/**
 * Resting Heart Rate Calculator Utilities
 *
 * Calculates cardiovascular fitness category from resting heart rate
 * and computes personalized Karvonen training zones.
 */

export type Gender = "male" | "female";

export type FitnessCategory =
  | "athlete"
  | "excellent"
  | "good"
  | "above_average"
  | "average"
  | "below_average"
  | "poor";

export interface HeartRateZone {
  zone: number;
  name: string;
  pctMin: number;
  pctMax: number;
  minBpm: number;
  maxBpm: number;
  purpose: string;
}

export interface RHRResult {
  fitnessCategory: FitnessCategory;
  fitnessCategoryLabel: string;
  hrMax: number;
  hrr: number;
  zones: HeartRateZone[];
}

interface CategoryRange {
  category: FitnessCategory;
  label: string;
  max: number;
}

const MALE_CATEGORIES: CategoryRange[] = [
  { category: "athlete", label: "Athlete", max: 54 },
  { category: "excellent", label: "Excellent", max: 60 },
  { category: "good", label: "Good", max: 65 },
  { category: "above_average", label: "Above Average", max: 70 },
  { category: "average", label: "Average", max: 75 },
  { category: "below_average", label: "Below Average", max: 80 },
  { category: "poor", label: "Poor", max: Infinity },
];

const FEMALE_CATEGORIES: CategoryRange[] = [
  { category: "athlete", label: "Athlete", max: 59 },
  { category: "excellent", label: "Excellent", max: 64 },
  { category: "good", label: "Good", max: 69 },
  { category: "above_average", label: "Above Average", max: 74 },
  { category: "average", label: "Average", max: 79 },
  { category: "below_average", label: "Below Average", max: 84 },
  { category: "poor", label: "Poor", max: Infinity },
];

const ZONE_DEFINITIONS = [
  { zone: 1, name: "Active Recovery", pctMin: 0.5, pctMax: 0.6, purpose: "Recovery" },
  { zone: 2, name: "Fat Burn", pctMin: 0.6, pctMax: 0.7, purpose: "Fat Burn" },
  { zone: 3, name: "Aerobic Endurance", pctMin: 0.7, pctMax: 0.8, purpose: "Aerobic" },
  { zone: 4, name: "Lactate Threshold", pctMin: 0.8, pctMax: 0.9, purpose: "Threshold" },
  { zone: 5, name: "VO2 Max", pctMin: 0.9, pctMax: 1.0, purpose: "VO2 Max" },
];

function getCategory(rhr: number, gender: Gender): { category: FitnessCategory; label: string } {
  const ranges = gender === "male" ? MALE_CATEGORIES : FEMALE_CATEGORIES;
  const match = ranges.find((r) => rhr <= r.max);
  return match ?? { category: "poor", label: "Poor" };
}

export function calculateRHR(age: number, gender: Gender, rhr: number): RHRResult {
  const hrMax = 220 - age;
  const hrr = hrMax - rhr;
  const { category, label } = getCategory(rhr, gender);

  const zones: HeartRateZone[] = ZONE_DEFINITIONS.map((def) => ({
    zone: def.zone,
    name: def.name,
    pctMin: def.pctMin,
    pctMax: def.pctMax,
    minBpm: Math.round(rhr + hrr * def.pctMin),
    maxBpm: Math.round(rhr + hrr * def.pctMax),
    purpose: def.purpose,
  }));

  return { fitnessCategory: category, fitnessCategoryLabel: label, hrMax, hrr, zones };
}
