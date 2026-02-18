"use client";

import { useState } from "react";
import {
  calculateTDEE,
  ACTIVITY_LABELS,
  type Gender,
  type ActivityLevel,
} from "@/lib/tdee-calculator";

const ACTIVITY_LEVELS: ActivityLevel[] = ["sedentary", "light", "moderate", "active", "very_active"];

function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }
function lbsToKg(lbs: number) { return lbs / 2.20462; }
function cmToFtIn(cm: number) { const totalIn = cm / 2.54; const ft = Math.floor(totalIn / 12); return { ft, inch: Math.round(totalIn % 12) }; }
function ftInToCm(ft: number, inch: number) { return (ft * 12 + inch) * 2.54; }

export function TDEECalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<number>(30);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightCm, setHeightCm] = useState<number>(175);
  const [heightUnit, setHeightUnit] = useState<"cm" | "ftin">("cm");
  const [ftVal, setFtVal] = useState<number>(5);
  const [inVal, setInVal] = useState<number>(9);
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [calculated, setCalculated] = useState(false);

  const effectiveHeightCm = heightUnit === "cm" ? heightCm : ftInToCm(ftVal, inVal);
  const result = calculateTDEE(gender, weightKg, effectiveHeightCm, age, activity);

  function handleWeightChange(val: number) {
    if (weightUnit === "kg") setWeightKg(val);
    else setWeightKg(lbsToKg(val));
  }

  function handleHeightCmChange(val: number) { setHeightCm(val); }

  const displayWeight = weightUnit === "kg" ? Math.round(weightKg) : kgToLbs(weightKg);
  const { ft: displayFt, inch: displayIn } = cmToFtIn(heightCm);

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">Your Details</h2>

        <div className="space-y-5">
          {/* Gender */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Gender</label>
            <div className="flex gap-2">
              {(["male", "female"] as Gender[]).map((g) => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-colors capitalize ${gender === g ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {g}
                </button>
              ))}
            </div>
          </div>

          {/* Age */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Age</label>
            <div className="relative max-w-xs">
              <input type="number" value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">years</span>
            </div>
          </div>

          {/* Weight */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Weight</label>
              <div className="flex gap-1">
                {(["kg", "lbs"] as const).map((u) => (
                  <button key={u} onClick={() => setWeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${weightUnit === u ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative max-w-xs">
              <input type="number" value={displayWeight}
                onChange={(e) => handleWeightChange(Number(e.target.value) || 0)}
                className="w-full py-3 px-4 pr-14 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">{weightUnit}</span>
            </div>
          </div>

          {/* Height */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">Height</label>
              <div className="flex gap-1">
                {(["cm", "ftin"] as const).map((u) => (
                  <button key={u} onClick={() => setHeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${heightUnit === u ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                    {u === "ftin" ? "ft/in" : u}
                  </button>
                ))}
              </div>
            </div>
            {heightUnit === "cm" ? (
              <div className="relative max-w-xs">
                <input
                  type="text"
                  inputMode="numeric"
                  pattern="[0-9]*"
                  value={heightCm}
                  onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9]/g, "");
                    if (val === "") return;
                    handleHeightCmChange(Number(val));
                  }}
                  onBlur={(e) => handleHeightCmChange(Number(e.target.value) || 170)}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">cm</span>
              </div>
            ) : (
              <div className="flex gap-2 max-w-xs">
                <div className="relative flex-1">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={displayFt}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      if (val === "") return;
                      const ft = Number(val);
                      setFtVal(ft);
                      setHeightCm(ftInToCm(ft, inVal));
                    }}
                    className="w-full py-3 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">ft</span>
                </div>
                <div className="relative flex-1">
                  <input
                    type="text"
                    inputMode="numeric"
                    pattern="[0-9]*"
                    value={displayIn}
                    onChange={(e) => {
                      const val = e.target.value.replace(/[^0-9]/g, "");
                      if (val === "") return;
                      const inch = Number(val);
                      setInVal(inch);
                      setHeightCm(ftInToCm(ftVal, inch));
                    }}
                    className="w-full py-3 px-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">in</span>
                </div>
              </div>
            )}
          </div>

          {/* Activity Level */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Activity Level</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ACTIVITY_LEVELS.map((level) => (
                <button key={level} onClick={() => setActivity(level)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-colors text-center ${activity === level ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {ACTIVITY_LABELS[level]}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => setCalculated(true)}
            className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
            Calculate TDEE
          </button>
        </div>
      </div>

      {/* Results */}
      {calculated && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Your Results</h2>

          {/* BMR + TDEE stat cards */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 text-center">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">BMR</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">{result.bmr}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">cal/day at rest</p>
            </div>
            <div className="rounded-xl p-4 bg-[#ED772F]/10 dark:bg-[#ED772F]/20 border border-[#ED772F]/30 text-center">
              <p className="text-xs text-[#ED772F] font-medium mb-1">TDEE</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">{result.tdee}</p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400">cal/day total</p>
            </div>
          </div>

          {/* Calorie Goals Table */}
          <div className="space-y-2">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Calorie Goals</p>
            {result.goals.map((goal) => (
              <div key={goal.label}
                className={`flex items-center justify-between p-3 rounded-xl ${goal.isMaintenance ? "border-2 border-[#ED772F] bg-[#ED772F]/5 dark:bg-[#ED772F]/10" : "bg-neutral-50 dark:bg-neutral-700/30"}`}>
                <div>
                  <span className="text-sm font-medium text-neutral-900 dark:text-white">{goal.label}</span>
                  {goal.isMaintenance && <span className="ml-2 text-xs text-[#ED772F] font-semibold">Maintenance</span>}
                  {goal.warn && <span className="ml-2 text-xs text-red-500">Below minimum</span>}
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{goal.weeklyGoal}</p>
                </div>
                <span className="text-sm font-bold text-neutral-900 dark:text-white">{Math.max(0, goal.calories).toLocaleString()} cal</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
