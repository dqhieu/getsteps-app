"use client";

import { DailyStepGoalCalculator } from "@/components/daily-step-goal-calculator";
import { ToolAppCta } from "@/components/tool-app-cta";
import type { Locale } from "@/lib/i18n/config";
import type { DailyStepGoalCalculatorMessages } from "@/lib/i18n/messages/tool-pages/daily-step-goal-calculator/en";

export function DailyStepGoalCalculatorClient({
  t,
  locale,
}: {
  t: Pick<DailyStepGoalCalculatorMessages, "calculator" | "resultCta">;
  locale: Locale;
}) {
  return (
    <DailyStepGoalCalculator
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
