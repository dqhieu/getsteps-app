"use client";

import { useState } from "react";
import {
  calculateMacros,
  type Gender,
  type ActivityLevel,
  type MacroGoal,
  type MacroResult,
} from "@/lib/macro-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate } from "@/lib/i18n/format";
import type { MacroCalculatorMessages } from "@/lib/i18n/messages/tool-pages/macro-calculator/en";

const ACTIVITY_LEVELS: ActivityLevel[] = ["sedentary", "light", "moderate", "active", "very_active"];
const GOALS: MacroGoal[] = ["weight_loss", "maintenance", "muscle_gain"];

function lbsToKg(lbs: number) { return lbs / 2.20462; }
function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }

export function MacroCalculator({
  t,
  locale = DEFAULT_LOCALE,
}: {
  t: MacroCalculatorMessages["calculator"];
  locale?: Locale;
}) {
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

  const macros = result
    ? [
        { key: "protein" as const, label: t.protein, data: result.protein, color: "#ED772F" },
        { key: "carbs" as const, label: t.carbs, data: result.carbs, color: "#3B82F6" },
        { key: "fat" as const, label: t.fat, data: result.fat, color: "#EAB308" },
      ]
    : [];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 space-y-5">
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.gender}</label>
          <div className="flex gap-2">
            <button onClick={() => setGender("male")} className={gender === "male" ? btnActive : btnInactive}>{t.male}</button>
            <button onClick={() => setGender("female")} className={gender === "female" ? btnActive : btnInactive}>{t.female}</button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.age}</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className={inputCls} />
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.weight}</label>
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

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.height}</label>
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

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.activityLevel}</label>
          <div className="flex flex-wrap gap-2">
            {ACTIVITY_LEVELS.map((level) => (
              <button key={level} onClick={() => setActivityLevel(level)} className={activityLevel === level ? btnActive : btnInactive}>
                {t.activity[level]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.goal}</label>
          <div className="flex gap-2">
            {GOALS.map((g) => (
              <button key={g} onClick={() => setGoal(g)} className={goal === g ? btnActive : btnInactive}>
                {t.goals[g]}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleCalculate} className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          {t.calculate}
        </button>
      </div>

      {result && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 space-y-6">
          <div className="text-center">
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">{t.dailyTarget}</p>
            <p className="text-4xl font-bold text-neutral-900 dark:text-white">{formatNumber(result.targetCalories, locale)} <span className="text-xl font-normal">{t.cal}</span></p>
            <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
              {interpolate(t.bmrTdee, {
                bmr: formatNumber(result.bmr, locale),
                tdee: formatNumber(result.tdee, locale),
              })}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {macros.map(({ key, label, data, color }) => (
              <div key={key} className="bg-neutral-50 dark:bg-neutral-700/40 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
                <p className="text-2xl font-bold text-neutral-900 dark:text-white">{interpolate(t.grams, { grams: formatNumber(data.grams, locale) })}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{formatNumber(data.calories, locale)} {t.cal}</p>
                <p className="text-xs font-semibold mt-1" style={{ color }}>{data.percent}%</p>
              </div>
            ))}
          </div>

          <div>
            <div className="flex h-4 rounded-full overflow-hidden gap-0.5">
              <div className="rounded-l-full" style={{ width: `${result.protein.percent}%`, backgroundColor: "#ED772F" }} />
              <div style={{ width: `${result.carbs.percent}%`, backgroundColor: "#3B82F6" }} />
              <div className="rounded-r-full" style={{ width: `${result.fat.percent}%`, backgroundColor: "#EAB308" }} />
            </div>
            <div className="flex justify-between mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              <span style={{ color: "#ED772F" }}>{t.protein} {result.protein.percent}%</span>
              <span style={{ color: "#3B82F6" }}>{t.carbs} {result.carbs.percent}%</span>
              <span style={{ color: "#EAB308" }}>{t.fat} {result.fat.percent}%</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
