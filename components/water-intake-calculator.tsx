"use client";

import { useMemo, useState } from "react";
import {
  calculateWaterIntake,
  type ActivityLevel,
  type Climate,
} from "@/lib/water-intake-calculator";
import { kgToLbs, lbsToKg } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber } from "@/lib/i18n/format";
import type { WaterIntakeCalculatorMessages } from "@/lib/i18n/messages/tool-pages/water-intake-calculator/en";

type WeightUnit = "kg" | "lbs";
type CalculatorCopy = WaterIntakeCalculatorMessages["calculator"];

const ACTIVITY_LEVELS: ActivityLevel[] = ["sedentary", "moderate", "active", "very_active"];

export function WaterIntakeCalculator({
  t,
  locale = DEFAULT_LOCALE,
}: {
  t: CalculatorCopy;
  locale?: Locale;
}) {
  const [weight, setWeight] = useState<number>(70);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [climate, setClimate] = useState<Climate>("temperate");

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit],
  );

  const result = useMemo(
    () => calculateWaterIntake(weightKg, activity, climate),
    [weightKg, activity, climate],
  );

  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    if (newUnit === "lbs") {
      setWeight(Math.round(kgToLbs(weight)));
    } else {
      setWeight(Math.round(lbsToKg(weight)));
    }
    setWeightUnit(newUnit);
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.yourDetails}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.bodyWeight}
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-600">
                {(["kg", "lbs"] as WeightUnit[]).map((unit) => (
                  <button
                    key={unit}
                    onClick={() => handleWeightUnitChange(unit)}
                    className={`py-3 px-4 text-sm font-medium transition-colors ${
                      weightUnit === unit
                        ? "bg-[#ED772F] text-white"
                        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    }`}
                  >
                    {unit}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.activityLevel}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {ACTIVITY_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setActivity(level)}
                  className={`py-3 px-3 rounded-lg text-sm font-medium transition-colors text-center ${
                    activity === level
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {t.activities[level]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.climate}
            </label>
            <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-600 w-fit">
              {(["temperate", "hot"] as Climate[]).map((c) => (
                <button
                  key={c}
                  onClick={() => setClimate(c)}
                  className={`py-3 px-6 text-sm font-medium transition-colors ${
                    climate === c
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {t.climates[c]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
            {t.dailyIntake}
          </h3>

          <div className="flex items-baseline gap-3 mb-6">
            <p className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
              {formatDecimal(result.liters, locale, 1)}
            </p>
            <span className="text-2xl font-semibold text-neutral-500 dark:text-neutral-400">
              {t.perDay}
            </span>
          </div>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ED772F]/20">
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(Math.round(result.ounces), locale)}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{t.ozPerDay}</p>
            </div>
            <div className="text-center border-x border-[#ED772F]/20">
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {formatDecimal(result.cups, locale, 1)}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">{t.cupsPerDay}</p>
            </div>
            <div className="text-center">
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(Math.round(result.glasses), locale)}
              </p>
              <p className="text-xs text-neutral-600 dark:text-neutral-400 mt-1">
                {t.glassesPerDay}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-700/30 border border-neutral-200 dark:border-neutral-600/50">
          <p className="text-xs font-semibold text-[#ED772F] uppercase tracking-wide mb-1">
            {t.tipLabel}
          </p>
          <p className="text-sm text-neutral-700 dark:text-neutral-300">{t.tips[activity]}</p>
        </div>
      </div>
    </div>
  );
}
