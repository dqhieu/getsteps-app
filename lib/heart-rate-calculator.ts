/**
 * Heart Rate Zones Calculator Utilities
 *
 * Calculate personalized heart rate training zones using either the standard
 * percentage-of-max-HR method or the Karvonen (heart rate reserve) method.
 */

export interface HeartRateZone {
  zone: number;
  name: string;
  minBpm: number;
  maxBpm: number;
  pctMin: number;
  pctMax: number;
  benefit: string;
  color: string;
  description: string;
}

export interface HeartRateResult {
  maxHR: number;
  restingHR?: number;
  zones: HeartRateZone[];
  method: "standard" | "karvonen";
}

export const ZONE_DEFINITIONS = [
  {
    zone: 1,
    name: "Recovery",
    pctMin: 0.5,
    pctMax: 0.6,
    benefit: "Active recovery, low intensity",
    color: "#3B82F6",
    description: "Very light effort. Improves blood flow and speeds up recovery between hard sessions.",
  },
  {
    zone: 2,
    name: "Fat Burn",
    pctMin: 0.6,
    pctMax: 0.7,
    benefit: "Aerobic base, optimal fat burning",
    color: "#22C55E",
    description: "Comfortable conversational pace. Body uses fat as primary fuel; builds aerobic endurance.",
  },
  {
    zone: 3,
    name: "Aerobic",
    pctMin: 0.7,
    pctMax: 0.8,
    benefit: "Endurance, cardiovascular fitness",
    color: "#EAB308",
    description: "Moderate effort. Improves cardiovascular efficiency and muscular endurance.",
  },
  {
    zone: 4,
    name: "Threshold",
    pctMin: 0.8,
    pctMax: 0.9,
    benefit: "Speed work, lactate threshold",
    color: "#F97316",
    description: "Hard effort at the edge of comfort. Raises lactate threshold and improves race pace.",
  },
  {
    zone: 5,
    name: "Maximum",
    pctMin: 0.9,
    pctMax: 1.0,
    benefit: "Peak performance, VO2 max",
    color: "#EF4444",
    description: "All-out effort. Develops maximum speed and VO2 max. Only sustainable for short bursts.",
  },
] as const;

/**
 * Calculate heart rate training zones.
 * Uses Karvonen method when restingHR is provided, otherwise standard % of maxHR.
 */
export function calculateHeartRateZones(
  age: number,
  restingHR?: number,
  customMaxHR?: number
): HeartRateResult {
  const maxHR = customMaxHR ?? 220 - age;
  const useKarvonen = restingHR !== undefined && restingHR > 0;
  const hrr = useKarvonen ? maxHR - restingHR! : 0;

  const zones: HeartRateZone[] = ZONE_DEFINITIONS.map((def) => {
    let minBpm: number;
    let maxBpm: number;

    if (useKarvonen) {
      minBpm = Math.round(restingHR! + hrr * def.pctMin);
      maxBpm = Math.round(restingHR! + hrr * def.pctMax);
    } else {
      minBpm = Math.round(maxHR * def.pctMin);
      maxBpm = Math.round(maxHR * def.pctMax);
    }

    return {
      zone: def.zone,
      name: def.name,
      minBpm,
      maxBpm,
      pctMin: def.pctMin,
      pctMax: def.pctMax,
      benefit: def.benefit,
      color: def.color,
      description: def.description,
    };
  });

  return {
    maxHR,
    restingHR: useKarvonen ? restingHR : undefined,
    zones,
    method: useKarvonen ? "karvonen" : "standard",
  };
}
