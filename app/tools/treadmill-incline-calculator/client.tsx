"use client";

import type { ReactNode } from "react";
import { TreadmillInclineCalculator } from "@/components/treadmill-incline-calculator";

export function TreadmillInclineCalculatorClient({
  resultCta,
}: {
  resultCta?: ReactNode;
}) {
  return <TreadmillInclineCalculator resultCta={resultCta} />;
}
