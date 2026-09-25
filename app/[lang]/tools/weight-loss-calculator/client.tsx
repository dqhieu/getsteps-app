"use client";

import { WeightLossPlanner } from "@/components/weight-loss-planner";
import type { Locale } from "@/lib/i18n/config";
import type { WeightLossCalculatorMessages } from "@/lib/i18n/messages/tool-pages/weight-loss-calculator/en";

export function WeightLossCalculatorClient({
  t,
  locale,
}: {
  t: WeightLossCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <WeightLossPlanner t={t} locale={locale} />;
}
