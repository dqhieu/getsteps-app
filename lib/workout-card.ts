/**
 * Workout Stats overlay
 *
 * Turns raw form input (distance + moving time) into the display strings drawn
 * onto the shareable overlay. Pace is always derived — never typed by the user.
 */

import {
  calculateFromTimeAndDistance,
  formatDuration,
  formatPace,
  parseDurationInput,
} from "./pace-calculator";
import { milesToKm } from "./unit-converter";

export type CardDistanceUnit = "km" | "mile";

export const EMPTY_VALUE = "—";

export const CARD_FILE_NAME = "workout-stats.png";

export interface WorkoutCardInput {
  /** Raw distance field, e.g. "10" or "6.2" */
  distance: string;
  unit: CardDistanceUnit;
  /** Raw moving time field, "MM:SS" or "H:MM:SS" */
  duration: string;
}

export interface WorkoutCardData {
  distanceValue: string;
  distanceUnit: string;
  durationValue: string;
  paceValue: string;
  paceUnit: string;
  /** False when distance or time is missing/unparseable — overlay renders placeholders */
  isValid: boolean;
}

/**
 * formatPace returns "5:15 /km" as one string; the overlay draws the number and
 * its unit at different sizes, so split them back apart.
 */
function splitPace(formatted: string): { value: string; unit: string } {
  const spaceIndex = formatted.indexOf(" ");
  if (spaceIndex === -1) return { value: formatted, unit: "" };
  return {
    value: formatted.slice(0, spaceIndex),
    unit: formatted.slice(spaceIndex + 1),
  };
}

export function buildWorkoutCardData(input: WorkoutCardInput): WorkoutCardData {
  const unitLabel = input.unit === "km" ? "km" : "mi";

  const distance = parseFloat(input.distance);
  const totalSeconds = parseDurationInput(input.duration);
  const hasDistance = isFinite(distance) && distance > 0;
  const isValid = hasDistance && totalSeconds > 0;

  if (!isValid) {
    return {
      distanceValue: hasDistance ? distance.toFixed(2) : EMPTY_VALUE,
      distanceUnit: unitLabel,
      durationValue: EMPTY_VALUE,
      paceValue: EMPTY_VALUE,
      paceUnit: `/${unitLabel}`,
      isValid: false,
    };
  }

  const distanceKm = input.unit === "mile" ? milesToKm(distance) : distance;
  const pace = calculateFromTimeAndDistance(totalSeconds, distanceKm);
  const { value: paceValue, unit: paceUnit } = splitPace(
    formatPace(pace.paceSecPerKm, input.unit)
  );

  return {
    distanceValue: distance.toFixed(2),
    distanceUnit: unitLabel,
    durationValue: formatDuration(totalSeconds),
    paceValue,
    paceUnit,
    isValid: true,
  };
}

/** Convert the typed distance when the user flips the km/mi toggle. */
export function convertDistanceInput(
  value: string,
  from: CardDistanceUnit,
  to: CardDistanceUnit
): string {
  if (from === to) return value;
  const parsed = parseFloat(value);
  if (!isFinite(parsed) || parsed <= 0) return value;
  const converted = to === "mile" ? parsed / 1.60934 : parsed * 1.60934;
  return converted.toFixed(2);
}
