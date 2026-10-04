"use client";

import { useState } from "react";
import {
  calculateTrainingPaces,
  hmsToSeconds,
  RACE_DISTANCE_OPTIONS,
} from "@/lib/training-pace-zones-calculator";
import type { Locale } from "@/lib/i18n/config";
import type { TrainingPaceZonesMessages } from "@/lib/i18n/messages/tool-pages/training-pace-zones/en";

export function TrainingPaceZonesCalculator({
  t,
}: {
  t: TrainingPaceZonesMessages["calculator"];
  locale: Locale;
}) {
  const [distanceIndex, setDistanceIndex] = useState(0);
  const [customKm, setCustomKm] = useState(8);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [zones, setZones] = useState<ReturnType<typeof calculateTrainingPaces> | null>(null);
  const [error, setError] = useState("");

  const selectedOption = RACE_DISTANCE_OPTIONS[distanceIndex];
  const distanceKm = selectedOption.id === "custom" ? customKm : selectedOption.km;

  function handleCalculate() {
    const totalSeconds = hmsToSeconds(hours, minutes, seconds);
    if (totalSeconds < 60) {
      setError(t.invalidTime);
      return;
    }
    if (distanceKm <= 0) {
      setError(t.invalidDistance);
      return;
    }
    setError("");
    setZones(calculateTrainingPaces(distanceKm, totalSeconds));
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <div className="mb-5">
          <p className="text-sm font-medium text-muted-soft mb-2">{t.distanceLabel}</p>
          <div className="flex flex-wrap gap-2">
            {RACE_DISTANCE_OPTIONS.map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => setDistanceIndex(i)}
                className={`py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                  distanceIndex === i
                    ? "bg-accent text-white"
                    : "bg-surface text-muted hover:bg-ghost-hover"
                }`}
              >
                {t.races[opt.id]}
              </button>
            ))}
          </div>
        </div>

        {selectedOption.id === "custom" && (
          <div className="mb-5">
            <label className="block text-sm font-medium text-muted-soft mb-1">
              {t.customDistanceLabel}
            </label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={customKm}
                step={0.1}
                onChange={(e) => setCustomKm(Number(e.target.value))}
                className="w-full py-3 px-4 pr-12 rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-muted pointer-events-none">km</span>
            </div>
          </div>
        )}

        <div className="mb-5">
          <p className="text-sm font-medium text-muted-soft mb-2">{t.finishTimeLabel}</p>
          <div className="flex items-center gap-2 max-w-xs">
            <div className="flex-1">
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full py-3 px-3 text-center rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                placeholder="0"
              />
              <p className="text-xs text-muted text-center mt-1">{t.hour}</p>
            </div>
            <span className="text-muted font-bold pb-4">:</span>
            <div className="flex-1">
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full py-3 px-3 text-center rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                placeholder="25"
              />
              <p className="text-xs text-muted text-center mt-1">{t.minute}</p>
            </div>
            <span className="text-muted font-bold pb-4">:</span>
            <div className="flex-1">
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
                className="w-full py-3 px-3 text-center rounded-xl bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                placeholder="00"
              />
              <p className="text-xs text-muted text-center mt-1">{t.second}</p>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 mb-3">{error}</p>
        )}

        <button
          onClick={handleCalculate}
          className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]"
        >
          {t.calculate}
        </button>
      </div>

      {zones && (
        <div className="space-y-3">
          {zones.map((zone) => {
            const copy = t.zones[zone.id];
            return (
              <div
                key={zone.id}
                className="rounded-[20px] bg-card p-5 shadow-[var(--shadow-border)] flex gap-4"
                style={{ borderLeftWidth: 4, borderLeftColor: zone.color }}
              >
                <div
                  className="w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center text-white font-bold text-sm"
                  style={{ backgroundColor: zone.color }}
                >
                  Z{zone.zone}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                    <p className="font-semibold text-foreground">{copy.name}</p>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${zone.color}25`, color: zone.color }}
                    >
                      {copy.usage}
                    </span>
                  </div>
                  <p className="text-xs text-muted mb-2">{copy.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-mono font-semibold text-foreground">
                      {zone.paceKmMin}
                    </span>
                    <span className="text-sm font-mono text-muted">
                      {zone.paceMileMin}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <p className="text-xs text-muted text-center pt-1 px-2">
            {t.footnote}
          </p>
        </div>
      )}
    </div>
  );
}
