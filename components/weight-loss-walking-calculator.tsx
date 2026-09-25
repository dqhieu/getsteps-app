"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateWeightLoss,
  TIMEFRAME_OPTIONS,
  MAX_SAFE_WEEKLY_LOSS_KG,
  MAX_SAFE_DAILY_DEFICIT,
  type TimeframeOption,
} from "@/lib/weight-loss-calculator";
import { lbsToKg, kgToLbs } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate, plural } from "@/lib/i18n/format";
import { ToolAppCta } from "@/components/tool-app-cta";
import en, {
  type WeightLossWalkingMessages,
} from "@/lib/i18n/messages/tool-pages/weight-loss-walking-calculator/en";

type WeightUnit = "kg" | "lbs";
type CalculatorMessages = WeightLossWalkingMessages["calculator"];

const DEFAULT_VALUES = {
  currentWeight: 80,
  targetWeight: 75,
  timeframe: "3_months" as TimeframeOption,
  daysPerWeek: 5,
};

function formatMeasure(value: number, locale: Locale): string {
  return Number.isInteger(value)
    ? formatNumber(value, locale)
    : formatDecimal(value, locale, 1);
}

function formatWalkingTime(minutes: number, locale: Locale, t: CalculatorMessages): string {
  if (minutes >= 60) {
    const hours = Math.floor(minutes / 60);
    const mins = Math.round(minutes % 60);
    if (mins > 0) {
      return interpolate(t.hoursMinutes, {
        hours: formatNumber(hours, locale),
        minutes: formatNumber(mins, locale),
      });
    }
    return interpolate(t.hoursOnly, { hours: formatNumber(hours, locale) });
  }
  return interpolate(t.minutesOnly, { minutes: formatNumber(Math.round(minutes), locale) });
}

export function WeightLossWalkingCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: CalculatorMessages;
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  const [currentWeight, setCurrentWeight] = useState<number>(DEFAULT_VALUES.currentWeight);
  const [targetWeight, setTargetWeight] = useState<number>(DEFAULT_VALUES.targetWeight);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [timeframe, setTimeframe] = useState<TimeframeOption>(DEFAULT_VALUES.timeframe);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(DEFAULT_VALUES.daysPerWeek);

  const currentWeightKg = useMemo(
    () => (weightUnit === "kg" ? currentWeight : lbsToKg(currentWeight)),
    [currentWeight, weightUnit]
  );

  const targetWeightKg = useMemo(
    () => (weightUnit === "kg" ? targetWeight : lbsToKg(targetWeight)),
    [targetWeight, weightUnit]
  );

  const results = useMemo(() => {
    return calculateWeightLoss({
      currentWeightKg,
      targetWeightKg,
      timeframeDays: TIMEFRAME_OPTIONS[timeframe].days,
      daysPerWeek,
    });
  }, [currentWeightKg, targetWeightKg, timeframe, daysPerWeek]);

  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    if (newUnit === "lbs") {
      setCurrentWeight(Math.round(kgToLbs(currentWeight)));
      setTargetWeight(Math.round(kgToLbs(targetWeight)));
    } else {
      setCurrentWeight(Math.round(lbsToKg(currentWeight)));
      setTargetWeight(Math.round(lbsToKg(targetWeight)));
    }
    setWeightUnit(newUnit);
  };

  const formatWeightDisplay = (kg: number) => {
    if (weightUnit === "lbs") {
      return interpolate(t.weightLbs, { value: formatNumber(Math.round(kgToLbs(kg)), locale) });
    }
    return interpolate(t.weightKg, { value: formatMeasure(Math.round(kg * 10) / 10, locale) });
  };

  const weeklyLoss = results.totalWeightToLose / (TIMEFRAME_OPTIONS[timeframe].days / 7);
  let safetyText: string | null = null;
  if (!results.isSafe) {
    if (weeklyLoss > MAX_SAFE_WEEKLY_LOSS_KG) {
      safetyText = interpolate(t.warningWeekly, {
        max: formatNumber(MAX_SAFE_WEEKLY_LOSS_KG, locale),
      });
    } else if (results.dailyCalorieDeficit > MAX_SAFE_DAILY_DEFICIT) {
      safetyText = interpolate(t.warningDeficit, {
        deficit: formatNumber(results.dailyCalorieDeficit, locale),
        max: formatNumber(MAX_SAFE_DAILY_DEFICIT, locale),
      });
    }
  }

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.goal}
        </h2>

        <div className="space-y-6">
          <div className="flex justify-end">
            <button
              onClick={() => handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")}
              className="py-2 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
            >
              {interpolate(t.switchUnit, { unit: weightUnit === "kg" ? "lbs" : "kg" })}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t.currentWeight}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={currentWeight}
                  onChange={(e) => setCurrentWeight(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t.targetWeight}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) => setTargetWeight(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.timeframe}
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {(Object.keys(TIMEFRAME_OPTIONS) as TimeframeOption[]).map((key) => (
                <button
                  key={key}
                  onClick={() => setTimeframe(key)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    timeframe === key
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {t.timeframes[key]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {interpolate(t.walkingDays, { days: formatNumber(daysPerWeek, locale) })}
            </label>
            <input
              type="range"
              min={1}
              max={7}
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#ED772F]"
            />
            <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              <span>{plural(locale, 1, t.days)}</span>
              <span>{plural(locale, 7, t.days)}</span>
            </div>
          </div>
        </div>
      </div>

      {safetyText && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                {t.safetyTitle}
              </h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                {safetyText}
              </p>
            </div>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t.dailyRequirement}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {interpolate(t.stepsValue, {
                  count: formatNumber(results.walkingDailySteps, locale),
                })}
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                {interpolate(t.distancePerDay, {
                  km: formatMeasure(results.walkingDailyKm, locale),
                  miles: formatMeasure(results.walkingDailyMiles, locale),
                })}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.walkingTime}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatWalkingTime(results.walkingDailyMinutes, locale, t)}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.dailyBurn}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {interpolate(t.kcalValue, {
                  value: formatNumber(results.dailyCalorieDeficit, locale),
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.weeklyDistance}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {interpolate(t.kmValue, { value: formatMeasure(results.weeklyKm, locale) })}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.totalToLose}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatWeightDisplay(results.totalWeightToLose)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {resultCta ?? (
        <ToolAppCta
          locale={locale}
          headline={t.resultCta.headline}
          description={t.resultCta.description}
        />
      )}

      {results.milestones.length > 0 && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
            {t.progress}
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            {t.progressHint}
          </p>

          <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
            <table className="w-full min-w-[300px]">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {t.weekColumn}
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    {t.weightColumn}
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.milestones.map((milestone) => (
                  <tr
                    key={milestone.week}
                    className="border-b border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
                  >
                    <td className="py-3 px-2">
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        {interpolate(t.week, { week: formatNumber(milestone.week, locale) })}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-neutral-900 dark:text-white">
                        {formatWeightDisplay(milestone.expectedWeight)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          {t.notesTitle}
        </h2>

        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
          {t.notes.map((note) => (
            <li key={note} className="flex items-start gap-3">
              <span className="flex-shrink-0 text-[#ED772F]">•</span>
              <span>{note}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
