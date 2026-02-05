/**
 * Weight Loss Walking Calculator Utilities
 *
 * Calculate walking requirements to achieve weight loss goals.
 * Based on the principle: 1 kg of fat ≈ 7,700 calories
 */

import { lbsToKg, kgToLbs, kmToMiles } from "./unit-converter";

export interface WeightLossInput {
  currentWeightKg: number;
  targetWeightKg: number;
  timeframeDays: number;
  daysPerWeek: number;
}

export interface WeightLossResult {
  totalWeightToLose: number;
  totalCaloriesToBurn: number;
  dailyCalorieDeficit: number;
  walkingDailyKm: number;
  walkingDailyMiles: number;
  walkingDailySteps: number;
  walkingDailyMinutes: number;
  weeklyKm: number;
  weeklySteps: number;
  isSafe: boolean;
  safetyWarning: string | null;
  milestones: {
    week: number;
    expectedWeight: number;
  }[];
}

// Constants
export const CALORIES_PER_KG_FAT = 7700;
export const MAX_SAFE_WEEKLY_LOSS_KG = 1.0; // Maximum safe weight loss per week
export const MAX_SAFE_DAILY_DEFICIT = 1000; // Maximum safe daily calorie deficit
export const CALORIES_PER_KM = 60; // Average calories burned per km walking (varies by weight)
export const AVERAGE_WALKING_SPEED_KMH = 5;
export const STEPS_PER_KM = 1320; // Average steps per km

// Timeframe options in days
export const TIMEFRAME_OPTIONS = {
  "1_month": { label: "1 Month", days: 30 },
  "2_months": { label: "2 Months", days: 60 },
  "3_months": { label: "3 Months", days: 90 },
  "6_months": { label: "6 Months", days: 180 },
  "1_year": { label: "1 Year", days: 365 },
} as const;

export type TimeframeOption = keyof typeof TIMEFRAME_OPTIONS;

/**
 * Calculate calories burned per km based on weight
 * Formula: ~0.75-0.85 calories per kg per km
 */
function getCaloriesPerKm(weightKg: number): number {
  return weightKg * 0.8;
}

/**
 * Calculate average steps per km based on height (simplified)
 * Using average: ~1320 steps per km
 */
function getStepsPerKm(): number {
  return STEPS_PER_KM;
}

/**
 * Generate weight loss milestones
 */
function generateMilestones(
  currentWeight: number,
  targetWeight: number,
  totalWeeks: number
): { week: number; expectedWeight: number }[] {
  const milestones: { week: number; expectedWeight: number }[] = [];
  const totalLoss = currentWeight - targetWeight;
  const weeklyLoss = totalLoss / totalWeeks;

  // Generate milestone every 2 weeks, up to 12 milestones
  const interval = Math.max(1, Math.floor(totalWeeks / 12));

  for (let week = interval; week <= totalWeeks; week += interval) {
    const expectedWeight = currentWeight - weeklyLoss * week;
    milestones.push({
      week,
      expectedWeight: Math.round(expectedWeight * 10) / 10,
    });
  }

  // Always include final week
  if (milestones.length === 0 || milestones[milestones.length - 1].week !== totalWeeks) {
    milestones.push({
      week: totalWeeks,
      expectedWeight: Math.round(targetWeight * 10) / 10,
    });
  }

  return milestones.slice(0, 12);
}

/**
 * Calculate weight loss requirements
 */
