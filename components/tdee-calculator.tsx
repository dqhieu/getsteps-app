"use client";

import { useState } from "react";
import {
  calculateTDEE,
  type Gender,
  type ActivityLevel,
} from "@/lib/tdee-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatNumber, localizeNumerals } from "@/lib/i18n/format";
import type { TdeeCalculatorMessages } from "@/lib/i18n/messages/tool-pages/tdee-calculator/en";

const ACTIVITY_LEVELS: ActivityLevel[] = ["sedentary", "light", "moderate", "active", "very_active"];

function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }
function lbsToKg(lbs: number) { return lbs / 2.20462; }
function cmToFtIn(cm: number) { const totalIn = cm / 2.54; const ft = Math.floor(totalIn / 12); return { ft, inch: Math.round(totalIn % 12) }; }
function ftInToCm(ft: number, inch: number) { return (ft * 12 + inch) * 2.54; }

export function TDEECalculator({
  t,
  locale = DEFAULT_LOCALE,
}: {
  t: TdeeCalculatorMessages["calculator"];
  locale?: Locale;
}) {
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
  const genderLabel: Record<Gender, string> = { male: t.male, female: t.female };

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">{t.details}</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.gender}</label>
            <div className="flex gap-2">
              {(["male", "female"] as Gender[]).map((g) => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-colors ${gender === g ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                  {genderLabel[g]}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.age}</label>
            <div className="relative max-w-xs">
              <input type="number" value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">{t.years}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-soft">{t.weight}</label>
              <div className="flex gap-1">
                {(["kg", "lbs"] as const).map((u) => (
                  <button key={u} onClick={() => setWeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${weightUnit === u ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div className="relative max-w-xs">
              <input type="number" value={displayWeight}
                onChange={(e) => handleWeightChange(Number(e.target.value) || 0)}
                className="w-full py-3 px-4 pr-14 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg" />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">{weightUnit}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-soft">{t.height}</label>
              <div className="flex gap-1">
                {(["cm", "ftin"] as const).map((u) => (
                  <button key={u} onClick={() => setHeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${heightUnit === u ? "bg-accent text-white" : "bg-surface text-muted"}`}>
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
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg" />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">cm</span>
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
                    className="w-full py-3 px-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">ft</span>
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
                    className="w-full py-3 px-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg" />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">in</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.activityLevel}</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ACTIVITY_LEVELS.map((level) => (
                <button key={level} onClick={() => setActivity(level)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-colors text-center ${activity === level ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                  {t.activity[level]}
                </button>
              ))}
            </div>
          </div>

          <button onClick={() => setCalculated(true)}
            className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]">
            {t.calculate}
          </button>
        </div>
      </div>

      {calculated && (
        <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.results}</h2>

          <div className="grid grid-cols-2 gap-3 mb-6">
            <div className="rounded-xl p-4 bg-surface text-center">
              <p className="text-xs text-muted mb-1">{t.bmr}</p>
              <p className="text-2xl font-bold text-foreground">{formatNumber(result.bmr, locale)}</p>
              <p className="text-xs text-muted">{t.bmrUnit}</p>
            </div>
            <div className="rounded-xl p-4 bg-chip border border-accent/30 text-center">
              <p className="text-xs text-accent font-medium mb-1">{t.tdee}</p>
              <p className="text-2xl font-bold text-foreground">{formatNumber(result.tdee, locale)}</p>
              <p className="text-xs text-muted">{t.tdeeUnit}</p>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-muted-soft mb-3">{t.calorieGoals}</p>
            {result.goals.map((goal) => {
              const copy = t.goals[goal.id];
              return (
                <div key={goal.id}
                  className={`flex items-center justify-between p-3 rounded-xl ${goal.isMaintenance ? "border-2 border-accent bg-accent/5 dark:bg-chip" : "bg-surface"}`}>
                  <div>
                    <span className="text-sm font-medium text-foreground">{copy.label}</span>
                    {goal.isMaintenance && <span className="ml-2 text-xs text-accent font-semibold">{t.maintenanceBadge}</span>}
                    {goal.warn && <span className="ml-2 text-xs text-red-500">{t.belowMinimum}</span>}
                    <p className="text-xs text-muted">{localizeNumerals(copy.weekly, locale)}</p>
                  </div>
                  <span className="text-sm font-bold text-foreground">{formatNumber(Math.max(0, goal.calories), locale)} {t.cal}</span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
