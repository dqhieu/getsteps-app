// Treadmill incline, pace and elevation model.
//
// The treadmill calorie calculator answers "how much did I burn". This one
// answers the equivalence questions people actually type into a search box:
// what flat pace is this incline worth, how much climbing did I just do, and
// what grade do I need to match a target effort.
//
// Shares the ACSM metabolic equations with `treadmill-calculator.ts` so the two
// tools can never disagree about the energy cost of the same session.

import {
  estimateVO2,
  vo2ToMet,
  WALK_RUN_THRESHOLD_KMH,
  KMH_TO_M_PER_MIN,
} from "./treadmill-calculator";

export const MPH_TO_KMH = 1.60934;

/** Vertical rise of one standard building storey, in metres. */
const STOREY_HEIGHT_M = 3.0;

/** Vertical rise of one standard stair step, in metres. */
const STAIR_STEP_HEIGHT_M = 0.17;

export interface PaceBreakdown {
  kmh: number;
  mph: number;
  /** Minutes per kilometre. */
  minPerKm: number;
  /** Minutes per mile. */
  minPerMile: number;
}

export function paceBreakdown(speedKmh: number): PaceBreakdown {
  if (speedKmh <= 0) {
    return { kmh: 0, mph: 0, minPerKm: 0, minPerMile: 0 };
  }
  const mph = speedKmh / MPH_TO_KMH;
  return {
    kmh: speedKmh,
    mph,
    minPerKm: 60 / speedKmh,
    minPerMile: 60 / mph,
  };
}

/** Format a decimal pace in minutes as m:ss. */
export function formatPace(minutes: number): string {
  if (!Number.isFinite(minutes) || minutes <= 0) return "—";
  const whole = Math.floor(minutes);
  const seconds = Math.round((minutes - whole) * 60);
  if (seconds === 60) return `${whole + 1}:00`;
  return `${whole}:${seconds.toString().padStart(2, "0")}`;
}

/** Highest oxygen cost the flat ACSM walking equation covers. */
const MAX_FLAT_WALK_VO2 = 0.1 * WALK_RUN_THRESHOLD_KMH * KMH_TO_M_PER_MIN + 3.5;

/** Lowest oxygen cost the flat ACSM running equation covers. */
const MIN_FLAT_JOG_VO2 = 0.2 * WALK_RUN_THRESHOLD_KMH * KMH_TO_M_PER_MIN + 3.5;

/**
 * Which level-ground gait, if any, can match a given oxygen cost.
 *
 * The two ACSM equations do not meet at the transition speed: flat walking
 * tops out at 14.3 ml/kg/min while flat running starts at 25.2. Costs landing
 * between those are real — a moderate incline walk produces them constantly —
 * but no level gait matches them, and inverting the wrong equation there
 * returns a "jog" slower than the walk it is supposed to be harder than.
 */
export type EquivalentKind = "walk" | "jog" | "between";

export interface InclineEquivalent {
  /**
   * The level speed that costs the same oxygen, km/h, or null when the cost
   * falls between what a flat walk and a flat jog can produce.
   */
  flatSpeedKmh: number | null;
  /** Which gait `flatSpeedKmh` describes, or "between" when there is none. */
  kind: EquivalentKind;
  vo2: number;
  met: number;
  /** VO2 of the same speed on a level belt. */
  flatVO2: number;
  /** How much harder the grade makes the same speed, net of resting cost. */
  effortMultiplier: number;
}

