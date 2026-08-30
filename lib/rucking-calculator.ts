// Rucking energy model.
//
// Rucking is load carriage, and the ACSM equations used elsewhere in this
// codebase have no load term at all — they would report the same burn for a
// walk with an empty pack and a walk under 30 kg. This uses the Pandolf
// equation, the standard military model for the metabolic cost of carrying
// weight, which takes load, terrain and grade as first-class inputs.
//
// Pandolf RF, Givoni B, Goldman RF (1977), J Appl Physiol 43(4):577-81.

import { CALORIES_PER_KG_FAT } from "./calorie-calculator";

/** Joules in one kilocalorie. */
const JOULES_PER_KCAL = 4184;

export interface Terrain {
  id: string;
  label: string;
  /** Pandolf terrain coefficient. Blacktop is the 1.0 reference. */
  factor: number;
  description: string;
}

export const TERRAINS: Terrain[] = [
  {
    id: "blacktop",
    label: "Paved road",
    factor: 1.0,
    description: "Blacktop or treadmill. The reference surface.",
  },
  {
    id: "gravel",
    label: "Gravel road",
    factor: 1.2,
    description: "Dirt or gravel road, light brush.",
  },
  {
    id: "trail",
    label: "Hiking trail",
    factor: 1.2,
    description: "Packed singletrack with roots and rock.",
  },
  {
    id: "heavy-brush",
    label: "Heavy brush",
    factor: 1.5,
    description: "Thick undergrowth, no established path.",
  },
  {
    id: "swampy",
    label: "Swampy bog",
    factor: 1.8,
    description: "Soft, saturated ground that gives underfoot.",
  },
  {
    id: "sand",
    label: "Loose sand",
    factor: 2.1,
    description: "Dry beach sand. The most expensive common surface.",
  },
];

export const DEFAULT_TERRAIN = TERRAINS[0];

export interface RuckInput {
  /** Body mass, kg. */
  weightKg: number;
  /** Load carried, kg. */
  loadKg: number;
  speedKmh: number;
  /** Grade as a percentage. Negative values are not modelled; see below. */
  gradePercent: number;
  durationMinutes: number;
  terrainFactor: number;
}

export interface RuckResult {
  calories: number;
  /** Metabolic rate, watts. */
  watts: number;
  kcalPerMinute: number;
  met: number;
  distanceKm: number;
  fatGrams: number;
  /** Calories the same walk would cost carrying nothing. */
  caloriesUnloaded: number;
  /** Extra calories attributable to the load alone. */
  caloriesFromLoad: number;
  /** Load as a percentage of body weight. */
  loadRatio: number;
  /** True when the load exceeds the commonly advised 1/3 of body weight. */
  loadIsHeavy: boolean;
}

/**
 * Pandolf metabolic rate in watts.
 *
 *   M = 1.5W + 2.0(W+L)(L/W)^2 + n(W+L)(1.5V^2 + 0.35VG)
 *
 * W body mass kg, L load kg, V speed m/s, G grade %, n terrain factor.
 *
 * The model is validated for level and uphill walking. Downhill grades need
 * the separate Santee correction, so negative grades are clamped to zero here
 * rather than fed to an equation that would return a nonsensically low cost.
 */
export function pandolfWatts({
  weightKg,
  loadKg,
  speedKmh,
  gradePercent,
  terrainFactor,
}: Omit<RuckInput, "durationMinutes">): number {
  if (weightKg <= 0) return 0;

  const total = weightKg + loadKg;
  const velocity = (speedKmh * 1000) / 3600;
  const grade = Math.max(0, gradePercent);
  const loadRatio = loadKg / weightKg;

  const standing = 1.5 * weightKg;
  const loadPenalty = 2.0 * total * loadRatio * loadRatio;
  const movement =
    terrainFactor * total * (1.5 * velocity * velocity + 0.35 * velocity * grade);

  return standing + loadPenalty + movement;
}

export function calculateRuck({
  weightKg,
  loadKg,
  speedKmh,
  gradePercent,
  durationMinutes,
  terrainFactor,
}: RuckInput): RuckResult {
  const watts = pandolfWatts({
    weightKg,
    loadKg,
    speedKmh,
    gradePercent,
    terrainFactor,
  });

  const kcalPerMinute = (watts * 60) / JOULES_PER_KCAL;
  const calories = kcalPerMinute * durationMinutes;

  // Derive METs from the same kcal/min figure the page displays, using the
  // oxygen-based relation the rest of this codebase uses
  // (kcal/min = MET x 3.5 x kg / 200). Going via the 1.162 W/kg definition
  // instead would leave the MET and kcal/min shown side by side ~5% apart.
  const met = weightKg > 0 ? (kcalPerMinute * 200) / (3.5 * weightKg) : 0;

  const unloadedWatts = pandolfWatts({
    weightKg,
    loadKg: 0,
    speedKmh,
    gradePercent,
    terrainFactor,
  });
  const caloriesUnloaded =
    ((unloadedWatts * 60) / JOULES_PER_KCAL) * durationMinutes;

  // Derive METs from the same kcal/min figure the page displays, using the
  // oxygen-based relation the rest of this codebase uses
  // (kcal/min = MET x 3.5 x kg / 200). Going via the 1.162 W/kg definition
  // instead would leave the MET and kcal/min shown side by side ~5% apart.
  // Round once, then derive the difference from the rounded figures. Rounding
  // all three independently lets the page show a total, an unloaded figure and
  // a load contribution that do not add up.
  const roundedCalories = Math.round(calories);
  const roundedUnloaded = Math.round(caloriesUnloaded);

  return {
    calories: roundedCalories,
    watts: Math.round(watts),
    kcalPerMinute,
    met,
    distanceKm: (speedKmh * durationMinutes) / 60,
    fatGrams: (calories / CALORIES_PER_KG_FAT) * 1000,
    caloriesUnloaded: roundedUnloaded,
    caloriesFromLoad: roundedCalories - roundedUnloaded,
    loadRatio: weightKg > 0 ? loadKg / weightKg : 0,
    loadIsHeavy: weightKg > 0 && loadKg / weightKg > 1 / 3,
  };
}

export const LOAD_TABLE_PRESETS_KG = [0, 5, 9, 11, 14, 18, 23, 27] as const;

export interface LoadTableRow {
  loadKg: number;
  calories: number;
  /** Percentage more than the same walk carrying nothing. */
  percentOverUnloaded: number;
}

/** Calories across common ruck loads, holding everything else constant. */
export function generateLoadTable(
  base: Omit<RuckInput, "loadKg">
): LoadTableRow[] {
  const unloaded = calculateRuck({ ...base, loadKg: 0 }).calories;

  return LOAD_TABLE_PRESETS_KG.map((loadKg) => {
    const { calories } = calculateRuck({ ...base, loadKg });
    return {
      loadKg,
      calories,
      percentOverUnloaded:
        unloaded > 0 ? (calories / unloaded - 1) * 100 : 0,
    };
  });
}
