"use client";

import { useState, useMemo, type ReactNode } from "react";
import {
  paceBreakdown,
  formatPace,
  inclineEquivalent,
  elevationGain,
  requiredIncline,
  generateEquivalenceTable,
  MPH_TO_KMH,
} from "@/lib/treadmill-incline-calculator";
import { kmToMiles, formatNumber } from "@/lib/unit-converter";

type SpeedUnit = "kmh" | "mph";

const INCLINE_PRESETS = [0, 1, 3, 5, 8, 10, 12, 15];

const inputClass =
  "w-full py-3 px-4 pr-16 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";
const unitBtnClass =
  "py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors";
const labelClass =
  "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2";

export function TreadmillInclineCalculator({
  resultCta,
}: { resultCta?: ReactNode } = {}) {
  const [speed, setSpeed] = useState(4.8);
  const [speedUnit, setSpeedUnit] = useState<SpeedUnit>("kmh");
  const [incline, setIncline] = useState(5);
  const [duration, setDuration] = useState(30);

  const speedKmh = speedUnit === "kmh" ? speed : speed * MPH_TO_KMH;

  const equivalent = useMemo(
    () => inclineEquivalent(speedKmh, incline),
    [speedKmh, incline]
  );
  const elevation = useMemo(
    () => elevationGain(speedKmh, incline, duration),
    [speedKmh, incline, duration]
  );
  const table = useMemo(
    () => generateEquivalenceTable(speedKmh),
    [speedKmh]
  );

  const setPace = paceBreakdown(speedKmh);
  const equivalentPace =
    equivalent.flatSpeedKmh !== null
      ? paceBreakdown(equivalent.flatSpeedKmh)
      : null;

  // What grade would be needed to make this speed as hard as a brisk 6 km/h walk.
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
      ? `${kmh.toFixed(1)} km/h`
      : `${(kmh / MPH_TO_KMH).toFixed(1)} mph`;

  return (
    <div className="space-y-8">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          Your Treadmill Setting
        </h2>

        <div className="space-y-6">
          <div>
            <label className={labelClass}>Belt speed</label>
            <div className="flex gap-2">
              <div className="relative flex-1">
                <input
                  type="number"
                  step={0.1}
                  value={speed}
                  onChange={(e) => setSpeed(Number(e.target.value))}
                  className={inputClass}
                />
                <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                  {speedUnit === "kmh" ? "km/h" : "mph"}
                </span>
              </div>
              <button onClick={toggleSpeedUnit} className={unitBtnClass}>
                {speedUnit === "kmh" ? "mph" : "km/h"}
              </button>
            </div>
          </div>

          <div>
            <label className={labelClass}>Incline: {incline}%</label>
            <input
              type="range"
              min={0}
              max={15}
              step={0.5}
              value={incline}
              onChange={(e) => setIncline(Number(e.target.value))}
              className="w-full accent-[#ED772F] mb-3"
            />
            <div className="grid grid-cols-4 md:grid-cols-8 gap-2">
              {INCLINE_PRESETS.map((preset) => (
                <button
                  key={preset}
                  onClick={() => setIncline(preset)}
                  className={`py-2 px-2 rounded-lg text-sm font-medium transition-colors ${
                    incline === preset
                      ? "bg-[#ED772F] text-white"
                      : "bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600"
                  }`}
                >
                  {preset}%
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className={labelClass}>Duration</label>
            <div className="relative">
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(Number(e.target.value))}
                className={inputClass}
              />
              <span className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-500 dark:text-neutral-400 text-sm pointer-events-none">
                minutes
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <div className="bg-gradient-to-br from-[#ED772F]/10 to-[#ED772F]/5 dark:from-[#ED772F]/20 dark:to-[#ED772F]/10 rounded-xl p-6">
          <h3 className="text-sm font-medium text-neutral-600 dark:text-neutral-400 mb-2">
            {incline > 0
              ? "Effort versus the same speed on a flat belt"
              : "Flat belt, so your pace is your effort"}
          </h3>
          <p className="text-4xl md:text-5xl font-bold text-neutral-900 dark:text-white">
            {equivalent.effortMultiplier.toFixed(1)}x
          </p>

          {incline > 0 && (
            <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400">
              {equivalent.kind === "between" ? (
                <>
                  A {incline}% grade at {showSpeed(speedKmh)} is harder than any
                  pace you would sustain as a flat walk, and still easier than
                  the slowest flat jog, so no single level speed matches it.
                </>
              ) : (
                <>
                  Same effort as{" "}
                  {equivalent.kind === "jog" ? "jogging" : "walking"} on the flat
                  at{" "}
                  <strong className="text-[#ED772F]">
                    {showSpeed(equivalent.flatSpeedKmh as number)}
                  </strong>
                  {equivalentPace && (
                    <>
                      {" "}
                      (
                      {speedUnit === "kmh"
                        ? `${formatPace(equivalentPace.minPerKm)} per km`
                        : `${formatPace(equivalentPace.minPerMile)} per mile`}
                      )
                    </>
                  )}
                  .
                </>
              )}
            </p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
          {[
            { label: "Your pace", value: showSpeed(speedKmh) },
            {
              label: speedUnit === "kmh" ? "Per km" : "Per mile",
              value:
                speedUnit === "kmh"
                  ? formatPace(setPace.minPerKm)
                  : formatPace(setPace.minPerMile),
            },
            { label: "MET", value: equivalent.met.toFixed(1) },
            {
              label: "Distance",
              value: `${elevation.distanceKm.toFixed(2)} km / ${kmToMiles(
                elevation.distanceKm
              ).toFixed(2)} mi`,
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-neutral-900 dark:text-white text-sm">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {resultCta}
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
          Elevation Climbed
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-5">
          A {incline}% grade for {formatNumber(duration)} minutes at{" "}
          {showSpeed(speedKmh)}.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Vertical metres", value: formatNumber(Math.round(elevation.meters)) },
            { label: "Vertical feet", value: formatNumber(Math.round(elevation.feet)) },
            { label: "Building storeys", value: elevation.storeys.toFixed(1) },
            { label: "Stair steps", value: formatNumber(Math.round(elevation.stairSteps)) },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-neutral-50 dark:bg-neutral-700/30 rounded-xl p-4"
            >
              <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">
                {stat.label}
              </p>
              <p className="font-semibold text-neutral-900 dark:text-white">
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {inclineForBriskWalk !== null && inclineForBriskWalk > 0.05 && (
          <p className="mt-5 text-sm text-neutral-600 dark:text-neutral-400">
            To make {showSpeed(speedKmh)} as demanding as a brisk 6 km/h
            (3.7 mph) walk on the flat, set the incline to{" "}
            <strong className="text-[#ED772F]">
              {inclineForBriskWalk.toFixed(1)}%
            </strong>
            .
          </p>
        )}
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-1">
          Flat-Pace Equivalent by Incline
        </h3>
        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
          Belt speed held at {showSpeed(speedKmh)}. Only the grade changes.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="text-left text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-700">
                <th className="py-2 pr-4 font-medium">Incline</th>
                <th className="py-2 pr-4 font-medium">Feels like</th>
                <th className="py-2 pr-4 font-medium">MET</th>
                <th className="py-2 font-medium">vs flat</th>
              </tr>
            </thead>
            <tbody>
              {table.map((row) => (
                <tr
                  key={row.incline}
                  className={`border-b border-neutral-100 dark:border-neutral-700/50 ${
                    row.incline === incline ? "bg-[#ED772F]/10" : ""
                  }`}
                >
                  <td className="py-2 pr-4 text-neutral-900 dark:text-white">
                    {row.incline}%
                  </td>
                  <td className="py-2 pr-4 text-neutral-900 dark:text-white font-medium">
                    {row.flatSpeedKmh === null ? (
                      <span className="font-normal text-neutral-500 dark:text-neutral-400">
                        between a walk and a jog
                      </span>
                    ) : (
                      <>
                        {showSpeed(row.flatSpeedKmh)}
                        <span className="ml-1 text-xs font-normal text-neutral-500 dark:text-neutral-400">
                          {row.kind}
                        </span>
                      </>
                    )}
                  </td>
                  <td className="py-2 pr-4 text-neutral-600 dark:text-neutral-400">
                    {row.met.toFixed(1)}
                  </td>
                  <td className="py-2 text-neutral-600 dark:text-neutral-400">
                    {row.effortMultiplier.toFixed(1)}x
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
