"use client";

import type { ReactNode } from "react";
import { ActivityCalorieCalculator } from "@/components/activity-calorie-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { CaloriesBurnedMessages } from "@/lib/i18n/messages/tool-pages/calories-burned-calculator/en";

export function CaloriesBurnedCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: CaloriesBurnedMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <ActivityCalorieCalculator t={t} locale={locale} resultCta={resultCta} />;
}
