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
import { milesToKm } from "@/lib/unit-converter";
import type { Locale } from "@/lib/i18n/config";
import type { RunningPaceCalculatorMessages } from "@/lib/i18n/messages/tool-pages/running-pace-calculator/en";

type InputMode = "pace" | "speed" | "time-distance";
type DistanceUnit = "km" | "mile";

const EMPTY_RESULT_CHECK = (r: PaceResult) => r.paceSecPerKm <= 0;

export function RunningPaceCalculator({
  t,
}: {
  t: RunningPaceCalculatorMessages["calculator"];
  locale: Locale;
}) {
  const [mode, setMode] = useState<InputMode>("pace");

  const [paceInput, setPaceInput] = useState("5:30");
  const [paceUnit, setPaceUnit] = useState<DistanceUnit>("km");

  const [speedInput, setSpeedInput] = useState("10.9");
  const [speedUnit, setSpeedUnit] = useState<"kmh" | "mph">("kmh");

  const [distanceInput, setDistanceInput] = useState("5");
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");
  const [timeInput, setTimeInput] = useState("27:30");

  const result = useMemo(() => {
    if (mode === "pace") {
      let sec = parsePaceInput(paceInput);
      if (sec <= 0) return calculateFromPace(0);
      if (paceUnit === "mile") sec = sec / 1.60934;
      return calculateFromPace(sec);
    }

    if (mode === "speed") {
      const speed = parseFloat(speedInput);
      if (!isFinite(speed) || speed <= 0) return calculateFromSpeed(0);
      const speedKmh = speedUnit === "mph" ? speed * 1.60934 : speed;
      return calculateFromSpeed(speedKmh);
    }

    const dist = parseFloat(distanceInput);
    const totalSec = parseDurationInput(timeInput);
    const distKm = distanceUnit === "mile" ? milesToKm(dist) : dist;
    return calculateFromTimeAndDistance(totalSec, distKm);
  }, [mode, paceInput, paceUnit, speedInput, speedUnit, distanceInput, distanceUnit, timeInput]);

  const invalid = EMPTY_RESULT_CHECK(result);

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

  const handleSpeedUnitToggle = () => {
    const newUnit = speedUnit === "kmh" ? "mph" : "kmh";
    const val = parseFloat(speedInput);
    if (isFinite(val) && val > 0) {
      const converted = newUnit === "mph" ? val * 0.621371 : val * 1.60934;
      setSpeedInput(converted.toFixed(1));
    }
    setSpeedUnit(newUnit);
  };

  const tabClass = (tab: InputMode) =>
    `flex-1 py-2.5 text-sm font-medium transition-colors ${
      mode === tab
        ? "bg-accent text-white"
        : "bg-surface text-muted-soft hover:bg-ghost-hover"
    }`;

  const inputCls =
    "w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg";

  const toggleBtnCls =
    "py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors";

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.title}
        </h2>

        <div className="flex rounded-lg overflow-hidden border border-border mb-6">
          <button onClick={() => setMode("pace")} className={tabClass("pace")}>{t.tabs.pace}</button>
          <button onClick={() => setMode("speed")} className={tabClass("speed")}>{t.tabs.speed}</button>
          <button onClick={() => setMode("time-distance")} className={tabClass("time-distance")}>
            {t.tabs.timeDistance}
          </button>
        </div>

        {mode === "pace" && (
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.paceLabel}
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
            <p className="mt-2 text-xs text-muted">
              {t.paceHint}
            </p>
          </div>
        )}

        {mode === "speed" && (
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.speedLabel}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={speedInput}
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

        {mode === "time-distance" && (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.distanceLabel}
              </label>
              <div className="flex gap-2">
                <input
                  type="number"
                  value={distanceInput}
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
              <label className="block text-sm font-medium text-muted-soft mb-2">
                {t.finishTimeLabel}
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

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 mb-6">
          <p className="text-sm font-medium text-muted mb-4">
            {t.statsTitle}
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-xs text-muted mb-1">{t.pacePerKm}</p>
              <p className="text-2xl font-bold text-foreground">
                {invalid ? "—" : result.paceKmFormatted}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">{t.pacePerMi}</p>
              <p className="text-2xl font-bold text-foreground">
                {invalid ? "—" : result.paceMileFormatted}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">{t.speedKmh}</p>
              <p className="text-2xl font-bold text-foreground">
                {invalid ? "—" : `${result.speedKmh} km/h`}
              </p>
            </div>
            <div>
              <p className="text-xs text-muted mb-1">{t.speedMph}</p>
              <p className="text-2xl font-bold text-foreground">
                {invalid ? "—" : `${result.speedMph} mph`}
              </p>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-base font-semibold text-foreground mb-3">
            {t.predictionsTitle}
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-2 px-2 text-sm font-medium text-muted">
                    {t.distanceColumn}
                  </th>
                  <th className="text-right py-2 px-2 text-sm font-medium text-muted">
                    {t.finishTimeColumn}
                  </th>
                </tr>
              </thead>
              <tbody>
                {result.racePredictions.map((r) => (
                  <tr
                    key={r.id}
                    className="border-b border-border "
                  >
                    <td className="py-3 px-2 font-medium text-foreground">
                      {t.races[r.id]}
                    </td>
                    <td className="py-3 px-2 text-right text-foreground font-mono">
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
