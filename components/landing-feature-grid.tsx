import Image from "next/image";
import { FEATURE_GRID, PERSONAL_RECORDS, WORKOUT_TYPES } from "@/lib/constants";
import { getLandingIcon } from "@/lib/landing-icons";
import { DEFAULT_LOCALE, type Locale } from "@/lib/i18n/config";
import { getLandingMessages } from "@/lib/i18n/messages/landing";
import { Reveal } from "./landing-reveal";

/** Renders "{count} LABEL" with the count in tabular figures. */
function CountHeading({ template, count }: { template: string; count: string }) {
  const [before, after = ""] = template.split("{count}");
  return (
    <>
      {before}
      <span className="tabular-nums">{count}</span>
      {after}
    </>
  );
}

export function LandingFeatureGrid({ locale = DEFAULT_LOCALE }: { locale?: Locale }) {
  const t = getLandingMessages(locale).features;

  return (
    <section className="py-16 md:py-24 bg-surface">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="text-center max-w-xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium tracking-tight text-balance text-foreground">
              {t.title}
            </h2>
            <p className="mt-3 text-muted text-pretty">
              {t.subtitle}
            </p>
            <div className="mt-5 flex justify-center">
              <Image
                src="/Apple_Health_badge.svg"
                alt={t.healthBadgeAlt}
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
            const copy = t.grid[feature.icon];
            return (
              <Reveal key={feature.icon} delay={index * 40}>
                <div className="h-full rounded-2xl bg-card shadow-[var(--shadow-border)] p-5 md:p-6">
                  <Icon
                    className="h-5 w-5 text-muted-soft"
                    aria-hidden
                  />
                  <h3 className="mt-4 font-medium text-foreground">
                    {copy.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted">
                    {copy.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        {/* Personal records */}
        <Reveal>
          <div className="mt-16 max-w-3xl mx-auto">
            <h3 className="text-center text-sm font-medium tracking-[0.2em] text-muted">
              <CountHeading template={t.recordsTitle} count="8" />
            </h3>
            <div className="mt-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {PERSONAL_RECORDS.map((record) => {
                const Icon = getLandingIcon(record.icon);
                return (
                  <div
                    key={record.icon}
                    className="flex items-center gap-2.5 rounded-xl bg-card shadow-[var(--shadow-border)] px-3.5 py-3"
                  >
                    <Icon
                      className="h-4 w-4 shrink-0 text-muted"
                      aria-hidden
                    />
                    <span className="text-sm text-muted-soft">
                      {t.records[record.icon]}
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
            <h3 className="text-sm font-medium tracking-[0.2em] text-muted">
              <CountHeading template={t.workoutsTitle} count="23+" />
            </h3>
            <div className="mt-5 flex flex-wrap justify-center gap-2.5">
              {WORKOUT_TYPES.map((workout) => {
                const Icon = getLandingIcon(workout.icon);
                return (
                  <span
                    key={workout.icon}
                    className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm text-muted-soft"
                  >
                    <Icon
                      className="h-3.5 w-3.5 text-muted"
                      aria-hidden
                    />
                    {t.workouts[workout.icon]}
                  </span>
                );
              })}
              <span className="inline-flex items-center rounded-full bg-chip px-3.5 py-1.5 text-sm font-medium text-accent">
                {t.moreWorkouts}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
