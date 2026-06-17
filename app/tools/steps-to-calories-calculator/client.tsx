"use client";

import type { ReactNode } from "react";
import { StepsToCaloriesCalculator } from "@/components/steps-to-calories-calculator";

export function StepsToCaloriesCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <StepsToCaloriesCalculator resultCta={resultCta} />;
}
