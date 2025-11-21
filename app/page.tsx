const features = [
  {
    title: "Instant motivation",
    description:
      "Set personal goals, close your rings, and get encouraging nudges that keep you moving throughout the day.",
  },
  {
    title: "Actionable insights",
    description:
      "See your steps, heart rate, and workout history in one clean view designed for quick check-ins on the go.",
  },
  {
    title: "Built for focus",
    description:
      "Minimal design with large typography, friendly gradients, and dark mode so you can check progress without distractions.",
  },
];

const highlights = [
  { label: "Daily streak", value: "24 days" },
  { label: "Steps today", value: "8,942" },
  { label: "Move goal", value: "730 kcal" },
];

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_35%),radial-gradient(circle_at_80%_0%,rgba(56,189,248,0.22),transparent_30%),radial-gradient(circle_at_50%_70%,rgba(248,113,113,0.16),transparent_35%)]" />

      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-12 sm:pt-16 lg:pt-24">
        <header className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-medium shadow-lg shadow-indigo-500/10 backdrop-blur">
            <div className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
            Available on the App Store now
          </div>
          <nav className="flex items-center gap-4 text-sm text-white/70">
            <a className="hover:text-white" href="#features">
              Features
            </a>
            <a className="hover:text-white" href="#how-it-works">
              How it works
            </a>
            <a className="hover:text-white" href="/privacy">
              Privacy
            </a>
          </nav>
        </header>

        <section className="grid items-center gap-10 rounded-3xl border border-white/10 bg-white/5 px-6 py-10 shadow-[0_20px_80px_-40px_rgba(59,130,246,0.6)] backdrop-blur sm:grid-cols-2 sm:px-10 sm:py-12 lg:gap-14">
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-indigo-500/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-indigo-100">
              Move with intention
            </div>
            <h1 className="text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
              A simple, joyful landing spot for your daily steps
            </h1>
            <p className="text-lg text-white/70">
              Steps brings your activity, workouts, and heart data together with a clean interface that feels right at home on
              your phone and Apple Watch. Track progress, celebrate streaks, and keep your goals close wherever you go.
            </p>
            <div className="flex flex-wrap items-center gap-4">
              <a
                href="https://apps.apple.com/app/apple-store/id6746096378"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                <svg
                  aria-hidden
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.564 12.7c-.03-3.194 2.61-4.726 2.731-4.804-1.491-2.176-3.81-2.475-4.63-2.512-1.963-.204-3.836 1.166-4.83 1.166-.99 0-2.54-1.14-4.179-1.1-2.139.033-4.127 1.285-5.231 3.237-2.237 3.85-.57 9.552 1.589 12.676 1.057 1.508 2.316 3.192 3.958 3.132 1.59-.065 2.189-1.01 4.109-1.01 1.92 0 2.46 1.01 4.16.974 1.723-.028 2.808-1.541 3.852-3.061 1.241-1.819 1.75-3.59 1.768-3.676-.038-.014-3.39-1.303-3.398-5.022Zm-3.164-9.214c.842-1.02 1.409-2.425 1.253-3.846-1.213.048-2.677.806-3.547 1.825-.783.9-1.458 2.34-1.278 3.71 1.352.107 2.72-.686 3.572-1.69Z" />
                </svg>
                Download on the App Store
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-base font-semibold text-white/90 transition hover:-translate-y-0.5 hover:border-white/30"
              >
                See how it works
                <span aria-hidden>→</span>
              </a>
            </div>
            <div className="grid grid-cols-3 gap-4 pt-4 sm:pt-6">
              {highlights.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-white/10 bg-slate-900/60 px-4 py-3 text-sm text-white/80"
                >
                  <p className="text-xs uppercase tracking-[0.18em] text-white/50">{item.label}</p>
                  <p className="pt-2 text-xl font-semibold text-white">{item.value}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative flex items-center justify-center">
            <div className="absolute -left-16 -top-6 h-36 w-36 rounded-full bg-indigo-500/30 blur-3xl" aria-hidden />
            <div className="absolute -right-10 bottom-6 h-28 w-28 rounded-full bg-cyan-400/20 blur-3xl" aria-hidden />
            <div className="relative w-full max-w-sm rounded-[36px] border border-white/15 bg-gradient-to-b from-white/10 via-white/5 to-white/10 p-5 shadow-[0_20px_60px_-35px_rgba(14,165,233,0.8)]">
              <div className="rounded-[28px] bg-slate-900 p-5 shadow-inner">
                <div className="mb-4 flex items-center justify-between text-xs text-white/60">
                  <span>Today</span>
                  <span>San Francisco</span>
                </div>
                <div className="space-y-4">
                  <div className="rounded-2xl bg-gradient-to-r from-indigo-500/80 via-sky-500/70 to-emerald-400/80 px-4 py-5 shadow-lg">
                    <p className="text-sm uppercase tracking-[0.2em] text-white/80">Steps</p>
                    <p className="text-4xl font-bold">8,942</p>
                    <p className="text-sm text-white/80">Goal: 10,000</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/70">
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-white">Move</span>
                      <span className="font-semibold text-emerald-300">+430 kcal</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full w-3/4 rounded-full bg-emerald-400" />
                    </div>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-sm text-white/70">
                    <div className="flex items-center justify-between pb-2">
                      <span className="text-white">Heart rate</span>
                      <span className="font-semibold text-sky-300">78 bpm</span>
                    </div>
                    <div className="h-2 rounded-full bg-white/10">
                      <div className="h-full w-1/2 rounded-full bg-sky-300" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="features" className="grid gap-6 rounded-3xl border border-white/10 bg-slate-900/60 p-6 shadow-[0_20px_60px_-35px_rgba(14,165,233,0.6)] sm:grid-cols-3 sm:p-8">
          {features.map((feature) => (
            <div key={feature.title} className="rounded-2xl border border-white/10 bg-white/5 p-5">
              <div className="mb-3 h-10 w-10 rounded-full bg-white/10" aria-hidden />
              <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
              <p className="pt-2 text-sm leading-relaxed text-white/70">{feature.description}</p>
            </div>
          ))}
        </section>

        <section id="how-it-works" className="grid gap-8 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-[0_20px_60px_-35px_rgba(14,165,233,0.6)] sm:grid-cols-[1.2fr_1fr] sm:p-10">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-white/60">How it works</p>
            <h2 className="text-3xl font-semibold sm:text-4xl">Designed for quick, everyday wins</h2>
            <p className="text-white/70">
              Open Steps to see exactly where you stand today. Add a workout, check your heart rate trends, or simply close your
              move, exercise, and stand goals with friendly reminders that respect your focus.
            </p>
            <ul className="space-y-3 text-white/80">
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
                Syncs seamlessly with Health data to keep everything up to date.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-sky-300" aria-hidden />
                Clean summaries and widgets so you can check progress from your lock screen.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 rounded-full bg-indigo-300" aria-hidden />
                Privacy-first design—your health data stays on your device and under your control.
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-white/10 bg-slate-900/70 p-6">
            <div className="flex items-center justify-between text-sm text-white/60">
              <span>Weekly overview</span>
              <span>Updated just now</span>
            </div>
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Steps</p>
                <p className="text-2xl font-semibold text-white">62,340</p>
                <p className="text-sm text-emerald-300">+12% vs last week</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Workouts</p>
                <p className="text-2xl font-semibold text-white">5 sessions</p>
                <p className="text-sm text-emerald-300">+1 this week</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Heart rate</p>
                <p className="text-2xl font-semibold text-white">Resting 58 bpm</p>
                <p className="text-sm text-sky-300">Stable trend</p>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs uppercase tracking-[0.18em] text-white/50">Streak</p>
                <p className="text-2xl font-semibold text-white">24 days</p>
                <p className="text-sm text-emerald-300">Keep it going</p>
              </div>
            </div>
          </div>
        </section>

        <section className="overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-indigo-500/30 via-slate-900/60 to-cyan-400/25 px-6 py-10 sm:px-10">
          <div className="grid items-center gap-6 sm:grid-cols-[2fr_1fr]">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-[0.2em] text-white/70">Ready to move?</p>
              <h3 className="text-3xl font-semibold sm:text-4xl">Start your streak with Steps today</h3>
              <p className="text-white/80">
                Download the app and get a friendly space to track movement, celebrate progress, and stay motivated without
                clutter.
              </p>
            </div>
            <div className="flex flex-wrap justify-start gap-3">
              <a
                href="https://apps.apple.com/app/apple-store/id6746096378"
                className="inline-flex items-center gap-3 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-indigo-500/30 transition hover:-translate-y-0.5 hover:shadow-indigo-500/40"
              >
                <svg
                  aria-hidden
                  className="h-5 w-5 fill-current"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.564 12.7c-.03-3.194 2.61-4.726 2.731-4.804-1.491-2.176-3.81-2.475-4.63-2.512-1.963-.204-3.836 1.166-4.83 1.166-.99 0-2.54-1.14-4.179-1.1-2.139.033-4.127 1.285-5.231 3.237-2.237 3.85-.57 9.552 1.589 12.676 1.057 1.508 2.316 3.192 3.958 3.132 1.59-.065 2.189-1.01 4.109-1.01 1.92 0 2.46 1.01 4.16.974 1.723-.028 2.808-1.541 3.852-3.061 1.241-1.819 1.75-3.59 1.768-3.676-.038-.014-3.39-1.303-3.398-5.022Zm-3.164-9.214c.842-1.02 1.409-2.425 1.253-3.846-1.213.048-2.677.806-3.547 1.825-.783.9-1.458 2.34-1.278 3.71 1.352.107 2.72-.686 3.572-1.69Z" />
                </svg>
                Download on the App Store
              </a>
              <a
                href="mailto:hello@getsteps.app"
                className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-base font-semibold text-white/90 transition hover:-translate-y-0.5 hover:border-white/40"
              >
                Contact support
              </a>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
