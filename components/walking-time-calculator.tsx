"use client";

import { useState, useMemo } from "react";
import {
  type WalkingSpeed,
  WALKING_SPEEDS_KMH,
  calculateCaloriesFromDistance,
} from "@/lib/calorie-calculator";
import { milesToKm, kmToMiles, formatNumber, formatTime } from "@/lib/unit-converter";

type DistanceUnit = "km" | "miles";

const DEFAULT_VALUES = {
  distance: 5,
  speed: "normal" as WalkingSpeed,
  includeBreaks: false,
};

const SPEED_OPTIONS: { value: WalkingSpeed; label: string; description: string }[] = [
  { value: "slow", label: "Slow", description: "3.2 km/h" },
  { value: "normal", label: "Normal", description: "5.0 km/h" },
  { value: "brisk", label: "Brisk", description: "6.4 km/h" },
  { value: "fast", label: "Fast", description: "7.2 km/h" },
];

// Common distances for reference
const COMMON_DISTANCES = [
  { label: "1 km", km: 1 },
  { label: "1 mile", km: 1.60934 },
  { label: "2 km", km: 2 },
  { label: "3 km", km: 3 },
  { label: "5 km", km: 5 },
  { label: "5 miles", km: 8.0467 },
  { label: "10 km", km: 10 },
  { label: "Half Marathon", km: 21.0975 },
];

export function WalkingTimeCalculator() {
  // Input state
  const [distance, setDistance] = useState<number>(DEFAULT_VALUES.distance);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");
  const [speed, setSpeed] = useState<WalkingSpeed>(DEFAULT_VALUES.speed);
  const [includeBreaks, setIncludeBreaks] = useState<boolean>(DEFAULT_VALUES.includeBreaks);

  // Get distance in km for calculations
  const distanceKm = useMemo(
    () => (distanceUnit === "km" ? distance : milesToKm(distance)),
    [distance, distanceUnit]
  );

  // Calculate results
  const results = useMemo(() => {
    const speedKmh = WALKING_SPEEDS_KMH[speed];
    let walkingMinutes = (distanceKm / speedKmh) * 60;

    // Add breaks: 5 minutes per 30 minutes of walking
    let breakMinutes = 0;
    if (includeBreaks) {
      breakMinutes = Math.floor(walkingMinutes / 30) * 5;
    }

    const totalMinutes = walkingMinutes + breakMinutes;

    // Estimate steps (average 75cm step length)
    const steps = Math.round((distanceKm * 100000) / 75);

    // Estimate calories (70kg average weight)
    const calories = calculateCaloriesFromDistance(70, distanceKm, speed);

    return {
      walkingMinutes: Math.round(walkingMinutes),
      breakMinutes,
      totalMinutes: Math.round(totalMinutes),
      steps,
      calories: Math.round(calories),
      speedKmh,
    };
  }, [distanceKm, speed, includeBreaks]);

  // Generate reference table for current speed
  const referenceTable = useMemo(() => {
    const speedKmh = WALKING_SPEEDS_KMH[speed];
    return COMMON_DISTANCES.map((d) => {
      const minutes = (d.km / speedKmh) * 60;
      return {
        label: d.label,
        minutes: Math.round(minutes),
      };
    });
  }, [speed]);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Calculate Walking Time
        </h2>

        <div className="space-y-6">
          {/* Distance Input */}
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

          {/* Include Breaks Toggle */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeBreaks}
                onChange={(e) => setIncludeBreaks(e.target.checked)}
                className="w-5 h-5 rounded border-neutral-300 dark:border-neutral-600 text-[#ED772F] focus:ring-[#ED772F] focus:ring-offset-0"
              />
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                Include rest breaks (5 min every 30 min)
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Walking Time
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
                {formatTime(results.totalMinutes)}
              </p>
              {includeBreaks && results.breakMinutes > 0 && (
                <p className="text-lg text-neutral-600 dark:text-neutral-400 mt-1">
                  {formatTime(results.walkingMinutes)} walking + {results.breakMinutes}{" "}
                  min breaks
                </p>
              )}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-[#ED772F]/20 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                Distance
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                {distanceUnit === "km"
                  ? `${distanceKm.toFixed(1)} km`
                  : `${distance.toFixed(1)} mi`}
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
                Calories
              </p>
              <p className="text-xl font-semibold text-neutral-900 dark:text-white">
                ~{formatNumber(results.calories)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Reference Table */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
          Walking Time Reference
        </h2>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
          Time to walk common distances at {SPEED_OPTIONS.find((s) => s.value === speed)?.label.toLowerCase()}{" "}
          pace ({results.speedKmh} km/h)
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Distance
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                  Time
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
                      {formatTime(row.minutes)}
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
