import { FEATURES } from "@/lib/constants";

export function LandingFeatures() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
          Everything you need to stay active
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto">
          Powered by Apple HealthKit for accurate, automatic tracking
        </p>

        {/* Features grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {FEATURES.map((feature) => (
            <div
              key={feature.title}
              className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 text-center hover:shadow-lg transition-shadow border border-neutral-200 dark:border-neutral-700/50"
            >
              <span className="text-4xl mb-4 block" role="img" aria-label={feature.title}>
                {feature.icon}
              </span>
              <h3 className="font-semibold text-neutral-900 dark:text-white mb-1">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
