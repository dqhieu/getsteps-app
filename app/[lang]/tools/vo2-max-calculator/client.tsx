"use client";

import { Vo2MaxCalculator } from "@/components/vo2-max-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { Vo2MaxCalculatorMessages } from "@/lib/i18n/messages/tool-pages/vo2-max-calculator/en";

export function Vo2MaxCalculatorClient({
  t,
  locale,
}: {
  t: Vo2MaxCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <Vo2MaxCalculator t={t} locale={locale} />;
}
