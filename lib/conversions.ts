/**
 * Conversion Hub — Programmatic SEO data module
 *
 * Provides:
 *  - canonical lists of conversion values for static page generation
 *  - per-page math (default answer + range tables) for steps↔miles, steps↔km, steps↔calories
 *  - URL helpers and metadata helpers shared across category landing and value pages
 *
 * Defaults are chosen to match commonly cited US figures (avg step length ≈ 76 cm / 2.5 ft).
 */

import {
  calculateStepLength,
  stepsToDistance,
  distanceToSteps,
  formatNumber,
  type Gender,
} from "./step-calculator";
import {
  calculateCaloriesFromDistance,
  WALKING_SPEEDS_KMH,
  type WalkingSpeed,
} from "./calorie-calculator";

// ---------------------------------------------------------------------------
// Canonical value lists (drive generateStaticParams)
// ---------------------------------------------------------------------------

export const STEPS_TO_MILES_VALUES = [
  1000, 2000, 2500, 3000, 4000, 5000, 6000, 7000, 7500, 8000, 9000, 10000,
  11000, 12000, 13000, 14000, 15000, 16000, 17000, 18000, 20000, 25000, 30000,
] as const;

export const STEPS_TO_CALORIES_VALUES = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
  13000, 14000, 15000, 16000, 17000, 18000, 20000, 25000, 30000,
] as const;

export const MILES_TO_STEPS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] as const;

export const STEPS_TO_KM_VALUES = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000,
  13000, 14000, 15000, 16000, 17000, 18000, 20000, 25000, 30000,
] as const;

export const KM_TO_STEPS_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 10, 15] as const;

export const STEPS_TO_TIME_VALUES = [
  1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 12000, 15000,
  20000, 25000, 30000,
] as const;

export const MILES_TO_TIME_VALUES = [1, 2, 3, 4, 5, 6, 7, 8, 10, 13] as const;

// ---------------------------------------------------------------------------
// Default-person reference profile (used for the headline number on each page)
//
// The widely cited US average is "about 2,000 steps per mile" / "about 1,300 per km",
// which corresponds to a step length of ~80 cm. We use 76 cm (2.5 ft) as the
// "average adult" default — it matches the figures most commonly returned by Google
// snippets and Mayo Clinic / CDC publications for an average-height adult.
// ---------------------------------------------------------------------------

export const DEFAULT_STEP_LENGTH_CM = 76;
export const KM_PER_MILE = 1.609344;
export const CM_PER_KM = 100_000;

// Per-page conversions use this profile for any util that wants one.
export const DEFAULT_PROFILE = {
  gender: "male" as Gender,
  age: 30,
  heightCm: 178, // 5'10" — yields ≈ 73.9 cm × 1.03 adjust ≈ ~76 cm via util defaults
};

// Height range used in the "by height" tables. 5 rows: shortest → tallest adult.
export const HEIGHT_RANGE: Array<{
  label: string;
  cm: number;
  gender: Gender;
}> = [
  { label: `4'10" (147 cm) — petite`, cm: 147, gender: "female" },
  { label: `5'4" (163 cm) — avg woman`, cm: 163, gender: "female" },
  { label: `5'9" (175 cm) — avg adult`, cm: 175, gender: "male" },
  { label: `6'0" (183 cm) — avg man`, cm: 183, gender: "male" },
  { label: `6'4" (193 cm) — tall`, cm: 193, gender: "male" },
];

// Body weights used in calorie tables. 5 rows.
export const WEIGHT_RANGE: Array<{ label: string; kg: number }> = [
  { label: "120 lb (54 kg)", kg: 54 },
  { label: "150 lb (68 kg)", kg: 68 },
  { label: "180 lb (82 kg)", kg: 82 },
  { label: "210 lb (95 kg)", kg: 95 },
  { label: "250 lb (113 kg)", kg: 113 },
];

export const WALKING_PACES: Array<{
  label: string;
  speed: WalkingSpeed;
  mph: number;
}> = [
  { label: "Slow (2 mph)", speed: "slow", mph: 2 },
  { label: "Normal (3.1 mph)", speed: "normal", mph: 3.1 },
  { label: "Brisk (4 mph)", speed: "brisk", mph: 4 },
];

// ---------------------------------------------------------------------------
// Core conversions (default-profile answers)
// ---------------------------------------------------------------------------

export function stepsToMilesDefault(steps: number): number {
  const km = (steps * DEFAULT_STEP_LENGTH_CM) / CM_PER_KM;
  return km / KM_PER_MILE;
}

export function stepsToKmDefault(steps: number): number {
  return (steps * DEFAULT_STEP_LENGTH_CM) / CM_PER_KM;
}

export function milesToStepsDefault(miles: number): number {
  const km = miles * KM_PER_MILE;
  return Math.round((km * CM_PER_KM) / DEFAULT_STEP_LENGTH_CM);
}

export function kmToStepsDefault(km: number): number {
  return Math.round((km * CM_PER_KM) / DEFAULT_STEP_LENGTH_CM);
}

/**
 * Default calorie answer. Uses average weight (155 lb / 70 kg) walking at normal pace.
 * For headline display only; range table covers other weights/paces.
 */
export function stepsToCaloriesDefault(steps: number): number {
  const distanceKm = stepsToKmDefault(steps);
  const calories = calculateCaloriesFromDistance(70, distanceKm, "normal");
  return Math.round(calories);
}

export function walkingTimeMinutesDefault(
  distanceKm: number,
  speed: WalkingSpeed = "normal"
): number {
  const speedKmh = WALKING_SPEEDS_KMH[speed];
  return (distanceKm / speedKmh) * 60;
}

