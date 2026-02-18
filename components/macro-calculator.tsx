"use client";

import { useState } from "react";
import {
  calculateMacros,
  type Gender,
  type ActivityLevel,
  type MacroGoal,
  type MacroResult,
} from "@/lib/macro-calculator";

const ACTIVITY_LABELS: Record<ActivityLevel, string> = {
  sedentary: "Sedentary",
  light: "Lightly Active",
  moderate: "Moderately Active",
  active: "Active",
  very_active: "Very Active",
};

const GOAL_LABELS: Record<MacroGoal, string> = {
  weight_loss: "Weight Loss",
  maintenance: "Maintenance",
  muscle_gain: "Muscle Gain",
};

function lbsToKg(lbs: number) { return lbs / 2.20462; }
function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }

export function MacroCalculator() {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState(30);
  const [weight, setWeight] = useState(75);
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightCm, setHeightCm] = useState(175);
  const [activityLevel, setActivityLevel] = useState<ActivityLevel>("moderate");
  const [goal, setGoal] = useState<MacroGoal>("maintenance");
  const [result, setResult] = useState<MacroResult | null>(null);

  const handleWeightUnitToggle = () => {
    if (weightUnit === "kg") {
      setWeight(kgToLbs(weight));
      setWeightUnit("lbs");
    } else {
      setWeight(Math.round(lbsToKg(weight)));
      setWeightUnit("kg");
    }
  };

  const handleCalculate = () => {
    const weightKg = weightUnit === "kg" ? weight : lbsToKg(weight);
    const macroResult = calculateMacros(gender, weightKg, heightCm, age, activityLevel, goal);
    setResult(macroResult);
  };

  const btnBase = "flex-1 py-2 px-3 rounded-lg text-sm font-medium transition-colors";
  const btnActive = `${btnBase} bg-[#ED772F] text-white`;
  const btnInactive = `${btnBase} bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400`;
  const inputCls = "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent";

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 space-y-5">
        {/* Gender */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Gender</label>
          <div className="flex gap-2">
            <button onClick={() => setGender("male")} className={gender === "male" ? btnActive : btnInactive}>Male</button>
            <button onClick={() => setGender("female")} className={gender === "female" ? btnActive : btnInactive}>Female</button>
          </div>
        </div>

        {/* Age */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Age</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className={inputCls} />
        </div>

        {/* Weight */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Weight</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input type="number" value={weight} onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9.]/g, "");
                    if (val === "") return;
                    setWeight(Number(val));
                  }} className={`${inputCls} pr-12`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm pointer-events-none">{weightUnit}</span>
            </div>
            <button onClick={handleWeightUnitToggle} className="py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors">
              {weightUnit === "kg" ? "lbs" : "kg"}
            </button>
          </div>
        </div>

        {/* Height */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Height (cm)</label>
          <div className="relative">
            <input
              type="text"
              inputMode="numeric"
              pattern="[0-9]*"
              value={heightCm}
              onChange={(e) => {
                const val = e.target.value.replace(/[^0-9]/g, "");
                if (val === "") return;
                setHeightCm(Number(val));
              }}
              className={`${inputCls} pr-12`} />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm pointer-events-none">cm</span>
          </div>
        </div>

        {/* Activity Level */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Activity Level</label>
          <div className="flex flex-wrap gap-2">
            {(Object.keys(ACTIVITY_LABELS) as ActivityLevel[]).map((level) => (
              <button key={level} onClick={() => setActivityLevel(level)} className={activityLevel === level ? btnActive : btnInactive}>
                {ACTIVITY_LABELS[level]}
              </button>
            ))}
          </div>
        </div>

        {/* Goal */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Goal</label>
          <div className="flex gap-2">
            {(Object.keys(GOAL_LABELS) as MacroGoal[]).map((g) => (
              <button key={g} onClick={() => setGoal(g)} className={goal === g ? btnActive : btnInactive}>
                {GOAL_LABELS[g]}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleCalculate} className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          Calculate Macros
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 space-y-6">
          {/* Summary */}
          <div className="text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">Your daily target</p>
            <p className="text-4xl font-bold text-neutral-900 dark:text-white">{result.targetCalories.toLocaleString()} <span className="text-xl font-normal">cal</span></p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">BMR: {result.bmr} · TDEE: {result.tdee}</p>
          </div>

          {/* Macro Cards */}
          <div className="grid grid-cols-3 gap-3">
            {[
              { label: "Protein", data: result.protein, color: "#ED772F" },
              { label: "Carbs", data: result.carbs, color: "#3B82F6" },
              { label: "Fat", data: result.fat, color: "#EAB308" },
            ].map(({ label, data, color }) => (
              <div key={label} className="bg-neutral-50 dark:bg-neutral-700/40 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{data.grams}g</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{data.calories} cal</p>
                <p className="text-xs font-semibold mt-1" style={{ color }}>{data.percent}%</p>
              </div>
            ))}
          </div>

          {/* Macro Bar */}
          <div>
            <div className="flex h-4 rounded-full overflow-hidden gap-0.5">
              <div className="rounded-l-full" style={{ width: `${result.protein.percent}%`, backgroundColor: "#ED772F" }} />
              <div style={{ width: `${result.carbs.percent}%`, backgroundColor: "#3B82F6" }} />
              <div className="rounded-r-full" style={{ width: `${result.fat.percent}%`, backgroundColor: "#EAB308" }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span style={{ color: "#ED772F" }}>Protein {result.protein.percent}%</span>
              <span style={{ color: "#3B82F6" }}>Carbs {result.carbs.percent}%</span>
              <span style={{ color: "#EAB308" }}>Fat {result.fat.percent}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
