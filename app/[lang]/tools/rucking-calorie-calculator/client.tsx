"use client";

import type { ReactNode } from "react";
import { RuckingCalorieCalculator } from "@/components/rucking-calorie-calculator";

export function RuckingCalorieCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <RuckingCalorieCalculator resultCta={resultCta} />;
}
