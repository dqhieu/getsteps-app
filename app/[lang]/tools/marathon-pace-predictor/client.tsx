"use client";

import { MarathonRacePredictor } from "@/components/marathon-race-predictor";
import type { Locale } from "@/lib/i18n/config";
import type { MarathonPacePredictorMessages } from "@/lib/i18n/messages/tool-pages/marathon-pace-predictor/en";

export function MarathonRacePredictorClient({
  t,
  locale,
}: {
  t: MarathonPacePredictorMessages["calculator"];
  locale: Locale;
}) {
  return <MarathonRacePredictor t={t} locale={locale} />;
}
