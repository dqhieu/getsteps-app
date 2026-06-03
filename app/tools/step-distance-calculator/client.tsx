"use client";

import type { ReactNode } from "react";
import { StepCalculator } from "@/components/step-calculator";

export function StepDistanceCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <StepCalculator resultCta={resultCta} />;
}
