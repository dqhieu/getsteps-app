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

export interface CalorieGoal {
  label: string;
  weeklyGoal: string;
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
      label: "Aggressive Loss",
      weeklyGoal: "-1 kg / week",
      calories: tdee - 1000,
      isMaintenance: false,
      warn: tdee - 1000 < minCalories,
    },
    {
      label: "Moderate Loss",
      weeklyGoal: "-0.5 kg / week",
      calories: tdee - 500,
      isMaintenance: false,
    },
    {
      label: "Mild Loss",
      weeklyGoal: "-0.25 kg / week",
      calories: tdee - 250,
      isMaintenance: false,
    },
    {
      label: "Maintenance",
      weeklyGoal: "0 kg / week",
      calories: tdee,
      isMaintenance: true,
    },
    {
      label: "Mild Gain",
      weeklyGoal: "+0.25 kg / week",
      calories: tdee + 250,
      isMaintenance: false,
    },
    {
      label: "Muscle Gain",
      weeklyGoal: "+0.5 kg / week",
      calories: tdee + 500,
      isMaintenance: false,
    },
  ];

  return { bmr, tdee, goals };
}
