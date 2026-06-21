"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
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

function FlipTile({ character, index }: { character: string; index: number }) {
  return (
    <span
      className="stepboard-flip-digit relative inline-flex h-14 w-10 items-center justify-center overflow-hidden rounded-lg bg-neutral-900 font-mono text-3xl font-bold tabular-nums text-[#F8EAD8] shadow-[inset_0_1px_0_rgba(255,255,255,0.12),inset_0_-2px_5px_rgba(0,0,0,0.55),0_4px_10px_rgba(0,0,0,0.16)] sm:h-16 sm:w-12 sm:text-4xl md:h-20 md:w-14 md:text-5xl"
      style={{ animationDelay: `${index * 45}ms` }}
    >
      <span className="absolute inset-x-0 top-1/2 h-px bg-black/80" />
      <span className="absolute inset-x-0 top-[calc(50%+1px)] h-px bg-white/10" />
      <span className="relative">{character}</span>
    </span>
  );
}

function FlipCounter({ total }: { total: string }) {
  const formatted = formatStepboardTotal(total);
  let characterIndex = 0;

  return (
    <div
      role="img"
      aria-label={`${formatted} steps walked by the Steps community`}
      className="flex items-center justify-center"
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
            {(groupIndex < groups.length - 1 ? `${group},` : group)
              .split("")
              .map((character) => {
                const index = characterIndex++;
                return (
                  <span
                    key={`${index}-${character}`}
                    className="mx-0.5 sm:mx-1"
                  >
                    <FlipTile character={character} index={index} />
                  </span>
                );
              })}
          </span>
        ))}
      </span>
    </div>
  );
}

function BoardFrame({ children }: { children: ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-3xl">
      <div className="relative overflow-hidden rounded-[2rem] border border-black/70 bg-gradient-to-b from-neutral-700 via-neutral-800 to-neutral-950 p-4 shadow-[0_30px_60px_-20px_rgba(0,0,0,0.6),inset_0_1px_0_rgba(255,255,255,0.18)]">
        {[
          "left-2.5 top-2.5",
          "right-2.5 top-2.5",
          "left-2.5 bottom-2.5",
          "right-2.5 bottom-2.5",
        ].map((position) => (
          <span
            key={position}
            aria-hidden="true"
            className={`absolute ${position} h-2 w-2 rounded-full bg-neutral-900 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25),0_1px_1px_rgba(0,0,0,0.6)]`}
          />
        ))}
        <div className="rounded-2xl bg-neutral-950 shadow-[inset_0_2px_14px_rgba(0,0,0,0.9)]">
          <div className="flex items-center justify-between border-b border-white/10 px-5 py-3 sm:px-8">
            <span className="flex items-center gap-2 font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#F8EAD8]/70 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
              Stepboard
            </span>
            <span className="font-mono text-[0.6rem] uppercase tracking-[0.25em] text-[#F8EAD8]/45 sm:text-xs">
              Total Steps
            </span>
          </div>
          <div className="flex min-h-32 items-center justify-center px-5 py-8 sm:px-8 sm:py-10 md:min-h-40 md:py-12">
            {children}
          </div>
          <div className="border-t border-white/10 px-5 py-3 text-center sm:px-8">
            <p className="font-mono text-[0.6rem] uppercase tracking-[0.2em] text-[#F8EAD8]/45 sm:text-xs">
              Total steps walked by Stepboard members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function CounterPlaceholder() {
  return (
    <div
      aria-hidden="true"
      className="flex flex-wrap items-center justify-center"
    >
      {Array.from({ length: 10 }, (_, index) => (
        <span
          key={index}
          className="mx-0.5 h-14 w-10 animate-pulse rounded-lg bg-neutral-800 sm:mx-1 sm:h-16 sm:w-12 md:h-20 md:w-14"
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

  if (state.status === "unavailable") {
    return null;
  }

  return (
    <section
      className="relative z-10 -mt-8 px-4 pb-16 md:-mt-14 md:pb-20"
      aria-label="Stepboard community step total"
    >
      <Reveal>
        <BoardFrame>
          {state.status === "loaded" ? (
            <FlipCounter total={state.total} />
          ) : (
            <CounterPlaceholder />
          )}
        </BoardFrame>
      </Reveal>
    </section>
  );
}
