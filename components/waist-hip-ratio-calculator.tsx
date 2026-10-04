"use client";

import { useState, type ReactNode } from "react";
import { calculateWaistHipRatio, type RiskBand } from "@/lib/waist-hip-ratio-calculator";
import type { Gender } from "@/lib/bmr-calculator";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { formatDecimal, formatNumber, interpolate } from "@/lib/i18n/format";
import { rich } from "@/lib/i18n/rich";
import type { WaistToHipRatioCalculatorMessages } from "@/lib/i18n/messages/tool-pages/waist-to-hip-ratio-calculator/en";

function cmToIn(cm: number) { return Math.round(cm / 2.54); }
function inToCm(inch: number) { return inch * 2.54; }

const INPUT_CLASS =
  "w-full py-3 px-4 rounded-lg bg-surface text-foreground border border-border outline-none focus:shadow-[0_0_0_3px_var(--ring)] text-lg";

export function WaistHipRatioCalculator({
  t,
  locale = DEFAULT_LOCALE,
  resultCta,
}: {
  t: WaistToHipRatioCalculatorMessages["calculator"];
  locale?: Locale;
  resultCta?: ReactNode;
}) {
  const [gender, setGender] = useState<Gender>("male");
  const [waistCm, setWaistCm] = useState<number>(90);
  const [hipCm, setHipCm] = useState<number>(100);
  const [unit, setUnit] = useState<"cm" | "in">("cm");
  const [calculated, setCalculated] = useState(false);

  const result = calculateWaistHipRatio(gender, waistCm, hipCm);

  const showValue = (cm: number) => (unit === "cm" ? Math.round(cm) : cmToIn(cm));
  const toCm = (val: number) => (unit === "cm" ? val : inToCm(val));
  const genderLabel: Record<Gender, string> = { male: t.male, female: t.female };
  const group = gender === "male" ? t.groupMen : t.groupWomen;
  const groupTitle = gender === "male" ? t.men : t.women;

  const bandRange = (b: RiskBand) => {
    if (b.max === Infinity) {
      return interpolate(t.rangeAndAbove, { min: formatDecimal(b.min, locale, 2) });
    }
    if (b.min === 0) {
      return interpolate(t.rangeBelow, { max: formatDecimal(b.max, locale, 2) });
    }
    return interpolate(t.rangeBetween, {
      min: formatDecimal(b.min, locale, 2),
      max: formatDecimal(b.max - 0.01, locale, 2),
    });
  };

  const targetWaist =
    unit === "cm"
      ? `${formatDecimal(result.targetWaistCm, locale, 1)} cm`
      : `${formatNumber(cmToIn(result.targetWaistCm), locale)} in`;

  return (
    <div className="space-y-6">
      <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
        <h2 className="text-lg font-semibold text-foreground mb-6">{t.measurements}</h2>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-muted-soft mb-2">{t.gender}</label>
            <div className="flex gap-2">
              {(["male", "female"] as Gender[]).map((g) => (
                <button key={g} onClick={() => setGender(g)}
                  className={`flex-1 py-2.5 rounded-xl font-medium text-sm transition-colors ${gender === g ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                  {genderLabel[g]}
                </button>
              ))}
            </div>
            <p className="mt-2 text-xs text-muted">
              {t.genderHint}
            </p>
          </div>

          <div>
            <div className="flex items-center justify-between mb-2">
              <label className="text-sm font-medium text-muted-soft">{t.waistHip}</label>
              <div className="flex gap-1">
                {(["cm", "in"] as const).map((u) => (
                  <button key={u} onClick={() => setUnit(u)}
                    className={`px-2.5 py-1 rounded-lg text-xs font-medium transition-colors ${unit === u ? "bg-accent text-white" : "bg-surface text-muted"}`}>
                    {u}
                  </button>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="relative">
                <input type="number" value={showValue(waistCm)}
                  onChange={(e) => setWaistCm(toCm(Number(e.target.value) || 0))}
                  className={`${INPUT_CLASS} pr-16`} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-xs pointer-events-none">{t.waist}</span>
              </div>
              <div className="relative">
                <input type="number" value={showValue(hipCm)}
                  onChange={(e) => setHipCm(toCm(Number(e.target.value) || 0))}
                  className={`${INPUT_CLASS} pr-16`} />
                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-muted text-xs pointer-events-none">{t.hip}</span>
              </div>
            </div>
          </div>

          <div className="rounded-xl bg-surface p-4">
            <p className="text-sm font-medium text-foreground mb-2">{t.howToMeasure}</p>
            <ul className="text-xs text-muted space-y-1 list-disc list-inside">
              <li><strong>{t.waistLabel}</strong> {t.waistMeasure}</li>
              <li><strong>{t.hipLabel}</strong> {t.hipMeasure}</li>
              <li>{t.tapeMeasure}</li>
            </ul>
          </div>

          <button onClick={() => setCalculated(true)}
            className="inline-flex h-12 w-full items-center justify-center rounded-[12px] bg-[image:var(--gradient-button-primary),var(--gradient-button-primary-rim)] bg-origin-border px-6 text-[15px] font-semibold text-[var(--button-primary-text)] shadow-[var(--shadow-button-primary)] [background-clip:padding-box,border-box] [text-shadow:var(--button-primary-text-shadow)] transition-[transform,box-shadow] duration-[var(--duration-1)] hover:-translate-y-px hover:bg-[image:var(--gradient-button-primary-hover),var(--gradient-button-primary-rim-hover)] hover:shadow-[var(--shadow-button-primary-hover)]">
            {t.calculate}
          </button>
        </div>
      </div>

      {calculated && (
        <>
          <div className="rounded-[20px] bg-card p-6 shadow-[var(--shadow-border)]">
            <h2 className="text-lg font-semibold text-foreground mb-4">{t.results}</h2>

            <div className="rounded-xl p-5 text-center mb-4" style={{ backgroundColor: `${result.band.color}1A`, border: `1px solid ${result.band.color}4D` }}>
              <p className="text-xs font-medium mb-1" style={{ color: result.band.color }}>{t.ratioLabel}</p>
              <p className="text-4xl font-bold text-foreground">{formatDecimal(result.ratio, locale, 2)}</p>
              <p className="text-sm font-semibold mt-1" style={{ color: result.band.color }}>{t.levels[result.band.level].label}</p>
            </div>

            <div className="mb-6">
              <div className="relative h-3 rounded-full overflow-hidden flex">
                {result.bands.map((b) => (
                  <div key={b.level} className="flex-1" style={{ backgroundColor: b.color }} />
                ))}
              </div>
              <div
                className="relative h-0"
                aria-hidden
              >
                <div
                  className="absolute -top-5 w-0.5 h-5 bg-foreground"
                  style={{ left: `${result.scalePosition}%` }}
                />
              </div>
              <div className="flex justify-between mt-2 text-xs text-muted">
                <span>{formatDecimal(0.7, locale, 2)}</span>
                <span>{formatDecimal(0.9, locale, 2)}</span>
                <span>{formatDecimal(1.1, locale, 2)}</span>
              </div>
            </div>

            <p className="text-sm text-muted mb-4">
              {interpolate(t.levels[result.band.level].description, { group })}
            </p>

            <div className="rounded-xl bg-surface p-4 mb-4">
              <p className="text-sm font-medium text-foreground mb-1">{t.waistCheck}</p>
              <p className="text-sm text-muted">
                {interpolate(t.waistVerdict[result.waistVerdict.level], {
                  waist: formatNumber(result.waistVerdict.waistCm, locale),
                  threshold: formatNumber(result.waistVerdict.thresholdCm, locale),
                  group,
                })}
              </p>
            </div>

            {result.band.level !== "low" && (
              <div className="rounded-xl bg-surface p-4 mb-4">
                <p className="text-sm text-muted">
                  {rich(t.targetWaist, {
                    waist: (
                      <strong className="text-foreground">
                        {targetWaist}
                      </strong>
                    ),
                  })}
                </p>
              </div>
            )}

            <div>
              <p className="text-sm font-medium text-muted-soft mb-3">
                {interpolate(t.bandsTitle, { group: groupTitle })}
              </p>
              <div className="space-y-2">
                {result.bands.map((b) => (
                  <div key={b.level}
                    className={`flex items-center justify-between p-3 rounded-xl ${b.level === result.band.level ? "border-2 bg-surface" : "bg-surface"}`}
                    style={b.level === result.band.level ? { borderColor: b.color } : undefined}>
                    <div className="flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: b.color }} />
                      <span className="text-sm font-medium text-foreground">{t.levels[b.level].label}</span>
                    </div>
                    <span className="text-sm font-bold text-foreground whitespace-nowrap">
                      {bandRange(b)}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <p className="mt-4 text-xs text-muted">
              {t.disclaimer}
            </p>
          </div>
          {resultCta}
        </>
      )}
    </div>
  );
}
