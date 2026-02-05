"use client";

import { useState, useMemo } from "react";
import {
  calculateCaloriesFromSteps,
  getFoodEquivalents,
  generateStepsCaloriesTable,
  estimateDurationFromSteps,
  estimateDistanceFromSteps,
} from "@/lib/calorie-calculator";
import { calculateStepLength, type Gender } from "@/lib/step-calculator";
import { lbsToKg, kgToLbs, formatNumber, formatTime } from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";

// Emoji mapping for food equivalents
const FOOD_EMOJIS: Record<string, string> = {
  "Banana": "🍌",
  "Apple": "🍎",
  "Slice of bread": "🍞",
  "Egg": "🥚",
  "Cup of rice": "🍚",
  "Chocolate bar": "🍫",
  "Slice of pizza": "🍕",
  "Cheeseburger": "🍔",
};

const DEFAULT_VALUES = {
  steps: 10000,
  weightKg: 70,
  gender: "male" as Gender,
  age: 30,
  heightCm: 170,
};

export function StepsToCaloriesCalculator() {
  // Input state
  const [steps, setSteps] = useState<number>(DEFAULT_VALUES.steps);
  const [weight, setWeight] = useState<number>(DEFAULT_VALUES.weightKg);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [gender, setGender] = useState<Gender>(DEFAULT_VALUES.gender);
  const [age, setAge] = useState<number>(DEFAULT_VALUES.age);

  // Get weight in kg for calculations
  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  // Calculate step length based on profile
  const stepLengthCm = useMemo(() => {
    return calculateStepLength({
      gender,
      age,
      heightCm: DEFAULT_VALUES.heightCm,
    });
  }, [gender, age]);

  // Calculate results
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

  // Generate reference table
  const referenceTable = useMemo(
    () => generateStepsCaloriesTable(weightKg),
    [weightKg]
  );

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

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Information
        </h2>

        <div className="space-y-6">
          {/* Steps Input */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Number of Steps
            </label>
            <input
              type="number"
              value={steps}
              onChange={(e) => setSteps(Math.max(0, Number(e.target.value) || 0))}
              min={0}
              className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              placeholder="Enter number of steps"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                    onChange={(e) =>
                      setWeight(Math.max(1, Number(e.target.value) || 1))
                    }
                    min={1}
                    className="w-full py-2 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                  />
                  <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                    {weightUnit}
                  </span>
                </div>
                <button
                  onClick={() =>
                    handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")
                  }
                  className="py-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
                >
                  {weightUnit === "kg" ? "lbs" : "kg"}
                </button>
              </div>
            </div>

            {/* Gender Selection */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Gender
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
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "female"
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>

            {/* Age Input */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Age
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
                  className="w-full py-2 px-4 pr-14 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  years
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Calories Burned
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(results.calories)} kcal
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                from {formatNumber(steps)} steps
              </p>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Distance Walked
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {results.distanceKm} km
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                ({results.distanceMiles} miles)
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Walking Time
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatTime(results.walkingMinutes)}
              </p>
            </div>
          </div>
        </div>

        {/* Food Equivalents */}
        {results.foodEquivalents.length > 0 && (
          <div className="mt-6">
            <h3 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
              Equivalent To
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {results.foodEquivalents.map((item) => (
                <div
                  key={item.food}
                  className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3 text-center"
                >
                  <p className="text-2xl mb-1">{FOOD_EMOJIS[item.food] || "🍽️"}</p>
                  <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                    {item.amount}
                  </p>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400">
                    {item.food}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* Reference Table */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          Steps to Calories Reference
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Calories burned for common step counts based on your weight (
          {weight} {weightUnit})
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Steps
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Calories
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row) => (
                <tr
                  key={row.steps}
                  className="border-b border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
                >
                  <td className="py-3 px-2">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {formatNumber(row.steps)}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-neutral-900 dark:text-white">
                      {formatNumber(row.calories)} kcal
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
