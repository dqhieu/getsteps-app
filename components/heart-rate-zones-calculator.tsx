"use client";

import { useMemo, useState } from "react";
import { calculateHeartRateZones } from "@/lib/heart-rate-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate, plural } from "@/lib/i18n/format";
import type { HeartRateZonesCalculatorMessages } from "@/lib/i18n/messages/tool-pages/heart-rate-zones-calculator/en";

const ZONE_KEYS = {
  1: "recovery",
  2: "fatBurn",
  3: "aerobic",
  4: "threshold",
  5: "maximum",
} as const;

export function HeartRateZonesCalculator({
  t,
  locale = DEFAULT_LOCALE,
}: {
  t: HeartRateZonesCalculatorMessages["calculator"];
  locale?: Locale;
}) {
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
        useCustomMaxHR ? customMaxHR : undefined,
      ),
    [age, useRestingHR, restingHR, useCustomMaxHR, customMaxHR],
  );

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.yourDetails}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.age}
            </label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {plural(locale, age, t.years)}
              </span>
            </div>
          </div>

          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-6">
            <p className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-4">
              {t.advanced}
            </p>

            <div className="space-y-4">
              <div>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    type="button"
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
                    {t.knowResting}
                  </span>
                </label>

                {useRestingHR && (
                  <div className="mt-3 ml-8">
                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        value={restingHR}
                        onChange={(e) => setRestingHR(Number(e.target.value))}
                        className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                        {t.bpm}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {t.restingHint}
                    </p>
                  </div>
                )}
              </div>

              <div>
                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <button
                    type="button"
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
                    {t.knowMax}
                  </span>
                </label>

                {useCustomMaxHR && (
                  <div className="mt-3 ml-8">
                    <div className="relative max-w-xs">
                      <input
                        type="number"
                        value={customMaxHR}
                        onChange={(e) => setCustomMaxHR(Number(e.target.value))}
                        className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                        {t.bpm}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">
                      {t.maxHint}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-1">
                {t.maxHeartRate}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-neutral-900 dark:text-white">
                  {formatNumber(result.maxHR, locale)}
                </span>
                <span className="text-xl text-neutral-500 dark:text-neutral-400">{t.bpm}</span>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                result.method === "karvonen"
                  ? "bg-[#ED772F]/15 text-[#ED772F]"
                  : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-300"
              }`}
            >
              {result.method === "karvonen" ? t.methodKarvonen : t.methodStandard}
            </span>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex rounded-full overflow-hidden h-3">
            {result.zones.map((zone) => (
              <div
                key={zone.zone}
                className="flex-1"
                style={{ backgroundColor: zone.color }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            {result.zones.map((zone) => (
              <span key={zone.zone} className="text-xs text-neutral-500 dark:text-neutral-400 flex-1 text-center">
                {interpolate(t.zoneBadge, { n: zone.zone })}
              </span>
            ))}
          </div>
        </div>

        <div className="space-y-3">
          {result.zones.map((zone) => {
            const copy = t.zones[ZONE_KEYS[zone.zone as keyof typeof ZONE_KEYS]];
            return (
              <div
                key={zone.zone}
                className="flex items-center gap-4 p-4 rounded-xl bg-neutral-50 dark:bg-neutral-700/30"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: zone.color }}
                >
                  {interpolate(t.zoneBadge, { n: zone.zone })}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-neutral-900 dark:text-white text-sm">
                    {copy.name}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400 truncate">
                    {copy.benefit}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-neutral-900 dark:text-white text-sm">
                    {interpolate(t.bpmRange, {
                      min: formatNumber(zone.minBpm, locale),
                      max: formatNumber(zone.maxBpm, locale),
                    })}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {interpolate(t.pctRange, {
                      min: formatNumber(Math.round(zone.pctMin * 100), locale),
                      max: formatNumber(Math.round(zone.pctMax * 100), locale),
                    })}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
