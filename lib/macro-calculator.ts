/**
 * Macro Calculator Utilities
 *
 * Calculates daily macronutrient targets using Mifflin-St Jeor BMR,
 * activity-adjusted TDEE, and goal-specific macro splits.
 */

export type MacroGoal = "weight_loss" | "maintenance" | "muscle_gain";
export type Gender = "male" | "female";
export type ActivityLevel = "sedentary" | "light" | "moderate" | "active" | "very_active";

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

const GOAL_CALORIE_DELTA: Record<MacroGoal, number> = {
  weight_loss: -400,
  maintenance: 0,
  muscle_gain: 300,
};

const PROTEIN_PER_KG: Record<MacroGoal, number> = {
  weight_loss: 2.2,
  maintenance: 1.8,
  muscle_gain: 2.4,
};

const FAT_PERCENT: Record<MacroGoal, number> = {
  weight_loss: 0.25,
  maintenance: 0.30,
  muscle_gain: 0.20,
};

export interface MacroResult {
  bmr: number;
  tdee: number;
  targetCalories: number;
  protein: { grams: number; calories: number; percent: number };
  carbs: { grams: number; calories: number; percent: number };
  fat: { grams: number; calories: number; percent: number };
}

export function calculateMacros(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number,
  activityLevel: ActivityLevel,
  goal: MacroGoal
): MacroResult {
  // Step 1: BMR (Mifflin-St Jeor)
  const bmr = Math.round(
    10 * weightKg + 6.25 * heightCm - 5 * age + (gender === "male" ? 5 : -161)
  );

  // Step 2: TDEE
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activityLevel]);

  // Step 3: Target calories
  const targetCalories = Math.max(1200, tdee + GOAL_CALORIE_DELTA[goal]);

  // Step 4: Protein
  const proteinGrams = Math.round(PROTEIN_PER_KG[goal] * weightKg);
  const proteinCalories = proteinGrams * 4;

  // Step 5: Fat
  const fatGrams = Math.round((FAT_PERCENT[goal] * targetCalories) / 9);
  const fatCalories = fatGrams * 9;

  // Step 6: Carbs (remaining calories)
  const carbCalories = Math.max(0, targetCalories - proteinCalories - fatCalories);
  const carbGrams = Math.round(carbCalories / 4);

  const total = proteinCalories + fatCalories + carbCalories;

  return {
    bmr,
    tdee,
    targetCalories,
    protein: {
      grams: proteinGrams,
      calories: proteinCalories,
      percent: Math.round((proteinCalories / total) * 100),
    },
    carbs: {
      grams: carbGrams,
      calories: carbCalories,
      percent: Math.round((carbCalories / total) * 100),
    },
    fat: {
      grams: fatGrams,
      calories: fatCalories,
      percent: Math.round((fatCalories / total) * 100),
    },
  };
}
