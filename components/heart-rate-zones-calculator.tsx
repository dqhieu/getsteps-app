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
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.yourDetails}
        </h2>

        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.age}
            </label>
            <div className="relative max-w-xs">
              <input
                type="number"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                {plural(locale, age, t.years)}
              </span>
            </div>
          </div>

          <div className="border-t border-border pt-6">
            <p className="text-sm font-semibold text-muted-soft mb-4">
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
                        ? "bg-accent border-accent"
                        : "border-border bg-transparent"
                    }`}
                  >
                    {useRestingHR && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-sm text-muted-soft">
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
                        className="w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                        {t.bpm}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted">
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
                        ? "bg-accent border-accent"
                        : "border-border bg-transparent"
                    }`}
                  >
                    {useCustomMaxHR && (
                      <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    )}
                  </button>
                  <span className="text-sm text-muted-soft">
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
                        className="w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)]"
                      />
                      <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                        {t.bpm}
                      </span>
                    </div>
                    <p className="mt-1 text-xs text-muted">
                      {t.maxHint}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6 mb-6">
          <div className="flex items-center justify-between flex-wrap gap-3">
            <div>
              <p className="text-sm font-medium text-muted mb-1">
                {t.maxHeartRate}
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-bold text-foreground">
                  {formatNumber(result.maxHR, locale)}
                </span>
                <span className="text-xl text-muted">{t.bpm}</span>
              </div>
            </div>
            <span
              className={`px-3 py-1 rounded-full text-sm font-semibold ${
                result.method === "karvonen"
                  ? "bg-accent/15 text-accent"
                  : "bg-surface text-muted dark:text-muted"
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
              <span key={zone.zone} className="text-xs text-muted flex-1 text-center">
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
                className="flex items-center gap-4 p-4 rounded-xl bg-surface"
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 text-white font-bold text-sm"
                  style={{ backgroundColor: zone.color }}
                >
                  {interpolate(t.zoneBadge, { n: zone.zone })}
                </div>

                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-foreground text-sm">
                    {copy.name}
                  </p>
                  <p className="text-xs text-muted truncate">
                    {copy.benefit}
                  </p>
                </div>

                <div className="text-right flex-shrink-0">
                  <p className="font-bold text-foreground text-sm">
                    {interpolate(t.bpmRange, {
                      min: formatNumber(zone.minBpm, locale),
                      max: formatNumber(zone.maxBpm, locale),
                    })}
                  </p>
                  <p className="text-xs text-muted">
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
