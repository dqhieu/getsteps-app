"use client";

import { useState, useMemo } from "react";
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
  formatNumber,
  formatDistance,
} from "@/lib/step-calculator";

type CalculationMode = "steps-to-distance" | "distance-to-steps";
type DistanceUnit = "km" | "miles";
type HeightUnit = "cm" | "ft";

const DEFAULT_PROFILE: UserProfile = {
  gender: "male",
  age: 30,
  heightCm: 170,
};

export function StepCalculator() {
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
          Your Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                onBlur={(e) => {
                  const val = Number(e.target.value) || 1;
                  setAge(Math.max(1, Math.min(120, val)));
                }}
                className="w-full py-2 px-4 pr-14 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                years
              </span>
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
                    onBlur={(e) => {
                      const val = Number(e.target.value) || 170;
                      setHeightCm(Math.min(250, val));
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
                        setHeightFeet(Math.min(8, Number(val)));
                      }}
                      onBlur={(e) => {
                        const val = Number(e.target.value) || 5;
                        setHeightFeet(Math.min(8, val));
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
                        setHeightInches(Math.max(0, Math.min(11, Number(val))));
                      }}
                      onBlur={(e) => {
                        const val = Number(e.target.value) || 0;
                        setHeightInches(Math.max(0, Math.min(11, val)));
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
            Your estimated step length:{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              {stepLength.toFixed(1)} cm
            </span>
            <span className="text-neutral-500 dark:text-neutral-500 ml-1">
              ({(stepLength / 2.54).toFixed(1)} inches)
            </span>
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
            Steps to Distance
          </button>
          <button
            onClick={() => setMode("distance-to-steps")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "distance-to-steps"
                ? "bg-[#ED772F] text-white"
                : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
            }`}
          >
            Distance to Steps
          </button>
        </div>

        {/* Input Section */}
        <div className="mb-6">
          {mode === "steps-to-distance" ? (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Number of Steps
              </label>
              <input
                type="number"
                value={steps}
                onChange={(e) =>
                  setSteps(Math.max(0, Number(e.target.value) || 0))
                }
                min={0}
                className="w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                placeholder="Enter number of steps"
              />
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Distance
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) =>
                    setDistance(Math.max(0, Number(e.target.value) || 0))
                  }
                  min={0}
                  step={0.1}
                  className="flex-1 py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
                  placeholder="Enter distance"
                />
                <select
                  value={distanceUnit}
                  onChange={(e) =>
                    setDistanceUnit(e.target.value as DistanceUnit)
                  }
                  className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                >
                  <option value="km">km</option>
                  <option value="miles">miles</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* Result Section */}
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Result
          </h3>

          {mode === "steps-to-distance" ? (
            <div className="space-y-4">
              <div>
                <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                  {formatDistance(result.distanceKm, "km")} km
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                  ({formatDistance(result.distanceMiles, "miles")} miles)
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(result.steps)} steps
              </p>
            </div>
          )}

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Estimated Calories
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {formatNumber(result.caloriesBurned)} kcal
              </p>
            </div>
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Walking Time
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {result.walkingTimeMinutes >= 60
                  ? `${Math.floor(result.walkingTimeMinutes / 60)}h ${result.walkingTimeMinutes % 60}m`
                  : `${result.walkingTimeMinutes} min`}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reference Table */}
      <ReferenceTable profile={profile} />
    </div>
  );
}

function ReferenceTable({ profile }: { profile: UserProfile }) {
  const tableData = useMemo(() => generateReferenceTable(profile), [profile]);

  return (
    <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
      <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
        Quick Reference Table
      </h2>
      <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
        Common step goals and their equivalent distances based on your profile
      </p>

      <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
        <table className="w-full min-w-[400px]">
          <thead>
            <tr className="border-b border-neutral-200 dark:border-neutral-700">
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Steps
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Distance
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Calories
              </th>
              <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                Time
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
                    {formatNumber(row.steps)}
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {formatDistance(row.distanceKm, "km")} km
                  </span>
                  <span className="text-neutral-500 dark:text-neutral-500 text-sm ml-1 hidden sm:inline">
                    ({formatDistance(row.distanceMiles, "miles")} mi)
                  </span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {formatNumber(row.caloriesBurned)}
                  </span>
                  <span className="hidden sm:inline"> kcal</span>
                </td>
                <td className="py-3 px-2">
                  <span className="text-neutral-900 dark:text-white">
                    {row.walkingTimeMinutes >= 60
                      ? `${Math.floor(row.walkingTimeMinutes / 60)}h ${row.walkingTimeMinutes % 60}m`
                      : `${row.walkingTimeMinutes} min`}
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
