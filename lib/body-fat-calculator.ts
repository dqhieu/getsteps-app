/**
 * Body Fat Percentage Calculator Utilities
 *
 * Uses the U.S. Navy Body Fat Formula — one of the most accurate
 * non-invasive tape-measure methods for estimating body fat percentage.
 */

export type Gender = "male" | "female";

export type BodyFatCategory =
  | "essential"
  | "athletic"
  | "fitness"
  | "acceptable"
  | "obese";

export interface BodyFatResult {
  bodyFatPercent: number;
  fatMassKg: number;
  leanMassKg: number;
  category: BodyFatCategory;
  categoryLabel: string;
  categoryColor: string;
  recommendedSteps: number;
  isValid: boolean;
}

const CATEGORY_COLORS: Record<BodyFatCategory, string> = {
  essential: "#3B82F6",
  athletic: "#22C55E",
  fitness: "#EAB308",
  acceptable: "#F97316",
  obese: "#EF4444",
};

const CATEGORY_LABELS: Record<BodyFatCategory, string> = {
  essential: "Essential Fat",
  athletic: "Athletic",
  fitness: "Fitness",
  acceptable: "Acceptable",
  obese: "Obese",
};

const RECOMMENDED_STEPS: Record<BodyFatCategory, number> = {
  essential: 8000,
  athletic: 10000,
  fitness: 10000,
  acceptable: 12000,
  obese: 10000,
};

/**
 * Determine body fat category based on percentage and gender
 */
export function getBodyFatCategory(bf: number, gender: Gender): BodyFatCategory {
  if (gender === "male") {
    if (bf < 6) return "essential";
    if (bf < 14) return "athletic";
    if (bf < 18) return "fitness";
    if (bf < 25) return "acceptable";
    return "obese";
  }
  // female
  if (bf < 14) return "essential";
  if (bf < 21) return "athletic";
  if (bf < 25) return "fitness";
  if (bf < 32) return "acceptable";
  return "obese";
}

/**
 * Get body fat category info for reference table
 */
export function getBodyFatCategoryInfo(
  gender: Gender
): Array<{ category: BodyFatCategory; label: string; range: string; color: string }> {
  if (gender === "male") {
    return [
      { category: "essential", label: "Essential Fat", range: "2–5%", color: CATEGORY_COLORS.essential },
      { category: "athletic", label: "Athletic", range: "6–13%", color: CATEGORY_COLORS.athletic },
      { category: "fitness", label: "Fitness", range: "14–17%", color: CATEGORY_COLORS.fitness },
      { category: "acceptable", label: "Acceptable", range: "18–24%", color: CATEGORY_COLORS.acceptable },
      { category: "obese", label: "Obese", range: "25%+", color: CATEGORY_COLORS.obese },
    ];
  }
  return [
    { category: "essential", label: "Essential Fat", range: "10–13%", color: CATEGORY_COLORS.essential },
    { category: "athletic", label: "Athletic", range: "14–20%", color: CATEGORY_COLORS.athletic },
    { category: "fitness", label: "Fitness", range: "21–24%", color: CATEGORY_COLORS.fitness },
    { category: "acceptable", label: "Acceptable", range: "25–31%", color: CATEGORY_COLORS.acceptable },
    { category: "obese", label: "Obese", range: "32%+", color: CATEGORY_COLORS.obese },
  ];
}

/**
 * Calculate body fat percentage using the U.S. Navy formula.
 * All inputs must be in centimeters.
 * hipCm is required for females.
 */
export function calculateBodyFat(
  gender: Gender,
  heightCm: number,
  weightKg: number,
  waistCm: number,
  neckCm: number,
  hipCm?: number
): BodyFatResult {
  let bodyFatPercent: number;

  try {
    if (gender === "male") {
      const diff = waistCm - neckCm;
      if (diff <= 0) {
        return { bodyFatPercent: 0, fatMassKg: 0, leanMassKg: 0, category: "athletic", categoryLabel: "Athletic", categoryColor: CATEGORY_COLORS.athletic, recommendedSteps: 10000, isValid: false };
      }
      bodyFatPercent =
        495 /
          (1.0324 -
            0.19077 * Math.log10(diff) +
            0.15456 * Math.log10(heightCm)) -
        450;
    } else {
      const hip = hipCm ?? 95;
      const sum = waistCm + hip - neckCm;
      if (sum <= 0) {
        return { bodyFatPercent: 0, fatMassKg: 0, leanMassKg: 0, category: "fitness", categoryLabel: "Fitness", categoryColor: CATEGORY_COLORS.fitness, recommendedSteps: 10000, isValid: false };
      }
      bodyFatPercent =
        495 /
          (1.29579 -
            0.35004 * Math.log10(sum) +
            0.221 * Math.log10(heightCm)) -
        450;
    }
  } catch {
    return { bodyFatPercent: 0, fatMassKg: 0, leanMassKg: 0, category: "fitness", categoryLabel: "Fitness", categoryColor: CATEGORY_COLORS.fitness, recommendedSteps: 10000, isValid: false };
  }

  if (!isFinite(bodyFatPercent) || isNaN(bodyFatPercent)) {
    return { bodyFatPercent: 0, fatMassKg: 0, leanMassKg: 0, category: "fitness", categoryLabel: "Fitness", categoryColor: CATEGORY_COLORS.fitness, recommendedSteps: 10000, isValid: false };
  }

  // Clamp to 3–60% range
  bodyFatPercent = Math.max(3, Math.min(60, bodyFatPercent));
  bodyFatPercent = Math.round(bodyFatPercent * 10) / 10;

  const fatMassKg = Math.round(weightKg * (bodyFatPercent / 100) * 10) / 10;
  const leanMassKg = Math.round((weightKg - fatMassKg) * 10) / 10;

  const category = getBodyFatCategory(bodyFatPercent, gender);

  return {
    bodyFatPercent,
    fatMassKg,
    leanMassKg,
    category,
    categoryLabel: CATEGORY_LABELS[category],
    categoryColor: CATEGORY_COLORS[category],
    recommendedSteps: RECOMMENDED_STEPS[category],
    isValid: true,
  };
}
