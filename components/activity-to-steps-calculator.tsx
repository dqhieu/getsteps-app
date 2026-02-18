"use client";

import { useState, useMemo } from "react";
import {
  ACTIVITIES,
  convertActivityToSteps,
  type ActivityKey,
  type Intensity,
} from "@/lib/activity-steps-converter";
import { lbsToKg, kgToLbs, formatNumber, kmToMiles } from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";

const DURATION_PRESETS = [15, 30, 45, 60, 90];
const ACTIVITY_KEYS = Object.keys(ACTIVITIES) as ActivityKey[];

export function ActivityToStepsCalculator() {
  const [selectedActivity, setSelectedActivity] = useState<ActivityKey>("cycling");
  const [duration, setDuration] = useState<number>(30);
  const [intensity, setIntensity] = useState<Intensity>("medium");
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [weight, setWeight] = useState<number>(70);
  const [showCalorieSection, setShowCalorieSection] = useState(false);

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  const result = useMemo(
    () => convertActivityToSteps(selectedActivity, duration, intensity, weightKg),
    [selectedActivity, duration, intensity, weightKg]
  );

  const handleWeightUnitToggle = () => {
    const newUnit: WeightUnit = weightUnit === "kg" ? "lbs" : "kg";
    setWeight(
      newUnit === "lbs" ? Math.round(kgToLbs(weight)) : Math.round(lbsToKg(weight))
    );
    setWeightUnit(newUnit);
  };

  const distanceMiles = kmToMiles(result.distanceKm);

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Activity
        </h2>

        {/* Activity selector */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">
            Activity Type
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ACTIVITY_KEYS.map((key) => {
              const act = ACTIVITIES[key];
              const isActive = selectedActivity === key;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedActivity(key)}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors border ${
                    isActive
                      ? "bg-[#ED772F] text-white border-[#ED772F]"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 border-transparent"
                  }`}
                >
                  <span>{act.emoji}</span>
                  <span>{act.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Duration input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Duration (minutes)
          </label>
          <div className="flex gap-2 mb-3 flex-wrap">
            {DURATION_PRESETS.map((preset) => (
              <button
                key={preset}
                onClick={() => setDuration(preset)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  duration === preset
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
          <input
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
            className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
          />
        </div>

        {/* Intensity toggle */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Intensity
          </label>
          <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700">
            {(["low", "medium", "high"] as Intensity[]).map((lvl) => (
              <button
                key={lvl}
                onClick={() => setIntensity(lvl)}
                className={`flex-1 py-2.5 text-sm font-medium capitalize transition-colors ${
                  intensity === lvl
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>
        </div>

        {/* Calorie weight section */}
        <div>
          <button
            onClick={() => setShowCalorieSection(!showCalorieSection)}
            className="flex items-center gap-2 text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors"
          >
            <span className={`transition-transform ${showCalorieSection ? "rotate-90" : ""}`}>▶</span>
            For calorie calculation (optional)
          </button>

          {showCalorieSection && (
            <div className="mt-3">
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Body Weight
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="flex-1 py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                />
                <button
                  onClick={handleWeightUnitToggle}
                  className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
                >
                  {weightUnit}
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
            Equivalent Steps
          </p>
          <p className="text-5xl md:text-6xl font-bold text-neutral-900 dark:text-white mb-1">
            {formatNumber(result.equivalentSteps)}
          </p>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-6">
            steps equivalent for {duration} min of {ACTIVITIES[selectedActivity].label}
          </p>

          <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#ED772F]/20">
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Walking Time</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {result.walkingMinutes} min
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Distance</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {result.distanceKm.toFixed(1)} km
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">
                {distanceMiles.toFixed(1)} mi
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Calories</p>
              <p className="text-lg font-semibold text-neutral-900 dark:text-white">
                {formatNumber(result.caloriesBurned)}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">kcal</p>
            </div>
          </div>

          <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-4">
            Calculated using MET (Metabolic Equivalent of Task) values
          </p>
        </div>
      </div>
    </div>
  );
}
