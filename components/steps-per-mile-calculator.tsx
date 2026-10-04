"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateStepLength,
  feetInchesToCm,
  cmToFeetInches,
  type Gender,
} from "@/lib/step-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";
import en, {
  type StepsPerMileCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/steps-per-mile-calculator/en";

type CalculatorCopy = StepsPerMileCalculatorMessages["calculator"];

function formatLoose(value: number, locale: Locale): string {
  return Number.isInteger(value) ? formatNumber(value, locale) : formatDecimal(value, locale, 1);
}

type HeightUnit = "cm" | "ft";

const DEFAULT_VALUES = {
  gender: "male" as Gender,
  heightCm: 170,
  heightFeet: 5,
  heightInches: 7,
};

// Common distances for reference table
const REFERENCE_DISTANCES = [1, 1.60934, 5, 8.0467, 10, 21.0975, 42.195];

export function StepsPerMileCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: CalculatorCopy;
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  // Input state
  const [gender, setGender] = useState<Gender>(DEFAULT_VALUES.gender);
  const [heightCm, setHeightCm] = useState<number>(DEFAULT_VALUES.heightCm);
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [heightFeet, setHeightFeet] = useState<number>(DEFAULT_VALUES.heightFeet);
  const [heightInches, setHeightInches] = useState<number>(DEFAULT_VALUES.heightInches);

  // Get actual height in cm
  const actualHeightCm = useMemo(
    () => (heightUnit === "cm" ? heightCm : feetInchesToCm(heightFeet, heightInches)),
    [heightCm, heightUnit, heightFeet, heightInches]
  );

  // Calculate step length
  const stepLengthCm = useMemo(() => {
    return calculateStepLength({
      gender,
      age: 30, // Default age, doesn't significantly affect step length
      heightCm: actualHeightCm,
    });
  }, [gender, actualHeightCm]);

  // Calculate steps per unit distance
  const results = useMemo(() => {
    const stepsPerKm = Math.round(100000 / stepLengthCm);
    const stepsPerMile = Math.round(stepsPerKm * 1.60934);
    const stepLengthInches = stepLengthCm / 2.54;

    return {
      stepsPerKm,
      stepsPerMile,
      stepLengthCm: Math.round(stepLengthCm * 10) / 10,
      stepLengthInches: Math.round(stepLengthInches * 10) / 10,
    };
  }, [stepLengthCm]);

  // Generate reference table
  const referenceTable = useMemo(() => {
    return REFERENCE_DISTANCES.map((km, index) => ({
      label: t.distances[index],
      steps: Math.round((km * 100000) / stepLengthCm),
    }));
  }, [stepLengthCm, t.distances]);

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
      {/* Input Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.yourInformation}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Height Input */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
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
                    className="w-full py-2 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
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
                      className="w-full py-2 px-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
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
                      className="w-full py-2 px-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                      in
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleHeightUnitChange(heightUnit === "cm" ? "ft" : "cm")}
                className="py-2 px-3 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
              </button>
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
        </div>

        {/* Step Length Display */}
        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-sm text-muted">
            {rich(t.stepLength, {
              cm: (
                <span className="font-semibold text-foreground">
                  {interpolate(t.cmUnit, {
                    value: formatLoose(results.stepLengthCm, locale),
                  })}
                </span>
              ),
              inches: (
                <span className="text-muted ml-1">
                  {interpolate(t.inchesUnit, {
                    value: formatLoose(results.stepLengthInches, locale),
                  })}
                </span>
              ),
            })}
          </p>
        </div>
      </div>

      {/* Results Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted mb-2">
                {t.stepsPerMile}
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                {formatNumber(results.stepsPerMile, locale)}
              </p>
              <p className="text-sm text-muted mt-1">
                {t.stepsUnit}
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted mb-2">
                {t.stepsPerKm}
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                {formatNumber(results.stepsPerKm, locale)}
              </p>
              <p className="text-sm text-muted mt-1">
                {t.stepsUnit}
              </p>
            </div>
          </div>
        </div>
      </div>

      {resultCta}

      {/* Reference Table */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          {t.referenceTitle}
        </h2>
        <p className="text-sm text-muted mb-6">
          {t.referenceSubtitle}
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.colDistance}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.colSteps}
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border  hover:bg-surface  transition-colors"
                >
                  <td className="py-3 px-2">
                    <span className="font-semibold text-foreground">
                      {row.label}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-foreground">
                      {formatNumber(row.steps, locale)}
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
