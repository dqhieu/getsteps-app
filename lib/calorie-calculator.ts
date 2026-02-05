/**
 * Calorie Calculator Utilities
 *
 * Calculate calories burned from walking/steps using MET (Metabolic Equivalent of Task) values.
 * MET represents the energy cost of physical activities.
 *
 * Formula: Calories = MET × weight (kg) × duration (hours)
 */

import { lbsToKg, kmToMiles } from "./unit-converter";

// MET values for different walking speeds
export const WALKING_MET_VALUES = {
  slow: 2.5, // 3.2 km/h (2 mph) - leisurely stroll
  normal: 3.5, // 5.0 km/h (3.1 mph) - average walking pace
  brisk: 4.5, // 6.4 km/h (4 mph) - brisk walking
  fast: 5.0, // 7.2 km/h (4.5 mph) - very brisk/power walking
} as const;

export type WalkingSpeed = keyof typeof WALKING_MET_VALUES;

// Walking speed in km/h for each pace
export const WALKING_SPEEDS_KMH = {
  slow: 3.2,
  normal: 5.0,
  brisk: 6.4,
  fast: 7.2,
} as const;

// Average steps per minute for walking
export const STEPS_PER_MINUTE = 100;
export const STEPS_PER_HOUR = STEPS_PER_MINUTE * 60;

// Calories per kg of fat
export const CALORIES_PER_KG_FAT = 7700;

// Default weight in kg
export const DEFAULT_WEIGHT_KG = 70;

export interface CalorieCalculationInput {
  weightKg: number;
  durationMinutes?: number;
  distanceKm?: number;
  speed?: WalkingSpeed;
  steps?: number;
}

export interface CalorieCalculationResult {
  caloriesBurned: number;
  fatBurnedGrams: number;
  durationMinutes: number;
  distanceKm: number;
  distanceMiles: number;
  steps: number;
}

/**
 * Get MET value for a walking speed
 */
export function getMET(speed: WalkingSpeed = "normal"): number {
  return WALKING_MET_VALUES[speed];
}

/**
 * Get walking speed in km/h
 */
export function getWalkingSpeedKmh(speed: WalkingSpeed = "normal"): number {
  return WALKING_SPEEDS_KMH[speed];
}

/**
 * Calculate calories burned from duration and weight
 * Formula: Calories = MET × weight (kg) × duration (hours)
 */
export function calculateCaloriesFromDuration(
  weightKg: number,
  durationMinutes: number,
  speed: WalkingSpeed = "normal"
): number {
  const met = getMET(speed);
  const durationHours = durationMinutes / 60;
  return met * weightKg * durationHours;
}

/**
 * Calculate calories burned from distance and weight
 * First converts distance to duration, then calculates calories
 */
export function calculateCaloriesFromDistance(
  weightKg: number,
  distanceKm: number,
  speed: WalkingSpeed = "normal"
): number {
  const speedKmh = getWalkingSpeedKmh(speed);
  const durationMinutes = (distanceKm / speedKmh) * 60;
  return calculateCaloriesFromDuration(weightKg, durationMinutes, speed);
}

/**
 * Calculate calories burned from steps
 * Simplified formula: Calories ≈ steps × 0.04 × (weight/70)
 * This accounts for the average calorie burn per step adjusted for body weight
 */
export function calculateCaloriesFromSteps(
  steps: number,
  weightKg: number = DEFAULT_WEIGHT_KG
): number {
  // Base: ~0.04 calories per step for a 70kg person
  // Adjusted for actual weight
  const caloriesPerStep = 0.04 * (weightKg / DEFAULT_WEIGHT_KG);
  return steps * caloriesPerStep;
}

/**
 * Estimate steps from duration
 */
export function estimateStepsFromDuration(durationMinutes: number): number {
  return Math.round(durationMinutes * STEPS_PER_MINUTE);
}

/**
 * Estimate duration from steps
 */
export function estimateDurationFromSteps(steps: number): number {
  return Math.round(steps / STEPS_PER_MINUTE);
}

/**
 * Estimate distance from steps using average step length
 * Average step length: ~0.75m (75cm)
 */
export function estimateDistanceFromSteps(
  steps: number,
  stepLengthCm: number = 75
): number {
  return (steps * stepLengthCm) / 100000; // Return in km
}

/**
 * Estimate steps from distance using average step length
 */
