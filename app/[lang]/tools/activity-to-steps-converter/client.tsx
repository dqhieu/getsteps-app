"use client";

import type { ReactNode } from "react";
import { ActivityToStepsCalculator } from "@/components/activity-to-steps-calculator";

export function ActivityToStepsCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <ActivityToStepsCalculator resultCta={resultCta} />;
}
