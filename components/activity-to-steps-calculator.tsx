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
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.yourActivity}
        </h2>

        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-soft mb-3">
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
                      ? "bg-accent text-white border-accent"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover border-transparent"
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
          <label className="block text-sm font-medium text-muted-soft mb-2">
            {t.duration}
          </label>
          <div className="flex gap-2 mb-3 flex-wrap">
            {DURATION_PRESETS.map((preset) => (
              <button
                key={preset}
                onClick={() => setDuration(preset)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  duration === preset
                    ? "bg-accent text-white"
                    : "bg-surface text-muted-soft hover:bg-ghost-hover"
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
            className="w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-soft mb-2">
            {t.intensity}
          </label>
          <div className="flex rounded-lg overflow-hidden border border-border">
            {INTENSITIES.map((lvl) => (
              <button
                key={lvl}
                onClick={() => setIntensity(lvl)}
                className={`flex-1 py-2.5 text-sm font-medium transition-colors ${
                  intensity === lvl
                    ? "bg-accent text-white"
                    : "bg-surface text-muted-soft hover:bg-ghost-hover"
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
            className="flex items-center gap-2 text-sm font-medium text-muted hover:text-accent transition-colors"
          >
            <span className={`transition-transform ${showCalorieSection ? "rotate-90" : ""}`}>▶</span>
            {t.calorieToggle}
          </button>

          {showCalorieSection && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.bodyWeight}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="flex-1 py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                />
                <button
                  onClick={handleWeightUnitToggle}
                  className="py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
                >
                  {weightUnit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <p className="text-sm font-medium text-muted mb-2">
            {t.equivalentSteps}
          </p>
          <p className="text-5xl md:text-6xl font-bold text-foreground mb-1">
            {formatNumber(result.equivalentSteps, locale)}
          </p>
          <p className="text-sm text-muted mb-6">
            {interpolate(t.equivalentFor, {
              duration: formatNumber(duration, locale),
              activity: activityLabel,
            })}
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-accent/20">
            <div>
              <p className="text-xs text-muted mb-1">{t.walkingTime}</p>
              <p className="text-lg font-semibold text-foreground">
                {interpolate(t.minutes, { minutes: formatNumber(result.walkingMinutes, locale) })}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">{t.distance}</p>
              <p className="text-lg font-semibold text-foreground">
                {interpolate(t.distanceKm, {
                  distance: formatDecimal(result.distanceKm, locale, 1),
                })}
              </p>
              <p className="text-xs text-muted">
                {interpolate(t.distanceMi, {
                  distance: formatDecimal(distanceMiles, locale, 1),
                })}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">{t.calories}</p>
              <p className="text-lg font-semibold text-foreground">
                {formatNumber(result.caloriesBurned, locale)}
              </p>
              <p className="text-xs text-muted">{t.kcal}</p>
            </div>
          </div>

          <p className="text-xs text-muted mt-4">
            {t.metNote}
          </p>
        </div>
      </div>

      {resultCta}
    </div>
  );
}