export function estimateStepsFromDistance(
  distanceKm: number,
  stepLengthCm: number = 75
): number {
  return Math.round((distanceKm * 100000) / stepLengthCm);
}

/**
 * Calculate fat burned in grams from calories
 * 1 kg of fat ≈ 7,700 calories
 */
export function calculateFatBurned(calories: number): number {
  return (calories / CALORIES_PER_KG_FAT) * 1000; // Return in grams
}

/**
 * Complete calculation from steps to all metrics
 */
export function calculateFromSteps(
  steps: number,
  weightKg: number,
  stepLengthCm: number = 75
): CalorieCalculationResult {
  const caloriesBurned = calculateCaloriesFromSteps(steps, weightKg);
  const distanceKm = estimateDistanceFromSteps(steps, stepLengthCm);
  const durationMinutes = estimateDurationFromSteps(steps);

  return {
    caloriesBurned: Math.round(caloriesBurned),
    fatBurnedGrams: Math.round(calculateFatBurned(caloriesBurned) * 10) / 10,
    durationMinutes,
    distanceKm,
    distanceMiles: kmToMiles(distanceKm),
    steps,
  };
}

/**
 * Complete calculation from distance to all metrics
 */
export function calculateFromDistance(
  distanceKm: number,
  weightKg: number,
  speed: WalkingSpeed = "normal",
  stepLengthCm: number = 75
): CalorieCalculationResult {
  const caloriesBurned = calculateCaloriesFromDistance(weightKg, distanceKm, speed);
  const speedKmh = getWalkingSpeedKmh(speed);
  const durationMinutes = (distanceKm / speedKmh) * 60;
  const steps = estimateStepsFromDistance(distanceKm, stepLengthCm);

  return {
    caloriesBurned: Math.round(caloriesBurned),
    fatBurnedGrams: Math.round(calculateFatBurned(caloriesBurned) * 10) / 10,
    durationMinutes: Math.round(durationMinutes),
    distanceKm,
    distanceMiles: kmToMiles(distanceKm),
    steps,
  };
}

/**
 * Complete calculation from duration to all metrics
 */
export function calculateFromDuration(
  durationMinutes: number,
  weightKg: number,
  speed: WalkingSpeed = "normal",
  stepLengthCm: number = 75
): CalorieCalculationResult {
  const caloriesBurned = calculateCaloriesFromDuration(weightKg, durationMinutes, speed);
  const speedKmh = getWalkingSpeedKmh(speed);
  const distanceKm = (durationMinutes / 60) * speedKmh;
  const steps = estimateStepsFromDistance(distanceKm, stepLengthCm);

  return {
    caloriesBurned: Math.round(caloriesBurned),
    fatBurnedGrams: Math.round(calculateFatBurned(caloriesBurned) * 10) / 10,
    durationMinutes,
    distanceKm,
    distanceMiles: kmToMiles(distanceKm),
    steps,
  };
}

/**
 * Food equivalents for calories
 * Returns approximate equivalent foods for a given calorie amount
 */
export function getFoodEquivalents(calories: number): { food: string; amount: string }[] {
  const equivalents = [
    { food: "Banana", caloriesPer: 89, unit: "" },
    { food: "Apple", caloriesPer: 95, unit: "" },
    { food: "Slice of bread", caloriesPer: 79, unit: "" },
    { food: "Egg", caloriesPer: 78, unit: "" },
    { food: "Cup of rice", caloriesPer: 206, unit: "" },
    { food: "Chocolate bar", caloriesPer: 235, unit: "" },
    { food: "Slice of pizza", caloriesPer: 285, unit: "" },
    { food: "Cheeseburger", caloriesPer: 303, unit: "" },
  ];

  return equivalents
    .map((item) => {
      const amount = calories / item.caloriesPer;
      if (amount >= 0.5) {
        return {
          food: item.food,
          amount: amount >= 1 ? amount.toFixed(1) : "½",
        };
      }
      return null;
    })
    .filter((item): item is { food: string; amount: string } => item !== null)
    .slice(0, 4);
}

/**
 * Generate reference table for steps to calories
 */
export function generateStepsCaloriesTable(weightKg: number): {
  steps: number;
  calories: number;
}[] {
  const stepCounts = [1000, 2500, 5000, 7500, 10000, 15000, 20000];
  return stepCounts.map((steps) => ({
    steps,
    calories: Math.round(calculateCaloriesFromSteps(steps, weightKg)),
  }));
}
