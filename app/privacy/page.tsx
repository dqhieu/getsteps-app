import type { Metadata } from "next";
import { LandingNavbar, LandingFooter } from "@/components";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Steps: Workout & Pedometer. Learn how we collect, use, and protect your data.",
  alternates: {
    canonical: "https://getsteps.app/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-orange-500/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                Privacy Policy
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Steps: Workout & Pedometer
              </p>
            </header>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Information We Collect</h2>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-2">Health Data (with your permission)</h3>
                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                      <li>Step counts, walking/running distance, flights climbed</li>
                      <li>Workout data</li>
                      <li>Data accessed through Apple HealthKit</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-2">Usage Analytics</h3>
                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                      <li>App usage patterns and feature interactions</li>
                      <li>Device information and app performance data</li>
                      <li>Crash reports and diagnostic information</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-2">Account Information</h3>
                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                      <li>Subscription status and purchase history</li>
                      <li>App preferences and settings</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-2">Stepboard Data (opt-in only)</h3>
                    <p className="text-neutral-600 dark:text-neutral-400 mb-2">
                      If you voluntarily join the Stepboard leaderboard, we collect and store the following on our servers:
                    </p>
                    <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                      <li>Display name, profile photo, and country code</li>
                      <li>Daily step counts, walking/running distance, calories burned, and flights climbed</li>
                      <li>Stepboard membership and participation dates</li>
                    </ul>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">How We Use Information</h2>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                  <li>Display your health and fitness data within the app</li>
                  <li>Provide personalized insights and trends</li>
                  <li>Improve app functionality and user experience</li>
                  <li>Process subscription purchases and provide customer support</li>
                  <li>Send relevant notifications about your progress</li>
                  <li>Power the Stepboard leaderboard so you can compare daily steps with other participants</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Data Sharing</h2>

                <div className="mb-4">
                  <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-2">Third-Party Services</h3>
                  <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                    <li><span className="text-neutral-800 dark:text-neutral-200">RevenueCat:</span> Subscription management and purchase processing</li>
                    <li><span className="text-neutral-800 dark:text-neutral-200">PostHog:</span> Anonymous usage analytics and app improvement</li>
                    <li><span className="text-neutral-800 dark:text-neutral-200">Supabase:</span> Backend services for app functionality</li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h3 className="text-base font-medium text-neutral-800 dark:text-neutral-200 mb-2">Stepboard</h3>
                  <p className="text-neutral-600 dark:text-neutral-400">
                    If you join the Stepboard, your display name, country, and daily step data are visible to other Stepboard participants.
                  </p>
                </div>

                <p className="text-neutral-600 dark:text-neutral-400 font-medium">
                  We do not sell personal information to third parties.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Health Data Protection</h2>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                  <li><span className="text-neutral-800 dark:text-neutral-200">By default, your health data stays on your device</span> and is never uploaded to our servers</li>
                  <li><span className="text-neutral-800 dark:text-neutral-200">If you join the Stepboard,</span> selected health metrics (steps, distance, calories, flights climbed) are synced to our servers to power the leaderboard</li>
                  <li>Stepboard participation is entirely opt-in — you can leave at any time and your synced data will be removed</li>
                  <li>Health data not related to Stepboard (workouts, other HealthKit data) remains local on your device</li>
                  <li>Health data is encrypted and protected by Apple's security measures</li>
                  <li>You control what health data the app can access through iOS permissions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Data Retention</h2>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                  <li><span className="text-neutral-800 dark:text-neutral-200">Health data:</span> Retained as long as the app is installed</li>
                  <li><span className="text-neutral-800 dark:text-neutral-200">Analytics data:</span> Retained for up to 2 years</li>
                  <li><span className="text-neutral-800 dark:text-neutral-200">Account data:</span> Retained during active subscription period</li>
                  <li><span className="text-neutral-800 dark:text-neutral-200">Stepboard data:</span> Removed from our servers when you leave the Stepboard</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Your Rights</h2>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Opt-out of analytics data collection</li>
                  <li>Leave the Stepboard at any time to stop syncing and remove your data from the leaderboard</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Data Security</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We implement appropriate technical and organizational measures to protect your data, including encryption, secure data transmission, and access controls.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Children's Privacy</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  The App is not intended for children under 13. We do not knowingly collect personal information from children under 13.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Changes to Policy</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  We may update this Privacy Policy. Continued use of the App constitutes acceptance of any changes.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">Contact Us</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  <a href="mailto:support@getsteps.app" className="text-neutral-900 dark:text-white hover:underline">
                    support@getsteps.app
                  </a>
                </p>
              </section>
            </div>

            <footer className="mt-16 pt-8 border-t border-neutral-200 dark:border-neutral-800">
              <p className="text-sm text-neutral-500 dark:text-neutral-500">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </footer>
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
