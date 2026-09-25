"use client";

import type { ReactNode } from "react";
import { IdealWeightCalculator } from "@/components/ideal-weight-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { IdealWeightCalculatorMessages } from "@/lib/i18n/messages/tool-pages/ideal-weight-calculator/en";

export function IdealWeightCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: IdealWeightCalculatorMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <IdealWeightCalculator t={t} locale={locale} resultCta={resultCta} />;
}
