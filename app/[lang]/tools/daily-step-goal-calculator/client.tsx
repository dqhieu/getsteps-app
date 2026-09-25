"use client";

import type { ReactNode } from "react";
import { DailyStepGoalCalculator } from "@/components/daily-step-goal-calculator";

export function DailyStepGoalCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <DailyStepGoalCalculator resultCta={resultCta} />;
}
