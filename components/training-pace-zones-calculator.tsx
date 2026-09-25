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
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <div className="mb-5">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.distanceLabel}</p>
          <div className="flex flex-wrap gap-2">
            {RACE_DISTANCE_OPTIONS.map((opt, i) => (
              <button
                key={opt.id}
                onClick={() => setDistanceIndex(i)}
                className={`py-2 px-4 rounded-xl text-sm font-semibold transition-colors ${
                  distanceIndex === i
                    ? "bg-[#ED772F] text-white"
                    : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                }`}
              >
                {t.races[opt.id]}
              </button>
            ))}
          </div>
        </div>

        {selectedOption.id === "custom" && (
          <div className="mb-5">
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t.customDistanceLabel}
            </label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={customKm}
                step={0.1}
                onChange={(e) => setCustomKm(Number(e.target.value))}
                className="w-full py-3 px-4 pr-12 rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-sm text-neutral-500 dark:text-neutral-400 pointer-events-none">km</span>
            </div>
          </div>
        )}

        <div className="mb-5">
          <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.finishTimeLabel}</p>
          <div className="flex items-center gap-2 max-w-xs">
            <div className="flex-1">
              <input
                type="number"
                value={hours}
                onChange={(e) => setHours(Number(e.target.value))}
                className="w-full py-3 px-3 text-center rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                placeholder="0"
              />
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-1">{t.hour}</p>
            </div>
            <span className="text-neutral-400 font-bold pb-4">:</span>
            <div className="flex-1">
              <input
                type="number"
                value={minutes}
                onChange={(e) => setMinutes(Number(e.target.value))}
                className="w-full py-3 px-3 text-center rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                placeholder="25"
              />
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-1">{t.minute}</p>
            </div>
            <span className="text-neutral-400 font-bold pb-4">:</span>
            <div className="flex-1">
              <input
                type="number"
                value={seconds}
                onChange={(e) => setSeconds(Number(e.target.value))}
                className="w-full py-3 px-3 text-center rounded-xl bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                placeholder="00"
              />
              <p className="text-xs text-neutral-500 dark:text-neutral-400 text-center mt-1">{t.second}</p>
            </div>
          </div>
        </div>

        {error && (
          <p className="text-sm text-red-500 dark:text-red-400 mb-3">{error}</p>
        )}

        <button
          onClick={handleCalculate}
          className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
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
                className="bg-white dark:bg-neutral-800/50 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700/50 flex gap-4"
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
                    <p className="font-semibold text-neutral-900 dark:text-white">{copy.name}</p>
                    <span
                      className="text-xs font-medium px-2 py-0.5 rounded-full"
                      style={{ backgroundColor: `${zone.color}25`, color: zone.color }}
                    >
                      {copy.usage}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-2">{copy.description}</p>
                  <div className="flex flex-wrap gap-3">
                    <span className="text-sm font-mono font-semibold text-neutral-900 dark:text-white">
                      {zone.paceKmMin}
                    </span>
                    <span className="text-sm font-mono text-neutral-500 dark:text-neutral-400">
                      {zone.paceMileMin}
                    </span>
                  </div>
                </div>
              </div>
            );
          })}

          <p className="text-xs text-neutral-400 dark:text-neutral-500 text-center pt-1 px-2">
            {t.footnote}
          </p>
        </div>
      )}
    </div>
  );
}
