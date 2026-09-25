"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  ACTIVITIES,
  convertActivityToSteps,
  type ActivityKey,
  type Intensity,
} from "@/lib/activity-steps-converter";
import { lbsToKg, kgToLbs, kmToMiles } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import type { ActivityToStepsMessages } from "@/lib/i18n/messages/tool-pages/activity-to-steps-converter/en";

type WeightUnit = "kg" | "lbs";
type CalculatorMessages = ActivityToStepsMessages["calculator"];

const DURATION_PRESETS = [15, 30, 45, 60, 90];
const ACTIVITY_KEYS = Object.keys(ACTIVITIES) as ActivityKey[];
const INTENSITIES: Intensity[] = ["low", "medium", "high"];

export function ActivityToStepsCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: CalculatorMessages;
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [selectedActivity, setSelectedActivity] = useState<ActivityKey>("cycling");
  const [duration, setDuration] = useState<number>(30);
  const [intensity, setIntensity] = useState<Intensity>("medium");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [weight, setWeight] = useState<number>(70);
  const [showCalorieSection, setShowCalorieSection] = useState(false);

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  const result = useMemo(
    () => convertActivityToSteps(selectedActivity, duration, intensity, weightKg),
    [selectedActivity, duration, intensity, weightKg]
  );

  const handleWeightUnitToggle = () => {
    const newUnit: WeightUnit = weightUnit === "kg" ? "lbs" : "kg";
    setWeight(
      newUnit === "lbs" ? Math.round(kgToLbs(weight)) : Math.round(lbsToKg(weight))
    );
    setWeightUnit(newUnit);
  };

  const distanceMiles = kmToMiles(result.distanceKm);
  const activityLabel = t.activities[selectedActivity];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.yourActivity}
        </h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
            {t.activityType}
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ACTIVITY_KEYS.map((key) => {
              const act = ACTIVITIES[key];
              const isActive = selectedActivity === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedActivity(key)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border ${
                    isActive
                      ? "bg-[#ED772F] text-white border-[#ED772F]"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 border-transparent"
                  }`}
                >
                  <span>{act.emoji}</span>
                  <span>{t.activities[key]}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {t.duration}
          </label>
          <div className="flex gap-2 mb-3 flex-wrap">
            {DURATION_PRESETS.map((preset) => (
              <button
                key={preset}
                onClick={() => setDuration(preset)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  duration === preset
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {formatNumber(preset, locale)}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            {t.intensity}
          </label>
          <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
            {INTENSITIES.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setIntensity(lvl)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  intensity === lvl
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {t.intensities[lvl]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <button
            onClick={() => setShowCalorieSection(!showCalorieSection)}
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
          >
            <span className={`transition-transform ${showCalorieSection ? "rotate-90" : ""}`}>▶</span>
            {t.calorieToggle}
          </button>

          {showCalorieSection && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t.bodyWeight}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="flex-1 py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <button
                  onClick={handleWeightUnitToggle}
                  className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
                >
                  {weightUnit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
            {t.equivalentSteps}
          </p>
          <p className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-1">
            {formatNumber(result.equivalentSteps, locale)}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            {interpolate(t.equivalentFor, {
              duration: formatNumber(duration, locale),
              activity: activityLabel,
            })}
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ED772F]/20">
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.walkingTime}</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {interpolate(t.minutes, { minutes: formatNumber(result.walkingMinutes, locale) })}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.distance}</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {interpolate(t.distanceKm, {
                  distance: formatDecimal(result.distanceKm, locale, 1),
                })}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {interpolate(t.distanceMi, {
                  distance: formatDecimal(distanceMiles, locale, 1),
                })}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.calories}</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {formatNumber(result.caloriesBurned, locale)}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.kcal}</p>
            </div>
          </div>

          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-4">
            {t.metNote}
          </p>
        </div>
      </div>

      {resultCta}
    </div>
  );
}
