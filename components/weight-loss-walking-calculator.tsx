"use client";

import { useState, useMemo } from "react";
import {
  calculateWeightLoss,
  TIMEFRAME_OPTIONS,
  type TimeframeOption,
} from "@/lib/weight-loss-calculator";
import { lbsToKg, kgToLbs, formatNumber, formatTime } from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";

const DEFAULT_VALUES = {
  currentWeight: 80,
  targetWeight: 75,
  timeframe: "3_months" as TimeframeOption,
  daysPerWeek: 5,
};

export function WeightLossWalkingCalculator() {
  // Input state
  const [currentWeight, setCurrentWeight] = useState<number>(DEFAULT_VALUES.currentWeight);
  const [targetWeight, setTargetWeight] = useState<number>(DEFAULT_VALUES.targetWeight);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [timeframe, setTimeframe] = useState<TimeframeOption>(DEFAULT_VALUES.timeframe);
  const [daysPerWeek, setDaysPerWeek] = useState<number>(DEFAULT_VALUES.daysPerWeek);

  // Get weights in kg for calculations
  const currentWeightKg = useMemo(
    () => (weightUnit === "kg" ? currentWeight : lbsToKg(currentWeight)),
    [currentWeight, weightUnit]
  );

  const targetWeightKg = useMemo(
    () => (weightUnit === "kg" ? targetWeight : lbsToKg(targetWeight)),
    [targetWeight, weightUnit]
  );

  // Calculate results
  const results = useMemo(() => {
    return calculateWeightLoss({
      currentWeightKg,
      targetWeightKg,
      timeframeDays: TIMEFRAME_OPTIONS[timeframe].days,
      daysPerWeek,
    });
  }, [currentWeightKg, targetWeightKg, timeframe, daysPerWeek]);

  // Handle weight unit toggle
  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    if (newUnit === "lbs") {
      setCurrentWeight(Math.round(kgToLbs(currentWeight)));
      setTargetWeight(Math.round(kgToLbs(targetWeight)));
    } else {
      setCurrentWeight(Math.round(lbsToKg(currentWeight)));
      setTargetWeight(Math.round(lbsToKg(targetWeight)));
    }
    setWeightUnit(newUnit);
  };

  // Format weight display
  const formatWeightDisplay = (kg: number) => {
    if (weightUnit === "lbs") {
      return `${Math.round(kgToLbs(kg))} lbs`;
    }
    return `${Math.round(kg * 10) / 10} kg`;
  };

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Weight Loss Goal
        </h2>

        <div className="space-y-6">
          {/* Weight Unit Toggle */}
          <div className="flex justify-end">
            <button
              onClick={() => handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")}
              className="py-2 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
            >
              Switch to {weightUnit === "kg" ? "lbs" : "kg"}
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Current Weight */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Current Weight
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={currentWeight}
                  onChange={(e) =>
                    setCurrentWeight(Math.max(1, Number(e.target.value) || 1))
                  }
                  min={1}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
            </div>

            {/* Target Weight */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Target Weight
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={targetWeight}
                  onChange={(e) =>
                    setTargetWeight(Math.max(1, Number(e.target.value) || 1))
                  }
                  min={1}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
            </div>
          </div>

          {/* Timeframe */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Timeframe
            </label>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
              {(Object.entries(TIMEFRAME_OPTIONS) as [TimeframeOption, typeof TIMEFRAME_OPTIONS[TimeframeOption]][]).map(
                ([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setTimeframe(key)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      timeframe === key
                        ? "bg-[#ED772F] text-white"
                        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    }`}
                  >
                    {value.label}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Days Per Week */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Walking Days Per Week: {daysPerWeek}
            </label>
            <input
              type="range"
              min={1}
              max={7}
              value={daysPerWeek}
              onChange={(e) => setDaysPerWeek(Number(e.target.value))}
              className="w-full h-2 bg-neutral-200 dark:bg-neutral-700 rounded-lg appearance-none cursor-pointer accent-[#ED772F]"
            />
            <div className="flex justify-between text-xs text-neutral-500 dark:text-neutral-400 mt-1">
              <span>1 day</span>
              <span>7 days</span>
            </div>
          </div>
        </div>
      </div>

      {/* Safety Warning */}
      {results.safetyWarning && (
        <div className="bg-amber-50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-800 rounded-2xl p-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">⚠️</span>
            <div>
              <h3 className="font-semibold text-amber-800 dark:text-amber-200 mb-1">
                Safety Warning
              </h3>
              <p className="text-amber-700 dark:text-amber-300 text-sm">
                {results.safetyWarning}
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Daily Walking Requirement
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(results.walkingDailySteps)} steps
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                {results.walkingDailyKm} km ({results.walkingDailyMiles} miles) per
                walking day
              </p>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Walking Time
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatTime(results.walkingDailyMinutes)}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Daily Calorie Burn
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatNumber(results.dailyCalorieDeficit)} kcal
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Weekly Distance
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {results.weeklyKm} km
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Total to Lose
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatWeightDisplay(results.totalWeightToLose)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Card */}
      {results.milestones.length > 0 && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
            Expected Progress
          </h2>
          <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
            Your projected weight at each milestone (assuming consistent effort)
          </p>

          <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
            <table className="w-full min-w-[300px]">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Week
                  </th>
                  <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Expected Weight
                  </th>
                </tr>
              </thead>
              <tbody>
                {results.milestones.map((milestone) => (
                  <tr
                    key={milestone.week}
                    className="border-b border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
                  >
                    <td className="py-3 px-2">
                      <span className="font-semibold text-neutral-900 dark:text-white">
                        Week {milestone.week}
                      </span>
                    </td>
                    <td className="py-3 px-2">
                      <span className="text-neutral-900 dark:text-white">
                        {formatWeightDisplay(milestone.expectedWeight)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Info Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Important Notes
        </h2>

        <ul className="space-y-3 text-sm text-neutral-600 dark:text-neutral-400">
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 text-[#ED772F]">•</span>
            <span>
              These calculations assume walking is your primary calorie-burning
              activity. For best results, combine with a balanced diet.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 text-[#ED772F]">•</span>
            <span>
              Safe weight loss is typically 0.5-1 kg (1-2 lbs) per week. Faster
              weight loss may not be sustainable.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 text-[#ED772F]">•</span>
            <span>
              Walking alone may not create a large enough calorie deficit for
              significant weight loss. Consider combining with dietary changes.
            </span>
          </li>
          <li className="flex items-start gap-3">
            <span className="flex-shrink-0 text-[#ED772F]">•</span>
            <span>
              Consult a healthcare professional before starting any weight loss
              program, especially if you have health conditions.
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
