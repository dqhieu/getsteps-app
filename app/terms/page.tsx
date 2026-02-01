import type { Metadata } from "next";
import { LandingNavbar, LandingFooter } from "@/components";

export const metadata: Metadata = {
  title: "Terms of Service - Steps: Workout & Pedometer",
  description: "End User License Agreement (EULA) for Steps - Daily Step Counter & Workouts",
};

export default function TermsPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-orange-500/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                Terms of Service
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                Steps: Workout & Pedometer
              </p>
            </header>

            <p className="text-neutral-600 dark:text-neutral-400 mb-10">
              This End User License Agreement ("Agreement") is between you and Steps ("Company") regarding your use of the Steps application ("App").
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">1. License Grant</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Subject to your compliance with this Agreement, Company grants you a limited, non-exclusive, non-transferable license to download, install, and use the App on Apple devices that you own or control.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">2. Restrictions</h2>
                <p className="text-neutral-600 dark:text-neutral-400 mb-3">
                  You may not:
                </p>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Modify, adapt, or create derivative works</li>
                  <li>Distribute, rent, lease, or sublicense the App</li>
                  <li>Remove or alter any proprietary notices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">3. Health Data</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  The App integrates with Apple HealthKit. You are responsible for the accuracy of health data. The App is not a medical device and should not replace professional medical advice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">4. Subscriptions</h2>
                <ul className="list-disc list-inside text-neutral-600 dark:text-neutral-400 space-y-1.5 ml-1">
                  <li>Subscriptions auto-renew unless cancelled 24 hours before current period ends</li>
                  <li>Payment charged to iTunes Account at confirmation of purchase</li>
                  <li>Manage subscriptions in App Store Account Settings</li>
                  <li>No refunds for unused portions of subscription terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">5. Disclaimer</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  The App is provided "as is" without warranties. Company disclaims all warranties, express or implied, including merchantability and fitness for a particular purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">6. Limitation of Liability</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  Company shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-neutral-900 dark:text-white mb-4">7. Termination</h2>
                <p className="text-neutral-600 dark:text-neutral-400">
                  This license terminates if you breach this Agreement. Upon termination, you must delete the App.
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
