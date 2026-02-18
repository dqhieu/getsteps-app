// Pure TS logic for distance unit conversion

export interface DistanceResult {
  km: string;
  miles: string;
  meters: string;
  yards: string;
  feet: string;
  steps: string;
  timeWalking: string;
  timeJogging: string;
  timeRunning: string;
  calWalking: string;
  calJogging: string;
  calRunning: string;
}

export type DistanceUnit = "km" | "miles" | "meters" | "yards";

// Conversion factors (base: km)
const KM_PER_MILE = 1.60934;
const M_PER_KM = 1000;
const YD_PER_KM = 1093.61;
const FT_PER_KM = 3280.84;

// Steps per km (average stride ~76cm)
const STEPS_PER_KM = 1312;

// MET values for 70kg person
const WEIGHT_KG = 70;
const KCAL_PER_MET_MIN = WEIGHT_KG * 3.5 / 200; // MET × weight × 3.5 / 200 kcal/min

function secsToHMMSS(totalSec: number): string {
  if (!isFinite(totalSec) || totalSec <= 0) return "—";
  const h = Math.floor(totalSec / 3600);
  const m = Math.floor((totalSec % 3600) / 60);
  const s = Math.round(totalSec % 60).toString().padStart(2, "0");
  if (h > 0) return `${h}:${m.toString().padStart(2, "0")}:${s}`;
  return `${m.toString().padStart(2, "0")}:${s}`;
}

function calcCalories(distKm: number, speedKmh: number, met: number): number {
  const hours = distKm / speedKmh;
  const minutes = hours * 60;
  return Math.round(met * KCAL_PER_MET_MIN * minutes);
}

export function convertDistance(value: number, unit: DistanceUnit): DistanceResult {
  if (!isFinite(value) || value <= 0) {
    return {
      km: "—", miles: "—", meters: "—", yards: "—", feet: "—",
      steps: "—",
      timeWalking: "—", timeJogging: "—", timeRunning: "—",
      calWalking: "—", calJogging: "—", calRunning: "—",
    };
  }

  let distKm: number;
  switch (unit) {
    case "km":      distKm = value; break;
    case "miles":   distKm = value * KM_PER_MILE; break;
    case "meters":  distKm = value / M_PER_KM; break;
    case "yards":   distKm = value / YD_PER_KM; break;
    default:        distKm = value;
  }

  const miles = distKm / KM_PER_MILE;
  const meters = distKm * M_PER_KM;
  const yards = distKm * YD_PER_KM;
  const feet = distKm * FT_PER_KM;
  const steps = Math.round(distKm * STEPS_PER_KM);

  // Times in seconds (speed in km/h)
  const walkSpeedKmh = 5;
  const jogSpeedKmh = 8;
  const runSpeedKmh = 11;

  const timeWalkSec = (distKm / walkSpeedKmh) * 3600;
  const timeJogSec = (distKm / jogSpeedKmh) * 3600;
  const timeRunSec = (distKm / runSpeedKmh) * 3600;

  // Calories (MET: walking=3.5, jogging=7, running=11)
  const calWalk = calcCalories(distKm, walkSpeedKmh, 3.5);
  const calJog = calcCalories(distKm, jogSpeedKmh, 7);
  const calRun = calcCalories(distKm, runSpeedKmh, 11);

  const fmt = (n: number, d = 2) => n.toFixed(d);

  return {
    km: `${fmt(distKm)} km`,
    miles: `${fmt(miles)} mi`,
    meters: meters >= 1000 ? `${fmt(meters, 0)} m` : `${fmt(meters, 1)} m`,
    yards: `${fmt(yards, 0)} yd`,
    feet: `${fmt(feet, 0)} ft`,
    steps: steps.toLocaleString(),
    timeWalking: secsToHMMSS(timeWalkSec),
    timeJogging: secsToHMMSS(timeJogSec),
    timeRunning: secsToHMMSS(timeRunSec),
    calWalking: `${calWalk} kcal`,
    calJogging: `${calJog} kcal`,
    calRunning: `${calRun} kcal`,
  };
}

export const QUICK_DISTANCES: { label: string; value: number; unit: DistanceUnit }[] = [
  { label: "5K", value: 5, unit: "km" },
  { label: "10K", value: 10, unit: "km" },
  { label: "Half Marathon", value: 21.0975, unit: "km" },
  { label: "Marathon", value: 42.195, unit: "km" },
];
