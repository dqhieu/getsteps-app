"use client";

import { useState } from "react";
import {
  calculateRaceTime,
  RACE_DISTANCES,
  type RaceDistanceId,
  type RaceMode,
  type RaceTimeResult,
} from "@/lib/race-time-predictor";
import type { Locale } from "@/lib/i18n/config";
import type { RaceTimePredictorMessages } from "@/lib/i18n/messages/tool-pages/race-time-predictor/en";

type DistanceChoice = RaceDistanceId | "custom";

const EMPTY_RESULT: RaceTimeResult = {
  finishTime: "—", paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—", splits: [],
};

export function RaceTimePredictor({
  t,
}: {
  t: RaceTimePredictorMessages["calculator"];
  locale: Locale;
}) {
  const [mode, setMode] = useState<RaceMode>("time_from_pace");
  const [distanceId, setDistanceId] = useState<DistanceChoice>("half");
  const [customKm, setCustomKm] = useState("30");
  const [paceInput, setPaceInput] = useState("5:41");
  const [goalTime, setGoalTime] = useState("2:00:00");
  const [result, setResult] = useState<RaceTimeResult>(EMPTY_RESULT);
  const [calculated, setCalculated] = useState(false);

  const selectedDist = RACE_DISTANCES.find((d) => d.id === distanceId);
  const distanceKm = distanceId === "custom" ? parseFloat(customKm) : (selectedDist?.km ?? 0);

  const handleCalculate = () => {
    const input = mode === "time_from_pace" ? paceInput : goalTime;
    setResult(calculateRaceTime(mode, distanceKm, input));
    setCalculated(true);
  };

  const tabCls = (m: RaceMode) =>
    `flex-1 py-2.5 text-sm font-medium rounded-lg transition-colors ${
      mode === m
        ? "bg-accent text-white"
        : "bg-surface text-muted"
    }`;

  const distBtnCls = (id: DistanceChoice) =>
    `px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
      distanceId === id
        ? "bg-accent text-white"
        : "bg-surface text-muted"
    }`;

  const inputCls =
    "w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-base";

  const statCard = (label: string, value: string) => (
    <div className="bg-surface rounded-xl p-4 text-center">
      <p className="text-xs text-muted mb-1">{label}</p>
      <p className="text-base font-bold text-foreground font-mono">{value}</p>
    </div>
  );

  const distanceChoices: DistanceChoice[] = [...RACE_DISTANCES.map((d) => d.id), "custom"];

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-4">{t.title}</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-soft mb-2">
            {t.distanceLabel}
          </label>
          <div className="flex flex-wrap gap-2">
            {distanceChoices.map((id) => (
              <button key={id} onClick={() => setDistanceId(id)} className={distBtnCls(id)}>
                {t.races[id]}
              </button>
            ))}
          </div>
          {distanceId === "custom" && (
            <input
              type="number"
              value={customKm}
              step={0.1}
              placeholder={t.customPlaceholder}
              className={`${inputCls} mt-3`}
              onChange={(e) => setCustomKm(e.target.value)}
            />
          )}
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-muted-soft mb-2">
            {t.modeLabel}
          </label>
          <div className="flex gap-2">
            <button onClick={() => setMode("time_from_pace")} className={tabCls("time_from_pace")}>
              {t.finishTimeMode}
            </button>
            <button onClick={() => setMode("pace_from_time")} className={tabCls("pace_from_time")}>
              {t.requiredPaceMode}
            </button>
          </div>
        </div>

        {mode === "time_from_pace" ? (
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-1">
              {t.paceLabel}
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
            <label className="block text-sm font-medium text-muted-soft mb-1">
              {t.goalLabel}
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
          className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]"
        >
          {t.calculate}
        </button>
      </div>

      {calculated && (
        <>
          <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
            <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-5 mb-4">
              <p className="text-sm text-muted mb-1">
                {mode === "time_from_pace" ? t.predictedFinish : t.requiredPaceResult}
              </p>
              <p className="text-4xl font-bold text-foreground font-mono">
                {mode === "time_from_pace" ? result.finishTime : result.paceKm}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {statCard(t.pacePerKm, result.paceKm)}
              {statCard(t.pacePerMi, result.paceMile)}
              {statCard(t.speedKmh, result.speedKmh)}
              {statCard(t.speedMph, result.speedMph)}
            </div>
          </div>

          {result.splits.length > 0 && (
            <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
              <h3 className="text-base font-semibold text-foreground mb-3">
                {t.splitsTitle}
              </h3>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-2 text-muted font-medium">{t.markerColumn}</th>
                      <th className="text-right py-2 text-muted font-medium">{t.cumulativeColumn}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {result.splits.map((s) => (
                      <tr key={s.label} className="border-b border-border ">
                        <td className="py-2.5 font-medium text-foreground">{s.label}</td>
                        <td className="py-2.5 text-right font-mono text-foreground">{s.time}</td>
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
