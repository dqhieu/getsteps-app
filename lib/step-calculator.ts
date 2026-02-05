/**
 * Step Distance Calculator Utilities
 *
 * Formulas based on research for estimating step length from height, gender, and age.
 * - Male step length: height (cm) × 0.415
 * - Female step length: height (cm) × 0.413
 * - Age adjustment: reduce by ~1% per decade over 40
 */

export type Gender = "male" | "female";

export type UnitSystem = "metric" | "imperial";

export interface UserProfile {
  gender: Gender;
  age: number;
  heightCm: number;
}

export interface CalculationResult {
  steps: number;
  distanceKm: number;
  distanceMiles: number;
  caloriesBurned: number;
  walkingTimeMinutes: number;
  stepLengthCm: number;
}

// Constants
const MALE_STEP_MULTIPLIER = 0.415;
const FEMALE_STEP_MULTIPLIER = 0.413;
const AGE_ADJUSTMENT_THRESHOLD = 40;
const AGE_ADJUSTMENT_PER_DECADE = 0.01;
const KM_TO_MILES = 0.621371;
const CM_TO_KM = 100000;
const AVERAGE_WALKING_SPEED_KMH = 5; // Average walking speed in km/h
const CALORIES_PER_KM_PER_KG = 0.75; // Approximate calories burned per km per kg of body weight
const AVERAGE_WEIGHT_KG = 70; // Default weight assumption

/**
 * Convert height from feet and inches to centimeters
 */
export function feetInchesToCm(feet: number, inches: number): number {
  const totalInches = feet * 12 + inches;
  return totalInches * 2.54;
}

/**
 * Convert centimeters to feet and inches
 */
export function cmToFeetInches(cm: number): { feet: number; inches: number } {
  const totalInches = cm / 2.54;
  const feet = Math.floor(totalInches / 12);
  const inches = Math.round(totalInches % 12);
  return { feet, inches };
}

/**
 * Calculate step length based on user profile
 */
export function calculateStepLength(profile: UserProfile): number {
  const { gender, age, heightCm } = profile;

  // Base step length calculation
  const multiplier =
    gender === "male" ? MALE_STEP_MULTIPLIER : FEMALE_STEP_MULTIPLIER;
  let stepLength = heightCm * multiplier;

  // Age adjustment - reduce step length for older adults
  if (age > AGE_ADJUSTMENT_THRESHOLD) {
    const decadesOver40 = (age - AGE_ADJUSTMENT_THRESHOLD) / 10;
    const ageReduction = 1 - decadesOver40 * AGE_ADJUSTMENT_PER_DECADE;
    stepLength *= Math.max(ageReduction, 0.85); // Cap reduction at 15%
  }

  return stepLength;
}

/**
 * Calculate distance from number of steps
 */
export function stepsToDistance(
  steps: number,
  stepLengthCm: number
): { km: number; miles: number } {
  const km = (steps * stepLengthCm) / CM_TO_KM;
  const miles = km * KM_TO_MILES;
  return { km, miles };
}

/**
 * Calculate steps needed for a given distance
 */
export function distanceToSteps(
  distanceKm: number,
  stepLengthCm: number
): number {
  return Math.round((distanceKm * CM_TO_KM) / stepLengthCm);
}

/**
 * Estimate calories burned based on distance walked
 * This is a simplified estimation - actual calories depend on many factors
 */
export function estimateCaloriesBurned(
  distanceKm: number,
  weightKg: number = AVERAGE_WEIGHT_KG
): number {
  return Math.round(distanceKm * CALORIES_PER_KM_PER_KG * weightKg);
}

/**
 * Estimate walking time in minutes
 */
export function estimateWalkingTime(distanceKm: number): number {
  return Math.round((distanceKm / AVERAGE_WALKING_SPEED_KMH) * 60);
}

/**
 * Complete calculation from steps to all metrics
 */
export function calculateFromSteps(
  steps: number,
  profile: UserProfile
): CalculationResult {
  const stepLengthCm = calculateStepLength(profile);
  const { km, miles } = stepsToDistance(steps, stepLengthCm);

  return {
    steps,
    distanceKm: km,
    distanceMiles: miles,
    caloriesBurned: estimateCaloriesBurned(km),
    walkingTimeMinutes: estimateWalkingTime(km),
    stepLengthCm,
  };
}

/**
 * Complete calculation from distance to all metrics
 */
export function calculateFromDistance(
  distanceKm: number,
  profile: UserProfile
): CalculationResult {
  const stepLengthCm = calculateStepLength(profile);
  const steps = distanceToSteps(distanceKm, stepLengthCm);
  const miles = distanceKm * KM_TO_MILES;

  return {
    steps,
    distanceKm,
    distanceMiles: miles,
    caloriesBurned: estimateCaloriesBurned(distanceKm),
    walkingTimeMinutes: estimateWalkingTime(distanceKm),
    stepLengthCm,
  };
}

/**
 * Convert miles to kilometers
 */
export function milesToKm(miles: number): number {
  return miles / KM_TO_MILES;
}

/**
 * Generate reference table data for common step counts
 */
export function generateReferenceTable(
  profile: UserProfile
): CalculationResult[] {
  const commonStepCounts = [1000, 2500, 5000, 7500, 10000, 15000, 20000];
  return commonStepCounts.map((steps) => calculateFromSteps(steps, profile));
}

/**
 * Format number with thousands separator
 */
export function formatNumber(num: number): string {
  return num.toLocaleString("en-US");
}

/**
 * Format distance with appropriate precision
 */
export function formatDistance(distance: number, unit: "km" | "miles"): string {
  if (distance < 1) {
    return distance.toFixed(2);
  } else if (distance < 10) {
    return distance.toFixed(1);
  }
  return distance.toFixed(1);
}
