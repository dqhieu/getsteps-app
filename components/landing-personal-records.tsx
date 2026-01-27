import { PERSONAL_RECORDS } from "@/lib/constants";

export function LandingPersonalRecords() {
  return (
    <section className="py-16 md:py-24 bg-neutral-50 dark:bg-neutral-900/50">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
          8 Ways to Beat Your Best
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto">
          Track personal records across every metric that matters
        </p>

        {/* Records grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto">
          {PERSONAL_RECORDS.map((record) => (
            <div
              key={record.title}
              className="bg-white dark:bg-neutral-800/50 rounded-xl p-4 text-center border border-neutral-200 dark:border-neutral-700/50"
            >
              <span className="text-2xl mb-2 block" role="img" aria-label={record.title}>
                {record.icon}
              </span>
              <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                {record.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
