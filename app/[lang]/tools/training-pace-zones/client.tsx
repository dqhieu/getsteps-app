"use client";

import { TrainingPaceZonesCalculator } from "@/components/training-pace-zones-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPaceZonesMessages } from "@/lib/i18n/messages/tool-pages/training-pace-zones/en";

export function TrainingPaceZonesCalculatorClient({
  t,
  locale,
}: {
  t: TrainingPaceZonesMessages["calculator"];
  locale: Locale;
}) {
  return <TrainingPaceZonesCalculator t={t} locale={locale} />;
}
