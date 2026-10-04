"use client";

import { useState, type ReactNode } from "react";
import {
  ACTIVITIES,
  CATEGORIES,
  calculateActivityCalories,
  compareActivities,
  type ActivityCategory,
} from "@/lib/activity-calorie-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate, plural } from "@/lib/i18n/format";
import type { CaloriesBurnedMessages } from "@/lib/i18n/messages/tool-pages/calories-burned-calculator/en";

type CalculatorMessages = CaloriesBurnedMessages["calculator"];

function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }
function lbsToKg(lbs: number) { return lbs / 2.20462; }

const INPUT_CLASS =
  "w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg";

const DURATION_PRESETS = [15, 30, 45, 60, 90];

const COMPARISON_KEYS = [
  "walking-moderate",
  "walking-brisk",
  "hiking",
  "cycling-moderate",
  "swimming-freestyle",
  "jogging",
  "running-10",
  "hiit",
];

export function ActivityCalorieCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: CalculatorMessages;
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [category, setCategory] = useState<ActivityCategory>("Walking & Running");
  const [activityKey, setActivityKey] = useState<string>("walking-brisk");
  const [weightKg, setWeightKg] = useState<number>(70);
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [duration, setDuration] = useState<number>(30);
  const [calculated, setCalculated] = useState(false);

  const activitiesInCategory = ACTIVITIES.filter((a) => a.category === category);
  const activity = ACTIVITIES.find((a) => a.key === activityKey) ?? ACTIVITIES[0];
  const result = calculateActivityCalories(activity, weightKg, duration);
  const comparison = compareActivities(weightKg, duration, COMPARISON_KEYS);

  const displayWeight = weightUnit === "kg" ? Math.round(weightKg) : kgToLbs(weightKg);

  function activityName(key: string): string {
    return t.activities[key as keyof typeof t.activities] ?? key;
  }

  function handleCategoryChange(next: ActivityCategory) {
    setCategory(next);
    const first = ACTIVITIES.find((a) => a.category === next);
    if (first) setActivityKey(first.key);
  }

  const formattedDuration = formatNumber(duration, locale);
  const formattedMet = formatDecimal(activity.met, locale, 1);

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">{t.pickActivity}</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.category}</label>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((c) => (
                <button key={c} onClick={() => handleCategoryChange(c)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-colors ${category === c ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                  {t.categories[c]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="activity-select" className="block text-sm font-medium text-muted-soft mb-2">{t.activity}</label>
            <select id="activity-select" value={activityKey} onChange={(e) => setActivityKey(e.target.value)}
              className={INPUT_CLASS}>
              {activitiesInCategory.map((a) => (
                <option key={a.key} value={a.key}>
                  {interpolate(t.activityOption, {
                    name: activityName(a.key),
                    met: formatDecimal(a.met, locale, 1),
                  })}
                </option>
              ))}
            </select>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-soft">{t.yourWeight}</label>
              <div className="flex gap-1">
                {(["kg", "lbs"] as const).map((u) => (
                  <button key={u} onClick={() => setWeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${weightUnit === u ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative max-w-xs">
              <input type="number" value={displayWeight}
                onChange={(e) => {
                  const val = Number(e.target.value) || 0;
                  setWeightKg(weightUnit === "kg" ? val : lbsToKg(val));
                }}
                className={`${INPUT_CLASS} pr-14`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">{weightUnit}</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.duration}</label>
            <div className="flex flex-wrap gap-2 mb-3">
              {DURATION_PRESETS.map((d) => (
                <button key={d} onClick={() => setDuration(d)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-colors ${duration === d ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                  {interpolate(t.durationPreset, { minutes: formatNumber(d, locale) })}
                </button>
              ))}
            </div>
            <div className="relative max-w-xs">
              <input type="number" value={duration} onChange={(e) => setDuration(Number(e.target.value) || 0)}
                className={`${INPUT_CLASS} pr-16`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">{t.minutes}</span>
            </div>
          </div>

          <button onClick={() => setCalculated(true)}
            className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]">
            {t.calculate}
          </button>
        </div>
      </div>

      {calculated && (
        <>
          <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t.yourResults}</h2>

            <div className="rounded-xl p-5 bg-chip border border-accent/30 text-center mb-4">
              <p className="text-xs text-accent font-medium mb-1">{t.caloriesBurned}</p>
              <p className="text-4xl font-bold text-foreground">{formatNumber(result.grossCalories, locale)}</p>
              <p className="text-xs text-muted mt-1">
                {interpolate(t.resultMeta, {
                  activity: activityName(activity.key),
                  duration: formattedDuration,
                  met: formattedMet,
                })}
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
              <div className="rounded-xl p-3 bg-surface text-center">
                <p className="text-xs text-muted mb-1">{t.netBurn}</p>
                <p className="text-lg font-bold text-foreground">{formatNumber(result.netCalories, locale)}</p>
                <p className="text-xs text-muted">{t.aboveResting}</p>
              </div>
              <div className="rounded-xl p-3 bg-surface text-center">
                <p className="text-xs text-muted mb-1">{t.perHour}</p>
                <p className="text-lg font-bold text-foreground">{formatNumber(result.caloriesPerHour, locale)}</p>
                <p className="text-xs text-muted">{t.calories}</p>
              </div>
              <div className="rounded-xl p-3 bg-surface text-center">
                <p className="text-xs text-muted mb-1">{t.stepEquivalent}</p>
                <p className="text-lg font-bold text-foreground">{formatNumber(result.stepEquivalent, locale)}</p>
                <p className="text-xs text-muted">{t.steps}</p>
              </div>
              <div className="rounded-xl p-3 bg-surface text-center">
                <p className="text-xs text-muted mb-1">{t.bodyFat}</p>
                <p className="text-lg font-bold text-foreground">{formatNumber(result.fatGrams, locale)}</p>
                <p className="text-xs text-muted">{t.grams}</p>
              </div>
            </div>

            <p className="text-sm text-muted mb-6">
              {plural(locale, result.walkingEquivalentMinutes, t.walkingEquivalent, {
                minutes: formatNumber(result.walkingEquivalentMinutes, locale),
                steps: formatNumber(result.stepEquivalent, locale),
              })}
            </p>

            <div>
              <p className="text-sm font-medium text-muted-soft mb-3">
                {interpolate(t.comparison, { duration: formattedDuration })}
              </p>
              <div className="space-y-2">
                {comparison.map((c) => (
                  <div key={c.activity.key}
                    className={`flex items-center justify-between p-3 rounded-xl ${c.activity.key === activity.key ? "border-2 border-accent bg-accent/5 dark:bg-chip" : "bg-surface"}`}>
                    <div className="min-w-0">
                      <span className="text-sm font-medium text-foreground">{activityName(c.activity.key)}</span>
                      <p className="text-xs text-muted">{formatDecimal(c.activity.met, locale, 1)} MET</p>
                    </div>
                    <span className="text-sm font-bold text-foreground whitespace-nowrap">
                      {interpolate(t.cal, { calories: formatNumber(c.grossCalories, locale) })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {resultCta}
        </>
      )}
    </div>
  );
}
