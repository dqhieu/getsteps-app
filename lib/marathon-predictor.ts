/**
 * Marathon Race Predictor Utilities
 *
 * Uses the Riegel formula to predict race finish times across standard distances.
 * T2 = T1 × (D2 / D1)^1.06
 */

export const RACE_DISTANCES = [
  { name: "5K", km: 5 },
  { name: "10K", km: 10 },
  { name: "Half Marathon", km: 21.0975 },
  { name: "Marathon", km: 42.195 },
] as const;

export interface RacePrediction {
  distance: string;
  km: number;
  time: string;      // "H:MM:SS"
  paceKm: string;    // "M:SS/km"
  paceMile: string;  // "M:SS/mi"
  speedKmh: string;  // "X.X km/h"
  isInput: boolean;
}

/** Format total seconds to "H:MM:SS" */
function formatTime(totalSeconds: number): string {
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = Math.round(totalSeconds % 60);
  return `${h}:${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Format pace in seconds-per-km or seconds-per-mile to "M:SS" */
function formatPace(secondsPerUnit: number): string {
  const m = Math.floor(secondsPerUnit / 60);
  const s = Math.round(secondsPerUnit % 60);
  return `${m}:${String(s).padStart(2, "0")}`;
}

/** Predict finish time using Riegel formula */
function riegelPredict(t1Seconds: number, d1Km: number, d2Km: number): number {
  return t1Seconds * Math.pow(d2Km / d1Km, 1.06);
}

export function predictRaceTimes(
  inputDistanceKm: number,
  inputTimeSeconds: number
): RacePrediction[] {
  return RACE_DISTANCES.map(({ name, km }) => {
    const predictedSeconds = riegelPredict(inputTimeSeconds, inputDistanceKm, km);
    const paceSecondsPerKm = predictedSeconds / km;
    const paceSecondsPerMile = paceSecondsPerKm * 1.60934;
    const speedKmh = km / (predictedSeconds / 3600);

    return {
      distance: name,
      km,
      time: formatTime(predictedSeconds),
      paceKm: `${formatPace(paceSecondsPerKm)}/km`,
      paceMile: `${formatPace(paceSecondsPerMile)}/mi`,
      speedKmh: speedKmh.toFixed(1),
      isInput: Math.abs(km - inputDistanceKm) < 0.01,
    };
  });
}

/** Convert H, M, S integers to total seconds */
export function hmsToSeconds(hours: number, minutes: number, seconds: number): number {
  return hours * 3600 + minutes * 60 + seconds;
}
