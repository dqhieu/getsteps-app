"use client";

import { useState, useMemo } from "react";
import {
  calculateHeartRateZones,
  ZONE_DEFINITIONS,
} from "@/lib/heart-rate-calculator";

export function HeartRateZonesCalculator() {
  const [age, setAge] = useState<number>(30);
  const [useRestingHR, setUseRestingHR] = useState<boolean>(false);
  const [restingHR, setRestingHR] = useState<number>(60);
  const [useCustomMaxHR, setUseCustomMaxHR] = useState<boolean>(false);
  const [customMaxHR, setCustomMaxHR] = useState<number>(190);

  const result = useMemo(
    () =>
      calculateHeartRateZones(
        age,
        useRestingHR ? restingHR : undefined,
        useCustomMaxHR ? customMaxHR : undefined
      ),
    [age, useRestingHR, restingHR, useCustomMaxHR, customMaxHR]
  );

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Details
        </h2>

        <div className="space-y-6">
          {/* Age Input */}
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              Age
            </label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={age}
                onChange={(e) =>
                  setAge(Math.min(90, Math.max(15, Number(e.target.value) || 15)))
                }
                min={15}
                max={90}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                years
              </span>
            </div>
          </div>

          {/* Advanced Options */}
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
              Advanced Options
            </p>

            <div className="space-y-4">
              {/* Resting HR Toggle */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    role="checkbox"
                    aria-checked={useRestingHR}
                    onClick={() => setUseRestingHR((v) => !v)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                      useRestingHR
                        ? "bg-[#ED772F] border-[#ED772F]"
                        : "border-neutral-400 dark:border-neutral-500 bg-transparent"
                    }`}
                  >
                    {useRestingHR && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    I know my resting heart rate
                  </span>
                </label>

                {useRestingHR && (
                  <div className="mt-3 ml-8">
                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        value={restingHR}
                        onChange={(e) =>
                          setRestingHR(Math.min(120, Math.max(30, Number(e.target.value) || 30)))
                        }
                        min={30}
                        max={120}
                        className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                        bpm
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      Measure first thing in the morning before getting out of bed.
                    </p>
                  </div>
                )}
              </div>

              {/* Custom Max HR Toggle */}
              <div>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    role="checkbox"
                    aria-checked={useCustomMaxHR}
                    onClick={() => setUseCustomMaxHR((v) => !v)}
                    className={`w-5 h-5 rounded border-2 flex items-center justify-center transition-colors flex-shrink-0 ${
                      useCustomMaxHR
                        ? "bg-[#ED772F] border-[#ED772F]"
                        : "border-neutral-400 dark:border-neutral-500 bg-transparent"
                    }`}
                  >
                    {useCustomMaxHR && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-sm text-neutral-700 dark:text-neutral-300">
                    I know my maximum heart rate
                  </span>
                </label>

                {useCustomMaxHR && (
                  <div className="mt-3 ml-8">
                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        value={customMaxHR}
                        onChange={(e) =>
                          setCustomMaxHR(Math.min(250, Math.max(100, Number(e.target.value) || 100)))
                        }
                        min={100}
                        max={250}
                        className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                        bpm
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      From a recent lab test or all-out effort during exercise.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        {/* Max HR Display */}
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                Max Heart Rate
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-neutral-900 dark:text-white">
                  {result.maxHR}
                </span>
                <span className="text-xl text-neutral-500 dark:text-neutral-400">bpm</span>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                result.method === "karvonen"
                  ? "bg-[#ED772F]/15 text-[#ED772F]"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
              }`}
            >
              {result.method === "karvonen" ? "Personalized (Karvonen)" : "Standard (220 − age)"}
            </span>
          </div>
        </div>

        {/* Visual Color Bar */}
        <div className="mb-6">
          <div className="flex rounded-full overflow-hidden h-3">
            {ZONE_DEFINITIONS.map((def) => (
              <div
                key={def.zone}
                className="flex-1"
                style={{ backgroundColor: def.color }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {ZONE_DEFINITIONS.map((def) => (
              <span key={def.zone} className="text-xs text-neutral-500 dark:text-neutral-400 flex-1 text-center">
                Z{def.zone}
              </span>
            ))}
          </div>
        </div>

        {/* Zone Table */}
        <div className="space-y-3">
          {result.zones.map((zone) => (
            <div
              key={zone.zone}
              className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-700/30"
            >
              {/* Zone Badge */}
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                style={{ backgroundColor: zone.color }}
              >
                Z{zone.zone}
              </div>

              {/* Zone Info */}
              <div className="flex-1 min-w-0">
                <p className="font-semibold text-neutral-900 dark:text-white text-sm">
                  {zone.name}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                  {zone.benefit}
                </p>
              </div>

              {/* BPM Range */}
              <div className="text-right flex-shrink-0">
                <p className="font-bold text-neutral-900 dark:text-white text-sm">
                  {zone.minBpm} – {zone.maxBpm}
                </p>
                <p className="text-xs text-neutral-500 dark:text-neutral-400">
                  {Math.round(zone.pctMin * 100)}–{Math.round(zone.pctMax * 100)}%
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
