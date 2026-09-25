"use client";

import type { ReactNode } from "react";
import { TreadmillCalorieCalculator } from "@/components/treadmill-calorie-calculator";

export function TreadmillCalorieCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <TreadmillCalorieCalculator resultCta={resultCta} />;
}
