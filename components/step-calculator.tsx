"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  type Gender,
  type UserProfile,
  type CalculationResult,
  calculateFromSteps,
  calculateFromDistance,
  calculateStepLength,
  generateReferenceTable,
  milesToKm,
  feetInchesToCm,
  cmToFeetInches,
} from "@/lib/step-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";
import en, {
  type StepDistanceCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/step-distance-calculator/en";

type CalculatorCopy = StepDistanceCalculatorMessages["calculator"];

function formatDistanceAmount(distance: number, locale: Locale): string {
  return formatDecimal(distance, locale, distance < 1 ? 2 : 1);
}

function formatWalkDuration(minutes: number, t: CalculatorCopy, locale: Locale): string {
  if (minutes >= 60) {
    return interpolate(t.hoursMinutes, {
      hours: formatNumber(Math.floor(minutes / 60), locale),
      minutes: formatNumber(minutes % 60, locale),
    });
  }
  return interpolate(t.minutesOnly, { minutes: formatNumber(minutes, locale) });
}

type CalculationMode = "steps-to-distance" | "distance-to-steps";
type DistanceUnit = "km" | "miles";
type HeightUnit = "cm" | "ft";

const DEFAULT_PROFILE: UserProfile = {
  gender: "male",
  age: 30,
  heightCm: 170,
};

export function StepCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: CalculatorCopy;
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  // User profile state
  const [gender, setGender] = useState<Gender>(DEFAULT_PROFILE.gender);
  const [age, setAge] = useState<number>(DEFAULT_PROFILE.age);
  const [heightCm, setHeightCm] = useState<number>(DEFAULT_PROFILE.heightCm);
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");

  // For imperial height input
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(7);

  // Calculation mode and input
  const [mode, setMode] = useState<CalculationMode>("steps-to-distance");
  const [steps, setSteps] = useState<number>(10000);
  const [distance, setDistance] = useState<number>(5);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");

  // Build user profile
  const profile: UserProfile = useMemo(
    () => ({
      gender,
      age,
      heightCm:
        heightUnit === "cm" ? heightCm : feetInchesToCm(heightFeet, heightInches),
    }),
    [gender, age, heightCm, heightUnit, heightFeet, heightInches]
  );

  // Calculate step length
  const stepLength = useMemo(() => calculateStepLength(profile), [profile]);

  // Calculate result based on mode
  const result: CalculationResult = useMemo(() => {
    if (mode === "steps-to-distance") {
      return calculateFromSteps(steps, profile);
    } else {
      const distanceKm =
        distanceUnit === "km" ? distance : milesToKm(distance);
      return calculateFromDistance(distanceKm, profile);
    }
  }, [mode, steps, distance, distanceUnit, profile]);

  // Handle height unit toggle
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
    <div className="space-y-8">
      {/* User Information Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.yourInformation}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Gender Selection */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.gender}
            </label>
            <div className="flex gap-2">
              <button
                onClick={() => setGender("male")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  gender === "male"
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {t.male}
              </button>
              <button
                onClick={() => setGender("female")}
                className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                  gender === "female"
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {t.female}
              </button>
            </div>
          </div>

          {/* Age Input */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
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
                onBlur={(e) => {
                  const val = Number(e.target.value) || 1;
                  setAge(Math.max(1, Math.min(120, val)));
                }}
                className="w-full py-2 px-4 pr-14 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {t.years}
              </span>
            </div>
          </div>

          {/* Height Input */}
          <div>
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
                    className="w-full py-2 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
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
                      className="w-full py-2 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
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
                      className="w-full py-2 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
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
                className="py-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
              </button>
            </div>
          </div>
        </div>

        {/* Step Length Display */}
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {rich(t.stepLength, {
              cm: (
                <span className="font-semibold text-neutral-900 dark:text-white">
                  {interpolate(t.cmUnit, { value: formatDecimal(stepLength, locale, 1) })}
                </span>
              ),
              inches: (
                <span className="text-neutral-500 dark:text-neutral-500 ml-1">
                  {interpolate(t.inchesUnit, {
                    value: formatDecimal(stepLength / 2.54, locale, 1),
                  })}
                </span>
              ),
            })}
          </p>
        </div>
      </div>

      {/* Calculator Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        {/* Mode Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("steps-to-distance")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "steps-to-distance"
                ? "bg-[#ED772F] text-white"
                : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            }`}
          >
            {t.stepsToDistance}
          </button>
          <button
            onClick={() => setMode("distance-to-steps")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "distance-to-steps"
                ? "bg-[#ED772F] text-white"
                : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            }`}
          >
            {t.distanceToSteps}
          </button>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          {mode === "steps-to-distance" ? (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t.numberOfSteps}
              </label>
              <input
                type="number"
                value={steps}
                onChange={(e) =>
                  setSteps(Number(e.target.value))
                }
                className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                placeholder={t.stepsPlaceholder}
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                {t.distance}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  step={0.1}
                  className="flex-1 py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                  placeholder={t.distancePlaceholder}
                />
                <select
                  value={distanceUnit}
                  onChange={(e) =>
                    setDistanceUnit(e.target.value as DistanceUnit)
                  }
                  className="py-3 pl-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent appearance-none bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23737373%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"
                >
                  <option value="km">km</option>
                  <option value="miles">{t.miles}</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Result Section */}
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            {t.result}
          </h3>

          {mode === "steps-to-distance" ? (
            <div className="space-y-4">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                  {interpolate(t.kmValue, {
                    distance: formatDistanceAmount(result.distanceKm, locale),
                  })}
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                  {interpolate(t.milesParen, {
                    distance: formatDistanceAmount(result.distanceMiles, locale),
                  })}
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {interpolate(t.stepsValue, { steps: formatNumber(result.steps, locale) })}
              </p>
            </div>
          )}

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.estimatedCalories}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {interpolate(t.kcalValue, {
                  calories: formatNumber(result.caloriesBurned, locale),
                })}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {t.walkingTime}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatWalkDuration(result.walkingTimeMinutes, t, locale)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {resultCta}

      {/* Reference Table */}
      <ReferenceTable profile={profile} t={t} locale={locale} />
    </div>
  );
}

function ReferenceTable({
  profile,
  t,
  locale,
}: {
  profile: UserProfile;
  t: CalculatorCopy;
  locale: Locale;
}) {
  const tableData = useMemo(() => generateReferenceTable(profile), [profile]);

  return (
    <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        {t.referenceTitle}
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
        {t.referenceSubtitle}
      </p>

      <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-700">
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {t.colSteps}
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {t.colDistance}
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {t.colCalories}
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                {t.colTime}
              </th>
            </tr>
          </thead>
          <tbody>
            {tableData.map((row) => (
              <tr
                key={row.steps}
                className="border-b border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
              >
                <td className="py-3 px-2">
                  <span className="font-semibold text-neutral-900 dark:text-white">
                    {formatNumber(row.steps, locale)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {interpolate(t.kmValue, {
                      distance: formatDistanceAmount(row.distanceKm, locale),
                    })}
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-500 text-sm ml-1 hidden sm:inline">
                    {interpolate(t.miParen, {
                      distance: formatDistanceAmount(row.distanceMiles, locale),
                    })}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {formatNumber(row.caloriesBurned, locale)}
                  </span>
                  <span className="hidden sm:inline">{t.kcalSuffix}</span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {formatWalkDuration(row.walkingTimeMinutes, t, locale)}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
