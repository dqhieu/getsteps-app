/**
 * Waist-to-Hip Ratio Calculator Utilities
 *
 * WHR is waist circumference divided by hip circumference. It tracks where fat
 * sits rather than how much there is, which is why it predicts cardiovascular
 * and metabolic risk better than BMI alone: visceral fat around the abdomen is
 * metabolically active in a way that hip and thigh fat is not.
 *
 * Thresholds follow the WHO 2008 report on waist circumference and
 * waist-to-hip ratio.
 */

import type { Gender } from "./bmr-calculator";

export type { Gender };

export type RiskLevel = "low" | "moderate" | "high";

export interface RiskBand {
  level: RiskLevel;
  label: string;
  /** Inclusive lower bound; upper bound is the next band's min. */
  min: number;
  max: number;
  description: string;
  color: string;
}

/** WHO 2008 cut-offs. Women carry risk at a lower ratio than men. */
export const RISK_BANDS: Record<Gender, RiskBand[]> = {
  male: [
    {
      level: "low",
      label: "Low risk",
      min: 0,
      max: 0.9,
      description: "Fat distribution is not concentrated around the abdomen. This is the lowest-risk pattern for men.",
      color: "#22C55E",
    },
    {
      level: "moderate",
      label: "Moderate risk",
      min: 0.9,
      max: 1.0,
      description: "Some central fat accumulation. Associated with a measurable rise in cardiovascular and type 2 diabetes risk.",
      color: "#F59E0B",
    },
    {
      level: "high",
      label: "High risk",
      min: 1.0,
      max: Infinity,
      description: "Substantially elevated risk of cardiovascular disease and type 2 diabetes. Worth discussing with a doctor.",
      color: "#EF4444",
    },
  ],
  female: [
    {
      level: "low",
      label: "Low risk",
      min: 0,
      max: 0.8,
      description: "Fat distribution is not concentrated around the abdomen. This is the lowest-risk pattern for women.",
      color: "#22C55E",
    },
    {
      level: "moderate",
      label: "Moderate risk",
      min: 0.8,
      max: 0.85,
      description: "Some central fat accumulation. Associated with a measurable rise in cardiovascular and type 2 diabetes risk.",
      color: "#F59E0B",
    },
    {
      level: "high",
      label: "High risk",
      min: 0.85,
      max: Infinity,
      description: "Substantially elevated risk of cardiovascular disease and type 2 diabetes. Worth discussing with a doctor.",
      color: "#EF4444",
    },
  ],
};

/** WHO waist-circumference cut-offs, checked independently of the ratio. */
export const WAIST_THRESHOLDS_CM: Record<Gender, { increased: number; substantial: number }> = {
  male: { increased: 94, substantial: 102 },
  female: { increased: 80, substantial: 88 },
};

export interface WaistHipResult {
  ratio: number;
  band: RiskBand;
  bands: RiskBand[];
  /** Where the ratio sits on a 0–100 scale for the gauge, clamped. */
  scalePosition: number;
  /** Waist circumference verdict, which can disagree with the ratio. */
  waistVerdict: {
    level: RiskLevel;
    message: string;
  };
  /** Waist cm needed to reach the low-risk band at the current hip size. */
  targetWaistCm: number;
}

export function calculateWaistHipRatio(
  gender: Gender,
  waistCm: number,
  hipCm: number
): WaistHipResult {
  const ratio = Math.round((waistCm / hipCm) * 100) / 100;
  const bands = RISK_BANDS[gender];
  const band = bands.find((b) => ratio < b.max) ?? bands[bands.length - 1];

  // Render the gauge across 0.7–1.1, the range that covers essentially all
  // adult measurements, so the needle movement stays legible.
  const scalePosition = Math.max(0, Math.min(100, ((ratio - 0.7) / (1.1 - 0.7)) * 100));

  const thresholds = WAIST_THRESHOLDS_CM[gender];
  let waistVerdict: WaistHipResult["waistVerdict"];
  if (waistCm >= thresholds.substantial) {
    waistVerdict = {
      level: "high",
      message: `A waist of ${Math.round(waistCm)} cm is at or above the ${thresholds.substantial} cm mark where the WHO flags substantially increased risk for ${gender === "male" ? "men" : "women"}.`,
    };
  } else if (waistCm >= thresholds.increased) {
    waistVerdict = {
      level: "moderate",
      message: `A waist of ${Math.round(waistCm)} cm is above the ${thresholds.increased} cm mark where the WHO flags increased risk for ${gender === "male" ? "men" : "women"}.`,
    };
  } else {
    waistVerdict = {
      level: "low",
      message: `A waist of ${Math.round(waistCm)} cm is below the ${thresholds.increased} cm threshold the WHO uses for ${gender === "male" ? "men" : "women"}.`,
    };
  }

  // The low band is ratio < ceiling, so a waist landing exactly on the ceiling
  // is still moderate. Target one display step inside it (0.89 for men, 0.79
  // for women) and floor to 0.1 cm, so the suggested waist is unambiguously in
  // the low band rather than sitting on the boundary it is meant to clear.
  const lowRiskCeiling = bands[0].max;
  const targetRatio = lowRiskCeiling - 0.01;

  return {
    ratio,
    band,
    bands,
    scalePosition,
    waistVerdict,
    targetWaistCm: Math.floor(targetRatio * hipCm * 10) / 10,
  };
}
