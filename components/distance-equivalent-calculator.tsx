"use client";

import { useState, useEffect } from "react";
import {
  convertDistance,
  QUICK_DISTANCES,
  type DistanceUnit,
  type DistanceResult,
} from "@/lib/distance-equivalent-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import en, {
  type DistanceEquivalentCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/distance-equivalent-calculator/en";

const EMPTY: DistanceResult = {
  km: "—", miles: "—", meters: "—", yards: "—", feet: "—",
  steps: "—",
  timeWalking: "—", timeJogging: "—", timeRunning: "—",
  calWalking: "—", calJogging: "—", calRunning: "—",
};

const UNITS: DistanceUnit[] = ["km", "miles", "meters", "yards"];

const ACTIVITIES = ["walking", "jogging", "running"] as const;

export function DistanceEquivalentCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
}: {
  t?: DistanceEquivalentCalculatorMessages["calculator"];
  locale?: Locale;
} = {}) {
  const [value, setValue] = useState("5");
  const [unit, setUnit] = useState<DistanceUnit>("km");
  const [result, setResult] = useState<DistanceResult>(EMPTY);

  useEffect(() => {
    const num = parseFloat(value);
    setResult(isFinite(num) && num > 0 ? convertDistance(num, unit, locale) : EMPTY);
  }, [value, unit, locale]);

  const handleQuick = (v: number, u: DistanceUnit) => {
    setValue(v.toString());
    setUnit(u);
  };

  const inputCls =
    "flex-1 py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-base";

  const times = {
    walking: result.timeWalking,
    jogging: result.timeJogging,
    running: result.timeRunning,
  };
  const calories = {
    walking: result.calWalking,
    jogging: result.calJogging,
    running: result.calRunning,
  };

  const distCard = (label: string, cardValue: string) => (
    <div className="bg-surface rounded-xl p-4 text-center">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-base font-bold text-foreground font-mono">{cardValue}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-4">{t.enterDistance}</h2>

        <div className="flex flex-wrap gap-2 mb-4">
          {QUICK_DISTANCES.map((q) => (
            <button
              key={q.id}
              onClick={() => handleQuick(q.value, q.unit)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                value === q.value.toString() && unit === q.unit
                  ? "bg-accent text-white"
                  : "bg-surface text-muted"
              }`}
            >
              {t.quick[q.id]}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            value={value}
            step={0.001}
            placeholder={t.placeholder}
            className={inputCls}
            onChange={(e) => setValue(e.target.value)}
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as DistanceUnit)}
            className="py-3 pl-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-base appearance-none bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23737373%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"
          >
            {UNITS.map((u) => (
              <option key={u} value={u}>{t.units[u]}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h3 className="text-base font-semibold text-foreground mb-4">{t.equivalents}</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {distCard(t.kilometers, result.km)}
          {distCard(t.miles, result.miles)}
          {distCard(t.meters, result.meters)}
          {distCard(t.yards, result.yards)}
          {distCard(t.feet, result.feet)}
          <div className="bg-chip rounded-xl p-4 text-center">
            <p className="text-xs text-accent mb-1 font-medium">{t.approxSteps}</p>
            <p className="text-base font-bold text-accent">{result.steps}</p>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h3 className="text-base font-semibold text-foreground mb-4">{t.context}</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-2 text-muted font-medium">{t.activity}</th>
                <th className="text-center py-2 text-muted font-medium">{t.speed}</th>
                <th className="text-center py-2 text-muted font-medium">{t.time}</th>
                <th className="text-right py-2 text-muted font-medium">{t.calories}</th>
              </tr>
            </thead>
            <tbody>
              {ACTIVITIES.map((id, index) => (
                <tr
                  key={id}
                  className={index < ACTIVITIES.length - 1 ? "border-b border-border " : undefined}
                >
                  <td className="py-3 font-medium text-foreground">{t.activities[id]}</td>
                  <td className="py-3 text-center text-muted">{t.speeds[id]}</td>
                  <td className="py-3 text-center font-mono text-foreground">{times[id]}</td>
                  <td className="py-3 text-right text-foreground">{calories[id]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-muted mt-2">{t.calorieNote}</p>
      </div>
    </div>
  );
}
