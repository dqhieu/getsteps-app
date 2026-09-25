"use client";

import { WalkingTimeCalculator } from "@/components/walking-time-calculator";
import { ToolAppCta } from "@/components/tool-app-cta";
import type { Locale } from "@/lib/i18n/config";
import type { WalkingTimeCalculatorMessages } from "@/lib/i18n/messages/tool-pages/walking-time-calculator/en";

export function WalkingTimeCalculatorClient({
  t,
  locale,
}: {
  t: Pick<WalkingTimeCalculatorMessages, "calculator" | "resultCta">;
  locale: Locale;
}) {
  return (
    <WalkingTimeCalculator
      t={t.calculator}
      locale={locale}
      resultCta={
        <ToolAppCta
          locale={locale}
          headline={t.resultCta.headline}
          description={t.resultCta.description}
        />
      }
    />
  );
}
