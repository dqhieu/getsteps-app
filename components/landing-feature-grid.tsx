import Image from "next/image";
import { FEATURE_GRID, PERSONAL_RECORDS, WORKOUT_TYPES } from "@/lib/constants";
import { getLandingIcon } from "@/lib/landing-icons";
import { Reveal } from "./landing-reveal";

export function LandingFeatureGrid() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50/60 dark:bg-white/[0.02]">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
              Everything else you&apos;d want
            </h2>
            <p className="mt-3 text-neutral-600 dark:text-neutral-400 text-pretty">
              Built natively for iPhone and Apple Watch, powered by Apple Health.
            </p>
            <div className="mt-5 flex justify-center">
              <Image
                src="/Apple_Health_badge.svg"
                alt="Works with Apple Health"
                width={123}
                height={34}
                className="h-10 w-auto"
              />
            </div>
          </div>
        </Reveal>

        {/* Secondary features */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 max-w-4xl mx-auto">
          {FEATURE_GRID.map((feature, index) => {
            const Icon = getLandingIcon(feature.icon);
            return (
              <Reveal key={feature.title} delay={index * 40}>
                <div className="h-full rounded-2xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-5 md:p-6">
                  <Icon
                    className="h-5 w-5 text-neutral-700 dark:text-neutral-300"
                    aria-hidden
                  />
                  <h3 className="mt-4 font-medium text-neutral-900 dark:text-white">
                    {feature.title}
                  </h3>
                  <p className="mt-1 text-sm text-neutral-600 dark:text-neutral-400">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Personal records */}
        <Reveal>
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-center text-sm font-medium tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              <span className="tabular-nums">8</span> PERSONAL RECORDS
            </h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_RECORDS.map((record) => {
                const Icon = getLandingIcon(record.icon);
                return (
                  <div
                    key={record.title}
                    className="flex items-center gap-2.5 rounded-xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 px-3.5 py-3"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-neutral-500 dark:text-neutral-400"
                      aria-hidden
                    />
                    <span className="text-sm text-neutral-700 dark:text-neutral-300">
                      {record.title}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>

        {/* Workout types */}
        <Reveal>
          <div className="mt-14 max-w-2xl mx-auto text-center">
            <h3 className="text-sm font-medium tracking-[0.2em] text-neutral-400 dark:text-neutral-500">
              <span className="tabular-nums">23+</span> WORKOUT TYPES
            </h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {WORKOUT_TYPES.map((workout) => {
                const Icon = getLandingIcon(workout.icon);
                return (
                  <span
                    key={workout.name}
                    className="inline-flex items-center gap-2 rounded-full border border-neutral-200 dark:border-white/10 px-3.5 py-1.5 text-sm text-neutral-700 dark:text-neutral-300"
                  >
                    <Icon
                      className="h-3.5 w-3.5 text-neutral-500 dark:text-neutral-400"
                      aria-hidden
                    />
                    {workout.name}
                  </span>
                );
              })}
              <span className="inline-flex items-center rounded-full bg-[#ED772F]/10 px-3.5 py-1.5 text-sm font-medium text-[#ED772F]">
                +15 more
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
