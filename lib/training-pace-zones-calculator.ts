/**
 * Training Pace Zones Calculator Utilities
 *
 * Derives 5 running training zones from a recent race result
 * using the Riegel formula to predict 5K pace, then applies
 * Jack Daniels-inspired zone multipliers.
 */

export interface PaceZone {
  zone: number;
  name: string;
  description: string;
  paceKmMin: string;
  paceMileMin: string;
  color: string;
  usage: string;
}

const ZONE_DEFS = [
  {
    zone: 1,
    name: "Easy / Recovery",
    description: "Very light effort. Full conversation possible. Builds aerobic base and aids recovery.",
    color: "blue",
    usage: "~80% of all runs",
    slowMult: 1.55,
    fastMult: 1.40,
  },
  {
    zone: 2,
    name: "Aerobic Base",
    description: "Comfortable, sustainable pace. Breathing elevated but steady. Core long-run zone.",
    color: "green",
    usage: "Weekly long run",
    slowMult: 1.40,
    fastMult: 1.25,
  },
  {
    zone: 3,
    name: "Tempo",
    description: "Comfortably hard. Breathing labored. Progression runs and marathon-pace work.",
    color: "yellow",
    usage: "Progression runs",
    slowMult: 1.20,
    fastMult: 1.10,
  },
  {
    zone: 4,
    name: "Threshold",
    description: "Hard sustained effort. Lactate threshold pace. 20-40 min tempo runs.",
    color: "orange",
    usage: "Tempo runs (20-40 min)",
    slowMult: 1.10,
    fastMult: 1.03,
  },
  {
    zone: 5,
    name: "Interval / VO2",
    description: "Near-maximum effort. Short intervals (400m-1600m). Develops VO2 max and speed.",
    color: "red",
    usage: "Track intervals",
    slowMult: 1.03,
    fastMult: 0.97,
  },
] as const;

const COLOR_MAP: Record<string, string> = {
  blue: "#3B82F6",
  green: "#22C55E",
  yellow: "#EAB308",
  orange: "#F97316",
  red: "#EF4444",
};

/** Format seconds-per-km (or mile) to "M:SS" string */
function formatPace(secondsPerUnit: number): string {
  const m = Math.floor(secondsPerUnit / 60);
  const s = Math.round(secondsPerUnit % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Predict 5K equivalent time from any race using Riegel: T2 = T1 × (D2/D1)^1.06 */
function predict5kSeconds(inputTimeSeconds: number, inputDistanceKm: number): number {
  return inputTimeSeconds * Math.pow(5 / inputDistanceKm, 1.06);
}

export function calculateTrainingPaces(
  inputDistanceKm: number,
  inputTimeSeconds: number
): PaceZone[] {
  const fiveKSeconds = predict5kSeconds(inputTimeSeconds, inputDistanceKm);
  // 5K pace in seconds per km
  const fiveKPaceSecPerKm = fiveKSeconds / 5;

  return ZONE_DEFS.map((def) => {
    const slowSecPerKm = fiveKPaceSecPerKm * def.slowMult;
    const fastSecPerKm = fiveKPaceSecPerKm * def.fastMult;

    const slowSecPerMi = slowSecPerKm * 1.60934;
    const fastSecPerMi = fastSecPerKm * 1.60934;

    return {
      zone: def.zone,
      name: def.name,
      description: def.description,
      paceKmMin: `${formatPace(fastSecPerKm)}–${formatPace(slowSecPerKm)}/km`,
      paceMileMin: `${formatPace(fastSecPerMi)}–${formatPace(slowSecPerMi)}/mi`,
      color: COLOR_MAP[def.color],
      usage: def.usage,
    };
  });
}

/** Convert H, M, S integers to total seconds */
export function hmsToSeconds(hours: number, minutes: number, seconds: number): number {
  return hours * 3600 + minutes * 60 + seconds;
}

export const RACE_DISTANCE_OPTIONS = [
  { label: "5K", km: 5 },
  { label: "10K", km: 10 },
  { label: "Half Marathon", km: 21.0975 },
  { label: "Marathon", km: 42.195 },
  { label: "Custom", km: 0 },
] as const;
