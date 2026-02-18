"use client";

import { useState, useMemo } from "react";
import {
  calculateFromPace,
  calculateFromSpeed,
  calculateFromTimeAndDistance,
  parsePaceInput,
  parseDurationInput,
  type PaceResult,
} from "@/lib/pace-calculator";
import { milesToKm, kmToMiles } from "@/lib/unit-converter";
import { ShareResultCard } from "@/components/share-result-card";

type InputMode = "pace" | "speed" | "time-distance";
type DistanceUnit = "km" | "mile";

const EMPTY_RESULT_CHECK = (r: PaceResult) => r.paceSecPerKm <= 0;

export function RunningPaceCalculator() {
  // Tab state
  const [mode, setMode] = useState<InputMode>("pace");

  // Pace tab state
  const [paceInput, setPaceInput] = useState("5:30");
  const [paceUnit, setPaceUnit] = useState<DistanceUnit>("km");

  // Speed tab state
  const [speedInput, setSpeedInput] = useState("10.9");
  const [speedUnit, setSpeedUnit] = useState<"kmh" | "mph">("kmh");

  // Time + Distance tab state
  const [distanceInput, setDistanceInput] = useState("5");
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");
  const [timeInput, setTimeInput] = useState("27:30");

  // Compute result based on active mode
  const result = useMemo(() => {
    if (mode === "pace") {
      let sec = parsePaceInput(paceInput);
      if (sec <= 0) return calculateFromPace(0);
      // Convert to sec/km if input is per mile
      if (paceUnit === "mile") sec = sec / 1.60934;
      return calculateFromPace(sec);
    }

    if (mode === "speed") {
      const speed = parseFloat(speedInput);
      if (!isFinite(speed) || speed <= 0) return calculateFromSpeed(0);
      const speedKmh = speedUnit === "mph" ? speed * 1.60934 : speed;
      return calculateFromSpeed(speedKmh);
    }

    // time-distance mode
    const dist = parseFloat(distanceInput);
    const totalSec = parseDurationInput(timeInput);
    const distKm = distanceUnit === "mile" ? milesToKm(dist) : dist;
    return calculateFromTimeAndDistance(totalSec, distKm);
  }, [mode, paceInput, paceUnit, speedInput, speedUnit, distanceInput, distanceUnit, timeInput]);

  const invalid = EMPTY_RESULT_CHECK(result);

  // Handle pace unit toggle — convert the displayed value
  const handlePaceUnitToggle = () => {
    const newUnit: DistanceUnit = paceUnit === "km" ? "mile" : "km";
    const sec = parsePaceInput(paceInput);
    if (sec > 0) {
      const converted = newUnit === "mile" ? sec * 1.60934 : sec / 1.60934;
      const mins = Math.floor(converted / 60);
      const secs = Math.round(converted % 60).toString().padStart(2, "0");
      setPaceInput(`${mins}:${secs}`);
    }
    setPaceUnit(newUnit);
  };

  // Handle speed unit toggle — convert the displayed value
  const handleSpeedUnitToggle = () => {
    const newUnit = speedUnit === "kmh" ? "mph" : "kmh";
    const val = parseFloat(speedInput);
    if (isFinite(val) && val > 0) {
      const converted = newUnit === "mph" ? val * 0.621371 : val * 1.60934;
      setSpeedInput(converted.toFixed(1));
    }
    setSpeedUnit(newUnit);
  };

  const tabClass = (t: InputMode) =>
    `flex-1 py-2.5 text-sm font-medium transition-colors ${
      mode === t
        ? "bg-[#ED772F] text-white"
        : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
    }`;

  const inputCls =
    "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";

  const toggleBtnCls =
    "py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors";

  return (
    <div className="space-y-6">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Calculate Pace
        </h2>

        {/* Mode tabs */}
        <div className="flex rounded-lg overflow-hidden border border-neutral-200 dark:border-neutral-700 mb-6">
          <button onClick={() => setMode("pace")} className={tabClass("pace")}>Pace</button>
          <button onClick={() => setMode("speed")} className={tabClass("speed")}>Speed</button>
          <button onClick={() => setMode("time-distance")} className={tabClass("time-distance")}>
            Time + Distance
          </button>
        </div>

        {/* Pace tab */}
        {mode === "pace" && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Pace (MM:SS)
            </label>
            <div className="flex gap-2">
              <input
                type="text"
                value={paceInput}
                onChange={(e) => setPaceInput(e.target.value)}
                placeholder="5:30"
                className={`flex-1 ${inputCls}`}
              />
              <button onClick={handlePaceUnitToggle} className={toggleBtnCls}>
                /{paceUnit === "km" ? "km" : "mi"}
              </button>
            </div>
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              Enter pace in minutes:seconds format (e.g., 5:30)
            </p>
          </div>
        )}

        {/* Speed tab */}
        {mode === "speed" && (
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Speed
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={speedInput}
                min={0.1}
                step={0.1}
                onChange={(e) => setSpeedInput(e.target.value)}
                className={`flex-1 ${inputCls}`}
              />
              <button onClick={handleSpeedUnitToggle} className={toggleBtnCls}>
                {speedUnit === "kmh" ? "km/h" : "mph"}
              </button>
            </div>
          </div>
        )}

        {/* Time + Distance tab */}
        {mode === "time-distance" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Distance
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distanceInput}
                  min={0.1}
                  step={0.1}
                  onChange={(e) => setDistanceInput(e.target.value)}
                  className={`flex-1 ${inputCls}`}
                />
                <button
                  onClick={() => setDistanceUnit(distanceUnit === "km" ? "mile" : "km")}
                  className={toggleBtnCls}
                >
                  {distanceUnit === "km" ? "km" : "mi"}
                </button>
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
                Finish Time (MM:SS or H:MM:SS)
              </label>
              <input
                type="text"
                value={timeInput}
                onChange={(e) => setTimeInput(e.target.value)}
                placeholder="27:30"
                className={inputCls}
              />
            </div>
          </div>
        )}
      </div>

      {/* Share Card */}
      {!invalid && (() => {
        const secPerKm = result.paceSecPerKm;
        const tier =
          secPerKm < 240 ? "Sub-4 Runner" :
          secPerKm < 300 ? "Sub-5 Runner" :
          secPerKm < 360 ? "Sub-6 Runner" :
          secPerKm < 420 ? "Sub-7 Runner" : "Endurance Runner";
        const shareText = `⏱️ My running pace is ${result.paceKmFormatted}/km – ${tier}.`;
        return (
          <ShareResultCard
            badge={{ emoji: "⏱️", label: tier, colorClass: "bg-[#ED772F]/10 text-[#ED772F]" }}
            shareText={shareText}
            shareUrl="https://getsteps.app/tools/running-pace-calculator"
          />
        );
      })()}

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6 mb-6">
          <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-4">
            Your Running Stats
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Pace /km</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {invalid ? "—" : result.paceKmFormatted}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Pace /mi</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {invalid ? "—" : result.paceMileFormatted}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Speed km/h</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {invalid ? "—" : `${result.speedKmh} km/h`}
              </p>
            </div>
            <div>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">Speed mph</p>
              <p className="text-2xl font-bold text-neutral-900 dark:text-white">
                {invalid ? "—" : `${result.speedMph} mph`}
              </p>
            </div>
          </div>
        </div>

        {/* Race predictions table */}
        <div>
          <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-3">
            Race Time Predictions
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-neutral-200 dark:border-neutral-700">
                  <th className="text-left py-2 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Distance
                  </th>
                  <th className="text-right py-2 px-2 text-sm font-medium text-neutral-600 dark:text-neutral-400">
                    Finish Time
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.racePredictions.map((r) => (
                  <tr
                    key={r.distance}
                    className="border-b border-neutral-100 dark:border-neutral-700/50"
                  >
                    <td className="py-3 px-2 font-medium text-neutral-900 dark:text-white">
                      {r.distance}
                    </td>
                    <td className="py-3 px-2 text-right text-neutral-900 dark:text-white font-mono">
                      {r.finishTime}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
