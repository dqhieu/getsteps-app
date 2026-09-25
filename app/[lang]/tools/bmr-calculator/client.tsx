"use client";

import { BMRCalculator } from "@/components/bmr-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { BmrCalculatorMessages } from "@/lib/i18n/messages/tool-pages/bmr-calculator/en";

export function BMRCalculatorClient({
  t,
  locale,
}: {
  t: BmrCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <BMRCalculator t={t} locale={locale} />;
}
