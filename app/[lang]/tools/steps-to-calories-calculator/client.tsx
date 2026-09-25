"use client";

import type { ReactNode } from "react";
import { StepsToCaloriesCalculator } from "@/components/steps-to-calories-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { StepsToCaloriesMessages } from "@/lib/i18n/messages/tool-pages/steps-to-calories-calculator/en";

export function StepsToCaloriesCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: StepsToCaloriesMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <StepsToCaloriesCalculator t={t} locale={locale} resultCta={resultCta} />;
}
