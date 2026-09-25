"use client";

import { RunningPaceCalculator } from "@/components/running-pace-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { RunningPaceCalculatorMessages } from "@/lib/i18n/messages/tool-pages/running-pace-calculator/en";

export function RunningPaceCalculatorClient({
  t,
  locale,
}: {
  t: RunningPaceCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <RunningPaceCalculator t={t} locale={locale} />;
}
