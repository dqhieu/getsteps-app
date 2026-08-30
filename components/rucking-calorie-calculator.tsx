"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  calculateRuck,
  generateLoadTable,
  TERRAINS,
} from "@/lib/rucking-calculator";
import { lbsToKg, kgToLbs, kmToMiles, formatNumber } from "@/lib/unit-converter";

type Unit = "metric" | "imperial";

const MPH_TO_KMH = 1.60934;

const inputClass =
  "w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";
const labelClass =
  "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2";

export function RuckingCalorieCalculator({
  resultCta,
}: { resultCta?: ReactNode } = {}) {
  const [unit, setUnit] = useState<Unit>("metric");
  const [weight, setWeight] = useState(70);
  const [load, setLoad] = useState(15);
  const [speed, setSpeed] = useState(5);
  const [grade, setGrade] = useState(0);
  const [duration, setDuration] = useState(60);
  const [terrainId, setTerrainId] = useState(TERRAINS[0].id);

  const terrain = TERRAINS.find((t) => t.id === terrainId) ?? TERRAINS[0];

  const weightKg = unit === "metric" ? weight : lbsToKg(weight);
  const loadKg = unit === "metric" ? load : lbsToKg(load);
  const speedKmh = unit === "metric" ? speed : speed * MPH_TO_KMH;

  const base = {
    weightKg,
    speedKmh,
    gradePercent: grade,
    durationMinutes: duration,
    terrainFactor: terrain.factor,
  };

  const results = useMemo(
    () => calculateRuck({ ...base, loadKg }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weightKg, loadKg, speedKmh, grade, duration, terrain.factor]
  );

  const loadTable = useMemo(
    () => generateLoadTable(base),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [weightKg, speedKmh, grade, duration, terrain.factor]
  );

  const toggleUnit = () => {
    if (unit === "metric") {
      setWeight(Math.round(kgToLbs(weight)));
      setLoad(Math.round(kgToLbs(load)));
      setSpeed(Math.round((speed / MPH_TO_KMH) * 10) / 10);
      setUnit("imperial");
    } else {
      setWeight(Math.round(lbsToKg(weight)));
      setLoad(Math.round(lbsToKg(load)));
      setSpeed(Math.round(speed * MPH_TO_KMH * 10) / 10);
      setUnit("metric");
    }
  };

  const weightLabel = unit === "metric" ? "kg" : "lbs";
  const speedLabel = unit === "metric" ? "km/h" : "mph";
  const showLoad = (kg: number) =>
    unit === "metric"
      ? `${kg.toFixed(0)} kg`
      : `${kgToLbs(kg).toFixed(0)} lbs`;

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white">
            Your Ruck
          </h2>
          <button
            onClick={toggleUnit}
            className="py-2 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors"
          >
            {unit === "metric" ? "Switch to lbs / mph" : "Switch to kg / km/h"}
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Body weight</label>
              <div className="relative">
                <input
                  type="number"
                  value={weight}
                  onChange={(e) => setWeight(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightLabel}
                </span>
              </div>
            </div>

            <div>
              <label className={labelClass}>Pack weight</label>
              <div className="relative">
                <input
                  type="number"
                  value={load}
                  onChange={(e) => setLoad(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {weightLabel}
                </span>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <label className={labelClass}>Pace</label>
              <div className="relative">
                <input
                  type="number"
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {speedLabel}
                </span>
              </div>
            </div>

            <div>
              <label className={labelClass}>Duration</label>
              <div className="relative">
                <input
                  type="number"
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  minutes
                </span>
              </div>
            </div>
          </div>

          <div>
            <label className={labelClass}>Grade: {grade}%</label>
            <input
              type="range"
              min={0}
              max={20}
              step={1}
              value={grade}
              onChange={(e) => setGrade(Number(e.target.value))}
              className="w-full accent-[#ED772F]"
            />
          </div>

          <div>
            <label className={labelClass}>Terrain</label>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
              {TERRAINS.map((t) => (
                <button
                  key={t.id}
                  onClick={() => setTerrainId(t.id)}
                  className={`py-2 px-3 rounded-lg text-sm font-medium transition-colors text-left ${
                    terrainId === t.id
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {t.label}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              {terrain.description} Terrain factor {terrain.factor.toFixed(1)}.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Calories Burned
          </h3>
          <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            {formatNumber(results.calories)} kcal
          </p>
          {loadKg > 0 && (
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              The {showLoad(loadKg)} pack adds{" "}
              <strong className="text-[#ED772F]">
                {formatNumber(results.caloriesFromLoad)} kcal
              </strong>{" "}
              over the same walk carrying nothing (
              {formatNumber(results.caloriesUnloaded)} kcal).
            </p>
          )}
        </div>

        {results.loadIsHeavy && (
          <div className="mt-4 rounded-xl border border-amber-300 dark:border-amber-700/60 bg-amber-50 dark:bg-amber-900/20 p-4">
            <p className="text-sm text-amber-900 dark:text-amber-200">
              That pack is {(results.loadRatio * 100).toFixed(0)}% of your body
              weight. Loads above about a third of body weight raise injury risk
              sharply, and the Pandolf model is least reliable there. Build up
              gradually rather than jumping to this load.
            </p>
          </div>
        )}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "MET", value: results.met.toFixed(1) },
            { label: "kcal / min", value: results.kcalPerMinute.toFixed(1) },
            {
              label: "Distance",
              value: `${results.distanceKm.toFixed(2)} km / ${kmToMiles(
                results.distanceKm
              ).toFixed(2)} mi`,
            },
            { label: "Pack / body weight", value: `${(results.loadRatio * 100).toFixed(0)}%` },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-neutral-900 dark:text-white text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
          Pandolf load-carriage equation at {results.watts} watts, {terrain.label.toLowerCase()},{" "}
          {grade}% grade.
        </p>

        {resultCta}
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
          Calories by Pack Weight
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Same pace, grade, terrain and duration. Only the load changes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700">
                <th className="py-2 pr-4 font-medium">Pack</th>
                <th className="py-2 pr-4 font-medium">Calories</th>
                <th className="py-2 font-medium">vs unloaded</th>
              </tr>
            </thead>
            <tbody>
              {loadTable.map((row) => (
                <tr
                  key={row.loadKg}
                  className="border-b border-neutral-100 dark:border-neutral-700/50"
                >
                  <td className="py-2 pr-4 text-neutral-900 dark:text-white">
                    {showLoad(row.loadKg)}
                  </td>
                  <td className="py-2 pr-4 text-neutral-900 dark:text-white font-medium">
                    {formatNumber(row.calories)}
                  </td>
                  <td className="py-2 text-neutral-600 dark:text-neutral-400">
                    {row.loadKg === 0
                      ? "—"
                      : `+${row.percentOverUnloaded.toFixed(0)}%`}
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
