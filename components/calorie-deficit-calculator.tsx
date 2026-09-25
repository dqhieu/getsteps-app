"use client";

import { useState, useMemo } from "react";
import {
  calculateCalorieDeficit,
  type Gender,
  type ActivityLevel,
} from "@/lib/calorie-deficit-calculator";
import {
  lbsToKg,
  kgToLbs,
  feetInchesToCm,
  cmToFeetInches,
} from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate } from "@/lib/i18n/format";
import en, {
  type CalorieDeficitMessages,
} from "@/lib/i18n/messages/tool-pages/calorie-deficit-calculator/en";

type WeightUnit = "kg" | "lbs";
type HeightUnit = "cm" | "ft";

const TIMEFRAME_OPTIONS = [4, 8, 12, 16, 24] as const;
const ACTIVITY_LEVELS: ActivityLevel[] = [
  "sedentary",
  "light",
  "moderate",
  "active",
  "very_active",
];
const UNSAFE_DEFICIT = 1000;

export function CalorieDeficitCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
}: {
  t?: CalorieDeficitMessages["calculator"];
  locale?: Locale;
} = {}) {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<number>(30);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [weeks, setWeeks] = useState<number>(12);

  const [weight, setWeight] = useState<number>(80);
  const [goalWeight, setGoalWeight] = useState<number>(75);

  const [heightCm, setHeightCm] = useState<number>(175);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(9);

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  const goalWeightKg = useMemo(
    () => (weightUnit === "kg" ? goalWeight : lbsToKg(goalWeight)),
    [goalWeight, weightUnit]
  );

  const actualHeightCm = useMemo(
    () =>
      heightUnit === "cm"
        ? heightCm
        : feetInchesToCm(heightFeet, heightInches),
    [heightCm, heightUnit, heightFeet, heightInches]
  );

  const result = useMemo(
    () =>
      calculateCalorieDeficit({
        gender,
        weightKg,
        heightCm: actualHeightCm,
        age,
        activityLevel,
        goalWeightKg,
        weeks,
      }),
    [gender, weightKg, actualHeightCm, age, activityLevel, goalWeightKg, weeks]
  );

  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    if (newUnit === "lbs") {
      setWeight(Math.round(kgToLbs(weight)));
      setGoalWeight(Math.round(kgToLbs(goalWeight)));
    } else {
      setWeight(Math.round(lbsToKg(weight)));
      setGoalWeight(Math.round(lbsToKg(goalWeight)));
    }
    setWeightUnit(newUnit);
  };

  const handleHeightUnitChange = (unit: HeightUnit) => {
    if (unit === heightUnit) return;
    if (unit === "ft") {
      const { feet, inches } = cmToFeetInches(heightCm);
      setHeightFeet(feet);
      setHeightInches(inches);
    } else {
      setHeightCm(Math.round(feetInchesToCm(heightFeet, heightInches)));
    }
    setHeightUnit(unit);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
            {t.details}
          </h2>

          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.gender}
            </label>
            <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              <button
                onClick={() => setGender("male")}
                className={
                  gender === "male"
                    ? "py-3 px-4 bg-[#ED772F] text-white text-sm font-medium transition-colors flex-1"
                    : "py-3 px-4 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors flex-1"
                }
              >
                {t.male}
              </button>
              <button
                onClick={() => setGender("female")}
                className={
                  gender === "female"
                    ? "py-3 px-4 bg-[#ED772F] text-white text-sm font-medium transition-colors flex-1"
                    : "py-3 px-4 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors flex-1"
                }
              >
                {t.female}
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.age}
            </label>
            <div className="relative">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {t.years}
              </span>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.currentWeight}
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
              <button
                onClick={() =>
                  handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")
                }
                className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {weightUnit === "kg" ? "lbs" : "kg"}
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.height}
            </label>
            <div className="flex gap-2">
              {heightUnit === "cm" ? (
                <div className="relative flex-1">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={heightCm}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      if (val === "") return;
                      setHeightCm(Number(val));
                    }}
                    className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                    cm
                  </span>
                </div>
              ) : (
                <div className="flex-1 flex gap-2">
                  <div className="relative flex-1">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={heightFeet}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        if (val === "") return;
                        setHeightFeet(Number(val));
                      }}
                      className="w-full py-3 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                      ft
                    </span>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="text"
                      inputMode="numeric"
                      pattern="[0-9]*"
                      value={heightInches}
                      onChange={(e) => {
                        const val = e.target.value.replace(/[^0-9]/g, "");
                        if (val === "") return;
                        setHeightInches(Number(val));
                      }}
                      className="w-full py-3 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                      in
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={() =>
                  handleHeightUnitChange(heightUnit === "cm" ? "ft" : "cm")
                }
                className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
              </button>
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.activity}
            </label>
            <div className="flex flex-wrap gap-2">
              {ACTIVITY_LEVELS.map((level) => (
                <button
                  key={level}
                  onClick={() => setActivityLevel(level)}
                  className={
                    activityLevel === level
                      ? "py-2 px-3 bg-[#ED772F] text-white text-xs font-medium rounded-lg transition-colors"
                      : "py-2 px-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-xs font-medium rounded-lg transition-colors"
                  }
                >
                  {t.activityLevels[level]}
                </button>
              ))}
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.goalWeight}
            </label>
            <div className="relative">
              <input
                type="number"
                value={goalWeight}
                onChange={(e) => setGoalWeight(Number(e.target.value))}
                className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {weightUnit}
              </span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.timeframe}
            </label>
            <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
              {TIMEFRAME_OPTIONS.map((w) => (
                <button
                  key={w}
                  onClick={() => setWeeks(w)}
                  className={
                    weeks === w
                      ? "py-2 px-3 bg-[#ED772F] text-white text-xs font-medium transition-colors flex-1"
                      : "py-2 px-3 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-xs font-medium transition-colors flex-1"
                  }
                >
                  {interpolate(t.weeks, { count: formatNumber(w, locale) })}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
            {t.plan}
          </h2>

          {result.alreadyAtGoal ? (
            <div className="rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-6 text-center">
              <p className="text-green-700 dark:text-green-400 font-medium text-lg">
                {t.atGoalTitle}
              </p>
              <p className="text-sm text-green-600 dark:text-green-500 mt-2">
                {t.atGoalBody}
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t.tdee}
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {formatNumber(result.tdee, locale)}{" "}
                  <span className="text-sm font-normal text-neutral-500">{t.calPerDay}</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t.deficit}
                </p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">
                  {formatNumber(result.dailyDeficit, locale)}{" "}
                  <span className="text-sm font-normal text-neutral-500">{t.calPerDay}</span>
                </p>
              </div>

              <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t.target}
                </p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">
                  {formatNumber(result.targetCalories, locale)}{" "}
                  <span className="text-sm font-normal text-neutral-500">{t.calPerDay}</span>
                </p>
              </div>

              <div className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4">
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {t.extraSteps}
                </p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                  {formatNumber(result.stepsToAdd, locale)}{" "}
                  <span className="text-sm font-normal text-neutral-500">{t.stepsPerDay}</span>
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">
                  {t.stepsHint}
                </p>
              </div>

              {!result.isSafe && (
                <div className="rounded-xl bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 p-4">
                  <p className="text-sm text-orange-700 dark:text-orange-400 font-medium">
                    {interpolate(t.unsafe, { max: formatNumber(UNSAFE_DEFICIT, locale) })}
                  </p>
                </div>
              )}

              {!result.isAboveMinimum && (
                <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4">
                  <p className="text-sm text-red-700 dark:text-red-400 font-medium">
                    {interpolate(t.belowMin, {
                      min: formatNumber(result.minimumCalories, locale),
                    })}
                  </p>
                </div>
              )}

              {result.isSafe && result.isAboveMinimum && (
                <div className="rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 p-4">
                  <p className="text-sm text-green-700 dark:text-green-400 font-medium">
                    {t.safe}
                  </p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
