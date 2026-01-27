import { WORKOUT_TYPES } from "@/lib/constants";

export function LandingWorkouts() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        {/* Section header */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-4 text-neutral-900 dark:text-white">
          Track Any Activity
        </h2>
        <p className="text-center text-neutral-600 dark:text-neutral-400 mb-12 max-w-xl mx-auto">
          23+ workout types with detailed analytics
        </p>

        {/* Workout types */}
        <div className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto">
          {WORKOUT_TYPES.map((workout) => (
            <span
              key={workout.name}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 text-sm"
            >
              <span role="img" aria-label={workout.name}>
                {workout.icon}
              </span>
              {workout.name}
            </span>
          ))}
          <span className="inline-flex items-center px-4 py-2 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium">
            +15 more
          </span>
        </div>
      </div>
    </section>
  );
}
