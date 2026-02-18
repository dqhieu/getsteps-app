/**
 * Water Intake Calculator Utilities
 *
 * Calculate daily water intake based on weight, activity level, and climate.
 * Base formula: weight_kg × 0.033 liters, adjusted for activity and climate.
 */

export type ActivityLevel = "sedentary" | "moderate" | "active" | "very_active";
export type Climate = "temperate" | "hot";

export interface WaterIntakeResult {
  liters: number;
  ounces: number;
  cups: number;
  glasses: number;
  tip: string;
}

export const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary",
  moderate: "Moderately Active",
  active: "Active",
  very_active: "Very Active",
};

const ACTIVITY_MULTIPLIERS: Record<ActivityLevel, number> = {
  sedentary: 1.0,
  moderate: 1.2,
  active: 1.4,
  very_active: 1.6,
};

const ACTIVITY_TIPS: Record<ActivityLevel, string> = {
  sedentary:
    "Try drinking a glass of water every 2 hours as a reminder to stay hydrated throughout your day.",
  moderate:
    "Drink water before, during, and after any exercise session. Carry a reusable bottle to stay on track.",
  active:
    "Add 500ml extra on workout days and replenish electrolytes if you sweat heavily.",
  very_active:
    "Weigh yourself before and after intense sessions — drink 500ml for every 0.5kg lost to sweat.",
};

/**
 * Calculate daily water intake recommendation
 */
export function calculateWaterIntake(
  weightKg: number,
  activity: ActivityLevel,
  climate: Climate
): WaterIntakeResult {
  const baseL = weightKg * 0.033;
  const activityMultiplier = ACTIVITY_MULTIPLIERS[activity];
  const climateAdd = climate === "hot" ? 0.5 : 0;
  const liters = Math.round((baseL * activityMultiplier + climateAdd) * 10) / 10;

  const ounces = Math.round(liters * 33.814 * 10) / 10;
  const cups = Math.round((ounces / 8) * 10) / 10;
  const glasses = Math.round((liters / 0.25) * 10) / 10;

  return {
    liters,
    ounces,
    cups,
    glasses,
    tip: ACTIVITY_TIPS[activity],
  };
}
