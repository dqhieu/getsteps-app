/**
 * Running Pace Calculator
 *
 * Converts between running pace (min/km, min/mile), speed (km/h, mph),
 * and predicts race finish times for common distances.
 */

export type PaceUnit = "km" | "mile";
export type SpeedUnit = "kmh" | "mph";

const MILES_PER_KM = 0.621371;
const KM_PER_MILE = 1.60934;

export const RACE_DISTANCES: Array<{ distance: string; distanceKm: number }> = [
  { distance: "5K",            distanceKm: 5 },
  { distance: "10K",           distanceKm: 10 },
  { distance: "Half Marathon", distanceKm: 21.0975 },
  { distance: "Marathon",      distanceKm: 42.195 },
];

export interface PaceResult {
  paceSecPerKm: number;
  paceSecPerMile: number;
  paceKmFormatted: string;
  paceMileFormatted: string;
  speedKmh: number;
  speedMph: number;
  racePredictions: Array<{ distance: string; distanceKm: number; finishTime: string }>;
}

/** Format seconds-per-km into "M:SS /km" or "M:SS /mi" */
export function formatPace(secPerKm: number, unit: PaceUnit): string {
  if (!isFinite(secPerKm) || secPerKm <= 0) return "—";
  const sec = unit === "km" ? secPerKm : secPerKm * KM_PER_MILE;
  const mins = Math.floor(sec / 60);
  const secs = Math.round(sec % 60);
  const paddedSecs = secs.toString().padStart(2, "0");
  return `${mins}:${paddedSecs} /${unit === "km" ? "km" : "mi"}`;
}

/** Format km/h or mph */
export function formatSpeed(kmh: number, unit: SpeedUnit): string {
  if (!isFinite(kmh) || kmh <= 0) return "—";
  if (unit === "kmh") return `${kmh.toFixed(1)} km/h`;
  return `${(kmh * MILES_PER_KM).toFixed(1)} mph`;
}

/** Format total seconds as HH:MM:SS or MM:SS if under 1 hour */
export function formatDuration(totalSeconds: number): string {
  if (!isFinite(totalSeconds) || totalSeconds <= 0) return "—";
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  const mm = m.toString().padStart(2, "0");
  const ss = s.toString().padStart(2, "0");
  if (h > 0) return `${h}:${mm}:${ss}`;
  return `${m}:${ss}`;
}

/** Parse "M:SS" or "H:MM:SS" pace/time string → total seconds. Returns 0 if invalid. */
export function parsePaceInput(input: string): number {
  const trimmed = input.trim();
  const parts = trimmed.split(":").map((p) => parseInt(p, 10));
  if (parts.some(isNaN) || parts.length < 2 || parts.length > 3) return 0;
  if (parts.length === 2) {
    const [mins, secs] = parts;
    if (secs < 0 || secs >= 60 || mins < 0) return 0;
    return mins * 60 + secs;
  }
  const [hours, mins, secs] = parts;
  if (secs < 0 || secs >= 60 || mins < 0 || mins >= 60 || hours < 0) return 0;
  return hours * 3600 + mins * 60 + secs;
}

/** Parse duration input "H:MM:SS" or "MM:SS" → total seconds. Returns 0 if invalid. */
export function parseDurationInput(input: string): number {
  return parsePaceInput(input);
}

function buildResult(paceSecPerKm: number): PaceResult {
  if (!isFinite(paceSecPerKm) || paceSecPerKm <= 0) {
    return {
      paceSecPerKm: 0,
      paceSecPerMile: 0,
      paceKmFormatted: "—",
      paceMileFormatted: "—",
      speedKmh: 0,
      speedMph: 0,
      racePredictions: RACE_DISTANCES.map((r) => ({ ...r, finishTime: "—" })),
    };
  }

  const paceSecPerMile = paceSecPerKm * KM_PER_MILE;
  const speedKmh = Math.round((3600 / paceSecPerKm) * 10) / 10;
  const speedMph = Math.round(speedKmh * MILES_PER_KM * 10) / 10;

  const racePredictions = RACE_DISTANCES.map((r) => ({
    distance: r.distance,
    distanceKm: r.distanceKm,
    finishTime: formatDuration(paceSecPerKm * r.distanceKm),
  }));

  return {
    paceSecPerKm,
    paceSecPerMile,
    paceKmFormatted: formatPace(paceSecPerKm, "km"),
    paceMileFormatted: formatPace(paceSecPerKm, "mile"),
    speedKmh,
    speedMph,
    racePredictions,
  };
}

/** Calculate from pace in seconds/km */
export function calculateFromPace(paceSecPerKm: number): PaceResult {
  return buildResult(paceSecPerKm);
}

/** Calculate from speed in km/h */
export function calculateFromSpeed(speedKmh: number): PaceResult {
  if (!isFinite(speedKmh) || speedKmh <= 0) return buildResult(0);
  return buildResult(3600 / speedKmh);
}

/** Calculate from total time and distance */
export function calculateFromTimeAndDistance(totalSeconds: number, distanceKm: number): PaceResult {
  if (!isFinite(totalSeconds) || totalSeconds <= 0 || !isFinite(distanceKm) || distanceKm <= 0) {
    return buildResult(0);
  }
  return buildResult(totalSeconds / distanceKm);
}
