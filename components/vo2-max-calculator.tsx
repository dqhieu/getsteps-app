"use client";

import { useState } from "react";
import {
  calculateVO2Max,
  type Gender,
  type VO2Method,
} from "@/lib/vo2-max-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, plural } from "@/lib/i18n/format";
import type { Vo2MaxCalculatorMessages } from "@/lib/i18n/messages/tool-pages/vo2-max-calculator/en";

const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string }> = {
  green: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400", border: "border-green-300 dark:border-green-700" },
  teal: { bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-700 dark:text-teal-400", border: "border-teal-300 dark:border-teal-700" },
  blue: { bg: "bg-blue-100 dark:bg-blue-900/30", text: "text-blue-700 dark:text-blue-400", border: "border-blue-300 dark:border-blue-700" },
  yellow: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-400", border: "border-yellow-300 dark:border-yellow-700" },
  red: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-700 dark:text-red-400", border: "border-red-300 dark:border-red-700" },
};

export function Vo2MaxCalculator({
  t,
  locale = DEFAULT_LOCALE,
}: {
  t: Vo2MaxCalculatorMessages["calculator"];
  locale?: Locale;
}) {
  const [method, setMethod] = useState<VO2Method>("heart_rate");
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState(30);
  const [rhr, setRhr] = useState(60);
  const [distanceKm, setDistanceKm] = useState(2.4);
  const [distanceUnit, setDistanceUnit] = useState<"km" | "miles">("km");
  const [result, setResult] = useState<ReturnType<typeof calculateVO2Max> | null>(null);

  function handleCalculate() {
    const cooperDistanceM =
      method === "cooper"
        ? (distanceUnit === "miles" ? distanceKm * 1609.34 : distanceKm * 1000)
        : undefined;

    setResult(
      calculateVO2Max(method, gender, {
        age: method === "heart_rate" ? age : undefined,
        rhr: method === "heart_rate" ? rhr : undefined,
        cooperDistanceM,
      }),
    );
  }

  const colors = result ? COLOR_CLASSES[result.categoryColor] ?? COLOR_CLASSES.blue : null;
  const category = result ? t.categories[result.categoryId] : null;

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <div className="mb-6">
          <p className="text-sm font-medium text-muted-soft mb-2">{t.method}</p>
          <div className="flex gap-2">
            {(["heart_rate", "cooper"] as VO2Method[]).map((m) => (
              <button
                key={m}
                type="button"
                onClick={() => setMethod(m)}
                className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-colors ${
                  method === m
                    ? "bg-accent text-white"
                    : "bg-surface text-muted hover:bg-ghost-hover"
                }`}
              >
                {m === "heart_rate" ? t.heartRateMethod : t.cooperMethod}
              </button>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <p className="text-sm font-medium text-muted-soft mb-2">{t.gender}</p>
          <div className="flex gap-2 max-w-xs">
            {(["male", "female"] as Gender[]).map((g) => (
              <button
                key={g}
                type="button"
                onClick={() => setGender(g)}
                className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                  gender === g
                    ? "bg-accent text-white"
                    : "bg-surface text-muted hover:bg-ghost-hover"
                }`}
              >
                {g === "male" ? t.male : t.female}
              </button>
            ))}
          </div>
        </div>

        {method === "heart_rate" ? (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-1">
                {t.age}
              </label>
              <div className="relative max-w-xs">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-16 rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted pointer-events-none">
                  {plural(locale, age, t.years)}
                </span>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-1">
                {t.restingHeartRate}
              </label>
              <div className="relative max-w-xs">
                <input
                  type="number"
                  value={rhr}
                  onChange={(e) => setRhr(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-16 rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted pointer-events-none">
                  {t.bpm}
                </span>
              </div>
              <p className="mt-1 text-xs text-muted">{t.restingHint}</p>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-1">
              {t.distanceLabel}
            </label>
            <div className="flex gap-2 max-w-xs">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={distanceKm}
                  step={0.1}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full py-3 px-4 rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                />
              </div>
              <div className="flex gap-1">
                {(["km", "miles"] as const).map((u) => (
                  <button
                    key={u}
                    type="button"
                    onClick={() => setDistanceUnit(u)}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      distanceUnit === u
                        ? "bg-accent text-white"
                        : "bg-surface text-muted"
                    }`}
                  >
                    {u === "km" ? t.km : t.miles}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-1 text-xs text-muted">{t.distanceHint}</p>
          </div>
        )}

        <button
          type="button"
          onClick={handleCalculate}
          className="mt-6 inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]"
        >
          {t.calculate}
        </button>
      </div>

      {result && colors && category && (
        <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)] space-y-4">
          <div className="text-center py-4">
            <p className="text-sm font-medium text-muted mb-1">{t.yourEstimate}</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold text-foreground">
                {formatDecimal(result.vo2max, locale, 1)}
              </span>
              <span className="text-xl text-muted">{t.unit}</span>
            </div>
          </div>

          <div className={`rounded-xl p-4 border ${colors.bg} ${colors.border}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-lg font-bold ${colors.text}`}>{category.label}</span>
            </div>
            <p className={`text-sm ${colors.text}`}>{category.description}</p>
          </div>

          <div className="rounded-xl p-4 bg-surface border border-border">
            <p className="text-xs font-semibold text-muted uppercase tracking-wide mb-1">
              {t.improvementTip}
            </p>
            <p className="text-sm text-muted-soft">{category.tip}</p>
          </div>

          <p className="text-xs text-muted text-center pt-1">{t.disclaimer}</p>
        </div>
      )}
    </div>
  );
}
