"use client";

import { RaceTimePredictor } from "@/components/race-time-predictor";
import type { Locale } from "@/lib/i18n/config";
import type { RaceTimePredictorMessages } from "@/lib/i18n/messages/tool-pages/race-time-predictor/en";

export function RaceTimePredictorClient({
  t,
  locale,
}: {
  t: RaceTimePredictorMessages["calculator"];
  locale: Locale;
}) {
  return <RaceTimePredictor t={t} locale={locale} />;
}
