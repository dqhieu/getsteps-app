"use client";

import { TDEECalculator } from "@/components/tdee-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { TdeeCalculatorMessages } from "@/lib/i18n/messages/tool-pages/tdee-calculator/en";

export function TDEECalculatorClient({
  t,
  locale,
}: {
  t: TdeeCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <TDEECalculator t={t} locale={locale} />;
}
