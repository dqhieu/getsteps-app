/**
 * VO2 Max Calculator Utilities
 *
 * Supports two estimation methods:
 * - Heart Rate Method: uses age + resting heart rate
 * - Cooper 12-Minute Run Test: uses distance covered in 12 minutes
 */

export type VO2Method = "heart_rate" | "cooper";
export type Gender = "male" | "female";

export interface VO2MaxResult {
  vo2max: number;
  category: string;
  categoryColor: string;
  description: string;
  tip: string;
}

interface CategoryDef {
  label: string;
  color: string;
  description: string;
  tip: string;
  maleMin: number;
  femaleMin: number;
}

const CATEGORIES: CategoryDef[] = [
  {
    label: "Superior",
    color: "green",
    maleMin: 55,
    femaleMin: 50,
    description: "Outstanding aerobic capacity. You have exceptional cardiovascular fitness, typical of competitive endurance athletes.",
    tip: "Maintain with periodized training: mix long runs, tempo sessions, and recovery weeks to avoid overtraining.",
  },
  {
    label: "Excellent",
    color: "teal",
    maleMin: 51,
    femaleMin: 45,
    description: "Well above average aerobic fitness. Your heart and lungs efficiently deliver oxygen to working muscles.",
    tip: "Add one VO2max interval session per week (e.g., 5×3 min at hard effort) to push into Superior range.",
  },
  {
    label: "Good",
    color: "blue",
    maleMin: 43,
    femaleMin: 38,
    description: "Above average fitness. You have a solid aerobic base that supports healthy daily activity and recreational sport.",
    tip: "Aim for 3-4 cardio sessions per week. Include one tempo run and one longer easy run to build your base.",
  },
  {
    label: "Fair",
    color: "yellow",
    maleMin: 35,
    femaleMin: 31,
    description: "Average aerobic capacity. Regular training can meaningfully improve your VO2 max within 8-12 weeks.",
    tip: "Start with 30-minute Zone 2 runs 3× per week. Add one HIIT session weekly after 4 weeks of base training.",
  },
  {
    label: "Poor",
    color: "red",
    maleMin: 0,
    femaleMin: 0,
    description: "Below average aerobic capacity. The good news: this level responds quickly to consistent training.",
    tip: "Begin with 20-30 min brisk walks 5× per week. Transition to run-walk intervals after 2-3 weeks.",
  },
];

function getCategory(vo2max: number, gender: Gender): CategoryDef {
  const minField = gender === "male" ? "maleMin" : "femaleMin";
  for (const cat of CATEGORIES) {
    if (vo2max >= cat[minField]) return cat;
  }
  return CATEGORIES[CATEGORIES.length - 1];
}

/**
 * Calculate VO2 max using the Heart Rate Method.
 * HRmax = 220 - age
 * VO2max = 15 × (HRmax / rhr)
 */
function heartRateMethod(age: number, rhr: number): number {
  const hrMax = 220 - age;
  return 15 * (hrMax / rhr);
}

/**
 * Calculate VO2 max using the Cooper 12-Minute Run Test.
 * VO2max = (distanceMeters - 504.9) / 44.73
 */
function cooperMethod(distanceMeters: number): number {
  return (distanceMeters - 504.9) / 44.73;
}

export function calculateVO2Max(
  method: VO2Method,
  gender: Gender,
  params: { age?: number; rhr?: number; cooperDistanceM?: number }
): VO2MaxResult {
  let vo2max: number;

  if (method === "heart_rate") {
    const age = params.age ?? 30;
    const rhr = params.rhr ?? 60;
    vo2max = heartRateMethod(age, rhr);
  } else {
    const distM = params.cooperDistanceM ?? 2400;
    vo2max = cooperMethod(distM);
  }

  vo2max = Math.max(0, Math.round(vo2max * 10) / 10);

  const cat = getCategory(vo2max, gender);

  return {
    vo2max,
    category: cat.label,
    categoryColor: cat.color,
    description: cat.description,
    tip: cat.tip,
  };
}
