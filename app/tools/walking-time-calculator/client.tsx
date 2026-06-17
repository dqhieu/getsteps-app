"use client";

import type { ReactNode } from "react";
import { WalkingTimeCalculator } from "@/components/walking-time-calculator";

export function WalkingTimeCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <WalkingTimeCalculator resultCta={resultCta} />;
}
