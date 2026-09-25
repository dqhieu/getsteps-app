"use client";

import { useState } from "react";
import { calculateRHR, type FitnessCategory, type Gender } from "@/lib/resting-heart-rate-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatNumber, interpolate, plural } from "@/lib/i18n/format";
import type { RestingHeartRateCalculatorMessages } from "@/lib/i18n/messages/tool-pages/resting-heart-rate-calculator/en";

const CATEGORY_STYLES: Record<FitnessCategory, { bg: string; text: string }> = {
  athlete: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400" },
  excellent: { bg: "bg-green-100 dark:bg-green-900/30", text: "text-green-700 dark:text-green-400" },
  good: { bg: "bg-teal-100 dark:bg-teal-900/30", text: "text-teal-700 dark:text-teal-400" },
  above_average: { bg: "bg-yellow-100 dark:bg-yellow-900/30", text: "text-yellow-700 dark:text-yellow-400" },
  average: { bg: "bg-orange-100 dark:bg-orange-900/30", text: "text-orange-700 dark:text-orange-400" },
  below_average: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600 dark:text-red-400" },
  poor: { bg: "bg-red-100 dark:bg-red-900/30", text: "text-red-600 dark:text-red-400" },
};

const ZONE_COLORS = ["#3B82F6", "#22C55E", "#EAB308", "#F97316", "#EF4444"];

const ZONE_KEYS = {
  1: "activeRecovery",
  2: "fatBurn",
  3: "aerobicEndurance",
  4: "lactateThreshold",
  5: "vo2Max",
} as const;

export function RestingHeartRateCalculator({
  t,
  locale = DEFAULT_LOCALE,
}: {
  t: RestingHeartRateCalculatorMessages["calculator"];
  locale?: Locale;
}) {
  const [age, setAge] = useState<number>(30);
  const [gender, setGender] = useState<Gender>("male");
  const [rhr, setRhr] = useState<number>(65);
  const [calculated, setCalculated] = useState(false);

  const result = calculateRHR(age, gender, rhr);
  const catStyle = CATEGORY_STYLES[result.fitnessCategory];

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">{t.yourDetails}</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.gender}</label>
            <div className="flex gap-2">
              {(["male", "female"] as Gender[]).map((g) => (
                <button
                  key={g}
                  type="button"
                  onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-colors ${
                    gender === g
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-600 dark:text-neutral-400"
                  }`}
                >
                  {g === "male" ? t.male : t.female}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">{t.age}</label>
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

          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2">
              {t.restingHeartRate}
            </label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={rhr}
                onChange={(e) => setRhr(Number(e.target.value))}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                {t.bpm}
              </span>
            </div>
            <p className="mt-1.5 text-xs text-neutral-500 dark:text-neutral-400">{t.rhrHint}</p>
          </div>

          <button
            type="button"
            onClick={() => setCalculated(true)}
            className="w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3 px-6 rounded-xl transition-colors"
          >
            {t.calculate}
          </button>
        </div>
      </div>

      {calculated && (
        <>
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{t.fitnessLevel}</h2>
            <div className="flex items-center gap-4 flex-wrap">
              <span className={`px-4 py-2 rounded-full font-semibold text-sm ${catStyle.bg} ${catStyle.text}`}>
                {t.categories[result.fitnessCategory]}
              </span>
              <div className="flex gap-4">
                <div className="text-center">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.hrMax}</p>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white">
                    {formatNumber(result.hrMax, locale)} <span className="text-sm font-normal">{t.bpm}</span>
                  </p>
                </div>
                <div className="text-center">
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">{t.hrr}</p>
                  <p className="text-xl font-bold text-neutral-900 dark:text-white">
                    {formatNumber(result.hrr, locale)} <span className="text-sm font-normal">{t.bpm}</span>
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">{t.zonesTitle}</h2>
            <div className="space-y-3">
              {result.zones.map((zone, i) => {
                const copy = t.zones[ZONE_KEYS[zone.zone as keyof typeof ZONE_KEYS]];
                return (
                  <div key={zone.zone} className="flex items-center gap-3 p-3 rounded-xl bg-neutral-50 dark:bg-neutral-700/30">
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                      style={{ backgroundColor: ZONE_COLORS[i] }}
                    >
                      {interpolate(t.zoneBadge, { n: zone.zone })}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-semibold text-neutral-900 dark:text-white text-sm">{copy.name}</p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">
                        {interpolate(t.pctRange, {
                          min: formatNumber(Math.round(zone.pctMin * 100), locale),
                          max: formatNumber(Math.round(zone.pctMax * 100), locale),
                        })}
                      </p>
                    </div>
                    <div className="text-right flex-shrink-0">
                      <p className="font-bold text-neutral-900 dark:text-white text-sm">
                        {interpolate(t.bpmRange, {
                          min: formatNumber(zone.minBpm, locale),
                          max: formatNumber(zone.maxBpm, locale),
                        })}
                      </p>
                      <p className="text-xs text-neutral-500 dark:text-neutral-400">{copy.purpose}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