// ---------------------------------------------------------------------------
// Range tables (the heart of "unique value per page")
// ---------------------------------------------------------------------------

export interface StepsByHeightRow {
  height: string;
  stepLengthCm: number;
  miles: number;
  km: number;
}

export function buildStepsByHeightTable(steps: number): StepsByHeightRow[] {
  return HEIGHT_RANGE.map(({ label, cm, gender }) => {
    const stepLengthCm = calculateStepLength({ gender, age: 30, heightCm: cm });
    const { km, miles } = stepsToDistance(steps, stepLengthCm);
    return { height: label, stepLengthCm, miles, km };
  });
}

export interface DistanceByHeightRow {
  height: string;
  stepLengthCm: number;
  steps: number;
}

export function buildDistanceByHeightTable(
  distanceKm: number
): DistanceByHeightRow[] {
  return HEIGHT_RANGE.map(({ label, cm, gender }) => {
    const stepLengthCm = calculateStepLength({ gender, age: 30, heightCm: cm });
    const steps = distanceToSteps(distanceKm, stepLengthCm);
    return { height: label, stepLengthCm, steps };
  });
}

export interface CaloriesByWeightRow {
  weight: string;
  /** calories at each walking pace, indexed by WALKING_PACES order */
  calories: number[];
}

export function buildCaloriesByWeightTable(
  steps: number
): CaloriesByWeightRow[] {
  const distanceKm = stepsToKmDefault(steps);
  return WEIGHT_RANGE.map(({ label, kg }) => ({
    weight: label,
    calories: WALKING_PACES.map(({ speed }) =>
      Math.round(calculateCaloriesFromDistance(kg, distanceKm, speed))
    ),
  }));
}

export function buildCaloriesByWeightTableForDistance(
  distanceKm: number
): CaloriesByWeightRow[] {
  return WEIGHT_RANGE.map(({ label, kg }) => ({
    weight: label,
    calories: WALKING_PACES.map(({ speed }) =>
      Math.round(calculateCaloriesFromDistance(kg, distanceKm, speed))
    ),
  }));
}

export interface WalkingTimeRow {
  pace: string;
  mph: number;
  minutes: number;
  /** Pretty-formatted time string (e.g., "1h 23m" or "47 min") */
  display: string;
}

export function buildWalkingTimeTable(distanceKm: number): WalkingTimeRow[] {
  return WALKING_PACES.map(({ label, speed, mph }) => {
    const minutes = walkingTimeMinutesDefault(distanceKm, speed);
    return { pace: label, mph, minutes, display: formatMinutes(minutes) };
  });
}

export function formatMinutes(minutes: number): string {
  if (minutes < 60) return `${Math.round(minutes)} min`;
  const h = Math.floor(minutes / 60);
  const m = Math.round(minutes - h * 60);
  if (m === 0) return `${h} h`;
  return `${h} h ${m} min`;
}

// ---------------------------------------------------------------------------
// Real-world distance equivalents (puts the number in context)
// ---------------------------------------------------------------------------

const FAMILIAR_DISTANCES_MILES: Array<{ name: string; miles: number }> = [
  { name: "an Olympic 400m track lap", miles: 0.249 },
  { name: "the length of Central Park (NYC)", miles: 2.5 },
  { name: "a 5K race", miles: 3.107 },
  { name: "a 10K race", miles: 6.214 },
  { name: "the Brooklyn Bridge crossing (round trip)", miles: 2.5 },
  { name: "a half-marathon", miles: 13.109 },
  { name: "a full marathon", miles: 26.219 },
];

export function findClosestFamiliarDistance(miles: number): {
  name: string;
  miles: number;
  factor: number; // user's distance / familiar distance
} {
  let best = FAMILIAR_DISTANCES_MILES[0];
  let bestRatio = Infinity;
  for (const cand of FAMILIAR_DISTANCES_MILES) {
    const ratio = Math.max(miles, cand.miles) / Math.min(miles, cand.miles);
    if (ratio < bestRatio) {
      bestRatio = ratio;
      best = cand;
    }
  }
  return { name: best.name, miles: best.miles, factor: miles / best.miles };
}

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

export function formatMiles(miles: number): string {
  if (miles < 0.1) return miles.toFixed(3);
  if (miles < 10) return miles.toFixed(2);
  return miles.toFixed(1);
}

export function formatKm(km: number): string {
  if (km < 0.1) return km.toFixed(3);
  if (km < 10) return km.toFixed(2);
  return km.toFixed(1);
}

export function formatSteps(steps: number): string {
  return formatNumber(Math.round(steps));
}

// ---------------------------------------------------------------------------
// Page metadata helpers
// ---------------------------------------------------------------------------

export const CONVERSION_CATEGORIES = [
  {
    slug: "steps-to-miles",
    title: "Steps to Miles",
    description: "Convert any step count to miles walked",
  },
  {
    slug: "miles-to-steps",
    title: "Miles to Steps",
    description: "Convert miles to the equivalent number of steps",
  },
  {
    slug: "steps-to-calories",
    title: "Steps to Calories",
    description: "Estimate calories burned from any step count",
  },
  {
    slug: "steps-to-km",
    title: "Steps to Kilometers",
    description: "Convert any step count to kilometers walked",
  },
  {
    slug: "km-to-steps",
    title: "Kilometers to Steps",
    description: "Convert kilometers to the equivalent number of steps",
  },
  {
    slug: "steps-to-time",
    title: "Steps to Walking Time",
    description: "How long it takes to walk any number of steps",
  },
  {
    slug: "miles-to-time",
    title: "Miles to Walking Time",
    description: "How long it takes to walk any number of miles",
  },
] as const;

export type ConversionCategorySlug =
  (typeof CONVERSION_CATEGORIES)[number]["slug"];
