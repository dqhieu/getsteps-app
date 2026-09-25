"use client";

import type { ReactNode } from "react";
import { TreadmillCalorieCalculator } from "@/components/treadmill-calorie-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { TreadmillCalorieCalculatorMessages } from "@/lib/i18n/messages/tool-pages/treadmill-calorie-calculator/en";

export function TreadmillCalorieCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: TreadmillCalorieCalculatorMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <TreadmillCalorieCalculator t={t} locale={locale} resultCta={resultCta} />;
}
