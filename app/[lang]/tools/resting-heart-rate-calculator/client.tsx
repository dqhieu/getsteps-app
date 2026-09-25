"use client";

import { RestingHeartRateCalculator } from "@/components/resting-heart-rate-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { RestingHeartRateCalculatorMessages } from "@/lib/i18n/messages/tool-pages/resting-heart-rate-calculator/en";

export function RestingHeartRateCalculatorClient({
  t,
  locale,
}: {
  t: RestingHeartRateCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <RestingHeartRateCalculator t={t} locale={locale} />;
}
