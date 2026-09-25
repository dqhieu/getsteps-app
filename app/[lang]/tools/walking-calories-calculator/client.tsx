"use client";

import type { ReactNode } from "react";
import { WalkingCaloriesCalculator } from "@/components/walking-calories-calculator";

export function WalkingCaloriesCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <WalkingCaloriesCalculator resultCta={resultCta} />;
}
