"use client";

import { useState, useMemo } from "react";
import {
  calculateStepGoal,
  ACTIVITY_LEVELS,
  HEALTH_GOALS,
  type ActivityLevel,
  type HealthGoal,
  type Gender,
} from "@/lib/step-goal-calculator";
import { formatNumber } from "@/lib/unit-converter";

const DEFAULT_VALUES = {
  age: 30,
  gender: "male" as Gender,
  activityLevel: "lightly_active" as ActivityLevel,
  healthGoal: "maintain" as HealthGoal,
  currentSteps: undefined as number | undefined,
};

export function DailyStepGoalCalculator() {
  // Input state
  const [age, setAge] = useState<number>(DEFAULT_VALUES.age);
  const [gender, setGender] = useState<Gender>(DEFAULT_VALUES.gender);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>(
    DEFAULT_VALUES.activityLevel
  );
  const [healthGoal, setHealthGoal] = useState<HealthGoal>(DEFAULT_VALUES.healthGoal);
  const [currentSteps, setCurrentSteps] = useState<string>("");

  // Calculate results
  const results = useMemo(() => {
    return calculateStepGoal({
      age,
      gender,
      activityLevel,
      healthGoal,
      currentSteps: currentSteps ? Number(currentSteps) : undefined,
    });
  }, [age, gender, activityLevel, healthGoal, currentSteps]);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Profile
        </h2>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                  className="w-full py-3 px-4 pr-14 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  years
                </span>
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
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "male"
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  Male
                </button>
                <button
                  onClick={() => setGender("female")}
                  className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    gender === "female"
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  Female
                </button>
              </div>
            </div>
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Current Activity Level
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {(Object.entries(ACTIVITY_LEVELS) as [ActivityLevel, typeof ACTIVITY_LEVELS[ActivityLevel]][]).map(
                ([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setActivityLevel(key)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      activityLevel === key
                        ? "bg-[#ED772F] text-white"
                        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                    }`}
                  >
                    <span className="block">{value.label}</span>
                    <span
                      className={`block text-xs mt-0.5 ${
                        activityLevel === key
                          ? "text-white/80"
                          : "text-neutral-500 dark:text-neutral-400"
                      }`}
                    >
                      {value.stepsRange}
                    </span>
                  </button>
                )
              )}
            </div>
          </div>

          {/* Health Goal */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Health Goal
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {(Object.entries(HEALTH_GOALS) as [HealthGoal, typeof HEALTH_GOALS[HealthGoal]][]).map(
                ([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setHealthGoal(key)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      healthGoal === key
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

          {/* Current Steps (Optional) */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Current Daily Steps (Optional)
            </label>
            <input
              type="number"
              value={currentSteps}
              onChange={(e) => setCurrentSteps(e.target.value)}
              placeholder="e.g., 5000"
              className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent placeholder:text-neutral-400"
            />
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Enter your average daily steps for a more personalized recommendation
            </p>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Your Recommended Daily Step Goal
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(results.dailyGoal)} steps
              </p>
              <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                per day
              </p>
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Weekly Goal
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatNumber(results.weeklyGoal)}
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Distance/Day
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {results.distancePerDayKm} km
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Calories/Day
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                ~{formatNumber(results.caloriesPerDay)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Milestones Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          8-Week Progression Plan
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Gradually build up to your goal with weekly milestones
        </p>

        <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
          {results.milestones.map((milestone) => (
            <div
              key={milestone.week}
              className="bg-neutral-50 dark:bg-neutral-700/30 rounded-lg p-3 text-center"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                Week {milestone.week}
              </p>
              <p className="text-sm font-semibold text-neutral-900 dark:text-white">
                {formatNumber(milestone.steps)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Tips Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Tips to Reach Your Goal
        </h2>

        <ul className="space-y-3">
          {results.tips.map((tip, index) => (
            <li key={index} className="flex items-start gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#ED772F]/10 dark:bg-[#ED772F]/20 flex items-center justify-center">
                <span className="text-[#ED772F] text-sm font-semibold">
                  {index + 1}
                </span>
              </span>
              <span className="text-neutral-700 dark:text-neutral-300">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
