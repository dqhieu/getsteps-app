"use client";

import type { ReactNode } from "react";
import { WeightLossPlanner } from "@/components/weight-loss-planner";

export function WeightLossCalculatorClient({ resultCta }: { resultCta?: ReactNode }) {
  return <WeightLossPlanner resultCta={resultCta} />;
}
