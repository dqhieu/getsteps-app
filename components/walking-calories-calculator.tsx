"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateFromDistance,
  calculateFromDuration,
  type WalkingSpeed,
  WALKING_MET_VALUES,
} from "@/lib/calorie-calculator";
import { lbsToKg, kgToLbs, milesToKm, formatTime } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber } from "@/lib/i18n/format";
import type { WalkingCaloriesMessages } from "@/lib/i18n/messages/tool-pages/walking-calories-calculator/en";

type WeightUnit = "kg" | "lbs";
type DistanceUnit = "km" | "miles";
type CalculationMode = "distance" | "time";
type CalculatorMessages = WalkingCaloriesMessages["calculator"];

const DEFAULT_VALUES = {
  weight: 70,
  distance: 5,
  duration: 60,
  speed: "normal" as WalkingSpeed,
};

const SPEED_ORDER: WalkingSpeed[] = ["slow", "normal", "brisk", "fast"];

const PACE_ROWS: { id: WalkingSpeed; kmh: number; mph: number; met: number }[] = [
  { id: "slow", kmh: 3.2, mph: 2, met: 2.5 },
  { id: "normal", kmh: 5, mph: 3.1, met: 3.5 },
  { id: "brisk", kmh: 6.4, mph: 4, met: 4.5 },
  { id: "fast", kmh: 7.2, mph: 4.5, met: 5 },
];

function formatMeasure(value: number, locale: Locale): string {
  return Number.isInteger(value)
    ? formatNumber(value, locale)
    : formatDecimal(value, locale, 1);
}

export function WalkingCaloriesCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: CalculatorMessages;
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [mode, setMode] = useState<CalculationMode>("distance");
  const [weight, setWeight] = useState<number>(DEFAULT_VALUES.weight);
  const [weightUnit, setWeightUnit] = useState<WeightUnit>("kg");
  const [distance, setDistance] = useState<number>(DEFAULT_VALUES.distance);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");
  const [duration, setDuration] = useState<number>(DEFAULT_VALUES.duration);
  const [speed, setSpeed] = useState<WalkingSpeed>(DEFAULT_VALUES.speed);

  const weightKg = useMemo(
    () => (weightUnit === "kg" ? weight : lbsToKg(weight)),
    [weight, weightUnit]
  );

  const distanceKm = useMemo(
    () => (distanceUnit === "km" ? distance : milesToKm(distance)),
    [distance, distanceUnit]
  );

  const results = useMemo(() => {
    if (mode === "distance") {
      return calculateFromDistance(distanceKm, weightKg, speed);
    }
    return calculateFromDuration(duration, weightKg, speed);
  }, [mode, distanceKm, duration, weightKg, speed]);

  const handleWeightUnitChange = (newUnit: WeightUnit) => {
    if (newUnit === weightUnit) return;
    if (newUnit === "lbs") {
      setWeight(Math.round(kgToLbs(weight)));
    } else {
      setWeight(Math.round(lbsToKg(weight)));
    }
    setWeightUnit(newUnit);
  };

  return (
    <div className="space-y-8">
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.calculateBy}
        </h2>

        <div className="flex gap-2 mb-6">
          <button
            onClick={() => setMode("distance")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "distance"
                ? "bg-accent text-white"
                : "bg-surface text-muted-soft hover:bg-ghost-hover"
            }`}
          >
            {t.distance}
          </button>
          <button
            onClick={() => setMode("time")}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
              mode === "time"
                ? "bg-accent text-white"
                : "bg-surface text-muted-soft hover:bg-ghost-hover"
            }`}
          >
            {t.time}
          </button>
        </div>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.weight}
            </label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-12 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {weightUnit}
                </span>
              </div>
              <button
                onClick={() => handleWeightUnitChange(weightUnit === "kg" ? "lbs" : "kg")}
                className="py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors"
              >
                {weightUnit === "kg" ? "lbs" : "kg"}
              </button>
            </div>
          </div>

          {mode === "distance" ? (
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.distance}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distance}
                  onChange={(e) => setDistance(Number(e.target.value))}
                  step={0.1}
                  className="flex-1 py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                />
                <select
                  value={distanceUnit}
                  onChange={(e) => setDistanceUnit(e.target.value as DistanceUnit)}
                  className="py-3 pl-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] appearance-none bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23737373%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"
                >
                  <option value="km">km</option>
                  <option value="miles">{t.miles}</option>
                </select>
              </div>
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.duration}
              </label>
              <div className="relative">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {t.minutes}
                </span>
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.walkingSpeed}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {SPEED_ORDER.map((id) => {
                const option = t.speeds[id];
                return (
                  <button
                    key={id}
                    onClick={() => setSpeed(id)}
                    className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                      speed === id
                        ? "bg-accent text-white"
                        : "bg-surface text-muted-soft hover:bg-ghost-hover"
                    }`}
                  >
                    <span className="block">{option.label}</span>
                    <span
                      className={`block text-xs mt-0.5 ${
                        speed === id
                          ? "text-white/80"
                          : "text-muted"
                      }`}
                    >
                      {option.description}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted mb-4">
            {t.caloriesBurned}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                {formatNumber(results.caloriesBurned, locale)} kcal
              </p>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-accent/20 grid grid-cols-2 md:grid-cols-4 gap-4">
            <div>
              <p className="text-sm text-muted">
                {mode === "distance" ? t.walkingTime : t.distanceResult}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {mode === "distance"
                  ? formatTime(results.durationMinutes)
                  : `${formatDecimal(results.distanceKm, locale, 1)} km`}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.steps}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatNumber(results.steps, locale)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.fatBurned}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatDecimal(results.fatBurnedGrams, locale, 1)} g
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.metValue}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatMeasure(WALKING_MET_VALUES[speed], locale)}
              </p>
            </div>
          </div>
        </div>
      </div>

      {resultCta}

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-4">
          {t.metTableTitle}
        </h2>
        <p className="text-sm text-muted mb-4">
          {t.metTableIntro}
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[400px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.speed}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.kmh}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.mph}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.met}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.columns.description}
                </th>
              </tr>
            </thead>
            <tbody>
              {PACE_ROWS.map((row) => (
                <tr key={row.id} className="border-b border-border ">
                  <td className="py-3 px-2 font-semibold text-foreground">
                    {t.speeds[row.id].label}
                  </td>
                  <td className="py-3 px-2 text-foreground">
                    {formatDecimal(row.kmh, locale, 1)}
                  </td>
                  <td className="py-3 px-2 text-foreground">
                    {formatDecimal(row.mph, locale, 1)}
                  </td>
                  <td className="py-3 px-2 text-foreground">
                    {formatDecimal(row.met, locale, 1)}
                  </td>
                  <td className="py-3 px-2 text-muted">
                    {t.paceDescriptions[row.id]}
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
