/**
 * Weight Loss Planner Utilities
 *
 * General-purpose weight loss projection: given body stats, a goal weight and
 * a target rate, work out the calorie budget and the timeline.
 *
 * Distinct from `weight-loss-calculator.ts`, which answers the narrower
 * question of how much walking a goal requires. This module owns the calorie
 * side and stays activity-agnostic.
 *
 * The 7,700 kcal per kg figure (3,500 per lb) is the Wishnofsky rule. It is a
 * linear approximation and overstates loss beyond roughly three months,
 * because resting expenditure falls as body mass drops. Projections here are
 * therefore capped with an explicit note rather than extrapolated forever.
 */

import {
  mifflinStJeor,
  ACTIVITY_MULTIPLIERS,
  type Gender,
  type ActivityLevel,
} from "./bmr-calculator";

export const CALORIES_PER_KG_FAT = 7700;

/** Below this, deficits stop being safe without medical supervision. */
export const MIN_CALORIES: Record<Gender, number> = {
  male: 1500,
  female: 1200,
};

/** Weekly loss beyond this fraction of body weight risks lean mass loss. */
export const MAX_SAFE_WEEKLY_FRACTION = 0.01;

export const RATE_OPTIONS = [
  { key: "mild", label: "Mild", kgPerWeek: 0.25, description: "0.25 kg (0.5 lb) per week" },
  { key: "moderate", label: "Moderate", kgPerWeek: 0.5, description: "0.5 kg (1 lb) per week" },
  { key: "aggressive", label: "Aggressive", kgPerWeek: 0.75, description: "0.75 kg (1.5 lb) per week" },
  { key: "rapid", label: "Rapid", kgPerWeek: 1.0, description: "1 kg (2 lb) per week" },
] as const;

export type RateKey = (typeof RATE_OPTIONS)[number]["key"];

export interface Milestone {
  weekNumber: number;
  weightKg: number;
  percentOfGoal: number;
}

export interface WeightLossPlan {
  bmr: number;
  tdee: number;
  /** Calories to eat per day to hit the chosen rate. */
  dailyTarget: number;
  dailyDeficit: number;
  weightToLoseKg: number;
  weeksToGoal: number;
  /** Null when the goal is not reachable at a safe rate. */
  goalDateOffsetDays: number | null;
  milestones: Milestone[];
  isSafe: boolean;
  warnings: string[];
  /** True when the target is at or above current weight. */
  isGainGoal: boolean;
}

export function calculateWeightLossPlan(
  gender: Gender,
  age: number,
  heightCm: number,
  currentWeightKg: number,
  goalWeightKg: number,
  activity: ActivityLevel,
  kgPerWeek: number
): WeightLossPlan {
  const bmr = Math.round(mifflinStJeor(gender, currentWeightKg, heightCm, age));
  const tdee = Math.round(bmr * ACTIVITY_MULTIPLIERS[activity]);

  const weightToLoseKg = Math.round((currentWeightKg - goalWeightKg) * 10) / 10;
  const isGainGoal = weightToLoseKg <= 0;

  const dailyDeficit = Math.round((kgPerWeek * CALORIES_PER_KG_FAT) / 7);
  const rawTarget = tdee - dailyDeficit;
  const floor = MIN_CALORIES[gender];
  const dailyTarget = Math.max(floor, rawTarget);

  const warnings: string[] = [];

  if (isGainGoal) {
    warnings.push(
      "Your goal weight is at or above your current weight. This calculator projects loss only."
    );
  }

  if (rawTarget < floor) {
    warnings.push(
      `A ${kgPerWeek} kg/week rate would put you at ${rawTarget} calories a day, below the ${floor} calorie floor for ${gender === "male" ? "men" : "women"}. The target has been raised to ${floor}, so actual loss will be slower than the rate you picked.`
    );
  }

  const maxSafeWeekly = currentWeightKg * MAX_SAFE_WEEKLY_FRACTION;
  if (kgPerWeek > maxSafeWeekly) {
    warnings.push(
      `Losing ${kgPerWeek} kg a week is more than 1% of your body weight. Above that, a larger share of the loss comes from muscle rather than fat.`
    );
  }

  // Recompute the achievable rate from the target that survived the floor,
  // so the timeline reflects what will actually happen.
  const effectiveDeficit = tdee - dailyTarget;
  const effectiveKgPerWeek = (effectiveDeficit * 7) / CALORIES_PER_KG_FAT;

  const weeksToGoal =
    isGainGoal || effectiveKgPerWeek <= 0
      ? 0
      : Math.ceil(weightToLoseKg / effectiveKgPerWeek);

  const milestones: Milestone[] = [];
  if (!isGainGoal && effectiveKgPerWeek > 0) {
    // Six evenly spaced checkpoints keeps the table readable whether the plan
    // runs six weeks or sixty.
    const step = Math.max(1, Math.ceil(weeksToGoal / 6));
    for (let week = step; week <= weeksToGoal; week += step) {
      const lost = Math.min(weightToLoseKg, effectiveKgPerWeek * week);
      milestones.push({
        weekNumber: week,
        weightKg: Math.round((currentWeightKg - lost) * 10) / 10,
        percentOfGoal: Math.round((lost / weightToLoseKg) * 100),
      });
    }
    const last = milestones[milestones.length - 1];
    if (!last || last.weekNumber !== weeksToGoal) {
      milestones.push({
        weekNumber: weeksToGoal,
        weightKg: goalWeightKg,
        percentOfGoal: 100,
      });
    }
  }

  if (weeksToGoal > 13) {
    warnings.push(
      "Projections past about three months drift optimistic. Resting expenditure falls as you lose weight, so recalculate every 4–6 weeks with your new body weight."
    );
  }

  return {
    bmr,
    tdee,
    dailyTarget,
    dailyDeficit: effectiveDeficit,
    weightToLoseKg: Math.max(0, weightToLoseKg),
    weeksToGoal,
    goalDateOffsetDays: weeksToGoal > 0 ? weeksToGoal * 7 : null,
    milestones,
    isSafe: warnings.length === 0,
    warnings,
    isGainGoal,
  };
}
