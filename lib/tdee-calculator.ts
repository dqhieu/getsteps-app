/**
 * TDEE Calculator Utilities
 *
 * Calculates Basal Metabolic Rate (BMR) using the Mifflin-St Jeor equation
 * and Total Daily Energy Expenditure (TDEE) with activity multipliers.
 * Outputs calorie goals for various weight objectives.
 */

export type Gender = "male" | "female";

export type ActivityLevel =
  | "sedentary"
  | "light"
  | "moderate"
  | "active"
  | "very_active";

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.2,
  light: 1.375,
  moderate: 1.55,
  active: 1.725,
  very_active: 1.9,
};

export type CalorieGoalId =
  | "aggressive_loss"
  | "moderate_loss"
  | "mild_loss"
  | "maintenance"
  | "mild_gain"
  | "muscle_gain";

export interface CalorieGoal {
  id: CalorieGoalId;
  calories: number;
  isMaintenance: boolean;
  warn?: boolean;
}

export interface TDEEResult {
  bmr: number;
  tdee: number;
  goals: CalorieGoal[];
}

export function calculateTDEE(
  gender: Gender,
  weightKg: number,
  heightCm: number,
  age: number,
  activityLevel: ActivityLevel
): TDEEResult {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  const bmr = Math.round(gender === "male" ? base + 5 : base - 161);
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activityLevel]);
  const minCalories = gender === "male" ? 1500 : 1200;

  const goals: CalorieGoal[] = [
    {
      id: "aggressive_loss",
      calories: tdee - 1000,
      isMaintenance: false,
      warn: tdee - 1000 < minCalories,
    },
    {
      id: "moderate_loss",
      calories: tdee - 500,
      isMaintenance: false,
    },
    {
      id: "mild_loss",
      calories: tdee - 250,
      isMaintenance: false,
    },
    {
      id: "maintenance",
      calories: tdee,
      isMaintenance: true,
    },
    {
      id: "mild_gain",
      calories: tdee + 250,
      isMaintenance: false,
    },
    {
      id: "muscle_gain",
      calories: tdee + 500,
      isMaintenance: false,
    },
  ];

  return { bmr, tdee, goals };
}
