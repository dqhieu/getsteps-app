"use client";

import { useState } from "react";
import {
  calculateRaceTime,
  RACE_DISTANCES,
  type RaceMode,
  type RaceTimeResult,
} from "@/lib/race-time-predictor";

const EMPTY_RESULT: RaceTimeResult = {
  finishTime: "—", paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—", splits: [],
};

export function RaceTimePredictor() {
  const [mode, setMode] = useState<RaceMode>("time_from_pace");
  const [distanceLabel, setDistanceLabel] = useState("Half Marathon");
  const [customKm, setCustomKm] = useState("30");
  const [paceInput, setPaceInput] = useState("5:41");
  const [goalTime, setGoalTime] = useState("2:00:00");
  const [result, setResult] = useState<RaceTimeResult>(EMPTY_RESULT);
  const [calculated, setCalculated] = useState(false);

  const selectedDist = RACE_DISTANCES.find((d) => d.label === distanceLabel);
  const distanceKm = distanceLabel === "Custom" ? parseFloat(customKm) : (selectedDist?.km ?? 0);

  const handleCalculate = () => {
    const input = mode === "time_from_pace" ? paceInput : goalTime;
    setResult(calculateRaceTime(mode, distanceKm, input));
    setCalculated(true);
  };

  const tabCls = (m: RaceMode) =>
    `flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
      mode === m
        ? "bg-[#ED772F] text-white"
        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
    }`;

  const distBtnCls = (label: string) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
      distanceLabel === label
        ? "bg-[#ED772F] text-white"
        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
    }`;

  const inputCls =
    "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] text-base";

  const statCard = (label: string, value: string) => (
    <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-4 text-center">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
      <p className="text-base font-bold text-neutral-900 dark:text-white font-mono">{value}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">Race Settings</h2>

        {/* Distance selector */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            Race Distance
          </label>
          <div className="flex flex-wrap gap-2">
            {[...RACE_DISTANCES.map((d) => d.label), "Custom"].map((label) => (
              <button key={label} onClick={() => setDistanceLabel(label)} className={distBtnCls(label)}>
                {label}
              </button>
            ))}
          </div>
          {distanceLabel === "Custom" && (
            <input
              type="number"
              value={customKm}
              step={0.1}
              placeholder="Distance in km"
              className={`${inputCls} mt-3`}
              onChange={(e) => setCustomKm(e.target.value)}
            />
          )}
        </div>

        {/* Mode toggle */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
            What do you want to calculate?
          </label>
          <div className="flex gap-2">
            <button onClick={() => setMode("time_from_pace")} className={tabCls("time_from_pace")}>
              Finish Time
            </button>
            <button onClick={() => setMode("pace_from_time")} className={tabCls("pace_from_time")}>
              Required Pace
            </button>
          </div>
        </div>

        {/* Input based on mode */}
        {mode === "time_from_pace" ? (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Your Pace (min/km, e.g. 5:30)
            </label>
            <input
              type="text"
              value={paceInput}
              placeholder="5:30"
              className={inputCls}
              onChange={(e) => setPaceInput(e.target.value)}
            />
          </div>
        ) : (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Goal Finish Time (H:MM:SS or MM:SS)
            </label>
            <input
              type="text"
              value={goalTime}
              placeholder="2:00:00"
              className={inputCls}
              onChange={(e) => setGoalTime(e.target.value)}
            />
          </div>
        )}

        <button
          onClick={handleCalculate}
          className="mt-4 w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
        >
          Calculate
        </button>
      </div>

      {/* Results */}
      {calculated && (
        <>
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
            <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-5 mb-4">
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-1">
                {mode === "time_from_pace" ? "Predicted Finish Time" : "Required Pace"}
              </p>
              <p className="text-4xl font-bold text-neutral-900 dark:text-white font-mono">
                {mode === "time_from_pace" ? result.finishTime : result.paceKm}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {statCard("Pace /km", result.paceKm)}
              {statCard("Pace /mi", result.paceMile)}
              {statCard("Speed km/h", result.speedKmh)}
              {statCard("Speed mph", result.speedMph)}
            </div>
          </div>

          {/* Splits */}
          {result.splits.length > 0 && (
            <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-3">
                5km Splits
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-neutral-200 dark:border-neutral-700">
                      <th className="text-left py-2 text-neutral-500 dark:text-neutral-400 font-medium">Marker</th>
                      <th className="text-right py-2 text-neutral-500 dark:text-neutral-400 font-medium">Cumulative Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.splits.map((s) => (
                      <tr key={s.label} className="border-b border-neutral-100 dark:border-neutral-700/50">
                        <td className="py-2.5 font-medium text-neutral-900 dark:text-white">{s.label}</td>
                        <td className="py-2.5 text-right font-mono text-neutral-900 dark:text-white">{s.time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}
