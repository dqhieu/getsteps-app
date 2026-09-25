"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import {
  buildWorkoutCardData,
  CARD_FILE_NAME,
  convertDistanceInput,
  EMPTY_VALUE,
  type CardDistanceUnit,
} from "@/lib/workout-card";
import {
  CARD_HEIGHT,
  CARD_WIDTH,
  drawWorkoutCard,
  FALLBACK_FONT,
} from "@/lib/workout-card-canvas";
import { canvasToPngFile, downloadFile } from "@/lib/canvas-png-export";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, interpolate } from "@/lib/i18n/format";
import en, {
  type StravaStatsGeneratorMessages,
} from "@/lib/i18n/messages/tool-pages/strava-stats-generator/en";

export function StravaStatsGenerator({
  t = en.tool,
  locale = DEFAULT_LOCALE,
}: {
  t?: StravaStatsGeneratorMessages["tool"];
  locale?: Locale;
} = {}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [distance, setDistance] = useState("10");
  const [unit, setUnit] = useState<CardDistanceUnit>("km");
  const [duration, setDuration] = useState("52:30");
  const [fontFamily, setFontFamily] = useState(FALLBACK_FONT);
  const [saved, setSaved] = useState(false);

  // layout.tsx applies the next/font className rather than its CSS variable, so
  // the hashed family name is only reachable via the body's computed style.
  useEffect(() => {
    let active = true;
    document.fonts.ready.then(() => {
      if (!active) return;
      const resolved = getComputedStyle(document.body).fontFamily;
      if (resolved) setFontFamily(resolved);
    });
    return () => {
      active = false;
    };
  }, []);

  const data = useMemo(
    () => buildWorkoutCardData({ distance, unit, duration }),
    [distance, unit, duration]
  );

  const displayData = useMemo(() => {
    if (data.distanceValue === EMPTY_VALUE) return data;
    const parsed = Number(data.distanceValue);
    if (!Number.isFinite(parsed)) return data;
    return {
      ...data,
      distanceValue: formatDecimal(parsed, locale, 2),
    };
  }, [data, locale]);

  useEffect(() => {
    const ctx = canvasRef.current?.getContext("2d");
    if (!ctx) return;
    drawWorkoutCard(ctx, displayData, fontFamily, t.canvas);
  }, [displayData, fontFamily, t.canvas]);

  const handleUnitToggle = () => {
    const next: CardDistanceUnit = unit === "km" ? "mile" : "km";
    setDistance((current) => convertDistanceInput(current, unit, next));
    setUnit(next);
  };

  const handleSave = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    downloadFile(canvasToPngFile(canvas, CARD_FILE_NAME));

    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, []);

  const inputCls =
    "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] focus:border-transparent text-lg";

  const toggleBtnCls =
    "py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-600 text-sm font-medium transition-colors";

  const labelCls =
    "block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-2";

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {/* Inputs */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.workout}
        </h2>

        <div className="space-y-4">
          <div>
            <label htmlFor="card-distance" className={labelCls}>
              {t.distance}
            </label>
            <div className="flex gap-2">
              <input
                id="card-distance"
                type="number"
                inputMode="decimal"
                step={0.01}
                min={0}
                value={distance}
                onChange={(e) => setDistance(e.target.value)}
                className={`flex-1 ${inputCls}`}
              />
              <button
                type="button"
                onClick={handleUnitToggle}
                className={toggleBtnCls}
                aria-label={unit === "km" ? t.switchToMiles : t.switchToKilometers}
              >
                {unit === "km" ? "km" : "mi"}
              </button>
            </div>
          </div>

          <div>
            <label htmlFor="card-duration" className={labelCls}>
              {t.movingTime}
            </label>
            <input
              id="card-duration"
              type="text"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              placeholder={t.durationPlaceholder}
              className={inputCls}
            />
            <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400">
              {t.paceHint}
            </p>
          </div>
        </div>
      </div>

      {/* Preview */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50 flex flex-col">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-6">
          {t.overlay}
        </h2>

        {/* Checkerboard reads as "transparent" — the PNG has no background of
            its own, so without it the preview looks like a white card. */}
        <div
          className="rounded-xl border border-neutral-200 dark:border-neutral-700 overflow-hidden bg-neutral-800"
          style={{
            backgroundImage:
              "linear-gradient(45deg, #1f1f22 25%, transparent 25%, transparent 75%, #1f1f22 75%), linear-gradient(45deg, #1f1f22 25%, transparent 25%, transparent 75%, #1f1f22 75%)",
            backgroundSize: "24px 24px",
            backgroundPosition: "0 0, 12px 12px",
            backgroundColor: "#2a2a2e",
          }}
        >
          <canvas
            ref={canvasRef}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            role="img"
            aria-label={interpolate(t.overlayAria, {
              distance: displayData.distanceValue,
              distanceUnit: displayData.distanceUnit,
              time: displayData.durationValue,
              pace: displayData.paceValue,
              paceUnit: displayData.paceUnit,
            })}
            className="block w-full h-auto"
          />
        </div>

        <button
          type="button"
          onClick={handleSave}
          className="mt-6 w-full bg-[#ED772F] hover:bg-[#d4651f] text-white font-semibold py-3.5 px-4 rounded-xl transition-colors"
        >
          {saved ? t.saved : t.download}
        </button>

        <p className="mt-3 text-xs text-neutral-500 dark:text-neutral-400 text-center">
          {t.downloadHint}
        </p>
      </div>
    </div>
  );
}
