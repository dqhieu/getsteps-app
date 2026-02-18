/**
 * Calorie Deficit Calculator Utilities
 *
 * Uses the Mifflin-St Jeor equation for BMR (most accurate)
 * and standard TDEE activity multipliers.
 */

export type Gender = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary",
  light: "Lightly Active",
  moderate: "Moderately Active",
  active: "Active",
  very_active: "Very Active",
};

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

/** Calories stored per kg of body fat */
const CALORIES_PER_KG_FAT = 7700;

export interface CalorieDeficitInput {
  gender: Gender;
  weightKg: number;
  heightCm: number;
  age: number;
  activityLevel: ActivityLevel;
  goalWeightKg: number;
  weeks: number;
}

export interface CalorieDeficitResult {
  bmr: number;
  tdee: number;
  dailyDeficit: number;
  targetCalories: number;
  stepsToAdd: number;
  isSafe: boolean;
  isAboveMinimum: boolean;
  minimumCalories: number;
  totalCaloriesToBurn: number;
  alreadyAtGoal: boolean;
}

/**
 * Calculate Basal Metabolic Rate using Mifflin-St Jeor equation
 */
export function calculateBMR(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number
): number {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return gender === "male" ? base + 5 : base - 161;
}

/**
 * Calculate Total Daily Energy Expenditure
 */
export function calculateTDEE(bmr: number, activityLevel: ActivityLevel): number {
  return Math.round(bmr * ACTIVITY_MULTIPLIERS[activityLevel]);
}

/**
 * Calculate the full calorie deficit plan
 */
export function calculateCalorieDeficit(
  input: CalorieDeficitInput
): CalorieDeficitResult {
  const { gender, weightKg, heightCm, age, activityLevel, goalWeightKg, weeks } =
    input;

  const bmr = Math.round(calculateBMR(gender, weightKg, heightCm, age));
  const tdee = calculateTDEE(bmr, activityLevel);
  const minimumCalories = gender === "male" ? 1500 : 1200;

  // Already at or past goal
  if (weightKg - goalWeightKg <= 0) {
    return {
      bmr,
      tdee,
      dailyDeficit: 0,
      targetCalories: tdee,
      stepsToAdd: 0,
      isSafe: true,
      isAboveMinimum: true,
      minimumCalories,
      totalCaloriesToBurn: 0,
      alreadyAtGoal: true,
    };
  }

  const totalCaloriesToBurn = (weightKg - goalWeightKg) * CALORIES_PER_KG_FAT;
  const totalDays = weeks * 7;
  const dailyDeficit = Math.round(totalCaloriesToBurn / totalDays);
  const targetCalories = Math.round(tdee - dailyDeficit);

  // Steps to add: calories per step based on body weight
  const caloriesPerStep = 0.04 * (weightKg / 70);
  const rawStepsToAdd = Math.round(dailyDeficit / caloriesPerStep);
  const stepsToAdd = Math.max(0, Math.min(10000, rawStepsToAdd));

  const isSafe = dailyDeficit <= 1000;
  const isAboveMinimum = targetCalories >= minimumCalories;

  return {
    bmr,
    tdee,
    dailyDeficit,
    targetCalories,
    stepsToAdd,
    isSafe,
    isAboveMinimum,
    minimumCalories,
    totalCaloriesToBurn: Math.round(totalCaloriesToBurn),
    alreadyAtGoal: false,
  };
}