export function inclineEquivalent(
  speedKmh: number,
  inclinePercent: number
): InclineEquivalent {
  const vo2 = estimateVO2(speedKmh, inclinePercent);
  const flatVO2 = estimateVO2(speedKmh, 0);

  let flatSpeedKmh: number | null;
  let kind: EquivalentKind;

  if (vo2 <= MAX_FLAT_WALK_VO2) {
    flatSpeedKmh = Math.max(0, ((vo2 - 3.5) / 0.1) / KMH_TO_M_PER_MIN);
    kind = "walk";
  } else if (vo2 >= MIN_FLAT_JOG_VO2) {
    flatSpeedKmh = ((vo2 - 3.5) / 0.2) / KMH_TO_M_PER_MIN;
    kind = "jog";
  } else {
    flatSpeedKmh = null;
    kind = "between";
  }

  // Compare net of resting metabolism: the grade cannot change what you burn
  // lying still, so including it would understate the effect of incline.
  const netVO2 = Math.max(vo2 - 3.5, 0);
  const netFlatVO2 = Math.max(flatVO2 - 3.5, 0);

  return {
    flatSpeedKmh,
    kind,
    vo2,
    met: vo2ToMet(vo2),
    flatVO2,
    effortMultiplier: netFlatVO2 > 0 ? netVO2 / netFlatVO2 : 1,
  };
}

export interface ElevationResult {
  /** Vertical metres climbed. */
  meters: number;
  feet: number;
  /** Horizontal distance covered, km. */
  distanceKm: number;
  /** Building storeys of equivalent climb. */
  storeys: number;
  /** Stair steps of equivalent climb. */
  stairSteps: number;
}

/**
 * Vertical gain of a treadmill session.
 *
 * Treadmill grade is rise over the belt distance travelled, which is what the
 * console reports, so the vertical component is distance x grade directly.
 */
export function elevationGain(
  speedKmh: number,
  inclinePercent: number,
  durationMinutes: number
): ElevationResult {
  const distanceKm = (speedKmh * durationMinutes) / 60;
  const meters = distanceKm * 1000 * (inclinePercent / 100);

  return {
    meters,
    feet: meters * 3.28084,
    distanceKm,
    storeys: meters / STOREY_HEIGHT_M,
    stairSteps: meters / STAIR_STEP_HEIGHT_M,
  };
}

/**
 * The grade that makes `speedKmh` cost as much oxygen as walking
 * `targetFlatSpeedKmh` on the level. Returns null when no grade up to the
 * 15% ceiling of a consumer treadmill can close the gap.
 */
export function requiredIncline(
  speedKmh: number,
  targetFlatSpeedKmh: number,
  maxIncline = 15
): number | null {
  if (speedKmh <= 0) return null;

  const targetVO2 = estimateVO2(targetFlatSpeedKmh, 0);
  const speedMPerMin = speedKmh * KMH_TO_M_PER_MIN;
  const running = speedKmh >= WALK_RUN_THRESHOLD_KMH;

  const horizontal = running ? 0.2 * speedMPerMin : 0.1 * speedMPerMin;
  const verticalCoefficient = running
    ? 0.9 * speedMPerMin
    : 1.8 * speedMPerMin;

  if (verticalCoefficient <= 0) return null;

  // targetVO2 = horizontal + verticalCoefficient * grade + 3.5
  const grade = (targetVO2 - horizontal - 3.5) / verticalCoefficient;
  const percent = grade * 100;

  if (percent < 0 || percent > maxIncline) return null;
  return percent;
}

export const INCLINE_TABLE_PRESETS = [0, 1, 2, 3, 5, 8, 10, 12, 15] as const;

export interface InclineTableRow {
  incline: number;
  flatSpeedKmh: number | null;
  kind: EquivalentKind;
  met: number;
  effortMultiplier: number;
}

/** Flat-pace equivalents across the standard grades, at one fixed speed. */
export function generateEquivalenceTable(speedKmh: number): InclineTableRow[] {
  return INCLINE_TABLE_PRESETS.map((incline) => {
    const eq = inclineEquivalent(speedKmh, incline);
    return {
      incline,
      flatSpeedKmh: eq.flatSpeedKmh,
      kind: eq.kind,
      met: eq.met,
      effortMultiplier: eq.effortMultiplier,
    };
  });
}
