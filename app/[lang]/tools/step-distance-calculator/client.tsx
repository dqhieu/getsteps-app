"use client";

import { StepCalculator } from "@/components/step-calculator";
import { ToolAppCta } from "@/components/tool-app-cta";
import type { Locale } from "@/lib/i18n/config";
import type { StepDistanceCalculatorMessages } from "@/lib/i18n/messages/tool-pages/step-distance-calculator/en";

export function StepDistanceCalculatorClient({
  t,
  locale,
}: {
  t: Pick<StepDistanceCalculatorMessages, "calculator" | "resultCta">;
  locale: Locale;
}) {
  return (
    <StepCalculator
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
