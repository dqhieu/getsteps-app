"use client";

import type { ReactNode } from "react";
import { RuckingCalorieCalculator } from "@/components/rucking-calorie-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { RuckingCalorieCalculatorMessages } from "@/lib/i18n/messages/tool-pages/rucking-calorie-calculator/en";

export function RuckingCalorieCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: RuckingCalorieCalculatorMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <RuckingCalorieCalculator t={t} locale={locale} resultCta={resultCta} />;
}
