"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  type WalkingSpeed,
  WALKING_SPEEDS_KMH,
  calculateCaloriesFromDistance,
} from "@/lib/calorie-calculator";
import { milesToKm } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import en, {
  type WalkingTimeCalculatorMessages,
} from "@/lib/i18n/messages/tool-pages/walking-time-calculator/en";

type CalculatorCopy = WalkingTimeCalculatorMessages["calculator"];

const SPEED_ORDER: WalkingSpeed[] = ["slow", "normal", "brisk", "fast"];

function formatSpeed(value: number, locale: Locale): string {
  return Number.isInteger(value) ? formatNumber(value, locale) : formatDecimal(value, locale, 1);
}

function formatWalkDuration(minutes: number, t: CalculatorCopy, locale: Locale): string {
  const rounded = Math.round(minutes);
  if (rounded >= 60) {
    const hours = Math.floor(rounded / 60);
    const mins = rounded % 60;
    if (mins > 0) {
      return interpolate(t.hoursMinutes, {
        hours: formatNumber(hours, locale),
        minutes: formatNumber(mins, locale),
      });
    }
    return interpolate(t.hoursOnly, { hours: formatNumber(hours, locale) });
  }
  return interpolate(t.minutesOnly, { minutes: formatNumber(rounded, locale) });
}

type DistanceUnit = "km" | "miles";

const DEFAULT_VALUES = {
  distance: 5,
  speed: "normal" as WalkingSpeed,
  includeBreaks: false,
};

const COMMON_DISTANCES = [1, 1.60934, 2, 3, 5, 8.0467, 10, 21.0975];

