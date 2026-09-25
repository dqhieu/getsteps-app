"use client";

import type { ReactNode } from "react";
import { WaistHipRatioCalculator } from "@/components/waist-hip-ratio-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { WaistToHipRatioCalculatorMessages } from "@/lib/i18n/messages/tool-pages/waist-to-hip-ratio-calculator/en";

export function WaistHipRatioCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: WaistToHipRatioCalculatorMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <WaistHipRatioCalculator t={t} locale={locale} resultCta={resultCta} />;
}
