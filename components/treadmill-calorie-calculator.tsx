"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateTreadmillSession,
  generateInclineTable,
} from "@/lib/treadmill-calculator";
import { lbsToKg, kgToLbs, kmToMiles, formatNumber } from "@/lib/unit-converter";

type WeightUnit = "kg" | "lbs";
type SpeedUnit = "kmh" | "mph";

const MPH_TO_KMH = 1.60934;
const INCLINE_PRESETS = [0, 1, 3, 5, 8, 10, 12, 15];

const inputClass =
  "w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";
const unitBtnClass =
  "py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors";
const labelClass =
  "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2";

export function TreadmillCalorieCalculator({
  resultCta,
}: { resultCta?: ReactNode } = {}) {
  const [weight, setWeight] = useState(70);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [speed, setSpeed] = useState(5);
  const [speedUnit, setSpeedUnit] = useState<SpeedUnit>("kmh");
  const [incline, setIncline] = useState(0);
  const [duration, setDuration] = useState(30);

  const weightKg = weightUnit === "kg" ? weight : lbsToKg(weight);
  const speedKmh = speedUnit === "kmh" ? speed : speed * MPH_TO_KMH;

  const results = useMemo(
    () =>
      calculateTreadmillSession({
        weightKg,
        speedKmh,
        inclinePercent: incline,
        durationMinutes: duration,
      }),
    [weightKg, speedKmh, incline, duration]
  );

  const inclineTable = useMemo(
    () => generateInclineTable(weightKg, speedKmh, duration),
    [weightKg, speedKmh, duration]
  );

  const extraFromIncline = results.calories - results.caloriesAtZeroIncline;

  const toggleWeightUnit = () => {
    if (weightUnit === "kg") {
      setWeight(Math.round(kgToLbs(weight)));
      setWeightUnit("lbs");
    } else {
      setWeight(Math.round(lbsToKg(weight)));
      setWeightUnit("kg");
    }
  };

  const toggleSpeedUnit = () => {
    if (speedUnit === "kmh") {
      setSpeed(Math.round((speed / MPH_TO_KMH) * 10) / 10);
      setSpeedUnit("mph");
    } else {
      setSpeed(Math.round(speed * MPH_TO_KMH * 10) / 10);
      setSpeedUnit("kmh");
    }
  };

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Treadmill Session
        </h2>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>Weight</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              <button onClick={toggleWeightUnit} className={unitBtnClass}>
                {weightUnit === "kg" ? "lbs" : "kg"}
              </button>
            </div>
          </div>

          <div>
            <label className={labelClass}>Speed</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {speedUnit === "kmh" ? "km/h" : "mph"}
                </span>
              </div>
              <button onClick={toggleSpeedUnit} className={unitBtnClass}>
                {speedUnit === "kmh" ? "mph" : "km/h"}
              </button>
            </div>
          </div>

          <div>
            <label className={labelClass}>Incline: {incline}%</label>
            <input
              type="range"
              min={0}
              max={15}
              step={0.5}
              value={incline}
              onChange={(e) => setIncline(Number(e.target.value))}
              className="w-full accent-[#ED772F] mb-3"
            />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {INCLINE_PRESETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setIncline(preset)}
                  className={`py-2 px-2 rounded-lg text-sm font-medium transition-colors ${
                    incline === preset
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {preset}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Duration</label>
            <div className="relative">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className={inputClass}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Calories Burned
          </h3>
          <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            {formatNumber(results.calories)} kcal
          </p>
          {incline > 0 && (
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              The {incline}% incline adds{" "}
              <strong className="text-[#ED772F]">
                {formatNumber(extraFromIncline)} kcal
              </strong>{" "}
              versus the same session on the flat (
              {formatNumber(results.caloriesAtZeroIncline)} kcal).
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "MET", value: results.met.toFixed(1) },
            {
              label: "Distance",
              value: `${results.distanceKm.toFixed(2)} km / ${kmToMiles(
                results.distanceKm
              ).toFixed(2)} mi`,
            },
            { label: "Est. steps", value: formatNumber(results.steps) },
            { label: "Fat burned", value: `${results.fatGrams.toFixed(1)} g` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-neutral-900 dark:text-white text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          Using the ACSM {results.isRunning ? "running" : "walking"} metabolic
          equation ({results.vo2.toFixed(1)} ml/kg/min VO₂).
        </p>

        {resultCta}
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Calories by Incline
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Same weight, speed and duration. Only the grade changes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700">
                <th className="py-2 pr-4 font-medium">Incline</th>
                <th className="py-2 pr-4 font-medium">MET</th>
                <th className="py-2 pr-4 font-medium">Calories</th>
                <th className="py-2 font-medium">vs flat</th>
              </tr>
            </thead>
            <tbody>
              {inclineTable.map((row) => (
                <tr
                  key={row.incline}
                  className={`border-b border-neutral-100 dark:border-neutral-700/50 ${
                    row.incline === incline ? "bg-[#ED772F]/10" : ""
                  }`}
                >
                  <td className="py-2 pr-4 text-neutral-900 dark:text-white">
                    {row.incline}%
                  </td>
                  <td className="py-2 pr-4 text-neutral-600 dark:text-neutral-400">
                    {row.met.toFixed(1)}
                  </td>
                  <td className="py-2 pr-4 text-neutral-900 dark:text-white font-medium">
                    {formatNumber(row.calories)}
                  </td>
                  <td className="py-2 text-neutral-600 dark:text-neutral-400">
                    {inclineTable[0].calories > 0
                      ? `+${Math.round(
                          (row.calories / inclineTable[0].calories - 1) * 100
                        )}%`
                      : "—"}
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
