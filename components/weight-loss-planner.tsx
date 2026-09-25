"use client";

import { useState, type ReactNode } from "react";
import {
  calculateWeightLossPlan,
  CALORIES_PER_KG_FAT,
  MIN_CALORIES,
  MAX_SAFE_WEEKLY_FRACTION,
  RATE_OPTIONS,
  type RateKey,
} from "@/lib/weight-loss-planner";
import { type Gender, type ActivityLevel } from "@/lib/bmr-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { ToolAppCta } from "@/components/tool-app-cta";
import en, {
  type WeightLossCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/weight-loss-calculator/en";

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

function formatRate(kg: number, locale: Locale): string {
  if (Number.isInteger(kg)) return formatNumber(kg, locale);
  const digits = kg.toString().split(".")[1]?.length ?? 1;
  return formatDecimal(kg, locale, digits);
}

const INPUT_CLASS =
  "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";

export function WeightLossPlanner({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: WeightLossCalculatorMessages["calculator"];
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  const [gender, setGender] = useState<Gender>("female");
  const [age, setAge] = useState<number>(35);
  const [heightCm, setHeightCm] = useState<number>(165);
  const [heightUnit, setHeightUnit] = useState<"cm" | "ftin">("cm");
  const [currentKg, setCurrentKg] = useState<number>(80);
  const [goalKg, setGoalKg] = useState<number>(70);
  const [weightUnit, setWeightUnit] = useState<"kg" | "lbs">("kg");
  const [activity, setActivity] = useState<ActivityLevel>("light");
  const [rateKey, setRateKey] = useState<RateKey>("moderate");
  const [calculated, setCalculated] = useState(false);

  const rate = RATE_OPTIONS.find((r) => r.key === rateKey) ?? RATE_OPTIONS[1];
  const plan = calculateWeightLossPlan(gender, age, heightCm, currentKg, goalKg, activity, rate.kgPerWeek);

  const showWeight = (kg: number) => (weightUnit === "kg" ? Math.round(kg) : kgToLbs(kg));
  const toKg = (val: number) => (weightUnit === "kg" ? val : lbsToKg(val));
  const { ft: displayFt, inch: displayIn } = cmToFtIn(heightCm);

  const warnings: { id: string; text: string }[] = [];
  if (!plan.isGainGoal) {
    const floor = MIN_CALORIES[gender];
    const rawTarget = plan.tdee - Math.round((rate.kgPerWeek * CALORIES_PER_KG_FAT) / 7);
    const rateText = formatRate(rate.kgPerWeek, locale);
    if (rawTarget < floor) {
      warnings.push({
        id: "floor",
        text: interpolate(gender === "male" ? t.warnings.floorMale : t.warnings.floorFemale, {
          rate: rateText,
          raw: formatNumber(rawTarget, locale),
          floor: formatNumber(floor, locale),
        }),
      });
    }
    if (rate.kgPerWeek > currentKg * MAX_SAFE_WEEKLY_FRACTION) {
      warnings.push({
        id: "tooFast",
        text: interpolate(t.warnings.tooFast, { rate: rateText }),
      });
    }
    if (plan.weeksToGoal > 13) {
      warnings.push({ id: "long", text: t.warnings.longPlan });
    }
  }

  const weightText = (kg: number) =>
    interpolate(weightUnit === "kg" ? t.weightKg : t.weightLbs, {
      value: weightUnit === "kg" ? formatMeasure(kg, locale) : formatNumber(kgToLbs(kg), locale),
    });

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

          <div className="grid grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.age}</label>
              <div className="relative">
                <input type="number" value={age} onChange={(e) => setAge(Number(e.target.value))}
                  className={`${INPUT_CLASS} pr-14`} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs pointer-events-none">{t.years}</span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t.height}</label>
                <div className="flex gap-1">
                  {(["cm", "ftin"] as const).map((u) => (
                    <button key={u} onClick={() => setHeightUnit(u)}
                      className={`px-2 py-0.5 rounded-lg text-xs font-medium transition-colors ${heightUnit === u ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                      {u === "ftin" ? "ft/in" : u}
                    </button>
                  ))}
                </div>
              </div>
              {heightUnit === "cm" ? (
                <div className="relative">
                  <input type="number" value={Math.round(heightCm)} onChange={(e) => setHeightCm(Number(e.target.value) || 0)}
                    className={`${INPUT_CLASS} pr-10`} />
                  <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs pointer-events-none">cm</span>
                </div>
              ) : (
                <div className="flex gap-2">
                  <div className="relative flex-1">
                    <input type="number" value={displayFt}
                      onChange={(e) => setHeightCm(ftInToCm(Number(e.target.value) || 0, displayIn))}
                      className={`${INPUT_CLASS} pr-8`} />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs pointer-events-none">ft</span>
                  </div>
                  <div className="relative flex-1">
                    <input type="number" value={displayIn}
                      onChange={(e) => setHeightCm(ftInToCm(displayFt, Number(e.target.value) || 0))}
                      className={`${INPUT_CLASS} pr-8`} />
                    <span className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs pointer-events-none">in</span>
                  </div>
                </div>
              )}
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t.weights}</label>
              <div className="flex gap-1">
                {(["kg", "lbs"] as const).map((u) => (
                  <button key={u} onClick={() => setWeightUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${weightUnit === u ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <input type="number" value={showWeight(currentKg)}
                  onChange={(e) => setCurrentKg(toKg(Number(e.target.value) || 0))}
                  className={`${INPUT_CLASS} pr-12`} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs pointer-events-none">{t.now}</span>
              </div>
              <div className="relative">
                <input type="number" value={showWeight(goalKg)}
                  onChange={(e) => setGoalKg(toKg(Number(e.target.value) || 0))}
                  className={`${INPUT_CLASS} pr-12`} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-xs pointer-events-none">{t.goal}</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.activity}</label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {ACTIVITY_LEVELS.map((level) => (
                <button key={level} onClick={() => setActivity(level)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium transition-colors text-center ${activity === level ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {t.activityLevels[level]}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">{t.activityDescriptions[activity]}</p>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.rate}</label>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {RATE_OPTIONS.map((r) => (
                <button key={r.key} onClick={() => setRateKey(r.key)}
                  className={`py-2 px-2 rounded-xl text-xs font-medium transition-colors text-center ${rateKey === r.key ? "bg-[#ED772F] text-white" : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"}`}>
                  {t.rates[r.key].label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">{t.rates[rate.key].description}</p>
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
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{t.plan}</h2>

            {plan.isGainGoal ? (
              <p className="text-sm text-neutral-600 dark:text-neutral-400">{t.gainGoal}</p>
            ) : (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6">
                  <div className="rounded-xl p-4 bg-[#ED772F]/10 dark:bg-[#ED772F]/20 border border-[#ED772F]/30 text-center">
                    <p className="text-xs text-[#ED772F] font-medium mb-1">{t.eatPerDay}</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{formatNumber(plan.dailyTarget, locale)}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.calories}</p>
                  </div>
                  <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.dailyDeficit}</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{formatNumber(plan.dailyDeficit, locale)}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.belowTdee}</p>
                  </div>
                  <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.toLose}</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                      {weightUnit === "kg"
                        ? formatMeasure(plan.weightToLoseKg, locale)
                        : formatNumber(kgToLbs(plan.weightToLoseKg), locale)}
                    </p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{weightUnit}</p>
                  </div>
                  <div className="rounded-xl p-4 bg-neutral-50 dark:bg-neutral-700/30 text-center">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{t.timeToGoal}</p>
                    <p className="text-2xl font-bold text-neutral-900 dark:text-white">{formatNumber(plan.weeksToGoal, locale)}</p>
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.weeks}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3 mb-6 text-center">
                  <div className="rounded-xl p-3 bg-neutral-50 dark:bg-neutral-700/30">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.yourBmr}</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">
                      {interpolate(t.calValue, { value: formatNumber(plan.bmr, locale) })}
                    </p>
                  </div>
                  <div className="rounded-xl p-3 bg-neutral-50 dark:bg-neutral-700/30">
                    <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.yourTdee}</p>
                    <p className="text-lg font-bold text-neutral-900 dark:text-white">
                      {interpolate(t.calValue, { value: formatNumber(plan.tdee, locale) })}
                    </p>
                  </div>
                </div>

                {warnings.length > 0 && (
                  <div className="mb-6 space-y-2">
                    {warnings.map((w) => (
                      <p key={w.id} className="text-sm text-amber-700 dark:text-amber-400 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-3">
                        {w.text}
                      </p>
                    ))}
                  </div>
                )}

                {plan.milestones.length > 0 && (
                  <div>
                    <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">{t.milestones}</p>
                    <div className="space-y-2">
                      {plan.milestones.map((m) => (
                        <div key={m.weekNumber} className="flex items-center justify-between p-3 rounded-xl bg-neutral-50 dark:bg-neutral-700/30">
                          <span className="text-sm font-medium text-neutral-900 dark:text-white">
                            {interpolate(t.week, { week: formatNumber(m.weekNumber, locale) })}
                          </span>
                          <div className="flex items-center gap-3">
                            <div className="w-24 h-1.5 rounded-full bg-neutral-200 dark:bg-neutral-600 overflow-hidden">
                              <div className="h-full bg-[#ED772F]" style={{ width: `${m.percentOfGoal}%` }} />
                            </div>
                            <span className="text-sm font-bold text-neutral-900 dark:text-white whitespace-nowrap">
                              {weightText(m.weightKg)}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          {!plan.isGainGoal && (
            resultCta ?? (
              <ToolAppCta
                locale={locale}
                headline={t.resultCta.headline}
                description={t.resultCta.description}
              />
            )
          )}
        </>
      )}
    </div>
  );
}
