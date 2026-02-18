"use client";

import { useState } from "react";
import {
  calculateVO2Max,
  type VO2Method,
  type Gender,
} from "@/lib/vo2-max-calculator";

const COLOR_CLASSES: Record<string, { bg: string; text: string; border: string }> = {
  green:  { bg: "bg-green-100 dark:bg-green-900/30",  text: "text-green-700 dark:text-green-400",  border: "border-green-300 dark:border-green-700" },
  teal:   { bg: "bg-teal-100 dark:bg-teal-900/30",    text: "text-teal-700 dark:text-teal-400",    border: "border-teal-300 dark:border-teal-700" },
  blue:   { bg: "bg-blue-100 dark:bg-blue-900/30",    text: "text-blue-700 dark:text-blue-400",    border: "border-blue-300 dark:border-blue-700" },
  yellow: { bg: "bg-yellow-100 dark:bg-yellow-900/30",text: "text-yellow-700 dark:text-yellow-400",border: "border-yellow-300 dark:border-yellow-700" },
  red:    { bg: "bg-red-100 dark:bg-red-900/30",      text: "text-red-700 dark:text-red-400",      border: "border-red-300 dark:border-red-700" },
};

export function Vo2MaxCalculator() {
  const [method, setMethod] = useState<VO2Method>("heart_rate");
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState(30);
  const [rhr, setRhr] = useState(60);
  const [distanceKm, setDistanceKm] = useState(2.4);
  const [distanceUnit, setDistanceUnit] = useState<"km" | "miles">("km");
  const [result, setResult] = useState<ReturnType<typeof calculateVO2Max> | null>(null);

  function handleCalculate() {
    const cooperDistanceM =
      method === "cooper"
        ? (distanceUnit === "miles" ? distanceKm * 1609.34 : distanceKm * 1000)
        : undefined;

    setResult(
      calculateVO2Max(method, gender, {
        age: method === "heart_rate" ? age : undefined,
        rhr: method === "heart_rate" ? rhr : undefined,
        cooperDistanceM,
      })
    );
  }

  const colors = result ? COLOR_CLASSES[result.categoryColor] ?? COLOR_CLASSES.blue : null;

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        {/* Method Toggle */}
        <div className="mb-6">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Method</p>
          <div className="flex gap-2">
            {(["heart_rate", "cooper"] as VO2Method[]).map((m) => (
              <button
                key={m}
                onClick={() => setMethod(m)}
                className={`flex-1 py-2 px-3 rounded-xl text-sm font-semibold transition-colors ${
                  method === m
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {m === "heart_rate" ? "Heart Rate Method" : "Cooper 12-Min Run"}
              </button>
            ))}
          </div>
        </div>

        {/* Gender */}
        <div className="mb-4">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Gender</p>
          <div className="flex gap-2 max-w-xs">
            {(["male", "female"] as Gender[]).map((g) => (
              <button
                key={g}
                onClick={() => setGender(g)}
                className={`flex-1 py-2 px-4 rounded-xl text-sm font-semibold transition-colors capitalize ${
                  gender === g
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {g}
              </button>
            ))}
          </div>
        </div>

        {method === "heart_rate" ? (
          <div className="space-y-4">
            {/* Age */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Age
              </label>
              <div className="relative max-w-xs">
                <input
                  type="number"
                  value={age}
                  onChange={(e) => setAge(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-16 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500 dark:text-neutral-400 pointer-events-none">years</span>
              </div>
            </div>
            {/* Resting HR */}
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
                Resting Heart Rate
              </label>
              <div className="relative max-w-xs">
                <input
                  type="number"
                  value={rhr}
                  onChange={(e) => setRhr(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-16 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500 dark:text-neutral-400 pointer-events-none">bpm</span>
              </div>
              <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                Measure first thing in the morning before getting out of bed.
              </p>
            </div>
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Distance covered in 12 minutes
            </label>
            <div className="flex gap-2 max-w-xs">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={distanceKm}
                  step={0.1}
                  onChange={(e) => setDistanceKm(Number(e.target.value))}
                  className="w-full py-3 px-4 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                />
              </div>
              <div className="flex gap-1">
                {(["km", "miles"] as const).map((u) => (
                  <button
                    key={u}
                    onClick={() => setDistanceUnit(u)}
                    className={`px-3 py-2 rounded-xl text-sm font-semibold transition-colors ${
                      distanceUnit === u
                        ? "bg-[#ED772F] text-white"
                        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                    }`}
                  >
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
              Run on a flat track for exactly 12 minutes and record your distance.
            </p>
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="mt-6 w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Calculate VO2 Max
        </button>
      </div>

      {/* Results */}
      {result && colors && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 space-y-4">
          {/* Big number */}
          <div className="text-center py-4">
            <p className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1">Your Estimated VO2 Max</p>
            <div className="flex items-baseline justify-center gap-2">
              <span className="text-6xl font-bold text-neutral-900 dark:text-white">{result.vo2max}</span>
              <span className="text-xl text-neutral-500 dark:text-neutral-400">ml/kg/min</span>
            </div>
          </div>

          {/* Category badge */}
          <div className={`rounded-xl p-4 border ${colors.bg} ${colors.border}`}>
            <div className="flex items-center gap-3 mb-2">
              <span className={`text-lg font-bold ${colors.text}`}>{result.category}</span>
            </div>
            <p className={`text-sm ${colors.text}`}>{result.description}</p>
          </div>

          {/* Tip */}
          <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 border border-neutral-200 dark:border-neutral-700/50">
            <p className="text-xs font-semibold text-neutral-500 dark:text-neutral-400 uppercase tracking-wide mb-1">Improvement Tip</p>
            <p className="text-sm text-neutral-700 dark:text-neutral-300">{result.tip}</p>
          </div>

          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center pt-1">
            VO2 max is the gold standard measure of aerobic fitness — maximum oxygen your body can use during intense exercise. Higher = better cardiovascular capacity. Norms vary by age; these thresholds are simplified for general guidance.
          </p>
        </div>
      )}
    </div>
  );
}
