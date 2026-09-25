"use client";

import { WaterIntakeCalculator } from "@/components/water-intake-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { WaterIntakeCalculatorMessages } from "@/lib/i18n/messages/tool-pages/water-intake-calculator/en";

export function WaterIntakeCalculatorClient({
  t,
  locale,
}: {
  t: WaterIntakeCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <WaterIntakeCalculator t={t} locale={locale} />;
}
