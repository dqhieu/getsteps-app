"use client";

import { StepsPerMileCalculator } from "@/components/steps-per-mile-calculator";
import { ToolAppCta } from "@/components/tool-app-cta";
import type { Locale } from "@/lib/i18n/config";
import type { StepsPerMileCalculatorMessages } from "@/lib/i18n/messages/tool-pages/steps-per-mile-calculator/en";

export function StepsPerMileCalculatorClient({
  t,
  locale,
}: {
  t: Pick<StepsPerMileCalculatorMessages, "calculator" | "resultCta">;
  locale: Locale;
}) {
  return (
    <StepsPerMileCalculator
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
