"use client";

import { BodyFatCalculator } from "@/components/body-fat-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { BodyFatCalculatorMessages } from "@/lib/i18n/messages/tool-pages/body-fat-calculator/en";

export function BodyFatCalculatorClient({
  t,
  locale,
}: {
  t: BodyFatCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <BodyFatCalculator t={t} locale={locale} />;
}
