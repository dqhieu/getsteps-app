"use client";

import { MacroCalculator } from "@/components/macro-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { MacroCalculatorMessages } from "@/lib/i18n/messages/tool-pages/macro-calculator/en";

export function MacroCalculatorClient({
  t,
  locale,
}: {
  t: MacroCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <MacroCalculator t={t} locale={locale} />;
}
