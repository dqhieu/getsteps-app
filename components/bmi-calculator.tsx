"use client";

import { useState, useMemo } from "react";
import {
  calculateBMIResult,
  getBMIScalePosition,
  BMI_CATEGORIES,
  getAllBMICategories,
  type BMICategory,
} from "@/lib/bmi-calculator";
import {
  lbsToKg,
  kgToLbs,
  feetInchesToCm,
  cmToFeetInches,
  formatNumber,
} from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";
type HeightUnit = "cm" | "ft";

const DEFAULT_VALUES = {
  weight: 70,
  heightCm: 170,
  heightFeet: 5,
  heightInches: 7,
};

export function BMICalculator() {
  // Input state
  const [weight, setWeight] = useState<number>(DEFAULT_VALUES.weight);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [heightCm, setHeightCm] = useState<number>(DEFAULT_VALUES.heightCm);
  const [heightUnit, setHeightUnit] = useState<HeightUnit>("cm");
  const [heightFeet, setHeightFeet] = useState<number>(DEFAULT_VALUES.heightFeet);
  const [heightInches, setHeightInches] = useState<number>(DEFAULT_VALUES.heightInches);

  // Get weight in kg for calculations
  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  // Get height in cm for calculations
  const actualHeightCm = useMemo(
    () => (heightUnit === "cm" ? heightCm : feetInchesToCm(heightFeet, heightInches)),
    [heightCm, heightUnit, heightFeet, heightInches]
  );

  // Calculate BMI result
  const result = useMemo(
    () => calculateBMIResult(weightKg, actualHeightCm),
    [weightKg, actualHeightCm]
  );

  // Get scale position for visualization
  const scalePosition = useMemo(() => getBMIScalePosition(result.bmi), [result.bmi]);

  // Get all categories for the scale
  const categories = useMemo(() => getAllBMICategories(), []);

  // Handle weight unit toggle
  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    if (newUnit === "lbs") {
      setWeight(Math.round(kgToLbs(weight)));
    } else {
      setWeight(Math.round(lbsToKg(weight)));
    }
    setWeightUnit(newUnit);
  };

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

  // Get healthy weight range in current unit
  const healthyRangeDisplay = useMemo(() => {
    if (weightUnit === "kg") {
      return `${result.healthyWeightRange.min} - ${result.healthyWeightRange.max} kg`;
    }
    return `${Math.round(kgToLbs(result.healthyWeightRange.min))} - ${Math.round(
      kgToLbs(result.healthyWeightRange.max)
    )} lbs`;
  }, [result.healthyWeightRange, weightUnit]);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Measurements
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Weight Input */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Weight
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Math.max(1, Number(e.target.value) || 1))}
                  min={1}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              <button
                onClick={() => handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")}
                className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {weightUnit === "kg" ? "lbs" : "kg"}
              </button>
            </div>
          </div>

          {/* Height Input */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Height
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
                      setHeightCm(Math.min(250, Number(val)));
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
                        setHeightFeet(Math.min(8, Number(val)));
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
                        setHeightInches(Math.max(0, Math.min(11, Number(val))));
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
                onClick={() => handleHeightUnitChange(heightUnit === "cm" ? "ft" : "cm")}
                className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Your BMI
          </h3>

          <div className="flex items-baseline gap-4 mb-4">
            <p className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white">
              {result.bmi.toFixed(1)}
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

          {/* BMI Scale */}
          <div className="mt-6">
            <div className="relative h-4 rounded-full overflow-hidden flex">
              <div className="flex-1 bg-blue-500" />
              <div className="flex-[1.3] bg-green-500" />
              <div className="flex-1 bg-yellow-500" />
              <div className="flex-1 bg-orange-500" />
              <div className="flex-1 bg-red-500" />
              <div className="flex-0.5 bg-red-800" />
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
            {/* Scale Labels */}
            <div className="flex justify-between mt-3 text-xs text-neutral-500 dark:text-neutral-400">
              <span>15</span>
              <span>18.5</span>
              <span>25</span>
              <span>30</span>
              <span>35</span>
              <span>40+</span>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Healthy Weight Range
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {healthyRangeDisplay}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Recommended Daily Steps
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatNumber(result.recommendedSteps)}
              </p>
            </div>
          </div>

          {/* Weight to healthy range */}
          {result.weightToHealthyRange !== 0 && (
            <div className="mt-4 p-4 rounded-lg bg-white/50 dark:bg-neutral-900/30">
              <p className="text-sm text-neutral-700 dark:text-neutral-300">
                {result.weightToHealthyRange > 0 ? (
                  <>
                    You are{" "}
                    <span className="font-semibold">
                      {weightUnit === "kg"
                        ? `${result.weightToHealthyRange} kg`
                        : `${Math.round(kgToLbs(result.weightToHealthyRange))} lbs`}
                    </span>{" "}
                    above the healthy weight range for your height.
                  </>
                ) : (
                  <>
                    You are{" "}
                    <span className="font-semibold">
                      {weightUnit === "kg"
                        ? `${Math.abs(result.weightToHealthyRange)} kg`
                        : `${Math.round(kgToLbs(Math.abs(result.weightToHealthyRange)))} lbs`}
                    </span>{" "}
                    below the healthy weight range for your height.
                  </>
                )}
              </p>
            </div>
          )}
        </div>
      </div>

      {/* BMI Categories Table */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          BMI Categories
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          World Health Organization BMI classification for adults
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Category
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  BMI Range
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((cat) => (
                <tr
                  key={cat.category}
                  className={`border-b border-neutral-100 dark:border-neutral-700/50 transition-colors ${
                    cat.category === result.category
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
                          cat.category === result.category
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
