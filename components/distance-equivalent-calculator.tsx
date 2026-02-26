"use client";

import { useState, useEffect } from "react";
import {
  convertDistance,
  QUICK_DISTANCES,
  type DistanceUnit,
  type DistanceResult,
} from "@/lib/distance-equivalent-calculator";

const EMPTY: DistanceResult = {
  km: "—", miles: "—", meters: "—", yards: "—", feet: "—",
  steps: "—",
  timeWalking: "—", timeJogging: "—", timeRunning: "—",
  calWalking: "—", calJogging: "—", calRunning: "—",
};

const UNITS: DistanceUnit[] = ["km", "miles", "meters", "yards"];

export function DistanceEquivalentCalculator() {
  const [value, setValue] = useState("5");
  const [unit, setUnit] = useState<DistanceUnit>("km");
  const [result, setResult] = useState<DistanceResult>(EMPTY);

  useEffect(() => {
    const num = parseFloat(value);
    setResult(isFinite(num) && num > 0 ? convertDistance(num, unit) : EMPTY);
  }, [value, unit]);

  const handleQuick = (v: number, u: DistanceUnit) => {
    setValue(v.toString());
    setUnit(u);
  };

  const inputCls =
    "flex-1 py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] text-base";

  const distCard = (label: string, value: string) => (
    <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-4 text-center">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
      <p className="text-base font-bold text-neutral-900 dark:text-white font-mono">{value}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Enter Distance</h2>

        {/* Quick chips */}
        <div className="flex flex-wrap gap-2 mb-4">
          {QUICK_DISTANCES.map((q) => (
            <button
              key={q.label}
              onClick={() => handleQuick(q.value, q.unit)}
              className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                value === q.value.toString() && unit === q.unit
                  ? "bg-[#ED772F] text-white"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
              }`}
            >
              {q.label}
            </button>
          ))}
        </div>

        <div className="flex gap-3">
          <input
            type="number"
            value={value}
            step={0.001}
            placeholder="5"
            className={inputCls}
            onChange={(e) => setValue(e.target.value)}
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value as DistanceUnit)}
            className="py-3 pl-4 pr-10 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] text-base appearance-none bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23737373%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"
          >
            {UNITS.map((u) => (
              <option key={u} value={u}>{u}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Distance conversions */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">Distance Equivalents</h3>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {distCard("Kilometers", result.km)}
          {distCard("Miles", result.miles)}
          {distCard("Meters", result.meters)}
          {distCard("Yards", result.yards)}
          {distCard("Feet", result.feet)}
          <div className="bg-[#ED772F]/10 dark:bg-[#ED772F]/20 rounded-xl p-4 text-center">
            <p className="text-xs text-[#ED772F] mb-1 font-medium">Approx. Steps</p>
            <p className="text-base font-bold text-[#ED772F]">{result.steps}</p>
          </div>
        </div>
      </div>

      {/* Running context */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">Running Context</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-2 text-neutral-500 dark:text-neutral-400 font-medium">Activity</th>
                <th className="text-center py-2 text-neutral-500 dark:text-neutral-400 font-medium">Speed</th>
                <th className="text-center py-2 text-neutral-500 dark:text-neutral-400 font-medium">Time</th>
                <th className="text-right py-2 text-neutral-500 dark:text-neutral-400 font-medium">Calories</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-neutral-100 dark:border-neutral-700/50">
                <td className="py-3 font-medium text-neutral-900 dark:text-white">Walking</td>
                <td className="py-3 text-center text-neutral-600 dark:text-neutral-400">5 km/h</td>
                <td className="py-3 text-center font-mono text-neutral-900 dark:text-white">{result.timeWalking}</td>
                <td className="py-3 text-right text-neutral-900 dark:text-white">{result.calWalking}</td>
              </tr>
              <tr className="border-b border-neutral-100 dark:border-neutral-700/50">
                <td className="py-3 font-medium text-neutral-900 dark:text-white">Jogging</td>
                <td className="py-3 text-center text-neutral-600 dark:text-neutral-400">8 km/h</td>
                <td className="py-3 text-center font-mono text-neutral-900 dark:text-white">{result.timeJogging}</td>
                <td className="py-3 text-right text-neutral-900 dark:text-white">{result.calJogging}</td>
              </tr>
              <tr>
                <td className="py-3 font-medium text-neutral-900 dark:text-white">Running</td>
                <td className="py-3 text-center text-neutral-600 dark:text-neutral-400">11 km/h</td>
                <td className="py-3 text-center font-mono text-neutral-900 dark:text-white">{result.timeRunning}</td>
                <td className="py-3 text-right text-neutral-900 dark:text-white">{result.calRunning}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Calories estimated for a 70 kg person</p>
      </div>
    </div>
  );
}
