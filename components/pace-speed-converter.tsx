"use client";

import { useState, useEffect } from "react";
import {
  convertFromPaceKm,
  convertFromPaceMile,
  convertFromSpeedKmh,
  convertFromSpeedMph,
  parsePaceStr,
  toMMSS,
  PACE_REFERENCE,
  type PaceSpeedResult,
} from "@/lib/pace-speed-converter";

type ActiveField = "paceKm" | "paceMile" | "speedKmh" | "speedMph";

const EMPTY: PaceSpeedResult = {
  paceKm: "—", paceMile: "—", speedKmh: "—", speedMph: "—",
  dist30minKm: "—", dist60minKm: "—",
  time5kFormatted: "—", time10kFormatted: "—",
};

export function PaceSpeedConverter() {
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

    // Sync other fields
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
      {/* Input Grid */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h2 className="text-lg font-semibold text-neutral-900 dark:text-white mb-4">
          Enter any value to convert
        </h2>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Pace (min/km)
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
              Pace (min/mile)
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
              Speed (km/h)
            </label>
            <input
              type="number"
              value={speedKmh}
              placeholder="10.9"
              min={0.1}
              step={0.1}
              className={inputCls}
              onChange={(e) => { setActive("speedKmh"); setSpeedKmh(e.target.value); }}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-1">
              Speed (mph)
            </label>
            <input
              type="number"
              value={speedMph}
              placeholder="6.8"
              min={0.1}
              step={0.1}
              className={inputCls}
              onChange={(e) => { setActive("speedMph"); setSpeedMph(e.target.value); }}
            />
          </div>
        </div>
      </div>

      {/* Distance cards */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
          Distance Covered
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {statCard("30 min", result.dist30minKm)}
          {statCard("60 min", result.dist60minKm)}
        </div>
      </div>

      {/* Race time cards */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
          Race Finish Times
        </h3>
        <div className="grid grid-cols-2 gap-3">
          {statCard("5K", result.time5kFormatted)}
          {statCard("10K", result.time10kFormatted)}
        </div>
      </div>

      {/* Reference table */}
      <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 border border-neutral-200 dark:border-neutral-700/50">
        <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-4">
          Reference Paces
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-neutral-200 dark:border-neutral-700">
                <th className="text-left py-2 text-neutral-600 dark:text-neutral-400 font-medium">Activity</th>
                <th className="text-right py-2 text-neutral-600 dark:text-neutral-400 font-medium">km/h</th>
                <th className="text-right py-2 text-neutral-600 dark:text-neutral-400 font-medium">min/km</th>
                <th className="text-right py-2 text-neutral-600 dark:text-neutral-400 font-medium">min/mi</th>
              </tr>
            </thead>
            <tbody>
              {PACE_REFERENCE.map((r) => (
                <tr
                  key={r.label}
                  className="border-b border-neutral-100 dark:border-neutral-700/50 cursor-pointer hover:bg-neutral-50 dark:hover:bg-neutral-700/30"
                  onClick={() => { setActive("speedKmh"); setSpeedKmh(r.speedKmh.toString()); }}
                >
                  <td className="py-2.5 font-medium text-neutral-900 dark:text-white">{r.label}</td>
                  <td className="py-2.5 text-right text-neutral-700 dark:text-neutral-300">{r.speedKmh}</td>
                  <td className="py-2.5 text-right text-neutral-700 dark:text-neutral-300 font-mono">{r.paceKm}</td>
                  <td className="py-2.5 text-right text-neutral-700 dark:text-neutral-300 font-mono">{r.paceMile}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="text-xs text-neutral-400 dark:text-neutral-500 mt-2">Click a row to load that pace</p>
      </div>
    </div>
  );
}
