"use client";

import type { ReactNode } from "react";
import { ActivityCalorieCalculator } from "@/components/activity-calorie-calculator";

export function CaloriesBurnedCalculatorClient({ resultCta }: { resultCta?: ReactNode }) {
  return <ActivityCalorieCalculator resultCta={resultCta} />;
}
