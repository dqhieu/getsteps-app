"use client";

import type { ReactNode } from "react";
import { WaistHipRatioCalculator } from "@/components/waist-hip-ratio-calculator";

export function WaistHipRatioCalculatorClient({ resultCta }: { resultCta?: ReactNode }) {
  return <WaistHipRatioCalculator resultCta={resultCta} />;
}
