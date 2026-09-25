"use client";

import type { ReactNode } from "react";
import { WeightLossWalkingCalculator } from "@/components/weight-loss-walking-calculator";

export function WeightLossWalkingCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <WeightLossWalkingCalculator resultCta={resultCta} />;
}
