"use client";

import { useState } from "react";
import {
  predictRaceTimes,
  hmsToSeconds,
  RACE_DISTANCES,
  type RacePrediction,
} from "@/lib/marathon-predictor";

const PRESET_DISTANCES = [
  ...RACE_DISTANCES.map((d) => ({ label: d.name, km: d.km })),
  { label: "Custom (km)", km: 0 },
];

export function MarathonRacePredictor() {
  const [selectedDistanceKm, setSelectedDistanceKm] = useState<number>(10);
  const [customKm, setCustomKm] = useState<number>(15);
  const [isCustom, setIsCustom] = useState(false);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(50);
  const [seconds, setSeconds] = useState(0);
  const [predictions, setPredictions] = useState<RacePrediction[] | null>(null);
  const [error, setError] = useState("");

  const handleDistanceSelect = (km: number, custom: boolean) => {
    setIsCustom(custom);
    if (!custom) setSelectedDistanceKm(km);
    setPredictions(null);
    setError("");
  };

  const handlePredict = () => {
    const distKm = isCustom ? customKm : selectedDistanceKm;
    const totalSecs = hmsToSeconds(hours, minutes, seconds);

    if (distKm <= 0) { setError("Please enter a valid distance."); return; }
    if (totalSecs <= 0) { setError("Please enter a valid time."); return; }
    setError("");
    setPredictions(predictRaceTimes(distKm, totalSecs));
  };

  const inputCls = "w-full py-3 px-3 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] text-center text-lg font-semibold";
  const btnBase = "py-2 px-3 rounded-lg text-sm font-medium transition-colors";
  const btnActive = `${btnBase} bg-[#ED772F] text-white`;
  const btnInactive = `${btnBase} bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600`;

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50 space-y-5">
        {/* Distance Selection */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Your Race Distance</label>
          <div className="flex flex-wrap gap-2">
            {PRESET_DISTANCES.map((d) => {
              const isSelected = d.km === 0 ? isCustom : (!isCustom && selectedDistanceKm === d.km);
              return (
                <button
                  key={d.label}
                  onClick={() => handleDistanceSelect(d.km, d.km === 0)}
                  className={isSelected ? btnActive : btnInactive}
                >
                  {d.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Custom km input */}
        {isCustom && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Distance (km)</label>
            <div className="relative max-w-[160px]">
              <input
                type="number"
                min={1}
                max={200}
                step={0.1}
                value={customKm}
                onChange={(e) => setCustomKm(Number(e.target.value))}
                className={`${inputCls} pr-12 text-left`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 text-sm pointer-events-none">km</span>
            </div>
          </div>
        )}

        {/* Time Input */}
        <div>
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">Your Finish Time</label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-1">H</p>
              <input type="number" min={0} max={23} value={hours} onChange={(e) => setHours(Math.min(23, Math.max(0, Number(e.target.value))))} className={inputCls} />
            </div>
            <span className="pb-3 text-neutral-400 font-semibold text-lg">:</span>
            <div className="flex-1">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-1">M</p>
              <input type="number" min={0} max={59} value={minutes} onChange={(e) => setMinutes(Math.min(59, Math.max(0, Number(e.target.value))))} className={inputCls} />
            </div>
            <span className="pb-3 text-neutral-400 font-semibold text-lg">:</span>
            <div className="flex-1">
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mb-1">S</p>
              <input type="number" min={0} max={59} value={seconds} onChange={(e) => setSeconds(Math.min(59, Math.max(0, Number(e.target.value))))} className={inputCls} />
            </div>
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button onClick={handlePredict} className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors">
          Predict Race Times
        </button>
      </div>

      {predictions && (
        <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
          <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Predicted Finish Times</h2>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  {["Distance", "Time", "Pace (km)", "Pace (mi)", "Speed"].map((h) => (
                    <th key={h} className="text-left py-2 px-2 text-xs font-medium text-neutral-500 dark:text-neutral-400">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {predictions.map((row) => (
                  <tr
                    key={row.distance}
                    className={`border-b border-neutral-100 dark:border-neutral-700/50 ${row.isInput ? "bg-[#ED772F]/10 dark:bg-[#ED772F]/15" : ""}`}
                  >
                    <td className="py-3 px-2 font-semibold text-neutral-900 dark:text-white">
                      {row.distance}
                      {row.isInput && <span className="ml-1 text-[10px] font-normal text-[#ED772F]">you</span>}
                    </td>
                    <td className="py-3 px-2 font-mono text-neutral-900 dark:text-white">{row.time}</td>
                    <td className="py-3 px-2 font-mono text-neutral-600 dark:text-neutral-300">{row.paceKm}</td>
                    <td className="py-3 px-2 font-mono text-neutral-600 dark:text-neutral-300">{row.paceMile}</td>
                    <td className="py-3 px-2 text-neutral-600 dark:text-neutral-300">{row.speedKmh} km/h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-neutral-500 dark:text-neutral-400">
            Predictions use the Riegel formula (fatigue factor 1.06). Most accurate for recent races at similar effort.
          </p>
        </div>
      )}
    </div>
  );
}
