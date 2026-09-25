"use client";

import { CalorieDeficitCalculator } from "@/components/calorie-deficit-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { CalorieDeficitMessages } from "@/lib/i18n/messages/tool-pages/calorie-deficit-calculator/en";

export function CalorieDeficitCalculatorClient({
  t,
  locale,
}: {
  t: CalorieDeficitMessages["calculator"];
  locale: Locale;
}) {
  return <CalorieDeficitCalculator t={t} locale={locale} />;
}
