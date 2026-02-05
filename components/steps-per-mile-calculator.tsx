"use client";

import { useState, useMemo } from "react";
import {
  calculateStepLength,
  feetInchesToCm,
  cmToFeetInches,
  type Gender,
} from "@/lib/step-calculator";
import { formatNumber, kmToMiles } from "@/lib/unit-converter";

type HeightUnit = "cm" | "ft";

const DEFAULT_VALUES = {
  gender: "male" as Gender,
  heightCm: 170,
  heightFeet: 5,
  heightInches: 7,
};

// Common distances for reference table
const REFERENCE_DISTANCES = [
  { label: "1 km", km: 1 },
  { label: "1 mile", km: 1.60934 },
  { label: "5 km", km: 5 },
  { label: "5 miles", km: 8.0467 },
  { label: "10 km", km: 10 },
  { label: "Half Marathon", km: 21.0975 },
  { label: "Marathon", km: 42.195 },
];

export function StepsPerMileCalculator() {
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
    return REFERENCE_DISTANCES.map((distance) => ({
      label: distance.label,
      steps: Math.round((distance.km * 100000) / stepLengthCm),
    }));
  }, [stepLengthCm]);

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
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Information
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                      className="w-full py-2 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                    />
                    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                      in
                    </span>
                  </div>
                </div>
              )}
              <button
                onClick={() => handleHeightUnitChange(heightUnit === "cm" ? "ft" : "cm")}
                className="py-2 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
              >
                {heightUnit === "cm" ? "ft" : "cm"}
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
        </div>

        {/* Step Length Display */}
        <div className="mt-6 pt-6 border-t border-neutral-200 dark:border-neutral-700">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Your estimated step length:{" "}
            <span className="font-semibold text-neutral-900 dark:text-white">
              {results.stepLengthCm} cm
            </span>
            <span className="text-neutral-500 dark:text-neutral-500 ml-1">
              ({results.stepLengthInches} inches)
            </span>
          </p>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                Steps per Mile
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(results.stepsPerMile)}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                steps
              </p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
                Steps per Kilometer
              </h3>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatNumber(results.stepsPerKm)}
              </p>
              <p className="text-sm text-neutral-500 dark:text-neutral-500 mt-1">
                steps
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reference Table */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          Distance Reference Table
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Steps needed for common distances based on your step length
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Distance
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Steps
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-neutral-100 dark:border-neutral-700/50 hover:bg-neutral-50 dark:hover:bg-neutral-700/30 transition-colors"
                >
                  <td className="py-3 px-2">
                    <span className="font-semibold text-neutral-900 dark:text-white">
                      {row.label}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-neutral-900 dark:text-white">
                      {formatNumber(row.steps)}
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
