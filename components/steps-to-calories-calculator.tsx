"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateCaloriesFromSteps,
  getFoodEquivalents,
  generateStepsCaloriesTable,
  estimateDurationFromSteps,
  estimateDistanceFromSteps,
} from "@/lib/calorie-calculator";
import { calculateStepLength, type Gender } from "@/lib/step-calculator";
import { lbsToKg, kgToLbs, formatTime } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate, plural } from "@/lib/i18n/format";
import type { StepsToCaloriesMessages } from "@/lib/i18n/messages/tool-pages/steps-to-calories-calculator/en";

type WeightUnit = "kg" | "lbs";
type CalculatorMessages = StepsToCaloriesMessages["calculator"];

const FOOD_EMOJIS: Record<string, string> = {
  Banana: "🍌",
  Apple: "🍎",
  "Slice of bread": "🍞",
  Egg: "🥚",
  "Cup of rice": "🍚",
  "Chocolate bar": "🍫",
  "Slice of pizza": "🍕",
  Cheeseburger: "🍔",
};

const DEFAULT_VALUES = {
  steps: 10000,
  weightKg: 70,
  gender: "male" as Gender,
  age: 30,
  heightCm: 170,
};

export function StepsToCaloriesCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: CalculatorMessages;
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [steps, setSteps] = useState<number>(DEFAULT_VALUES.steps);
  const [weight, setWeight] = useState<number>(DEFAULT_VALUES.weightKg);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [gender, setGender] = useState<Gender>(DEFAULT_VALUES.gender);
  const [age, setAge] = useState<number>(DEFAULT_VALUES.age);

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  const stepLengthCm = useMemo(() => {
    return calculateStepLength({
      gender,
      age,
      heightCm: DEFAULT_VALUES.heightCm,
    });
  }, [gender, age]);

  const results = useMemo(() => {
    const calories = calculateCaloriesFromSteps(steps, weightKg);
    const distanceKm = estimateDistanceFromSteps(steps, stepLengthCm);
    const distanceMiles = distanceKm * 0.621371;
    const walkingMinutes = estimateDurationFromSteps(steps);
    const foodEquivalents = getFoodEquivalents(calories);

    return {
      calories: Math.round(calories),
      distanceKm: Math.round(distanceKm * 100) / 100,
      distanceMiles: Math.round(distanceMiles * 100) / 100,
      walkingMinutes,
      foodEquivalents,
    };
  }, [steps, weightKg, stepLengthCm]);

  const referenceTable = useMemo(
    () => generateStepsCaloriesTable(weightKg),
    [weightKg]
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

  const foodName = (food: string) =>
    t.foods[food as keyof typeof t.foods] ?? food;

  return (
    <div className="space-y-8">
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.yourInformation}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.steps}
            </label>
            <input
              type="number"
              value={steps}
              onChange={(e) => setSteps(Number(e.target.value))}
              className="w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
              placeholder={t.stepsPlaceholder}
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.weight}
              </label>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(Number(e.target.value))}
                    className="w-full py-2 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                    {weightUnit}
                  </span>
                </div>
                <button
                  onClick={() => handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")}
                  className="py-2 px-3 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
                >
                  {weightUnit === "kg" ? "lbs" : "kg"}
                </button>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.gender}
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => setGender("male")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "male"
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {t.male}
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "female"
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {t.female}
                </button>
              </div>
            </div>

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
                  className="w-full py-2 px-4 pr-14 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {t.years}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted mb-4">
            {t.caloriesBurned}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                {formatNumber(results.calories, locale)} kcal
              </p>
              <p className="text-lg text-muted mt-1">
                {plural(locale, steps, t.fromSteps, {
                  steps: formatNumber(steps, locale),
                })}
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-accent/20 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-muted">
                {t.distanceWalked}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {interpolate(t.distanceKm, {
                  distance: formatNumber(results.distanceKm, locale, {
                    maximumFractionDigits: 2,
                  }),
                })}
              </p>
              <p className="text-sm text-muted">
                {interpolate(t.distanceMiles, {
                  miles: formatNumber(results.distanceMiles, locale, {
                    maximumFractionDigits: 2,
                  }),
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.walkingTime}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatTime(results.walkingMinutes)}
              </p>
            </div>
          </div>
        </div>

        {results.foodEquivalents.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-muted-soft mb-3">
              {t.equivalentTo}
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {results.foodEquivalents.map((item) => (
                <div
                  key={item.food}
                  className="bg-surface rounded-lg p-3 text-center"
                >
                  <p className="text-2xl mb-1">{FOOD_EMOJIS[item.food] || "🍽️"}</p>
                  <p className="text-lg font-semibold text-foreground">
                    {item.amount === "½"
                      ? item.amount
                      : formatNumber(Number(item.amount), locale, {
                          minimumFractionDigits: 1,
                          maximumFractionDigits: 1,
                        })}
                  </p>
                  <p className="text-sm text-muted">
                    {foodName(item.food)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {resultCta}

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          {t.referenceTitle}
        </h2>
        <p className="text-sm text-muted mb-6">
          {interpolate(t.referenceIntro, {
            weight: formatNumber(weight, locale),
            unit: weightUnit,
          })}
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.steps}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.calories}
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row) => (
                <tr
                  key={row.steps}
                  className="border-b border-border  hover:bg-surface  transition-colors"
                >
                  <td className="py-3 px-2">
                    <span className="font-semibold text-foreground">
                      {formatNumber(row.steps, locale)}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-foreground">
                      {interpolate(t.kcal, {
                        calories: formatNumber(row.calories, locale),
                      })}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
