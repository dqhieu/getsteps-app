"use client";

import type { ReactNode } from "react";
import { ActivityToStepsCalculator } from "@/components/activity-to-steps-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { ActivityToStepsMessages } from "@/lib/i18n/messages/tool-pages/activity-to-steps-converter/en";

export function ActivityToStepsCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: ActivityToStepsMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <ActivityToStepsCalculator t={t} locale={locale} resultCta={resultCta} />;
}
