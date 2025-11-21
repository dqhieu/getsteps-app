import Link from "next/link";

const features = [
  {
    title: "Steps that actually count",
    description:
      "Track every move automatically with background sync, gentle reminders, and streaks that keep you going.",
    accent: "bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-400/30",
  },
  {
    title: "Workouts made simple",
    description:
      "Choose quick guided sessions or log your own routines. Progress updates arrive instantly on your watch and phone.",
    accent: "bg-cyan-500/10 text-cyan-200 ring-1 ring-cyan-400/30",
  },
  {
    title: "Health insights at a glance",
    description:
      "See daily totals, trends, and weekly summaries without digging through menus. Everything syncs securely with Apple Health.",
    accent: "bg-indigo-500/10 text-indigo-200 ring-1 ring-indigo-400/30",
  },
];

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <div className="relative overflow-hidden py-16">
        <div className="pointer-events-none absolute inset-0 opacity-50 blur-3xl">
          <div className="absolute -left-10 top-10 h-64 w-64 rounded-full bg-emerald-500/40" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-indigo-500/30" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-16 px-6">
          <header className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <div className="flex flex-col gap-6">
              <span className="inline-flex w-fit items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 ring-1 ring-white/15">
                Steps for iPhone & Apple Watch
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                Turn everyday walks into a streak you can be proud of.
              </h1>
              <p className="text-lg text-white/70 sm:text-xl">
                Steps is a lightweight fitness companion that keeps your movement front and center. Track steps, quick workouts, and trends without complicated dashboards.
              </p>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="https://apps.apple.com/app/apple-store/id6746096378"
                  className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 px-5 py-3 text-base font-semibold text-white shadow-lg shadow-emerald-500/25 transition hover:scale-[1.01] hover:shadow-xl"
                >
                  Download on the App Store
                </Link>
                <Link
                  href="#learn-more"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-base font-semibold text-white/90 transition hover:border-white/40 hover:text-white"
                >
                  Learn more
                </Link>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-white/70">
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <span className="text-lg font-semibold text-white">98%</span>
                  <span className="leading-tight">App Store satisfaction rating from recent releases</span>
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/5 px-4 py-3 ring-1 ring-white/10">
                  <span className="text-lg font-semibold text-white">24/7</span>
                  <span className="leading-tight">Privacy-friendly syncing that keeps your data on your devices</span>
                </div>
              </div>
            </div>

            <div className="relative mx-auto w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/30 backdrop-blur">
              <div className="absolute -right-6 -top-6 h-20 w-20 rounded-full bg-gradient-to-br from-emerald-500/40 to-cyan-500/40 blur-2xl" />
              <div className="flex items-center justify-between rounded-2xl bg-slate-900/60 px-4 py-3 ring-1 ring-white/10">
                <div className="space-y-1">
                  <p className="text-xs uppercase tracking-[0.25em] text-white/60">Today</p>
                  <p className="text-3xl font-semibold text-white">8,426 steps</p>
                </div>
                <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-sm font-semibold text-emerald-100 ring-1 ring-emerald-400/30">
                  +28% vs yesterday
                </span>
              </div>

              <div className="mt-6 grid gap-4 rounded-2xl bg-slate-900/60 p-4 ring-1 ring-white/10">
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Morning walk</span>
                  <span className="text-white">1.8 mi · 26 min</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Afternoon loop</span>
                  <span className="text-white">2.3 mi · 31 min</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Strength circuit</span>
                  <span className="text-white">18 min · 126 kcal</span>
                </div>
                <div className="flex items-center justify-between text-sm text-white/70">
                  <span>Weekly trend</span>
                  <span className="text-emerald-100">↑ Consistent</span>
                </div>
              </div>

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-emerald-500/20 via-cyan-500/15 to-indigo-500/20 p-[1px]">
                <div className="flex flex-col gap-3 rounded-[18px] bg-slate-950/80 p-4 text-sm text-white/80">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.25em] text-white/50">
                    <span>Weekly Snapshot</span>
                    <span>0-10k-20k</span>
                  </div>
                  <div className="flex items-end gap-2">
                    {[48, 64, 52, 71, 62, 76, 68].map((height, index) => (
                      <div
                        key={index}
                        style={{ height }}
                        className="flex-1 rounded-md bg-gradient-to-t from-slate-800 to-emerald-400/80"
                      />
                    ))}
                  </div>
                  <p className="text-xs text-white/60">
                    Quiet nudges remind you to move before your streak slips. Build momentum one day at a time.
                  </p>
                </div>
              </div>
            </div>
          </header>

          <section id="learn-more" className="grid gap-6 rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 backdrop-blur lg:grid-cols-3">
            {features.map((feature) => (
              <div key={feature.title} className="flex flex-col gap-3 rounded-2xl bg-slate-900/60 p-5 ring-1 ring-white/10">
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] ${feature.accent}`}>
                  {feature.title}
                </span>
                <p className="text-sm leading-relaxed text-white/80">{feature.description}</p>
              </div>
            ))}
          </section>

          <section className="flex flex-col gap-4 rounded-3xl border border-emerald-400/25 bg-gradient-to-r from-emerald-500/10 via-cyan-500/10 to-indigo-500/10 p-6 text-center shadow-lg shadow-emerald-500/20">
            <p className="text-xs uppercase tracking-[0.25em] text-white/60">Ready to move?</p>
            <h2 className="text-3xl font-semibold">Download Steps and start your streak today</h2>
            <p className="text-white/70">
              No accounts to create and nothing extra to configure. Install the app, start walking, and watch your progress grow.
            </p>
            <div className="flex justify-center gap-3">
              <Link
                href="https://apps.apple.com/app/apple-store/id6746096378"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-base font-semibold text-slate-900 shadow-lg transition hover:scale-[1.01]"
              >
                Get Steps on the App Store
              </Link>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
