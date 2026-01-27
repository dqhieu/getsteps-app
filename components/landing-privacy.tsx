export function LandingPrivacy() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center bg-neutral-50 dark:bg-neutral-900/50 rounded-2xl p-8 border border-neutral-200 dark:border-neutral-800">
          <span className="text-3xl mb-4 block" role="img" aria-label="Privacy">
            🔒
          </span>
          <h3 className="text-xl font-semibold mb-3 text-neutral-900 dark:text-white">
            Your data stays on your device
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            All health data is stored locally and never uploaded to external
            servers. Steps uses Apple HealthKit to securely access your fitness
            data with your permission.
          </p>
        </div>
      </div>
    </section>
  );
}
