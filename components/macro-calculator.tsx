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
  const btnActive = `${btnBase} bg-accent text-white`;
  const btnInactive = `${btnBase} bg-surface text-muted`;
  const inputCls = "w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]";

  const macros = result
    ? [
        { key: "protein" as const, label: t.protein, data: result.protein, color: "#ED772F" },
        { key: "carbs" as const, label: t.carbs, data: result.carbs, color: "#3B82F6" },
        { key: "fat" as const, label: t.fat, data: result.fat, color: "#EAB308" },
      ]
    : [];

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)] space-y-5">
        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.gender}</label>
          <div className="flex gap-2">
            <button onClick={() => setGender("male")} className={gender === "male" ? btnActive : btnInactive}>{t.male}</button>
            <button onClick={() => setGender("female")} className={gender === "female" ? btnActive : btnInactive}>{t.female}</button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.age}</label>
          <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))} className={inputCls} />
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.weight}</label>
          <div className="flex gap-2">
            <div className="relative flex-1">
              <input type="number" value={weight} onChange={(e) => {
                    const val = e.target.value.replace(/[^0-9.]/g, "");
                    if (val === "") return;
                    setWeight(Number(val));
                  }} className={`${inputCls} pr-12`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">{weightUnit}</span>
            </div>
            <button onClick={handleWeightUnitToggle} className="py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors">
              {weightUnit === "kg" ? "lbs" : "kg"}
            </button>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.height}</label>
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
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">cm</span>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.activityLevel}</label>
          <div className="flex flex-wrap gap-2">
            {ACTIVITY_LEVELS.map((level) => (
              <button key={level} onClick={() => setActivityLevel(level)} className={activityLevel === level ? btnActive : btnInactive}>
                {t.activity[level]}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.goal}</label>
          <div className="flex gap-2">
            {GOALS.map((g) => (
              <button key={g} onClick={() => setGoal(g)} className={goal === g ? btnActive : btnInactive}>
                {t.goals[g]}
              </button>
            ))}
          </div>
        </div>

        <button onClick={handleCalculate} className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]">
          {t.calculate}
        </button>
      </div>

      {result && (
        <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)] space-y-6">
          <div className="text-center">
            <p className="text-sm text-muted mb-1">{t.dailyTarget}</p>
            <p className="text-4xl font-bold text-foreground">{formatNumber(result.targetCalories, locale)} <span className="text-xl font-normal">{t.cal}</span></p>
            <p className="text-sm text-muted mt-1">
              {interpolate(t.bmrTdee, {
                bmr: formatNumber(result.bmr, locale),
                tdee: formatNumber(result.tdee, locale),
              })}
            </p>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {macros.map(({ key, label, data, color }) => (
              <div key={key} className="bg-surface /40 rounded-xl p-4 text-center">
                <p className="text-xs font-medium text-muted mb-1">{label}</p>
                <p className="text-2xl font-bold text-foreground">{interpolate(t.grams, { grams: formatNumber(data.grams, locale) })}</p>
                <p className="text-xs text-muted">{formatNumber(data.calories, locale)} {t.cal}</p>
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
            <div className="flex justify-between mt-2 text-xs text-muted">
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
