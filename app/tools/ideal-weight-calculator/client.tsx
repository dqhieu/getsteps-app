"use client";

import type { ReactNode } from "react";
import { IdealWeightCalculator } from "@/components/ideal-weight-calculator";

export function IdealWeightCalculatorClient({ resultCta }: { resultCta?: ReactNode }) {
  return <IdealWeightCalculator resultCta={resultCta} />;
}
