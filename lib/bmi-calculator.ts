/**
 * BMI Calculator Utilities
 *
 * Calculate Body Mass Index and provide health insights.
 * BMI = weight (kg) / height (m)²
 */

import { lbsToKg, cmToFeetInches, feetInchesToCm } from "./unit-converter";

export type BMICategory =
  | "underweight"
  | "normal"
  | "overweight"
  | "obese-1"
  | "obese-2"
  | "obese-3";

export interface BMIResult {
  bmi: number;
  category: BMICategory;
  categoryLabel: string;
  categoryColor: string;
  healthyWeightRange: {
    min: number;
    max: number;
  };
  weightToHealthyRange: number; // Positive = need to lose, Negative = need to gain
  recommendedSteps: number;
}

export interface BMICategoryInfo {
  category: BMICategory;
  label: string;
  range: string;
  color: string;
  bgColor: string;
  description: string;
}

// BMI category thresholds
export const BMI_THRESHOLDS = {
  underweight: 18.5,
  normal: 25.0,
  overweight: 30.0,
  obese1: 35.0,
  obese2: 40.0,
} as const;

// BMI category information
export const BMI_CATEGORIES: Record<BMICategory, Omit<BMICategoryInfo, "category">> = {
  underweight: {
    label: "Underweight",
    range: "< 18.5",
    color: "#3B82F6", // Blue
    bgColor: "bg-blue-500",
    description:
      "You may need to gain some weight. Consider consulting a healthcare professional.",
  },
  normal: {
    label: "Normal",
    range: "18.5 - 24.9",
    color: "#22C55E", // Green
    bgColor: "bg-green-500",
    description: "Your weight is within the healthy range. Keep up the good work!",
  },
  overweight: {
    label: "Overweight",
    range: "25.0 - 29.9",
    color: "#EAB308", // Yellow
    bgColor: "bg-yellow-500",
    description:
      "You may benefit from losing some weight through diet and exercise.",
  },
  "obese-1": {
    label: "Obese Class I",
    range: "30.0 - 34.9",
    color: "#F97316", // Orange
    bgColor: "bg-orange-500",
    description:
      "Consider consulting a healthcare professional about weight management strategies.",
  },
  "obese-2": {
    label: "Obese Class II",
    range: "35.0 - 39.9",
    color: "#EF4444", // Red
    bgColor: "bg-red-500",
    description:
      "It's recommended to consult a healthcare professional for personalized advice.",
  },
  "obese-3": {
    label: "Obese Class III",
    range: "≥ 40.0",
    color: "#991B1B", // Dark Red
    bgColor: "bg-red-800",
    description:
      "Please consult a healthcare professional for personalized medical advice.",
  },
};

/**
 * Calculate BMI from weight (kg) and height (cm)
 */
export function calculateBMI(weightKg: number, heightCm: number): number {
  const heightM = heightCm / 100;
  return weightKg / (heightM * heightM);
}

/**
 * Get BMI category from BMI value
 */
export function getBMICategory(bmi: number): BMICategory {
  if (bmi < BMI_THRESHOLDS.underweight) return "underweight";
  if (bmi < BMI_THRESHOLDS.normal) return "normal";
  if (bmi < BMI_THRESHOLDS.overweight) return "overweight";
  if (bmi < BMI_THRESHOLDS.obese1) return "obese-1";
  if (bmi < BMI_THRESHOLDS.obese2) return "obese-2";
  return "obese-3";
}

/**
 * Calculate healthy weight range for a given height
 * Based on BMI 18.5 - 24.9
 */
export function calculateHealthyWeightRange(heightCm: number): {
  min: number;
  max: number;
} {
  const heightM = heightCm / 100;
  const heightSquared = heightM * heightM;
  return {
    min: Math.round(BMI_THRESHOLDS.underweight * heightSquared * 10) / 10,
    max: Math.round((BMI_THRESHOLDS.normal - 0.1) * heightSquared * 10) / 10,
  };
}

/**
 * Get recommended daily steps based on BMI category
 */
export function getRecommendedSteps(category: BMICategory): number {
  switch (category) {
    case "underweight":
      return 8000; // Moderate activity
    case "normal":
      return 10000; // Maintain health
    case "overweight":
      return 12000; // Weight loss goal
    case "obese-1":
    case "obese-2":
    case "obese-3":
      return 10000; // Start with achievable goal, focus on consistency
    default:
      return 10000;
  }
}

/**
 * Complete BMI calculation with all metrics
 */
export function calculateBMIResult(weightKg: number, heightCm: number): BMIResult {
  const bmi = calculateBMI(weightKg, heightCm);
  const category = getBMICategory(bmi);
  const categoryInfo = BMI_CATEGORIES[category];
  const healthyRange = calculateHealthyWeightRange(heightCm);

  let weightToHealthyRange = 0;
  if (weightKg < healthyRange.min) {
    weightToHealthyRange = healthyRange.min - weightKg; // Negative means need to gain
    weightToHealthyRange = -weightToHealthyRange;
  } else if (weightKg > healthyRange.max) {
    weightToHealthyRange = weightKg - healthyRange.max; // Positive means need to lose
  }

  return {
    bmi: Math.round(bmi * 10) / 10,
    category,
    categoryLabel: categoryInfo.label,
    categoryColor: categoryInfo.color,
    healthyWeightRange: healthyRange,
    weightToHealthyRange: Math.round(weightToHealthyRange * 10) / 10,
    recommendedSteps: getRecommendedSteps(category),
  };
}

/**
 * Get all BMI category info for display
 */
export function getAllBMICategories(): BMICategoryInfo[] {
  return Object.entries(BMI_CATEGORIES).map(([key, value]) => ({
    category: key as BMICategory,
    ...value,
  }));
}

/**
 * Calculate BMI position on a scale (0-100) for visual display
 * Maps BMI 15-45 to 0-100
 */
export function getBMIScalePosition(bmi: number): number {
  const minBMI = 15;
  const maxBMI = 45;
  const clampedBMI = Math.max(minBMI, Math.min(maxBMI, bmi));
  return ((clampedBMI - minBMI) / (maxBMI - minBMI)) * 100;
}

/**
 * Format BMI value for display
 */
export function formatBMI(bmi: number): string {
  return bmi.toFixed(1);
}
