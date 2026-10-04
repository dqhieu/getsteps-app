"use client";

import { useState, useMemo } from "react";
import {
  calculateBodyFat,
  getBodyFatCategory,
  getBodyFatCategoryInfo,
  type Gender,
} from "@/lib/body-fat-calculator";
import {
  lbsToKg,
  kgToLbs,
  feetInchesToCm,
  cmToFeetInches,
  cmToInches,
  inchesToCm,
} from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import en, { type BodyFatCalculatorMessages } from "@/lib/i18n/messages/tool-pages/body-fat-calculator/en";

type WeightUnit = "kg" | "lbs";
type HeightUnit = "cm" | "ft";
type MeasurementUnit = "cm" | "in";

export function BodyFatCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
}: {
  t?: BodyFatCalculatorMessages["calculator"];
  locale?: Locale;
} = {}) {
  const [gender, setGender] = useState<Gender>("male");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [measUnit, setMeasUnit] = useState<MeasurementUnit>("cm");

  // Weight
  const [weight, setWeight] = useState<number>(70);

  // Height
  const [heightCm, setHeightCm] = useState<number>(170);
  const [heightFeet, setHeightFeet] = useState<number>(5);
  const [heightInches, setHeightInches] = useState<number>(7);

  // Measurements (stored internally in cm)
  const [waistCm, setWaistCm] = useState<number>(80);
  const [neckCm, setNeckCm] = useState<number>(38);
  const [hipCm, setHipCm] = useState<number>(95);

  // Display values (in selected unit)
  const waistDisplay = useMemo(
    () => (measUnit === "cm" ? waistCm : Math.round(cmToInches(waistCm) * 10) / 10),
    [waistCm, measUnit]
  );
  const neckDisplay = useMemo(
    () => (measUnit === "cm" ? neckCm : Math.round(cmToInches(neckCm) * 10) / 10),
    [neckCm, measUnit]
  );
  const hipDisplay = useMemo(
    () => (measUnit === "cm" ? hipCm : Math.round(cmToInches(hipCm) * 10) / 10),
    [hipCm, measUnit]
  );

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  const actualHeightCm = useMemo(
    () =>
      heightUnit === "cm" ? heightCm : feetInchesToCm(heightFeet, heightInches),
    [heightCm, heightUnit, heightFeet, heightInches]
  );

  const result = useMemo(
    () =>
      calculateBodyFat(
        gender,
        actualHeightCm,
        weightKg,
        waistCm,
        neckCm,
        gender === "female" ? hipCm : undefined
      ),
    [gender, actualHeightCm, weightKg, waistCm, neckCm, hipCm]
  );

  const categoryInfo = useMemo(() => getBodyFatCategoryInfo(gender), [gender]);

  // Scale position: map 0–50% BF to 0–100%
  const scalePosition = useMemo(() => {
    const clamped = Math.max(0, Math.min(1, result.bodyFatPercent));
    return (clamped / 50) * 100;
  }, [result.bodyFatPercent]);

  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    setWeight(
      newUnit === "lbs"
        ? Math.round(kgToLbs(weight))
        : Math.round(lbsToKg(weight))
    );
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

  const handleMeasUnitChange = (unit: MeasurementUnit) => {
    if (unit === measUnit) return;
    setMeasUnit(unit);
    // Values stay in cm internally, display converts
  };

  const handleMeasInput = (
    rawValue: string,
    setter: (v: number) => void
  ) => {
    const val = parseFloat(rawValue);
    if (isNaN(val) || val <= 0) return;
    setter(measUnit === "cm" ? val : inchesToCm(val));
  };

  const formatMass = (kg: number) => {
    const amount = weightUnit === "kg" ? kg : Math.round(kgToLbs(kg) * 10) / 10;
    return interpolate(weightUnit === "kg" ? t.massKg : t.massLbs, {
      value: formatNumber(amount, locale, { maximumFractionDigits: 1 }),
    });
  };

  const fatMassDisplay = formatMass(result.fatMassKg);
  const leanMassDisplay = formatMass(result.leanMassKg);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.measurements}
        </h2>

        {/* Gender Toggle */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-muted-soft mb-2">
            {t.gender}
          </label>
          <div className="flex rounded-lg overflow-hidden border border-border">
            <button
              onClick={() => setGender("male")}
              className={
                gender === "male"
                  ? "py-3 px-4 bg-accent text-white text-sm font-medium transition-colors flex-1"
                  : "py-3 px-4 bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors flex-1"
              }
            >
              {t.male}
            </button>
            <button
              onClick={() => setGender("female")}
              className={
                gender === "female"
                  ? "py-3 px-4 bg-accent text-white text-sm font-medium transition-colors flex-1"
                  : "py-3 px-4 bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors flex-1"
              }
            >
              {t.female}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Height */}
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
                    className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
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
                      className="w-full py-3 px-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
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
                      className="w-full py-3 px-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                      in
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleHeightUnitChange(heightUnit === "cm" ? "ft" : "cm")}
                className="py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
              </button>
            </div>
          </div>

          {/* Weight */}
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
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              <button
                onClick={() =>
                  handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")
                }
                className="py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
              >
                {weightUnit === "kg" ? "lbs" : "kg"}
              </button>
            </div>
          </div>
        </div>

        {/* Measurement unit toggle */}
        <div className="mt-6 mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-muted-soft">
            {t.circumferenceUnit}
          </span>
          <div className="flex rounded-lg overflow-hidden border border-border">
            <button
              onClick={() => handleMeasUnitChange("cm")}
              className={
                measUnit === "cm"
                  ? "py-2 px-4 bg-accent text-white text-sm font-medium transition-colors"
                  : "py-2 px-4 bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
              }
            >
              cm
            </button>
            <button
              onClick={() => handleMeasUnitChange("in")}
              className={
                measUnit === "in"
                  ? "py-2 px-4 bg-accent text-white text-sm font-medium transition-colors"
                  : "py-2 px-4 bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
              }
            >
              in
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Waist */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.waist}
            </label>
            <div className="relative">
              <input
                type="number"
                value={waistDisplay}
                onChange={(e) => handleMeasInput(e.target.value, setWaistCm)}
                className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                {measUnit}
              </span>
            </div>
          </div>

          {/* Neck */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.neck}
            </label>
            <div className="relative">
              <input
                type="number"
                value={neckDisplay}
                onChange={(e) => handleMeasInput(e.target.value, setNeckCm)}
                className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                {measUnit}
              </span>
            </div>
          </div>

          {/* Hip (female only) */}
          {gender === "female" && (
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.hip}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={hipDisplay}
                  onChange={(e) => handleMeasInput(e.target.value, setHipCm)}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {measUnit}
                </span>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-muted">
          {t.measurementHint}
        </p>
      </div>

      {/* Results Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        {!result.isValid ? (
          <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 text-center">
            <p className="text-red-700 dark:text-red-400 font-medium">
              {t.invalidTitle}
            </p>
            <p className="text-sm text-red-600 dark:text-red-500 mt-1">
              {t.invalidDetail}
            </p>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
            <h3 className="text-sm font-medium text-muted mb-4">
              {t.yourBodyFat}
            </h3>

            <div className="flex items-baseline gap-4 mb-4">
              <p className="text-5xl md:text-6xl font-bold text-foreground">
                {interpolate(t.percent, {
                  value: formatDecimal(result.bodyFatPercent, locale, 1),
                })}
              </p>
              <span
                className="text-lg font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${result.categoryColor}20`,
                  color: result.categoryColor,
                }}
              >
                {t.categories[result.category]}
              </span>
            </div>

            {/* Body Fat Scale */}
            <div className="mt-6">
              <div className="relative h-4 rounded-full overflow-hidden flex">
                <div className="flex-1 bg-blue-500" />
                <div className="flex-[1.4] bg-green-500" />
                <div className="flex-[0.8] bg-yellow-500" />
                <div className="flex-[1.4] bg-accent" />
                <div className="flex-[1.4] bg-red-500" />
              </div>
              {/* Indicator */}
              <div className="relative h-0">
                <div
                  className="absolute -top-6 transform -translate-x-1/2"
                  style={{ left: `${scalePosition}%` }}
                >
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-foreground" />
                </div>
              </div>
              {/* Scale labels */}
              <div className="flex justify-between mt-3 text-xs text-muted">
                <span>0%</span>
                <span>10%</span>
                <span>20%</span>
                <span>30%</span>
                <span>40%</span>
                <span>50%+</span>
              </div>
            </div>

            {/* Fat / Lean Mass */}
            <div className="mt-6 pt-6 border-t border-accent/20 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-muted">
                  {t.fatMass}
                </p>
                <p className="text-xl font-semibold text-foreground">
                  {fatMassDisplay}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted">
                  {t.leanMass}
                </p>
                <p className="text-xl font-semibold text-foreground">
                  {leanMassDisplay}
                </p>
              </div>
            </div>

            {/* Recommended Steps */}
            <div className="mt-4 pt-4 border-t border-accent/20">
              <p className="text-sm text-muted">
                {t.recommendedSteps}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatNumber(result.recommendedSteps, locale)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Reference Table */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          {t.categoriesTitle}
        </h2>
        <p className="text-sm text-muted mb-6">
          {gender === "male" ? t.categoriesSubtitleMale : t.categoriesSubtitleFemale}
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[320px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.categoryColumn}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.rangeColumn}
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryInfo.map((cat) => (
                <tr
                  key={cat.category}
                  className={`border-b border-border  transition-colors ${
                    result.isValid && cat.category === getBodyFatCategory(result.bodyFatPercent, gender)
                      ? "bg-surface"
                      : ""
                  }`}
                >
                  <td className="py-3 px-2">
                    <span className="flex items-center gap-2">
                      <span
                        className="w-3 h-3 rounded-full"
                        style={{ backgroundColor: cat.color }}
                      />
                      <span
                        className={`font-semibold ${
                          result.isValid && cat.category === getBodyFatCategory(result.bodyFatPercent, gender)
                            ? "text-foreground"
                            : "text-muted-soft"
                        }`}
                      >
                        {t.categories[cat.category]}
                      </span>
                    </span>
                  </td>
                  <td className="py-3 px-2 text-foreground">
                    {cat.range}
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
