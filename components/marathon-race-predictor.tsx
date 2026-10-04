"use client";

import { useState } from "react";
import {
  predictRaceTimes,
  hmsToSeconds,
  RACE_DISTANCES,
  type RaceDistanceId,
  type RacePrediction,
} from "@/lib/marathon-predictor";
import type { Locale } from "@/lib/i18n/config";
import type { MarathonPacePredictorMessages } from "@/lib/i18n/messages/tool-pages/marathon-pace-predictor/en";

type DistanceChoice = RaceDistanceId | "custom";

const PRESET_DISTANCES: { id: DistanceChoice; km: number }[] = [
  ...RACE_DISTANCES.map((d) => ({ id: d.id, km: d.km })),
  { id: "custom", km: 0 },
];

export function MarathonRacePredictor({
  t,
}: {
  t: MarathonPacePredictorMessages["calculator"];
  locale: Locale;
}) {
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

    if (distKm <= 0) { setError(t.invalidDistance); return; }
    if (totalSecs <= 0) { setError(t.invalidTime); return; }
    setError("");
    setPredictions(predictRaceTimes(distKm, totalSecs));
  };

  const inputCls = "w-full py-3 px-3 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-center text-lg font-semibold";
  const btnBase = "py-2 px-3 rounded-lg text-sm font-medium transition-colors";
  const btnActive = `${btnBase} bg-accent text-white`;
  const btnInactive = `${btnBase} bg-surface text-muted hover:bg-ghost-hover`;

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)] space-y-5">
        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.distanceLabel}</label>
          <div className="flex flex-wrap gap-2">
            {PRESET_DISTANCES.map((d) => {
              const isSelected = d.id === "custom" ? isCustom : (!isCustom && selectedDistanceKm === d.km);
              return (
                <button
                  key={d.id}
                  onClick={() => handleDistanceSelect(d.km, d.id === "custom")}
                  className={isSelected ? btnActive : btnInactive}
                >
                  {t.races[d.id]}
                </button>
              );
            })}
          </div>
        </div>

        {isCustom && (
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.customDistanceLabel}</label>
            <div className="relative max-w-[160px]">
              <input
                type="number"
                step={0.1}
                value={customKm}
                onChange={(e) => setCustomKm(Number(e.target.value))}
                className={`${inputCls} pr-12 text-left`}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">km</span>
            </div>
          </div>
        )}

        <div>
          <label className="block text-sm font-medium text-muted-soft mb-2">{t.finishTimeLabel}</label>
          <div className="flex items-end gap-2">
            <div className="flex-1">
              <p className="text-xs text-muted text-center mb-1">{t.hour}</p>
              <input type="number" value={hours} onChange={(e) => setHours(Number(e.target.value))} className={inputCls} />
            </div>
            <span className="pb-3 text-muted font-semibold text-lg">:</span>
            <div className="flex-1">
              <p className="text-xs text-muted text-center mb-1">{t.minute}</p>
              <input type="number" value={minutes} onChange={(e) => setMinutes(Number(e.target.value))} className={inputCls} />
            </div>
            <span className="pb-3 text-muted font-semibold text-lg">:</span>
            <div className="flex-1">
              <p className="text-xs text-muted text-center mb-1">{t.second}</p>
              <input type="number" value={seconds} onChange={(e) => setSeconds(Number(e.target.value))} className={inputCls} />
            </div>
          </div>
        </div>

        {error && <p className="text-sm text-red-500">{error}</p>}

        <button onClick={handlePredict} className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]">
          {t.predict}
        </button>
      </div>

      {predictions && (
        <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
          <h2 className="text-lg font-semibold text-foreground mb-4">{t.resultsTitle}</h2>
          <div className="overflow-x-auto -mx-6 px-6">
            <table className="w-full min-w-[480px] text-sm">
              <thead>
                <tr className="border-b border-border">
                  {[t.distanceColumn, t.timeColumn, t.paceKmColumn, t.paceMileColumn, t.speedColumn].map((h) => (
                    <th key={h} className="text-left py-2 px-2 text-xs font-medium text-muted">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {predictions.map((row) => (
                  <tr
                    key={row.id}
                    className={`border-b border-border  ${row.isInput ? "bg-chip " : ""}`}
                  >
                    <td className="py-3 px-2 font-semibold text-foreground">
                      {t.races[row.id]}
                      {row.isInput && <span className="ml-1 text-[10px] font-normal text-accent">{t.you}</span>}
                    </td>
                    <td className="py-3 px-2 font-mono text-foreground">{row.time}</td>
                    <td className="py-3 px-2 font-mono text-muted dark:text-muted">{row.paceKm}</td>
                    <td className="py-3 px-2 font-mono text-muted dark:text-muted">{row.paceMile}</td>
                    <td className="py-3 px-2 text-muted dark:text-muted">{row.speedKmh} km/h</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-xs text-muted">
            {t.footnote}
          </p>
        </div>
      )}
    </div>
  );
}
