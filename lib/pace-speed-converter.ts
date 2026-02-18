// Pure TS logic for pace ↔ speed conversion

export interface PaceSpeedResult {
  paceKm: string;
  paceMile: string;
  speedKmh: string;
  speedMph: string;
  dist30minKm: string;
  dist60minKm: string;
  time5kFormatted: string;
  time10kFormatted: string;
}

/** Parse "M:SS" or "MM:SS" pace string → decimal minutes. Returns 0 if invalid. */
export function parsePaceStr(paceStr: string): number {
  const trimmed = paceStr.trim();
  if (!trimmed) return 0;
  const parts = trimmed.split(":");
  if (parts.length !== 2) return 0;
  const mins = parseInt(parts[0], 10);
  const secs = parseInt(parts[1], 10);
  if (!isFinite(mins) || !isFinite(secs) || secs < 0 || secs >= 60 || mins < 0) return 0;
  return mins + secs / 60;
}

/** Convert decimal minutes → "M:SS" string */
export function toMMSS(decimalMin: number): string {
  if (!isFinite(decimalMin) || decimalMin <= 0) return "—";
  const totalSec = Math.round(decimalMin * 60);
  const m = Math.floor(totalSec / 60);
  const s = (totalSec % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
}

/** Convert total seconds → "H:MM:SS" */
function secsToHMMSS(totalSec: number): string {
  if (!isFinite(totalSec) || totalSec <= 0) return "—";
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = Math.round(totalSec % 60).toString().padStart(2, "0");
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s}`;
  return `${m}:${s}`;
}

function buildResult(speedKmh: number): PaceSpeedResult {
  if (!isFinite(speedKmh) || speedKmh <= 0) {
    return {
      paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—",
      dist30minKm: "—", dist60minKm: "—",
      time5kFormatted: "—", time10kFormatted: "—",
    };
  }
  const paceKmMin = 60 / speedKmh;
  const paceMileMin = paceKmMin * 1.60934;
  const speedMph = speedKmh / 1.60934;
  const dist30 = speedKmh * 0.5;
  const dist60 = speedKmh;
  const time5kSec = (paceKmMin * 60) * 5;
  const time10kSec = (paceKmMin * 60) * 10;

  return {
    paceKm: `${toMMSS(paceKmMin)}/km`,
    paceMile: `${toMMSS(paceMileMin)}/mi`,
    speedKmh: `${speedKmh.toFixed(1)} km/h`,
    speedMph: `${speedMph.toFixed(1)} mph`,
    dist30minKm: `${dist30.toFixed(2)} km in 30 min`,
    dist60minKm: `${dist60.toFixed(1)} km in 60 min`,
    time5kFormatted: secsToHMMSS(time5kSec),
    time10kFormatted: secsToHMMSS(time10kSec),
  };
}

export function convertFromPaceKm(paceStr: string): PaceSpeedResult {
  const min = parsePaceStr(paceStr);
  if (min <= 0) return buildResult(0);
  return buildResult(60 / min);
}

export function convertFromPaceMile(paceStr: string): PaceSpeedResult {
  const minPerMile = parsePaceStr(paceStr);
  if (minPerMile <= 0) return buildResult(0);
  const minPerKm = minPerMile / 1.60934;
  return buildResult(60 / minPerKm);
}

export function convertFromSpeedKmh(speed: number): PaceSpeedResult {
  return buildResult(speed);
}

export function convertFromSpeedMph(speed: number): PaceSpeedResult {
  return buildResult(speed * 1.60934);
}

export interface PaceReference {
  label: string;
  speedKmh: number;
  paceKm: string;
  paceMile: string;
}

export const PACE_REFERENCE: PaceReference[] = [
  { label: "Walking", speedKmh: 5, paceKm: "12:00/km", paceMile: "19:18/mi" },
  { label: "Jogging", speedKmh: 8, paceKm: "7:30/km", paceMile: "12:04/mi" },
  { label: "Running", speedKmh: 11, paceKm: "5:27/km", paceMile: "8:46/mi" },
  { label: "Fast Running", speedKmh: 14, paceKm: "4:17/km", paceMile: "6:53/mi" },
  { label: "Sprint", speedKmh: 20, paceKm: "3:00/km", paceMile: "4:50/mi" },
];
