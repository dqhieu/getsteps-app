export function LandingYearlyInsights() {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-amber-500/10 dark:from-orange-500/5 dark:to-amber-500/5" />

      <div className="container mx-auto px-4 relative">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 mb-4">
            Steps Pro
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Your Year in Review
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 max-w-xl mx-auto">
            See your fitness journey transformed into beautiful, shareable
            visualizations
          </p>
        </div>

        {/* Visual cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {/* Receipt card */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <div className="text-4xl mb-4 text-center">🧾</div>
            <h3 className="font-semibold text-center text-neutral-900 dark:text-white mb-2">
              Fitness Receipt
            </h3>
            <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              Your year&apos;s stats as a personalized receipt
            </p>
          </div>

          {/* Flight ticket card */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <div className="text-4xl mb-4 text-center">🎫</div>
            <h3 className="font-semibold text-center text-neutral-900 dark:text-white mb-2">
              Achievement Tickets
            </h3>
            <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              Milestone achievements as flight tickets
            </p>
          </div>

          {/* Passport card */}
          <div className="bg-white dark:bg-neutral-800 rounded-2xl p-6 shadow-lg border border-neutral-200 dark:border-neutral-700">
            <div className="text-4xl mb-4 text-center">📘</div>
            <h3 className="font-semibold text-center text-neutral-900 dark:text-white mb-2">
              Passport Stamps
            </h3>
            <p className="text-sm text-center text-neutral-600 dark:text-neutral-400">
              Collect stamps for every milestone reached
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
