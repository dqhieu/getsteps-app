"use client";

import { useState, type ReactNode } from "react";
import { calculateIdealWeight } from "@/lib/ideal-weight-calculator";
import type { Gender } from "@/lib/bmr-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import type { IdealWeightCalculatorMessages } from "@/lib/i18n/messages/tool-pages/ideal-weight-calculator/en";

function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }
function lbsToKg(lbs: number) { return lbs / 2.20462; }
function cmToFtIn(cm: number) { const totalIn = cm / 2.54; return { ft: Math.floor(totalIn / 12), inch: Math.round(totalIn % 12) }; }
function ftInToCm(ft: number, inch: number) { return (ft * 12 + inch) * 2.54; }

const INPUT_CLASS =
  "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";

export function IdealWeightCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: IdealWeightCalculatorMessages["calculator"];
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [gender, setGender] = useState<Gender>("male");
  const [heightCm, setHeightCm] = useState<number>(175);
  const [heightUnit, setHeightUnit] = useState<"cm" | "ftin">("cm");
  const [currentWeight, setCurrentWeight] = useState<string>("");
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [calculated, setCalculated] = useState(false);

  const currentKg =
    currentWeight.trim() === ""
      ? null
      : weightUnit === "kg"
        ? Number(currentWeight)
        : lbsToKg(Number(currentWeight));

  const result = calculateIdealWeight(gender, heightCm, currentKg);
  const { ft: displayFt, inch: displayIn } = cmToFtIn(heightCm);

  const showWeight = (kg: number) =>
    weightUnit === "kg"
      ? `${formatDecimal(kg, locale, 1)} kg`
      : `${formatNumber(kgToLbs(kg), locale)} lbs`;

  const genderLabel: Record<Gender, string> = { male: t.male, female: t.female };

  let verdict: string | null = null;
  if (result.comparison) {
    const current = result.comparison.currentWeightKg;
    if (result.comparison.withinHealthyBmiRange) {
      verdict = t.verdictWithin;
    } else if (current > result.healthyBmiRangeKg.max) {
      const delta = Math.round((current - result.healthyBmiRangeKg.max) * 10) / 10;
      verdict = interpolate(t.verdictAbove, { amount: `${formatDecimal(delta, locale, 1)} kg` });
    } else {
      const delta = Math.round((result.healthyBmiRangeKg.min - current) * 10) / 10;
      verdict = interpolate(t.verdictBelow, { amount: `${formatDecimal(delta, locale, 1)} kg` });
    }
  }

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{t.details}</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.gender}</label>
            <div className="flex gap-2">
              {(["male", "female"] as Gender[]).map((g) => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-colors ${gender === g ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {genderLabel[g]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t.height}</label>
              <div className="flex gap-1">
                {(["cm", "ftin"] as const).map((u) => (
                  <button key={u} onClick={() => setHeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${heightUnit === u ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                    {u === "ftin" ? "ft/in" : u}
                  </button>
                ))}
              </div>
            </div>
            {heightUnit === "cm" ? (
              <div className="relative max-w-xs">
                <input type="number" value={Math.round(heightCm)} onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                  className={`${INPUT_CLASS} pr-12`} />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">cm</span>
              </div>
            ) : (
              <div className="flex gap-2 max-w-xs">
                <div className="relative flex-1">
                  <input type="number" value={displayFt}
                    onChange={(e) => setHeightCm(ftInToCm(Number(e.target.value) || 0, displayIn))}
                    className={`${INPUT_CLASS} pr-10`} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">ft</span>
                </div>
                <div className="relative flex-1">
                  <input type="number" value={displayIn}
                    onChange={(e) => setHeightCm(ftInToCm(displayFt, Number(e.target.value) || 0))}
                    className={`${INPUT_CLASS} pr-10`} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">in</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {t.currentWeight} <span className="font-normal text-neutral-500 dark:text-neutral-400">{t.optional}</span>
              </label>
              <div className="flex gap-1">
                {(["kg", "lbs"] as const).map((u) => (
                  <button key={u} onClick={() => setWeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${weightUnit === u ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative max-w-xs">
              <input type="number" value={currentWeight} placeholder={weightUnit === "kg" ? t.placeholderKg : t.placeholderLbs}
                onChange={(e) => setCurrentWeight(e.target.value)}
                className={`${INPUT_CLASS} pr-14`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">{weightUnit}</span>
            </div>
          </div>

          <button onClick={() => setCalculated(true)}
            className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
            {t.calculate}
          </button>
        </div>
      </div>

      {calculated && (
        <>
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{t.results}</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl p-4 bg-[#ED772F]/10 dark:bg-[#ED772F]/20 border border-[#ED772F]/30 text-center">
                <p className="text-xs text-[#ED772F] font-medium mb-1">{t.formulaAverage}</p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">{showWeight(result.averageKg)}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {interpolate(t.range, {
                    min: showWeight(result.rangeKg.min),
                    max: showWeight(result.rangeKg.max),
                  })}
                </p>
              </div>
              <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 text-center">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.healthyBmiRange}</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {showWeight(result.healthyBmiRangeKg.min)}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {interpolate(t.to, { weight: showWeight(result.healthyBmiRangeKg.max) })}
                </p>
              </div>
            </div>

            {verdict && (
              <div className={`mb-6 rounded-xl p-4 ${result.comparison?.withinHealthyBmiRange ? "bg-green-50 dark:bg-green-900/20" : "bg-amber-50 dark:bg-amber-900/20"}`}>
                <p className={`text-sm ${result.comparison?.withinHealthyBmiRange ? "text-green-800 dark:text-green-300" : "text-amber-800 dark:text-amber-300"}`}>
                  {verdict}
                </p>
              </div>
            )}

            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">{t.fourFormulas}</p>
              <div className="space-y-2">
                {result.estimates.map((e) => (
                  <div key={e.key} className="p-3 rounded-xl bg-neutral-50 dark:bg-neutral-700/30">
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.formulas[e.key].name}</span>
                        <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">{e.year}</span>
                      </div>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">{showWeight(e.weightKg)}</span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{t.formulas[e.key].note}</p>
                  </div>
                ))}
              </div>
            </div>

            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              {t.disclaimer}
            </p>
          </div>
          {resultCta}
        </>
      )}
    </div>
  );
}
