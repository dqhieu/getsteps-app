"use client";

import type { ReactNode } from "react";
import { TreadmillInclineCalculator } from "@/components/treadmill-incline-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { TreadmillInclineCalculatorMessages } from "@/lib/i18n/messages/tool-pages/treadmill-incline-calculator/en";

export function TreadmillInclineCalculatorClient({
  t,
  locale,
  resultCta,
}: {
  t: TreadmillInclineCalculatorMessages["calculator"];
  locale: Locale;
  resultCta?: ReactNode;
}) {
  return <TreadmillInclineCalculator t={t} locale={locale} resultCta={resultCta} />;
}
