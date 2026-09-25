"use client";

import type { ReactNode } from "react";
import { WalkingCaloriesCalculator } from "@/components/walking-calories-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { WalkingCaloriesMessages } from "@/lib/i18n/messages/tool-pages/walking-calories-calculator/en";

export function WalkingCaloriesCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: WalkingCaloriesMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <WalkingCaloriesCalculator t={t} locale={locale} resultCta={resultCta} />;
}
