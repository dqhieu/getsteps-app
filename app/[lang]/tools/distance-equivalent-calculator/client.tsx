"use client";

import { DistanceEquivalentCalculator } from "@/components/distance-equivalent-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { DistanceEquivalentCalculatorMessages } from "@/lib/i18n/messages/tool-pages/distance-equivalent-calculator/en";

export function DistanceEquivalentCalculatorClient({
  t,
  locale,
}: {
  t: DistanceEquivalentCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <DistanceEquivalentCalculator t={t} locale={locale} />;
}
