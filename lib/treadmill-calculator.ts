// Treadmill calorie model.
//
// Unlike the flat-ground walking calculator, treadmill work is dominated by
// incline: a 5% grade roughly doubles the metabolic cost at the same speed.
// A single MET value cannot express that, so this uses the ACSM metabolic
// equations, which take grade as a first-class input.

import { CALORIES_PER_KG_FAT } from "./calorie-calculator";

/** Resting oxygen uptake, ml/kg/min. One MET. */
const RESTING_VO2 = 3.5;

/**
 * Speed at which the ACSM walking equation stops applying and the running
 * equation takes over. The walking equation is validated to ~4 mph; above
 * that most people transition to a jog.
 */
export const WALK_RUN_THRESHOLD_KMH = 6.5;

export const KMH_TO_M_PER_MIN = 1000 / 60;

export interface TreadmillInput {
  weightKg: number;
  speedKmh: number;
  /** Treadmill grade as a percentage, e.g. 5 for 5%. */
  inclinePercent: number;
  durationMinutes: number;
}

export interface TreadmillResult {
  calories: number;
  met: number;
  /** Oxygen uptake in ml/kg/min. */
  vo2: number;
  distanceKm: number;
  steps: number;
  fatGrams: number;
  /** True when the running equation was used rather than the walking one. */
  isRunning: boolean;
  /** Calories the same session would burn at 0% incline. */
  caloriesAtZeroIncline: number;
}

/**
 * ACSM oxygen-uptake estimate in ml/kg/min.
 *
 * Walking: VO2 = (0.1 x S) + (1.8 x S x G) + 3.5
 * Running: VO2 = (0.2 x S) + (0.9 x S x G) + 3.5
 *
 * S is speed in m/min, G is grade as a fraction.
 */
export function estimateVO2(speedKmh: number, inclinePercent: number): number {
  const speedMPerMin = speedKmh * KMH_TO_M_PER_MIN;
  const grade = inclinePercent / 100;
  const running = speedKmh >= WALK_RUN_THRESHOLD_KMH;

  const horizontal = running ? 0.2 * speedMPerMin : 0.1 * speedMPerMin;
  const vertical = running
    ? 0.9 * speedMPerMin * grade
    : 1.8 * speedMPerMin * grade;

  return horizontal + vertical + RESTING_VO2;
}

/** Convert an oxygen uptake in ml/kg/min to METs. */
export function vo2ToMet(vo2: number): number {
  return vo2 / RESTING_VO2;
}

/**
 * Estimate treadmill cadence in steps per minute.
 *
 * Cadence rises with speed but flattens once running begins, because runners
 * gain speed mostly through stride length rather than turnover.
 */
export function estimateCadence(speedKmh: number): number {
  if (speedKmh <= 0) return 0;
  if (speedKmh >= WALK_RUN_THRESHOLD_KMH) {
    return Math.min(185, 150 + (speedKmh - WALK_RUN_THRESHOLD_KMH) * 4);
  }
  // ~85 spm at 3 km/h rising to ~140 spm at 6.5 km/h.
  return 60 + speedKmh * 13;
}

export function calculateTreadmillSession({
  weightKg,
  speedKmh,
  inclinePercent,
  durationMinutes,
}: TreadmillInput): TreadmillResult {
  const vo2 = estimateVO2(speedKmh, inclinePercent);
  const met = vo2ToMet(vo2);

  // kcal/min = METs x 3.5 x kg / 200
  const caloriesPerMinute = (met * RESTING_VO2 * weightKg) / 200;
  const calories = caloriesPerMinute * durationMinutes;

  const zeroInclineMet = vo2ToMet(estimateVO2(speedKmh, 0));
  const caloriesAtZeroIncline =
    ((zeroInclineMet * RESTING_VO2 * weightKg) / 200) * durationMinutes;

  const distanceKm = (speedKmh * durationMinutes) / 60;
  const steps = Math.round(estimateCadence(speedKmh) * durationMinutes);

  return {
    calories: Math.round(calories),
    met: Math.round(met * 10) / 10,
    vo2: Math.round(vo2 * 10) / 10,
    distanceKm,
    steps,
    fatGrams: (calories / CALORIES_PER_KG_FAT) * 1000,
    isRunning: speedKmh >= WALK_RUN_THRESHOLD_KMH,
    caloriesAtZeroIncline: Math.round(caloriesAtZeroIncline),
  };
}

/** Common treadmill incline settings for the quick-reference table. */
export const INCLINE_PRESETS = [0, 1, 2, 3, 5, 8, 10, 12, 15] as const;

/**
 * Calories burned across the standard incline presets, holding speed,
 * weight and duration constant.
 */
export function generateInclineTable(
  weightKg: number,
  speedKmh: number,
  durationMinutes: number
): { incline: number; calories: number; met: number }[] {
  return INCLINE_PRESETS.map((incline) => {
    const { calories, met } = calculateTreadmillSession({
      weightKg,
      speedKmh,
      inclinePercent: incline,
      durationMinutes,
    });
    return { incline, calories, met };
  });
}
