"use client";

import { useState, useMemo } from "react";
import {
  calculateFromDistance,
  calculateFromDuration,
  type WalkingSpeed,
  WALKING_SPEEDS_KMH,
  WALKING_MET_VALUES,
  calculateFatBurned,
} from "@/lib/calorie-calculator";
import { lbsToKg, kgToLbs, milesToKm, formatNumber, formatTime } from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";
type DistanceUnit = "km" | "miles";
type CalculationMode = "distance" | "time";

const DEFAULT_VALUES = {
  weight: 70,
  distance: 5,
  duration: 60,
  speed: "normal" as WalkingSpeed,
};

const SPEED_OPTIONS: { value: WalkingSpeed; label: string; description: string }[] = [
  { value: "slow", label: "Slow", description: `${WALKING_SPEEDS_KMH.slow} km/h (2 mph)` },
  { value: "normal", label: "Normal", description: `${WALKING_SPEEDS_KMH.normal} km/h (3.1 mph)` },
  { value: "brisk", label: "Brisk", description: `${WALKING_SPEEDS_KMH.brisk} km/h (4 mph)` },
  { value: "fast", label: "Fast", description: `${WALKING_SPEEDS_KMH.fast} km/h (4.5 mph)` },
];

export function WalkingCaloriesCalculator() {
  // Input state
  const [mode, setMode] = useState<CalculationMode>("distance");
  const [weight, setWeight] = useState<number>(DEFAULT_VALUES.weight);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [distance, setDistance] = useState<number>(DEFAULT_VALUES.distance);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");
  const [duration, setDuration] = useState<number>(DEFAULT_VALUES.duration);
  const [speed, setSpeed] = useState<WalkingSpeed>(DEFAULT_VALUES.speed);

  // Get weight in kg for calculations
  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  // Get distance in km for calculations
  const distanceKm = useMemo(
    () => (distanceUnit === "km" ? distance : milesToKm(distance)),
    [distance, distanceUnit]
  );

  // Calculate results
  const results = useMemo(() => {
    if (mode === "distance") {
      return calculateFromDistance(distanceKm, weightKg, speed);
    } else {
      return calculateFromDuration(duration, weightKg, speed);
    }
  }, [mode, distanceKm, duration, weightKg, speed]);

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
          Calculate By
        </h2>

        {/* Mode Toggle */}
        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("distance")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "distance"
                ? "bg-[#ED772F] text-white"
                : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            }`}
          >
            Distance
          </button>
          <button
            onClick={() => setMode("time")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "time"
                ? "bg-[#ED772F] text-white"
                : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            }`}
          >
            Time
          </button>
        </div>

        <div className="space-y-6">
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

          {/* Distance or Duration Input */}
          {mode === "distance" ? (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Distance
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(Math.max(0, Number(e.target.value) || 0))}
                  min={0}
                  step={0.1}
                  className="flex-1 py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <select
                  value={distanceUnit}
                  onChange={(e) => setDistanceUnit(e.target.value as DistanceUnit)}
                  className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                >
                  <option value="km">km</option>
                  <option value="miles">miles</option>
                </select>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Duration
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Math.max(1, Number(e.target.value) || 1))}
                  min={1}
                  className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  minutes
                </span>
              </div>
            </div>
          )}

          {/* Walking Speed */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Walking Speed
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {SPEED_OPTIONS.map((option) => (
                <button
                  key={option.value}
                  onClick={() => setSpeed(option.value)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    speed === option.value
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  <span className="block">{option.label}</span>
                  <span
                    className={`block text-xs mt-0.5 ${
                      speed === option.value
                        ? "text-white/80"
                        : "text-neutral-500 dark:text-neutral-400"
                    }`}
                  >
                    {option.description}
                  </span>
                </button>
              ))}
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
                {formatNumber(results.caloriesBurned)} kcal
              </p>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {mode === "distance" ? "Walking Time" : "Distance"}
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {mode === "distance"
                  ? formatTime(results.durationMinutes)
                  : `${results.distanceKm.toFixed(1)} km`}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Steps
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatNumber(results.steps)}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Fat Burned
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {results.fatBurnedGrams.toFixed(1)} g
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                MET Value
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {WALKING_MET_VALUES[speed]}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* MET Info Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Walking Speed & MET Values
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          MET (Metabolic Equivalent of Task) represents the energy cost of
          activities. Higher MET means more calories burned.
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Speed
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  km/h
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  mph
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  MET
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-100 dark:border-neutral-700/50">
                <td className="py-3 px-2 font-semibold text-neutral-900 dark:text-white">
                  Slow
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  3.2
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  2.0
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  2.5
                </td>
                <td className="py-3 px-2 text-neutral-600 dark:text-neutral-400">
                  Leisurely stroll
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-700/50">
                <td className="py-3 px-2 font-semibold text-neutral-900 dark:text-white">
                  Normal
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  5.0
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  3.1
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  3.5
                </td>
                <td className="py-3 px-2 text-neutral-600 dark:text-neutral-400">
                  Average pace
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-700/50">
                <td className="py-3 px-2 font-semibold text-neutral-900 dark:text-white">
                  Brisk
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  6.4
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  4.0
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  4.5
                </td>
                <td className="py-3 px-2 text-neutral-600 dark:text-neutral-400">
                  Fast walking
                </td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-700/50">
                <td className="py-3 px-2 font-semibold text-neutral-900 dark:text-white">
                  Fast
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  7.2
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  4.5
                </td>
                <td className="py-3 px-2 text-neutral-900 dark:text-white">
                  5.0
                </td>
                <td className="py-3 px-2 text-neutral-600 dark:text-neutral-400">
                  Power walking
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
