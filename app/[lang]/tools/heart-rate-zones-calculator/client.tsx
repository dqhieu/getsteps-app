"use client";

import { HeartRateZonesCalculator } from "@/components/heart-rate-zones-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { HeartRateZonesCalculatorMessages } from "@/lib/i18n/messages/tool-pages/heart-rate-zones-calculator/en";

export function HeartRateZonesCalculatorClient({
  t,
  locale,
}: {
  t: HeartRateZonesCalculatorMessages["calculator"];
  locale: Locale;
}) {
  return <HeartRateZonesCalculator t={t} locale={locale} />;
}
