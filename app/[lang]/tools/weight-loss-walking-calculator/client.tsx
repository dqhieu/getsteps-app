"use client";

import { WeightLossWalkingCalculator } from "@/components/weight-loss-walking-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { WeightLossWalkingMessages } from "@/lib/i18n/messages/tool-pages/weight-loss-walking-calculator/en";

export function WeightLossWalkingCalculatorClient({
  t,
  locale,
}: {
  t: WeightLossWalkingMessages["calculator"];
  locale: Locale;
}) {
  return <WeightLossWalkingCalculator t={t} locale={locale} />;
}
