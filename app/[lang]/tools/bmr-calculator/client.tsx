"use client";

import type { ReactNode } from "react";
import { BMRCalculator } from "@/components/bmr-calculator";

export function BMRCalculatorClient({ resultCta }: { resultCta?: ReactNode }) {
  return <BMRCalculator resultCta={resultCta} />;
}
