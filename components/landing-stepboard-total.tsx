"use client";

import { useEffect, useRef, useState } from "react";
import {
  formatStepboardTotal,
  normalizeStepboardTotal,
} from "../lib/stepboard-total";
import { getSupabase } from "../lib/supabase";
import { Reveal } from "./landing-reveal";

type TotalState =
  | { status: "loading" }
  | { status: "loaded"; total: string }
  | { status: "unavailable" };

function FlipDigit({ digit, index }: { digit: string; index: number }) {
  return (
    <span
      className="stepboard-flip-digit relative inline-flex h-11 w-8 items-center justify-center overflow-hidden rounded-md bg-neutral-900 font-mono text-2xl font-bold tabular-nums text-[#F8EAD8] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-2px_5px_rgba(0,0,0,0.55),0_4px_10px_rgba(0,0,0,0.16)] sm:h-14 sm:w-10 sm:rounded-lg sm:text-3xl md:h-16 md:w-12 md:text-4xl"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <span className="absolute inset-x-0 top-1/2 h-px bg-black/80" />
      <span className="absolute inset-x-0 top-[calc(50%+1px)] h-px bg-white/10" />
      <span className="relative">{digit}</span>
    </span>
  );
}

function FlipCounter({ total }: { total: string }) {
  const formatted = formatStepboardTotal(total);
  let digitIndex = 0;

  return (
    <div
      role="img"
      aria-label={`${formatted} steps walked by the Steps community`}
      className="flex min-h-16 items-center justify-center md:min-h-20"
    >
      <span
        aria-hidden="true"
        data-testid="flip-counter-visual"
        className="flex max-w-full flex-wrap justify-center gap-y-2"
      >
        {formatted.split(",").map((group, groupIndex, groups) => (
          <span
            key={`${group}-${groupIndex}`}
            className="inline-flex items-center"
          >
            {group.split("").map((digit) => {
              const index = digitIndex++;
              return (
                <span key={`${index}-${digit}`} className="mx-0.5 sm:mx-1">
                  <FlipDigit digit={digit} index={index} />
                </span>
              );
            })}
            {groupIndex < groups.length - 1 ? (
              <span className="mx-0.5 self-end pb-1 font-mono text-xl font-bold text-neutral-400 sm:mx-1 sm:pb-2 sm:text-3xl">
                ,
              </span>
            ) : null}
          </span>
        ))}
      </span>
    </div>
  );
}

function CounterPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex min-h-16 flex-wrap items-center justify-center gap-1 md:min-h-20"
    >
      {Array.from({ length: 9 }, (_, index) => (
        <span
          key={index}
          className="h-9 w-6 animate-pulse rounded-md bg-neutral-200 dark:bg-neutral-800 sm:h-14 sm:w-10 md:h-16 md:w-12"
        />
      ))}
    </div>
  );
}

export function LandingStepboardTotal() {
  const [state, setState] = useState<TotalState>({ status: "loading" });
  const requestRef = useRef<Promise<string | null> | null>(null);

  useEffect(() => {
    let cancelled = false;
    let request = requestRef.current;

    if (!request) {
      request = (async () => {
        try {
          const { data, error } = await getSupabase().rpc(
            "get_public_stepboard_total_steps",
          );
          return error ? null : normalizeStepboardTotal(data);
        } catch {
          return null;
        }
      })();
      requestRef.current = request;
    }

    void request.then((total) => {
      if (!cancelled) {
        setState(
          total === null
            ? { status: "unavailable" }
            : { status: "loaded", total },
        );
      }
    });

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section
      className="px-4 py-12 md:py-16"
      aria-labelledby="stepboard-total-title"
    >
      <Reveal>
        <div className="mx-auto max-w-5xl rounded-3xl bg-gradient-to-br from-orange-50/80 via-white to-white px-4 py-10 text-center shadow-[0_0_0_1px_rgba(237,119,47,0.12),0_1px_2px_-1px_rgba(0,0,0,0.08),0_12px_30px_-16px_rgba(0,0,0,0.16)] dark:from-orange-950/20 dark:via-neutral-900 dark:to-neutral-950 dark:shadow-[0_0_0_1px_rgba(255,255,255,0.08)] sm:px-8 md:py-14">
          <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#ED772F]">
            Walking together
          </p>
          <h2 id="stepboard-total-title" className="sr-only">
            Stepboard community step total
          </h2>

          <div className="mt-5">
            {state.status === "loading" ? <CounterPlaceholder /> : null}
            {state.status === "loaded" ? (
              <FlipCounter total={state.total} />
            ) : null}
            {state.status === "unavailable" ? (
              <p className="flex min-h-16 items-center justify-center text-pretty text-lg font-medium text-neutral-500 dark:text-neutral-400 md:min-h-20">
                Total currently unavailable
              </p>
            ) : null}
          </div>

          <p className="mt-5 text-pretty text-lg font-medium tracking-tight text-neutral-800 dark:text-neutral-100 md:text-xl">
            steps walked by the Steps community
          </p>
          <p className="mt-1 text-sm text-neutral-500 dark:text-neutral-400">
            {state.status === "loaded" ? "and counting" : "Live from Stepboard"}
          </p>
        </div>
      </Reveal>
    </section>
  );
}