export function calculateWeightLoss(input: WeightLossInput): WeightLossResult {
  const { currentWeightKg, targetWeightKg, timeframeDays, daysPerWeek } = input;

  // Calculate total weight to lose
  const totalWeightToLose = Math.max(0, currentWeightKg - targetWeightKg);

  // Calculate total calories to burn
  const totalCaloriesToBurn = totalWeightToLose * CALORIES_PER_KG_FAT;

  // Calculate total walking days
  const totalWeeks = timeframeDays / 7;
  const totalWalkingDays = Math.round(totalWeeks * daysPerWeek);

  // Calculate daily requirements
  const dailyCalorieDeficit =
    totalWalkingDays > 0 ? totalCaloriesToBurn / totalWalkingDays : 0;

  // Calculate walking distance needed per day
  const caloriesPerKm = getCaloriesPerKm(currentWeightKg);
  const walkingDailyKm = dailyCalorieDeficit / caloriesPerKm;
  const walkingDailyMiles = kmToMiles(walkingDailyKm);

  // Calculate steps and time
  const stepsPerKm = getStepsPerKm();
  const walkingDailySteps = Math.round(walkingDailyKm * stepsPerKm);
  const walkingDailyMinutes = Math.round((walkingDailyKm / AVERAGE_WALKING_SPEED_KMH) * 60);

  // Calculate weekly totals
  const weeklyKm = walkingDailyKm * daysPerWeek;
  const weeklySteps = walkingDailySteps * daysPerWeek;

  // Safety check
  const weeklyWeightLoss = totalWeightToLose / totalWeeks;
  const isSafe =
    weeklyWeightLoss <= MAX_SAFE_WEEKLY_LOSS_KG &&
    dailyCalorieDeficit <= MAX_SAFE_DAILY_DEFICIT;

  let safetyWarning: string | null = null;
  if (!isSafe) {
    if (weeklyWeightLoss > MAX_SAFE_WEEKLY_LOSS_KG) {
      safetyWarning = `This plan requires losing more than ${MAX_SAFE_WEEKLY_LOSS_KG} kg per week. Consider extending your timeframe for safer, more sustainable results.`;
    } else if (dailyCalorieDeficit > MAX_SAFE_DAILY_DEFICIT) {
      safetyWarning = `This plan requires a daily calorie deficit of ${Math.round(dailyCalorieDeficit)} kcal, which exceeds the recommended ${MAX_SAFE_DAILY_DEFICIT} kcal. Consider a longer timeframe.`;
    }
  }

  // Generate milestones
  const milestones = generateMilestones(
    currentWeightKg,
    targetWeightKg,
    Math.round(totalWeeks)
  );

  return {
    totalWeightToLose: Math.round(totalWeightToLose * 10) / 10,
    totalCaloriesToBurn: Math.round(totalCaloriesToBurn),
    dailyCalorieDeficit: Math.round(dailyCalorieDeficit),
    walkingDailyKm: Math.round(walkingDailyKm * 10) / 10,
    walkingDailyMiles: Math.round(walkingDailyMiles * 10) / 10,
    walkingDailySteps,
    walkingDailyMinutes,
    weeklyKm: Math.round(weeklyKm * 10) / 10,
    weeklySteps: Math.round(weeklySteps),
    isSafe,
    safetyWarning,
    milestones,
  };
}

/**
 * Get realistic timeframe for a weight loss goal
 * Based on safe weekly loss of 0.5-1 kg
 */
export function getRealisticTimeframe(weightToLose: number): {
  minWeeks: number;
  maxWeeks: number;
  recommendedWeeks: number;
} {
  const minWeeks = Math.ceil(weightToLose / MAX_SAFE_WEEKLY_LOSS_KG);
  const maxWeeks = Math.ceil(weightToLose / 0.25); // 0.25 kg per week for very gradual loss
  const recommendedWeeks = Math.ceil(weightToLose / 0.5); // 0.5 kg per week recommended

  return {
    minWeeks,
    maxWeeks,
    recommendedWeeks,
  };
}

/**
 * Format weight with unit
 */
export function formatWeightWithUnit(kg: number, unit: "kg" | "lbs"): string {
  if (unit === "lbs") {
    return `${Math.round(kgToLbs(kg) * 10) / 10} lbs`;
  }
  return `${Math.round(kg * 10) / 10} kg`;
}