export function WalkingTimeCalculator({
  t = en.calculator,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t?: CalculatorCopy;
  locale?: Locale;
  resultCta?: ReactNode;
} = {}) {
  // Input state
  const [distance, setDistance] = useState<number>(DEFAULT_VALUES.distance);
  const [distanceUnit, setDistanceUnit] = useState<DistanceUnit>("km");
  const [speed, setSpeed] = useState<WalkingSpeed>(DEFAULT_VALUES.speed);
  const [includeBreaks, setIncludeBreaks] = useState<boolean>(DEFAULT_VALUES.includeBreaks);

  // Get distance in km for calculations
  const distanceKm = useMemo(
    () => (distanceUnit === "km" ? distance : milesToKm(distance)),
    [distance, distanceUnit]
  );

  // Calculate results
  const results = useMemo(() => {
    const speedKmh = WALKING_SPEEDS_KMH[speed];
    let walkingMinutes = (distanceKm / speedKmh) * 60;

    // Add breaks: 5 minutes per 30 minutes of walking
    let breakMinutes = 0;
    if (includeBreaks) {
      breakMinutes = Math.floor(walkingMinutes / 30) * 5;
    }

    const totalMinutes = walkingMinutes + breakMinutes;

    // Estimate steps (average 75cm step length)
    const steps = Math.round((distanceKm * 100000) / 75);

    // Estimate calories (70kg average weight)
    const calories = calculateCaloriesFromDistance(70, distanceKm, speed);

    return {
      walkingMinutes: Math.round(walkingMinutes),
      breakMinutes,
      totalMinutes: Math.round(totalMinutes),
      steps,
      calories: Math.round(calories),
      speedKmh,
    };
  }, [distanceKm, speed, includeBreaks]);

  // Generate reference table for current speed
  const referenceTable = useMemo(() => {
    const speedKmh = WALKING_SPEEDS_KMH[speed];
    return COMMON_DISTANCES.map((km, index) => ({
      label: t.distances[index],
      minutes: Math.round((km / speedKmh) * 60),
    }));
  }, [speed, t.distances]);

  return (
    <div className="space-y-8">
      {/* Input Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.title}
        </h2>

        <div className="space-y-6">
          {/* Distance Input */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.distance}
            </label>
            <div className="flex gap-2">
              <input
                type="number"
                value={distance}
                onChange={(e) => setDistance(Number(e.target.value))}
                step={0.1}
                className="flex-1 py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg"
              />
              <select
                value={distanceUnit}
                onChange={(e) => setDistanceUnit(e.target.value as DistanceUnit)}
                className="py-3 pl-4 pr-10 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] appearance-none bg-[length:16px_16px] bg-[position:right_0.75rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23737373%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"
              >
                <option value="km">km</option>
                <option value="miles">{t.miles}</option>
              </select>
            </div>
          </div>

          {/* Walking Speed */}
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">
              {t.walkingSpeed}
            </label>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {SPEED_ORDER.map((value) => (
                <button
                  key={value}
                  onClick={() => setSpeed(value)}
                  className={`py-3 px-4 rounded-lg text-sm font-medium transition-colors ${
                    speed === value
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  <span className="block">{t.speeds[value].label}</span>
                  <span
                    className={`block text-xs mt-0.5 ${
                      speed === value
                        ? "text-white/80"
                        : "text-muted"
                    }`}
                  >
                    {t.speeds[value].description}
                  </span>
                </button>
              ))}
            </div>
          </div>

          {/* Include Breaks Toggle */}
          <div>
            <label className="flex items-center gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={includeBreaks}
                onChange={(e) => setIncludeBreaks(e.target.checked)}
                className="w-5 h-5 rounded border-border  text-accent focus:ring-accent focus:ring-offset-0"
              />
              <span className="text-sm font-medium text-muted-soft">
                {t.includeBreaks}
              </span>
            </label>
          </div>
        </div>
      </div>

      {/* Results Card */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted mb-4">
            {t.walkingTime}
          </h3>

          <div className="space-y-4">
            <div>
              <p className="text-4xl md:text-5xl font-bold text-foreground">
                {formatWalkDuration(results.totalMinutes, t, locale)}
              </p>
              {includeBreaks && results.breakMinutes > 0 && (
                <p className="text-lg text-muted mt-1">
                  {interpolate(t.breaksDetail, {
                    walking: formatWalkDuration(results.walkingMinutes, t, locale),
                    breaks: formatNumber(results.breakMinutes, locale),
                  })}
                </p>
              )}
            </div>
          </div>

          {/* Additional Stats */}
          <div className="mt-6 pt-6 border-t border-accent/20 grid grid-cols-3 gap-4">
            <div>
              <p className="text-sm text-muted">
                {t.distanceLabel}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {distanceUnit === "km"
                  ? interpolate(t.kmValue, { distance: formatDecimal(distanceKm, locale, 1) })
                  : interpolate(t.miValue, { distance: formatDecimal(distance, locale, 1) })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.stepsLabel}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {formatNumber(results.steps, locale)}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted">
                {t.caloriesLabel}
              </p>
              <p className="text-xl font-semibold text-foreground">
                {interpolate(t.approxCalories, { calories: formatNumber(results.calories, locale) })}
              </p>
            </div>
          </div>
        </div>
      </div>

      {resultCta}

      {/* Reference Table */}
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-2">
          {t.referenceTitle}
        </h2>
        <p className="text-sm text-muted mb-6">
          {interpolate(t.referenceSubtitle, {
            pace: t.speeds[speed].inline,
            speed: formatSpeed(results.speedKmh, locale),
          })}
        </p>

        <div className="overflow-x-auto -mx-6 md:-mx-8 px-6 md:px-8">
          <table className="w-full min-w-[300px]">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.colDistance}
                </th>
                <th className="text-left py-3 px-2 text-sm font-medium text-muted">
                  {t.colTime}
                </th>
              </tr>
            </thead>
            <tbody>
              {referenceTable.map((row) => (
                <tr
                  key={row.label}
                  className="border-b border-border  hover:bg-surface  transition-colors"
                >
                  <td className="py-3 px-2">
                    <span className="font-semibold text-foreground">
                      {row.label}
                    </span>
                  </td>
                  <td className="py-3 px-2">
                    <span className="text-foreground">
                      {formatWalkDuration(row.minutes, t, locale)}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
