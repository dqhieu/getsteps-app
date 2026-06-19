import { ShieldCheck } from "lucide-react";
import { Reveal } from "./landing-reveal";

export function LandingPrivacy() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <Reveal>
          <div className="max-w-2xl mx-auto text-center rounded-3xl border border-neutral-200/80 dark:border-white/10 bg-white dark:bg-neutral-900 p-8">
            <ShieldCheck
              className="mx-auto h-7 w-7 text-neutral-700 dark:text-neutral-300"
              aria-hidden
            />
            <h3 className="mt-4 text-xl font-medium tracking-tight text-balance text-neutral-900 dark:text-white">
              Your data stays on your device by default
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-pretty text-neutral-600 dark:text-neutral-400">
              Health data is stored locally and accessed securely through Apple
              HealthKit with your permission. If you opt into the Stepboard
              leaderboard, selected metrics are synced to power the rankings.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
