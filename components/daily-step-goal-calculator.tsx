"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateStepGoal,
  type ActivityLevel,
  type HealthGoal,
  type Gender,
} from "@/lib/step-goal-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import en, {
  type DailyStepGoalCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/daily-step-goal-calculator/en";

type CalculatorCopy = DailyStepGoalCalculatorMessages["calculator"];

const ACTIVITY_ORDER: ActivityLevel[] = ["sedentary", "lightly_active", "active", "very_active"];
const GOAL_ORDER: HealthGoal[] = ["maintain", "lose_weight", "improve_fitness", "train_event"];

function formatLoose(value: number, locale: Locale): string {
  return Number.isInteger(value) ? formatNumber(value, locale) : formatDecimal(value, locale, 1);
}

function stepsRange(level: ActivityLevel, locale: Locale): string {
  if (level === "sedentary") return `< ${formatNumber(5000, locale)}`;
  if (level === "lightly_active") {
    return `${formatNumber(5000, locale)} - ${formatNumber(7499, locale)}`;
  }
  if (level === "active") {
    return `${formatNumber(7500, locale)} - ${formatNumber(9999, locale)}`;
  }
  return `${formatNumber(10000, locale)}+`;
}

function buildTips(
  activityLevel: ActivityLevel,
  healthGoal: HealthGoal,
  tips: CalculatorCopy["tips"],
): string[] {
  const list: string[] = [];
  if (activityLevel === "sedentary") list.push(...tips.sedentary);
  else if (activityLevel === "lightly_active") list.push(...tips.lightlyActive);
  if (healthGoal === "lose_weight") list.push(...tips.loseWeight);
  else if (healthGoal === "improve_fitness") list.push(...tips.improveFitness);
  else if (healthGoal === "train_event") list.push(...tips.trainEvent);
  list.push(...tips.general);
  return list.slice(0, 5);
}

const DEFAULT_VALUES = {
  age: 30,
  gender: "male" as Gender,
  activityLevel: "lightly_active" as ActivityLevel,
  healthGoal: "maintain" as HealthGoal,
  currentSteps: undefined as number | undefined,
};

export function DailyStepGoalCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: CalculatorCopy;
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  // Input state
  const [age, setAge] = useState<number>(DEFAULT_VALUES.age);
  const [gender, setGender] = useState<Gender>(DEFAULT_VALUES.gender);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>(
    DEFAULT_VALUES.activityLevel
  );
  const [healthGoal, setHealthGoal] = useState<HealthGoal>(DEFAULT_VALUES.healthGoal);
  const [currentSteps, setCurrentSteps] = useState<string>("");

  // Calculate results
  const results = useMemo(() => {
    return calculateStepGoal({
      age,
      gender,
      activityLevel,
      healthGoal,
      currentSteps: currentSteps ? Number(currentSteps) : undefined,
    });
  }, [age, gender, activityLevel, healthGoal, currentSteps]);

  const tips = useMemo(
    () => buildTips(activityLevel, healthGoal, t.tips),
    [activityLevel, healthGoal, t.tips],
  );

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.yourProfile}
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Age Input */}
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.age}
              </label>
              <div className="relative">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={age}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    if (val === "") return;
                    setAge(Math.max(1, Math.min(120, Number(val))));
                  }}
                  className="w-full py-3 px-4 pr-14 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {t.years}
                </span>
              </div>
            </div>

            {/* Gender Selection */}
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.gender}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "male"
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {t.male}
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "female"
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {t.female}
                </button>
              </div>
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.activityLevel}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {ACTIVITY_ORDER.map((key) => (
                <button
                  key={key}
                  onClick={() => setActivityLevel(key)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    activityLevel === key
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  <span className="block">{t.activity[key]}</span>
                  <span
                    className={`block text-xs mt-0.5 ${
                      activityLevel === key
                        ? "text-white/80"
                        : "text-muted"
                    }`}
                  >
                    {stepsRange(key, locale)}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Health Goal */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.healthGoal}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {GOAL_ORDER.map((key) => (
                <button
                  key={key}
                  onClick={() => setHealthGoal(key)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    healthGoal === key
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {t.goals[key]}
                </button>
              ))}
            </div>
          </div>

          {/* Current Steps (Optional) */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.currentSteps}
            </label>
            <input
              type="number"
              value={currentSteps}
              onChange={(e) => setCurrentSteps(e.target.value)}
              placeholder={t.currentStepsPlaceholder}
              className="w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] placeholder:text-muted"
            />
            <p className="mt-1 text-xs text-muted">
              {t.currentStepsHint}
            </p>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted mb-4">
            {t.resultTitle}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                {interpolate(t.stepsValue, { steps: formatNumber(results.dailyGoal, locale) })}
              </p>
              <p className="text-lg text-muted mt-1">
                {t.perDay}
              </p>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-accent/20 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted">
                {t.weeklyGoal}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatNumber(results.weeklyGoal, locale)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.distancePerDay}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {interpolate(t.kmValue, { distance: formatLoose(results.distancePerDayKm, locale) })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.caloriesPerDay}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {interpolate(t.approxCalories, {
                  calories: formatNumber(results.caloriesPerDay, locale),
                })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {resultCta}

      {/* Milestones Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          {t.planTitle}
        </h2>
        <p className="text-sm text-muted mb-6">
          {t.planSubtitle}
        </p>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {results.milestones.map((milestone) => (
            <div
              key={milestone.week}
              className="bg-surface rounded-lg p-3 text-center"
            >
              <p className="text-xs text-muted mb-1">
                {interpolate(t.weekLabel, { week: formatNumber(milestone.week, locale) })}
              </p>
              <p className="text-sm font-semibold text-foreground">
                {formatNumber(milestone.steps, locale)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          {t.tipsTitle}
        </h2>

        <ul className="space-y-3">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-chip flex items-center justify-center">
                <span className="text-accent text-sm font-semibold">
                  {index + 1}
                </span>
              </span>
              <span className="text-muted-soft">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
