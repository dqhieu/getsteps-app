"use client";

import type { ReactNode } from "react";
import { StepsPerMileCalculator } from "@/components/steps-per-mile-calculator";

export function StepsPerMileCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <StepsPerMileCalculator resultCta={resultCta} />;
}
