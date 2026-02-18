// Pure TS logic for race time prediction

export interface RaceTimeResult {
  finishTime: string;
  paceKm: string;
  paceMile: string;
  speedKmh: string;
  speedMph: string;
  splits: { label: string; time: string }[];
}

export type RaceMode = "time_from_pace" | "pace_from_time";

export const RACE_DISTANCES: { label: string; km: number }[] = [
  { label: "5K", km: 5 },
  { label: "10K", km: 10 },
  { label: "Half Marathon", km: 21.0975 },
  { label: "Marathon", km: 42.195 },
];

/** Parse "M:SS" or "H:MM:SS" → total seconds. Returns 0 if invalid. */
export function parseDuration(input: string): number {
  const trimmed = input.trim();
  if (!trimmed) return 0;
  const parts = trimmed.split(":").map((p) => parseInt(p, 10));
  if (parts.some((p) => !isFinite(p) || p < 0)) return 0;
  if (parts.length === 3) return parts[0] * 3600 + parts[1] * 60 + parts[2];
  if (parts.length === 2) return parts[0] * 60 + parts[1];
  return 0;
}

/** Parse "M:SS" pace → seconds per km. Returns 0 if invalid. */
export function parsePaceToSecPerKm(paceStr: string): number {
  const trimmed = paceStr.trim();
  if (!trimmed) return 0;
  const parts = trimmed.split(":");
  if (parts.length !== 2) return 0;
  const m = parseInt(parts[0], 10);
  const s = parseInt(parts[1], 10);
  if (!isFinite(m) || !isFinite(s) || s < 0 || s >= 60 || m < 0) return 0;
  return m * 60 + s;
}

function secsToHMMSS(totalSec: number): string {
  if (!isFinite(totalSec) || totalSec <= 0) return "—";
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = Math.round(totalSec % 60).toString().padStart(2, "0");
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s}`;
  return `${m.toString().padStart(2, "0")}:${s}`;
}

function toMMSS(decimalMin: number): string {
  if (!isFinite(decimalMin) || decimalMin <= 0) return "—";
  const totalSec = Math.round(decimalMin * 60);
  const m = Math.floor(totalSec / 60);
  const s = (totalSec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

function buildSplits(distanceKm: number, paceSecPerKm: number): { label: string; time: string }[] {
  const splits: { label: string; time: string }[] = [];
  const step = 5;
  let km = step;
  while (km < distanceKm) {
    splits.push({ label: `${km}km`, time: secsToHMMSS(km * paceSecPerKm) });
    km += step;
  }
  // Final distance
  const finalLabel = distanceKm % 1 === 0 ? `${distanceKm}km` : `${distanceKm.toFixed(1)}km`;
  splits.push({ label: finalLabel, time: secsToHMMSS(distanceKm * paceSecPerKm) });
  return splits;
}

function buildResult(paceSecPerKm: number, distanceKm: number): RaceTimeResult {
  if (!isFinite(paceSecPerKm) || paceSecPerKm <= 0 || distanceKm <= 0) {
    return { finishTime: "—", paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—", splits: [] };
  }
  const finishSec = paceSecPerKm * distanceKm;
  const paceMinPerKm = paceSecPerKm / 60;
  const paceMinPerMile = paceMinPerKm * 1.60934;
  const speedKmh = 60 / paceMinPerKm;
  const speedMph = speedKmh / 1.60934;

  return {
    finishTime: secsToHMMSS(finishSec),
    paceKm: `${toMMSS(paceMinPerKm)}/km`,
    paceMile: `${toMMSS(paceMinPerMile)}/mi`,
    speedKmh: `${speedKmh.toFixed(1)} km/h`,
    speedMph: `${speedMph.toFixed(1)} mph`,
    splits: buildSplits(distanceKm, paceSecPerKm),
  };
}

/**
 * mode "time_from_pace": input = pace string "M:SS"
 * mode "pace_from_time": input = goal time string "H:MM:SS" or "MM:SS"
 */
export function calculateRaceTime(
  mode: RaceMode,
  distanceKm: number,
  input: string
): RaceTimeResult {
  if (mode === "time_from_pace") {
    const paceSecPerKm = parsePaceToSecPerKm(input);
    return buildResult(paceSecPerKm, distanceKm);
  } else {
    const totalSec = parseDuration(input);
    if (!isFinite(totalSec) || totalSec <= 0 || distanceKm <= 0) {
      return { finishTime: "—", paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—", splits: [] };
    }
    const paceSecPerKm = totalSec / distanceKm;
    return buildResult(paceSecPerKm, distanceKm);
  }
}
