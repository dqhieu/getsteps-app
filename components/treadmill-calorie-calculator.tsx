"use client";

import { useMemo, useState, type ReactNode } from "react";
import { calculateTreadmillSession, generateInclineTable } from "@/lib/treadmill-calculator";
import { kgToLbs, kmToMiles, lbsToKg } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";
import type { TreadmillCalorieCalculatorMessages } from "@/lib/i18n/messages/tool-pages/treadmill-calorie-calculator/en";

type WeightUnit = "kg" | "lbs";
type SpeedUnit = "kmh" | "mph";
type CalculatorCopy = TreadmillCalorieCalculatorMessages["calculator"];

const MPH_TO_KMH = 1.60934;
const INCLINE_PRESETS = [0, 1, 3, 5, 8, 10, 12, 15];

const inputClass =
  "w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg";
const unitBtnClass =
  "py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors";
const labelClass =
  "block text-sm font-medium text-muted-soft mb-2";

export function TreadmillCalorieCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: CalculatorCopy;
  locale?: Locale;
  resultCta?: ReactNode;
}) {
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
    [weightKg, speedKmh, incline, duration],
  );

  const inclineTable = useMemo(
    () => generateInclineTable(weightKg, speedKmh, duration),
    [weightKg, speedKmh, duration],
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

  const percentText = (value: number) =>
    formatNumber(value, locale, { maximumFractionDigits: 1 });

  return (
    <div className="space-y-8">
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.session}
        </h2>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>{t.weight}</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              <button onClick={toggleWeightUnit} className={unitBtnClass}>
                {weightUnit === "kg" ? "lbs" : "kg"}
              </button>
            </div>
          </div>

          <div>
            <label className={labelClass}>{t.speed}</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {speedUnit === "kmh" ? "km/h" : "mph"}
                </span>
              </div>
              <button onClick={toggleSpeedUnit} className={unitBtnClass}>
                {speedUnit === "kmh" ? "mph" : "km/h"}
              </button>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              {interpolate(t.incline, { percent: percentText(incline) })}
            </label>
            <input
              type="range"
              min={0}
              max={15}
              step={0.5}
              value={incline}
              onChange={(e) => setIncline(Number(e.target.value))}
              className="w-full accent-accent mb-3"
            />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {INCLINE_PRESETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setIncline(preset)}
                  className={`py-2 px-2 rounded-lg text-sm font-medium transition-colors ${
                    incline === preset
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {formatNumber(preset, locale)}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>{t.duration}</label>
            <div className="relative">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className={inputClass}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                {t.minutes}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted mb-4">
            {t.caloriesBurned}
          </h3>
          <p className="text-4xl md:text-5xl font-bold text-foreground">
            {interpolate(t.kcalValue, { value: formatNumber(results.calories, locale) })}
          </p>
          {incline > 0 && (
            <p className="mt-3 text-sm text-muted">
              {rich(t.inclineAdds, {
                grade: percentText(incline),
                extra: (
                  <strong className="text-accent">
                    {formatNumber(extraFromIncline, locale)}
                  </strong>
                ),
                flat: formatNumber(results.caloriesAtZeroIncline, locale),
              })}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: t.met, value: formatDecimal(results.met, locale, 1) },
            {
              label: t.distance,
              value: interpolate(t.distanceValue, {
                km: formatDecimal(results.distanceKm, locale, 2),
                mi: formatDecimal(kmToMiles(results.distanceKm), locale, 2),
              }),
            },
            { label: t.estSteps, value: formatNumber(results.steps, locale) },
            {
              label: t.fatBurned,
              value: interpolate(t.grams, {
                value: formatDecimal(results.fatGrams, locale, 1),
              }),
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-xl p-4"
            >
              <p className="text-xs text-muted mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-foreground text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-muted">
          {interpolate(t.equation, {
            gait: results.isRunning ? t.gaitRunning : t.gaitWalking,
            vo2: formatDecimal(results.vo2, locale, 1),
          })}
        </p>

        {resultCta}
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h3 className="text-lg font-semibold text-foreground mb-4">
          {t.tableTitle}
        </h3>
        <p className="text-sm text-muted mb-4">{t.tableSubtitle}</p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-border">
                <th className="py-2 pr-4 font-medium">{t.colIncline}</th>
                <th className="py-2 pr-4 font-medium">{t.colMet}</th>
                <th className="py-2 pr-4 font-medium">{t.colCalories}</th>
                <th className="py-2 font-medium">{t.colVsFlat}</th>
              </tr>
            </thead>
            <tbody>
              {inclineTable.map((row) => (
                <tr
                  key={row.incline}
                  className={`border-b border-border  ${
                    row.incline === incline ? "bg-chip" : ""
                  }`}
                >
                  <td className="py-2 pr-4 text-foreground">
                    {formatNumber(row.incline, locale)}%
                  </td>
                  <td className="py-2 pr-4 text-muted">
                    {formatDecimal(row.met, locale, 1)}
                  </td>
                  <td className="py-2 pr-4 text-foreground font-medium">
                    {formatNumber(row.calories, locale)}
                  </td>
                  <td className="py-2 text-muted">
                    {inclineTable[0].calories > 0
                      ? interpolate(t.vsFlat, {
                          percent: formatNumber(
                            Math.round((row.calories / inclineTable[0].calories - 1) * 100),
                            locale,
                          ),
                        })
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
