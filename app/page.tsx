const appStoreUrl = "https://apps.apple.com/app/apple-store/id6746096378";

const features = [
  {
    title: "Simple step tracking",
    description: "Follow your daily steps with clear goals, streaks, and gentle reminders that keep you moving.",
  },
  {
    title: "Guided workouts",
    description: "Short, effective routines built for busy days and small spaces—no equipment required.",
  },
  {
    title: "Health integrations",
    description: "Sync with Health data to view activity, sleep, and mindfulness in one calming dashboard.",
  },
];

const highlights = [
  "Personalized daily targets that adapt to your routine",
  "Celebratory animations for new records and streaks",
  "Offline support so every step still counts",
];

export default function Page() {
  return (
    <main className="relative min-h-screen bg-slate-950 text-white">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(56,189,248,0.12),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(94,234,212,0.12),transparent_35%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 py-14 lg:px-10 lg:py-20">
        <header className="flex flex-col gap-10 rounded-3xl bg-gradient-to-br from-slate-900/60 via-slate-900/40 to-slate-800/60 p-8 shadow-[0_30px_120px_-60px_rgba(59,130,246,0.45)] ring-1 ring-white/5 lg:flex-row lg:items-center lg:gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-sky-100 ring-1 ring-white/10">
              <span className="h-2 w-2 rounded-full bg-emerald-400" aria-hidden />
              Designed for effortless daily movement
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
                Steps — your gentle coach for walking, workouts, and well-being.
              </h1>
              <p className="max-w-2xl text-lg text-slate-200">
                Build healthier habits with a beautifully simple experience. Track steps, follow calming workouts,
                and celebrate steady progress every day.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={appStoreUrl}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-sky-500/15 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-sky-500/25"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 384 512"
                  className="h-5 w-5"
                  aria-hidden
                  fill="currentColor"
                >
                  <path d="M318.7 268.7c-.3-36.4 16.3-64 51.5-84.4-19.4-28-48.8-43.4-88-46.6-36.9-3-77.3 21.6-92.2 21.6-15.3 0-50.2-20.7-77.6-20.7C60.7 139 .9 184.5.9 267.5c0 27.6 5 56 15 85.1 13.4 38.3 61.8 132.2 112.3 130.6 26.4-.6 45-18.8 79.3-18.8 33.6 0 51.5 18.8 77.6 18.8 50.9-.8 95.6-87.9 108.6-126.3-69.5-32.7-74.9-95.9-75-88.2zm-46.4-159.2c27.6-32.8 25.1-62.7 24.3-73.5-24 1.4-52 16.3-67.9 34.7-17.4 19.9-27.8 44.7-25.6 72.8 26.1 2 49.8-11.4 69.2-34z" />
                </svg>
                Download on the App Store
              </a>

              <a
                href="#features"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-base font-semibold text-white transition hover:-translate-y-0.5 hover:border-white hover:bg-white/5"
              >
                Explore features
              </a>
            </div>

            <div className="flex items-center gap-4 text-sm text-slate-200">
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                <span>Daily reminders</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-sky-400" aria-hidden />
                <span>Privacy-first</span>
              </div>
              <div className="flex items-center gap-2 rounded-full bg-white/5 px-3 py-2">
                <span className="h-2.5 w-2.5 rounded-full bg-violet-400" aria-hidden />
                <span>Mindful design</span>
              </div>
            </div>
          </div>

          <div className="flex-1">
            <div className="mx-auto max-w-sm rounded-3xl bg-gradient-to-b from-slate-900 to-slate-800 p-6 ring-1 ring-white/10">
              <div className="flex items-center justify-between text-sm text-slate-300">
                <span>Today</span>
                <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">Streak 12</span>
              </div>

              <div className="mt-6 rounded-2xl bg-white/5 p-5 text-center shadow-inner">
                <p className="text-sm text-slate-300">Steps so far</p>
                <p className="mt-2 text-5xl font-semibold">8,420</p>
                <p className="mt-2 text-sm text-emerald-200">+1,200 vs. yesterday</p>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3 text-center text-sm text-slate-200">
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-2xl font-semibold">32</p>
                  <p className="text-slate-400">Minutes</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-2xl font-semibold">4.1</p>
                  <p className="text-slate-400">Miles</p>
                </div>
                <div className="rounded-xl bg-white/5 p-3">
                  <p className="text-2xl font-semibold">320</p>
                  <p className="text-slate-400">Calories</p>
                </div>
              </div>

              <div className="mt-6 space-y-3">
                <div className="flex items-center justify-between rounded-2xl bg-gradient-to-r from-sky-500/20 to-sky-400/10 p-4">
                  <div>
                    <p className="text-sm text-slate-200">Mindful walk</p>
                    <p className="text-lg font-semibold">15 min • easy</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">Start</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl bg-white/5 p-4">
                  <div>
                    <p className="text-sm text-slate-200">Stretch reset</p>
                    <p className="text-lg font-semibold">8 min • calm</p>
                  </div>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-sm text-white">Queue</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section id="features" className="grid gap-6 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl bg-white/5 p-6 shadow-[0_20px_80px_-50px_rgba(59,130,246,0.35)] ring-1 ring-white/5"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-400/90 to-emerald-400/90 text-slate-950">
                <span className="text-xl">✦</span>
              </div>
              <h2 className="mt-4 text-xl font-semibold">{feature.title}</h2>
              <p className="mt-2 text-slate-200">{feature.description}</p>
            </div>
          ))}
        </section>

        <section className="grid gap-8 rounded-3xl bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/70 p-8 ring-1 ring-white/5 lg:grid-cols-[1.3fr_1fr] lg:items-center">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-200/70">Built for everyday health</p>
            <h3 className="text-3xl font-semibold">Everything you need to stay moving.</h3>
            <p className="text-lg text-slate-200">
              Steps keeps your goals gentle and achievable. Set mindful reminders, track progress without clutter, and
              pair with calming workouts that fit into any schedule.
            </p>
            <div className="flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div key={item} className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm text-slate-100">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" aria-hidden />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl bg-white/5 p-6 shadow-[0_30px_120px_-60px_rgba(16,185,129,0.35)] ring-1 ring-white/5">
            <div className="flex items-center justify-between text-sm text-slate-300">
              <span>Weekly view</span>
              <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-emerald-200">Steady climb</span>
            </div>
            <div className="mt-6 grid grid-cols-7 items-end gap-3">
              {[40, 56, 64, 72, 68, 84, 90].map((height, index) => (
                <div key={index} className="flex flex-col items-center gap-2 text-xs text-slate-400">
                  <div
                    className="w-full rounded-xl bg-gradient-to-t from-slate-700 to-emerald-400"
                    style={{ height: `${height}px` }}
                    aria-hidden
                  />
                  <span className="text-white/80">{['M', 'T', 'W', 'T', 'F', 'S', 'S'][index]}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-center text-sm text-slate-200">
              Clear streaks, heart rate snapshots, and mindful minutes—all together.
            </p>
          </div>
        </section>

        <section className="flex flex-col gap-6 rounded-3xl bg-white/5 p-8 ring-1 ring-white/5 lg:flex-row lg:items-center lg:justify-between">
          <div className="space-y-2">
            <p className="text-sm uppercase tracking-[0.2em] text-sky-200/70">Start moving</p>
            <h4 className="text-2xl font-semibold">Ready to take the first step?</h4>
            <p className="text-slate-200">
              Download Steps to turn everyday walks into a calming ritual. Your progress stays private and always in
              sync.
            </p>
          </div>
          <a
            href={appStoreUrl}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-base font-semibold text-slate-900 shadow-lg shadow-emerald-500/15 transition hover:-translate-y-0.5 hover:shadow-xl hover:shadow-emerald-500/25"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="h-5 w-5"
              aria-hidden
              fill="currentColor"
            >
              <path d="M318.7 268.7c-.3-36.4 16.3-64 51.5-84.4-19.4-28-48.8-43.4-88-46.6-36.9-3-77.3 21.6-92.2 21.6-15.3 0-50.2-20.7-77.6-20.7C60.7 139 .9 184.5.9 267.5c0 27.6 5 56 15 85.1 13.4 38.3 61.8 132.2 112.3 130.6 26.4-.6 45-18.8 79.3-18.8 33.6 0 51.5 18.8 77.6 18.8 50.9-.8 95.6-87.9 108.6-126.3-69.5-32.7-74.9-95.9-75-88.2zm-46.4-159.2c27.6-32.8 25.1-62.7 24.3-73.5-24 1.4-52 16.3-67.9 34.7-17.4 19.9-27.8 44.7-25.6 72.8 26.1 2 49.8-11.4 69.2-34z" />
            </svg>
            Download on the App Store
          </a>
        </section>
      </div>
    </main>
  );
}
