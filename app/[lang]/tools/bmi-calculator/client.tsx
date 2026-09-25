"use client";

import { BMICalculator } from "@/components/bmi-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { BmiCalculatorMessages } from "@/lib/i18n/messages/tool-pages/bmi-calculator/en";

export function BMICalculatorClient({
  t,
  locale,
}: {
  t: BmiCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <BMICalculator t={t} locale={locale} />;
}
