"use client";

import { useMemo, useState, type ReactNode } from "react";
import {
  elevationGain,
  formatPace,
  generateEquivalenceTable,
  inclineEquivalent,
  MPH_TO_KMH,
  paceBreakdown,
  requiredIncline,
} from "@/lib/treadmill-incline-calculator";
import { kmToMiles } from "@/lib/unit-converter";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";
import type { TreadmillInclineCalculatorMessages } from "@/lib/i18n/messages/tool-pages/treadmill-incline-calculator/en";

type SpeedUnit = "kmh" | "mph";
type CalculatorCopy = TreadmillInclineCalculatorMessages["calculator"];

const INCLINE_PRESETS = [0, 1, 3, 5, 8, 10, 12, 15];

const inputClass =
  "w-full py-3 px-4 pr-16 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg";
const unitBtnClass =
  "py-3 px-4 rounded-lg bg-surface text-muted-soft hover:bg-ghost-hover text-sm font-medium transition-colors";
const labelClass =
  "block text-sm font-medium text-muted-soft mb-2";

export function TreadmillInclineCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: CalculatorCopy;
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [speed, setSpeed] = useState(4.8);
  const [speedUnit, setSpeedUnit] = useState<SpeedUnit>("kmh");
  const [incline, setIncline] = useState(5);
  const [duration, setDuration] = useState(30);

  const speedKmh = speedUnit === "kmh" ? speed : speed * MPH_TO_KMH;

  const equivalent = useMemo(
    () => inclineEquivalent(speedKmh, incline),
    [speedKmh, incline],
  );
  const elevation = useMemo(
    () => elevationGain(speedKmh, incline, duration),
    [speedKmh, incline, duration],
  );
  const table = useMemo(() => generateEquivalenceTable(speedKmh), [speedKmh]);

  const setPace = paceBreakdown(speedKmh);
  const equivalentPace =
    equivalent.flatSpeedKmh !== null ? paceBreakdown(equivalent.flatSpeedKmh) : null;

  const inclineForBriskWalk = requiredIncline(speedKmh, 6);

  const toggleSpeedUnit = () => {
    if (speedUnit === "kmh") {
      setSpeed(Math.round((speed / MPH_TO_KMH) * 10) / 10);
      setSpeedUnit("mph");
    } else {
      setSpeed(Math.round(speed * MPH_TO_KMH * 10) / 10);
      setSpeedUnit("kmh");
    }
  };

  const showSpeed = (kmh: number) =>
    speedUnit === "kmh"
      ? `${formatDecimal(kmh, locale, 1)} km/h`
      : `${formatDecimal(kmh / MPH_TO_KMH, locale, 1)} mph`;

  const percentText = (value: number) =>
    formatNumber(value, locale, { maximumFractionDigits: 1 });

  const paceText =
    equivalentPace === null
      ? ""
      : interpolate(speedUnit === "kmh" ? t.perKmPace : t.perMilePace, {
          pace:
            speedUnit === "kmh"
              ? formatPace(equivalentPace.minPerKm)
              : formatPace(equivalentPace.minPerMile),
        });

  return (
    <div className="space-y-8">
      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">
          {t.yourSetting}
        </h2>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>{t.beltSpeed}</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                  {speedUnit === "kmh" ? "km/h" : "mph"}
                </span>
              </div>
              <button onClick={toggleSpeedUnit} className={unitBtnClass}>
                {speedUnit === "kmh" ? "mph" : "km/h"}
              </button>
            </div>
          </div>

          <div>
            <label className={labelClass}>
              {interpolate(t.incline, { percent: percentText(incline) })}
            </label>
            <input
              type="range"
              min={0}
              max={15}
              step={0.5}
              value={incline}
              onChange={(e) => setIncline(Number(e.target.value))}
              className="w-full accent-accent mb-3"
            />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {INCLINE_PRESETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setIncline(preset)}
                  className={`py-2 px-2 rounded-lg text-sm font-medium transition-colors ${
                    incline === preset
                      ? "bg-accent text-white"
                      : "bg-surface text-muted-soft hover:bg-ghost-hover"
                  }`}
                >
                  {formatNumber(preset, locale)}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>{t.duration}</label>
            <div className="relative">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className={inputClass}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-muted text-sm pointer-events-none">
                {t.minutes}
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <div className="bg-gradient-to-br from-accent/10 to-accent/5 rounded-xl p-6">
          <h3 className="text-sm font-medium text-muted mb-2">
            {incline > 0 ? t.effortVsFlat : t.flatBelt}
          </h3>
          <p className="text-4xl md:text-5xl font-bold text-foreground">
            {interpolate(t.multiplier, {
              value: formatDecimal(equivalent.effortMultiplier, locale, 1),
            })}
          </p>

          {incline > 0 && (
            <p className="mt-3 text-sm text-muted">
              {equivalent.kind === "between"
                ? interpolate(t.between, {
                    grade: percentText(incline),
                    speed: showSpeed(speedKmh),
                  })
                : rich(t.sameEffort, {
                    gait: equivalent.kind === "jog" ? t.gaitJog : t.gaitWalk,
                    speed: (
                      <strong className="text-accent">
                        {showSpeed(equivalent.flatSpeedKmh as number)}
                      </strong>
                    ),
                    pace: paceText,
                  })}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: t.yourPace, value: showSpeed(speedKmh) },
            {
              label: speedUnit === "kmh" ? t.perKm : t.perMile,
              value:
                speedUnit === "kmh"
                  ? formatPace(setPace.minPerKm)
                  : formatPace(setPace.minPerMile),
            },
            { label: t.met, value: formatDecimal(equivalent.met, locale, 1) },
            {
              label: t.distance,
              value: interpolate(t.distanceValue, {
                km: formatDecimal(elevation.distanceKm, locale, 2),
                mi: formatDecimal(kmToMiles(elevation.distanceKm), locale, 2),
              }),
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-xl p-4"
            >
              <p className="text-xs text-muted mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-foreground text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {resultCta}
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {t.elevationTitle}
        </h3>
        <p className="text-sm text-muted mb-5">
          {interpolate(t.elevationSubtitle, {
            grade: percentText(incline),
            minutes: formatNumber(duration, locale),
            speed: showSpeed(speedKmh),
          })}
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              label: t.verticalMetres,
              value: formatNumber(Math.round(elevation.meters), locale),
            },
            {
              label: t.verticalFeet,
              value: formatNumber(Math.round(elevation.feet), locale),
            },
            { label: t.storeys, value: formatDecimal(elevation.storeys, locale, 1) },
            {
              label: t.stairSteps,
              value: formatNumber(Math.round(elevation.stairSteps), locale),
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-surface rounded-xl p-4"
            >
              <p className="text-xs text-muted mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-foreground">{stat.value}</p>
            </div>
          ))}
        </div>

        {inclineForBriskWalk !== null && inclineForBriskWalk > 0.05 && (
          <p className="mt-5 text-sm text-muted">
            {rich(t.briskWalk, {
              speed: showSpeed(speedKmh),
              grade: (
                <strong className="text-accent">
                  {formatDecimal(inclineForBriskWalk, locale, 1)}%
                </strong>
              ),
            })}
          </p>
        )}
      </div>

      <div className="rounded-[20px] bg-card p-6 md:p-8 shadow-[var(--shadow-border)]">
        <h3 className="text-lg font-semibold text-foreground mb-1">
          {t.tableTitle}
        </h3>
        <p className="text-sm text-muted mb-4">
          {interpolate(t.tableSubtitle, { speed: showSpeed(speedKmh) })}
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-muted border-b border-border">
                <th className="py-2 pr-4 font-medium">{t.colIncline}</th>
                <th className="py-2 pr-4 font-medium">{t.colFeelsLike}</th>
                <th className="py-2 pr-4 font-medium">{t.colMet}</th>
                <th className="py-2 font-medium">{t.colVsFlat}</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr
                  key={row.incline}
                  className={`border-b border-border  ${
                    row.incline === incline ? "bg-chip" : ""
                  }`}
                >
                  <td className="py-2 pr-4 text-foreground">
                    {formatNumber(row.incline, locale)}%
                  </td>
                  <td className="py-2 pr-4 text-foreground font-medium">
                    {row.flatSpeedKmh === null ? (
                      <span className="font-normal text-muted">
                        {t.betweenLabel}
                      </span>
                    ) : (
                      <>
                        {showSpeed(row.flatSpeedKmh)}
                        <span className="ml-1 text-xs font-normal text-muted">
                          {row.kind === "jog" ? t.kindJog : t.kindWalk}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="py-2 pr-4 text-muted">
                    {formatDecimal(row.met, locale, 1)}
                  </td>
                  <td className="py-2 text-muted">
                    {interpolate(t.multiplier, {
                      value: formatDecimal(row.effortMultiplier, locale, 1),
                    })}
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
