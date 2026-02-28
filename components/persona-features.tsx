import type { PersonaFeature } from "@/lib/personas";

interface PersonaFeaturesProps {
  features: PersonaFeature[];
}

export function PersonaFeatures({ features }: PersonaFeaturesProps) {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-900 dark:text-white text-center mb-10">
          Everything You Need
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="rounded-2xl bg-neutral-50 dark:bg-neutral-800/50 border border-neutral-200 dark:border-neutral-700/50 p-6"
            >
              <div className="text-3xl mb-3">{feature.icon}</div>
              <h3 className="text-base font-semibold text-neutral-900 dark:text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
