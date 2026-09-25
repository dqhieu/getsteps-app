"use client";

import { useState, useEffect } from "react";
import {
  convertFromPaceKm,
  convertFromPaceMile,
  convertFromSpeedKmh,
  convertFromSpeedMph,
  PACE_REFERENCE,
  type PaceSpeedResult,
} from "@/lib/pace-speed-converter";
import type { Locale } from "@/lib/i18n/config";
import type { PaceToSpeedConverterMessages } from "@/lib/i18n/messages/tool-pages/pace-to-speed-converter/en";

type ActiveField = "paceKm" | "paceMile" | "speedKmh" | "speedMph";

const EMPTY: PaceSpeedResult = {
  paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—",
  dist30minKm: "—", dist60minKm: "—",
  time5kFormatted: "—", time10kFormatted: "—",
};

export function PaceSpeedConverter({
  t,
}: {
  t: PaceToSpeedConverterMessages["calculator"];
  locale: Locale;
}) {
  const [paceKm, setPaceKm] = useState("5:30");
  const [paceMile, setPaceMile] = useState("");
  const [speedKmh, setSpeedKmh] = useState("");
  const [speedMph, setSpeedMph] = useState("");
  const [active, setActive] = useState<ActiveField>("paceKm");
  const [result, setResult] = useState<PaceSpeedResult>(EMPTY);

  useEffect(() => {
    let res: PaceSpeedResult = EMPTY;
    if (active === "paceKm" && paceKm) res = convertFromPaceKm(paceKm);
    else if (active === "paceMile" && paceMile) res = convertFromPaceMile(paceMile);
    else if (active === "speedKmh" && speedKmh) res = convertFromSpeedKmh(parseFloat(speedKmh));
    else if (active === "speedMph" && speedMph) res = convertFromSpeedMph(parseFloat(speedMph));
    setResult(res);

    if (res.paceKm !== "—") {
      const pkm = res.paceKm.replace("/km", "");
      const pmi = res.paceMile.replace("/mi", "");
      const skm = res.speedKmh.replace(" km/h", "");
      const smp = res.speedMph.replace(" mph", "");
      if (active !== "paceKm") setPaceKm(pkm);
      if (active !== "paceMile") setPaceMile(pmi);
      if (active !== "speedKmh") setSpeedKmh(skm);
      if (active !== "speedMph") setSpeedMph(smp);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [paceKm, paceMile, speedKmh, speedMph, active]);

  const inputCls =
    "w-full py-3 px-4 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-900 dark:text-white border border-neutral-200 dark:border-neutral-600 focus:outline-none focus:ring-2 focus:ring-[#ED772F] text-base";

  const statCard = (label: string, value: string) => (
    <div className="bg-neutral-50 dark:bg-neutral-900/50 rounded-xl p-4 text-center">
      <p className="text-xs text-neutral-500 dark:text-neutral-400 mb-1">{label}</p>
      <p className="text-lg font-bold text-neutral-900 dark:text-white">{value}</p>
    </div>
  );

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          {t.title}
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t.paceKm}
            </label>
            <input
              type="text"
              value={paceKm}
              placeholder="5:30"
              className={inputCls}
              onChange={(e) => { setActive("paceKm"); setPaceKm(e.target.value); }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t.paceMile}
            </label>
            <input
              type="text"
              value={paceMile}
              placeholder="8:51"
              className={inputCls}
              onChange={(e) => { setActive("paceMile"); setPaceMile(e.target.value); }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t.speedKmh}
            </label>
            <input
              type="number"
              value={speedKmh}
              placeholder="10.9"
              step={0.1}
              className={inputCls}
              onChange={(e) => { setActive("speedKmh"); setSpeedKmh(e.target.value); }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              {t.speedMph}
            </label>
            <input
              type="number"
              value={speedMph}
              placeholder="6.8"
              step={0.1}
              className={inputCls}
              onChange={(e) => { setActive("speedMph"); setSpeedMph(e.target.value); }}
            />
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
          {t.distanceTitle}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {statCard(t.min30, result.dist30minKm)}
          {statCard(t.min60, result.dist60minKm)}
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
          {t.raceTitle}
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {statCard(t.races["5k"], result.time5kFormatted)}
          {statCard(t.races["10k"], result.time10kFormatted)}
        </div>
      </div>

      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
          {t.referenceTitle}
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-2 text-neutral-600 dark:text-neutral-400 font-medium">{t.activityColumn}</th>
                <th className="text-right py-2 text-neutral-600 dark:text-neutral-400 font-medium">{t.kmhColumn}</th>
                <th className="text-right py-2 text-neutral-600 dark:text-neutral-400 font-medium">{t.minKmColumn}</th>
                <th className="text-right py-2 text-neutral-600 dark:text-neutral-400 font-medium">{t.minMiColumn}</th>
              </tr>
            </thead>
            <tbody>
              {PACE_REFERENCE.map((r) => (
                <tr
                  key={r.id}
                  className="border-b border-neutral-100 dark:border-neutral-700/50 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/30"
                  onClick={() => { setActive("speedKmh"); setSpeedKmh(r.speedKmh.toString()); }}
                >
                  <td className="py-2.5 font-medium text-neutral-900 dark:text-white">{t.activities[r.id]}</td>
                  <td className="py-2.5 text-right text-neutral-700 dark:text-neutral-300">{r.speedKmh}</td>
                  <td className="py-2.5 text-right text-neutral-700 dark:text-neutral-300 font-mono">{r.paceKm}</td>
                  <td className="py-2.5 text-right text-neutral-700 dark:text-neutral-300 font-mono">{r.paceMile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">{t.clickHint}</p>
      </div>
    </div>
  );
}
