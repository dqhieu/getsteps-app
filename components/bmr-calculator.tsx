"use client";

import { useState, type ReactNode } from "react";
import {
  calculateBMR,
  type Gender,
  type ActivityLevel,
  type FormulaKey,
} from "@/lib/bmr-calculator";
import { DEFAULT_LOCALE, INTL_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";
import { ToolAppCta } from "@/components/tool-app-cta";
import en, {
  type BmrCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/bmr-calculator/en";

const ACTIVITY_LEVELS: ActivityLevel[] = ["sedentary", "light", "moderate", "active", "very_active"];

function kgToLbs(kg: number) { return Math.round(kg * 2.20462); }
function lbsToKg(lbs: number) { return lbs / 2.20462; }
function cmToFtIn(cm: number) { const totalIn = cm / 2.54; return { ft: Math.floor(totalIn / 12), inch: Math.round(totalIn % 12) }; }
function ftInToCm(ft: number, inch: number) { return (ft * 12 + inch) * 2.54; }

function formatMeasure(value: number, locale: Locale): string {
  return Number.isInteger(value)
    ? formatNumber(value, locale)
    : formatDecimal(value, locale, 1);
}

const INPUT_CLASS =
  "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";

export function BMRCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: BmrCalculatorMessages["calculator"];
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  const [gender, setGender] = useState<Gender>("male");
  const [age, setAge] = useState<number>(30);
  const [weightKg, setWeightKg] = useState<number>(75);
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [heightCm, setHeightCm] = useState<number>(175);
  const [heightUnit, setHeightUnit] = useState<"cm" | "ftin">("cm");
  const [bodyFat, setBodyFat] = useState<string>("");
  const [activity, setActivity] = useState<ActivityLevel>("moderate");
  const [calculated, setCalculated] = useState(false);

  const bodyFatValue = bodyFat.trim() === "" ? null : Number(bodyFat);
  const result = calculateBMR(gender, weightKg, heightCm, age, bodyFatValue);

  const displayWeight = weightUnit === "kg" ? Math.round(weightKg) : kgToLbs(weightKg);
  const { ft: displayFt, inch: displayIn } = cmToFtIn(heightCm);

  const selectedMaintenance =
    result.maintenance.find((m) => m.level === activity)?.calories ?? result.bmr;

  const formulaNote = (key: FormulaKey, available: boolean) =>
    key === "katch" && !available ? t.formulaNotes.katchLocked : t.formulaNotes[key];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{t.details}</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.gender}</label>
            <div className="flex gap-2">
              {(["male", "female"] as Gender[]).map((g) => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-colors ${gender === g ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {g === "male" ? t.male : t.female}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.age}</label>
            <div className="relative max-w-xs">
              <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))}
                className={`${INPUT_CLASS} pr-16`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">{t.years}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t.weight}</label>
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
                onChange={(e) => {
                  const val = Number(e.target.value) || 0;
                  setWeightKg(weightUnit === "kg" ? val : lbsToKg(val));
                }}
                className={`${INPUT_CLASS} pr-14`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">{weightUnit}</span>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t.height}</label>
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
                <input type="number" value={Math.round(heightCm)}
                  onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                  className={`${INPUT_CLASS} pr-12`} />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">cm</span>
              </div>
            ) : (
              <div className="flex gap-2 max-w-xs">
                <div className="relative flex-1">
                  <input type="number" value={displayFt}
                    onChange={(e) => setHeightCm(ftInToCm(Number(e.target.value) || 0, displayIn))}
                    className={`${INPUT_CLASS} pr-10`} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">ft</span>
                </div>
                <div className="relative flex-1">
                  <input type="number" value={displayIn}
                    onChange={(e) => setHeightCm(ftInToCm(displayFt, Number(e.target.value) || 0))}
                    className={`${INPUT_CLASS} pr-10`} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">in</span>
                </div>
              </div>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.bodyFat}{" "}
              <span className="font-normal text-neutral-500 dark:text-neutral-400">{t.bodyFatOptional}</span>
            </label>
            <div className="relative max-w-xs">
              <input type="number" value={bodyFat} placeholder={t.bodyFatPlaceholder}
                onChange={(e) => setBodyFat(e.target.value)}
                className={`${INPUT_CLASS} pr-10`} />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">%</span>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.activity}</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ACTIVITY_LEVELS.map((level) => (
                <button key={level} onClick={() => setActivity(level)}
                  title={t.activityDescriptions[level]}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-colors text-center ${activity === level ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {t.activityLevels[level]}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">{t.activityDescriptions[activity]}</p>
          </div>

          <button onClick={() => setCalculated(true)}
            className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
            {t.calculate}
          </button>
        </div>
      </div>

      {calculated && (
        <>
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{t.results}</h2>

            <div className="grid grid-cols-2 gap-3 mb-6">
              <div className="rounded-xl p-4 bg-[#ED772F]/10 dark:bg-[#ED772F]/20 border border-[#ED772F]/30 text-center">
                <p className="text-xs text-[#ED772F] font-medium mb-1">{t.bmr}</p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">{formatNumber(result.bmr, locale)}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.atRest}</p>
              </div>
              <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 text-center">
                <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.maintenance}</p>
                <p className="text-3xl font-bold text-neutral-900 dark:text-white">{formatNumber(selectedMaintenance, locale)}</p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {interpolate(t.maintenanceAt, {
                    level: t.activityLevels[activity].toLocaleLowerCase(INTL_LOCALE[locale]),
                  })}
                </p>
              </div>
            </div>

            {result.leanBodyMassKg !== null && (
              <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
                {rich(t.leanMass, {
                  mass: (
                    <strong className="text-neutral-900 dark:text-white">
                      {interpolate(t.kgValue, {
                        value: formatMeasure(result.leanBodyMassKg, locale),
                      })}
                    </strong>
                  ),
                })}
              </p>
            )}

            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-6">
              {interpolate(t.share, { percent: formatNumber(result.bmrShareOfSedentary, locale) })}
            </p>

            <div className="mb-6">
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">{t.formulasTitle}</p>
              <div className="space-y-2">
                {result.formulas.map((f) => (
                  <div key={f.key}
                    className={`p-3 rounded-xl ${f.key === result.primaryFormula ? "border-2 border-[#ED772F] bg-[#ED772F]/5 dark:bg-[#ED772F]/10" : "bg-neutral-50 dark:bg-neutral-700/30"} ${!f.available ? "opacity-60" : ""}`}>
                    <div className="flex items-center justify-between gap-3">
                      <div className="min-w-0">
                        <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.formulaNames[f.key]}</span>
                        <span className="ml-2 text-xs text-neutral-500 dark:text-neutral-400">{f.year}</span>
                        {f.key === result.primaryFormula && (
                          <span className="ml-2 text-xs text-[#ED772F] font-semibold">{t.used}</span>
                        )}
                      </div>
                      <span className="text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">
                        {f.available ? interpolate(t.calValue, { value: formatNumber(f.bmr, locale) }) : "—"}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">{formulaNote(f.key, f.available)}</p>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">{t.byActivity}</p>
              <div className="space-y-2">
                {result.maintenance.map((m) => (
                  <div key={m.level}
                    className={`flex items-center justify-between p-3 rounded-xl ${m.level === activity ? "border-2 border-[#ED772F] bg-[#ED772F]/5 dark:bg-[#ED772F]/10" : "bg-neutral-50 dark:bg-neutral-700/30"}`}>
                    <div>
                      <span className="text-sm font-medium text-neutral-900 dark:text-white">{t.activityLevels[m.level]}</span>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.activityDescriptions[m.level]}</p>
                    </div>
                    <span className="text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">
                      {interpolate(t.calValue, { value: formatNumber(m.calories, locale) })}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {resultCta ?? (
            <ToolAppCta
              locale={locale}
              headline={t.resultCta.headline}
              description={t.resultCta.description}
            />
          )}
        </>
      )}
    </div>
  );
}
