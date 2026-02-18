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
  formatNumber,
} from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";
type HeightUnit = "cm" | "ft";
type MeasurementUnit = "cm" | "in";

export function BodyFatCalculator() {
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
    const clamped = Math.max(0, Math.min(50, result.bodyFatPercent));
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

  const fatMassDisplay = useMemo(() => {
    if (weightUnit === "kg") return `${result.fatMassKg} kg`;
    return `${Math.round(kgToLbs(result.fatMassKg) * 10) / 10} lbs`;
  }, [result.fatMassKg, weightUnit]);

  const leanMassDisplay = useMemo(() => {
    if (weightUnit === "kg") return `${result.leanMassKg} kg`;
    return `${Math.round(kgToLbs(result.leanMassKg) * 10) / 10} lbs`;
  }, [result.leanMassKg, weightUnit]);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Measurements
        </h2>

        {/* Gender Toggle */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Gender
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
              Male
            </button>
            <button
              onClick={() => setGender("female")}
              className={
                gender === "female"
                  ? "py-3 px-4 bg-[#ED772F] text-white text-sm font-medium transition-colors flex-1"
                  : "py-3 px-4 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors flex-1"
              }
            >
              Female
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Height */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Height
            </label>
            <div className="flex gap-2">
              {heightUnit === "cm" ? (
                <div className="relative flex-1">
                  <input
                    type="number"
                    value={heightCm}
                    onChange={(e) =>
                      setHeightCm(Math.min(250, Math.max(100, Number(e.target.value) || 100)))
                    }
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
                      type="number"
                      value={heightFeet}
                      onChange={(e) =>
                        setHeightFeet(Math.min(8, Math.max(1, Number(e.target.value) || 1)))
                      }
                      className="w-full py-3 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                      ft
                    </span>
                  </div>
                  <div className="relative flex-1">
                    <input
                      type="number"
                      value={heightInches}
                      onChange={(e) =>
                        setHeightInches(Math.max(0, Math.min(11, Number(e.target.value) || 0)))
                      }
                      className="w-full py-3 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                      in
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleHeightUnitChange(heightUnit === "cm" ? "ft" : "cm")}
                className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
              </button>
            </div>
          </div>

          {/* Weight */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Weight
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) =>
                    setWeight(Math.max(1, Number(e.target.value) || 1))
                  }
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
        </div>

        {/* Measurement unit toggle */}
        <div className="mt-6 mb-4 flex items-center justify-between">
          <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
            Circumference Unit
          </span>
          <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
            <button
              onClick={() => handleMeasUnitChange("cm")}
              className={
                measUnit === "cm"
                  ? "py-2 px-4 bg-[#ED772F] text-white text-sm font-medium transition-colors"
                  : "py-2 px-4 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              }
            >
              cm
            </button>
            <button
              onClick={() => handleMeasUnitChange("in")}
              className={
                measUnit === "in"
                  ? "py-2 px-4 bg-[#ED772F] text-white text-sm font-medium transition-colors"
                  : "py-2 px-4 bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              }
            >
              in
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Waist */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Waist Circumference
            </label>
            <div className="relative">
              <input
                type="number"
                value={waistDisplay}
                onChange={(e) => handleMeasInput(e.target.value, setWaistCm)}
                className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {measUnit}
              </span>
            </div>
          </div>

          {/* Neck */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Neck Circumference
            </label>
            <div className="relative">
              <input
                type="number"
                value={neckDisplay}
                onChange={(e) => handleMeasInput(e.target.value, setNeckCm)}
                className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {measUnit}
              </span>
            </div>
          </div>

          {/* Hip (female only) */}
          {gender === "female" && (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Hip Circumference
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={hipDisplay}
                  onChange={(e) => handleMeasInput(e.target.value, setHipCm)}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {measUnit}
                </span>
              </div>
            </div>
          )}
        </div>

        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          All measurements should be taken at the narrowest point.
        </p>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        {!result.isValid ? (
          <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-6 text-center">
            <p className="text-red-700 dark:text-red-400 font-medium">
              Please check your measurements
            </p>
            <p className="text-sm text-red-600 dark:text-red-500 mt-1">
              Waist must be greater than neck circumference.
            </p>
          </div>
        ) : (
          <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
            <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
              Your Body Fat
            </h3>

            <div className="flex items-baseline gap-4 mb-4">
              <p className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
                {result.bodyFatPercent.toFixed(1)}%
              </p>
              <span
                className="text-lg font-semibold px-3 py-1 rounded-full"
                style={{
                  backgroundColor: `${result.categoryColor}20`,
                  color: result.categoryColor,
                }}
              >
                {result.categoryLabel}
              </span>
            </div>

            {/* Body Fat Scale */}
            <div className="mt-6">
              <div className="relative h-4 rounded-full overflow-hidden flex">
                <div className="flex-1 bg-blue-500" />
                <div className="flex-[1.4] bg-green-500" />
                <div className="flex-[0.8] bg-yellow-500" />
                <div className="flex-[1.4] bg-orange-500" />
                <div className="flex-[1.4] bg-red-500" />
              </div>
              {/* Indicator */}
              <div className="relative h-0">
                <div
                  className="absolute -top-6 transform -translate-x-1/2"
                  style={{ left: `${scalePosition}%` }}
                >
                  <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[8px] border-l-transparent border-r-transparent border-t-neutral-900 dark:border-t-white" />
                </div>
              </div>
              {/* Scale labels */}
              <div className="flex justify-between mt-3 text-xs text-neutral-500 dark:text-neutral-400">
                <span>0%</span>
                <span>10%</span>
                <span>20%</span>
                <span>30%</span>
                <span>40%</span>
                <span>50%+</span>
              </div>
            </div>

            {/* Fat / Lean Mass */}
            <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Fat Mass
                </p>
                <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {fatMassDisplay}
                </p>
              </div>
              <div>
                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  Lean Mass
                </p>
                <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                  {leanMassDisplay}
                </p>
              </div>
            </div>

            {/* Recommended Steps */}
            <div className="mt-4 pt-4 border-t border-[#ED772F]/20">
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Recommended Daily Steps
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatNumber(result.recommendedSteps)}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Reference Table */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          Body Fat Categories
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          American Council on Exercise (ACE) classification for{" "}
          {gender === "male" ? "men" : "women"}
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[320px]">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Category
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Body Fat Range
                </th>
              </tr>
            </thead>
            <tbody>
              {categoryInfo.map((cat) => (
                <tr
                  key={cat.category}
                  className={`border-b border-neutral-100 dark:border-neutral-700/50 transition-colors ${
                    result.isValid && cat.category === getBodyFatCategory(result.bodyFatPercent, gender)
                      ? "bg-neutral-50 dark:bg-neutral-700/30"
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
                            ? "text-neutral-900 dark:text-white"
                            : "text-neutral-700 dark:text-neutral-300"
                        }`}
                      >
                        {cat.label}
                      </span>
                    </span>
                  </td>
                  <td className="py-3 px-2 text-neutral-900 dark:text-white">
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
