import type { Metadata } from "next";
import { LandingNavbar, LandingFooter } from "@/components";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "End User License Agreement (EULA) for Steps - Daily Step Counter & Workouts",
  alternates: {
    canonical: "https://getsteps.app/terms",
  },
};

export default function TermsPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-foreground">
                Terms of Service
              </h1>
              <p className="text-muted">
                Steps: Workout & Pedometer
              </p>
            </header>

            <p className="text-muted mb-10">
              This End User License Agreement ("Agreement") is between you and Steps ("Company") regarding your use of the Steps application ("App").
            </p>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">1. License Grant</h2>
                <p className="text-muted">
                  Subject to your compliance with this Agreement, Company grants you a limited, non-exclusive, non-transferable license to download, install, and use the App on Apple devices that you own or control.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">2. Restrictions</h2>
                <p className="text-muted mb-3">
                  You may not:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1.5 ml-1">
                  <li>Reverse engineer, decompile, or disassemble the App</li>
                  <li>Modify, adapt, or create derivative works</li>
                  <li>Distribute, rent, lease, or sublicense the App</li>
                  <li>Remove or alter any proprietary notices</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">3. Health Data</h2>
                <p className="text-muted mb-3">
                  The App integrates with Apple HealthKit. You are responsible for the accuracy of health data. The App is not a medical device and should not replace professional medical advice.
                </p>
                <p className="text-muted">
                  By default, health data remains on your device. If you opt into the Stepboard feature, selected health metrics are synced to our servers as described in Section 4.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">4. Stepboard</h2>
                <p className="text-muted mb-3">
                  Stepboard is an opt-in community leaderboard feature. By joining, you agree to the following:
                </p>
                <ul className="list-disc list-inside text-muted space-y-1.5 ml-1">
                  <li>Your daily step count, distance, calories, and flights climbed are synced to our servers and visible to other participants</li>
                  <li>You must create a display name to participate, which must not be offensive, impersonate others, or violate applicable laws</li>
                  <li>Company reserves the right to remove participants who violate these guidelines</li>
                  <li>Step data accuracy depends on your device and HealthKit — Company is not responsible for discrepancies</li>
                  <li>You may leave the Stepboard at any time, which stops syncing and removes your leaderboard data from our servers</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">5. Subscriptions</h2>
                <ul className="list-disc list-inside text-muted space-y-1.5 ml-1">
                  <li>Subscriptions auto-renew unless cancelled 24 hours before current period ends</li>
                  <li>Payment charged to iTunes Account at confirmation of purchase</li>
                  <li>Manage subscriptions in App Store Account Settings</li>
                  <li>No refunds for unused portions of subscription terms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">6. Disclaimer</h2>
                <p className="text-muted">
                  The App is provided "as is" without warranties. Company disclaims all warranties, express or implied, including merchantability and fitness for a particular purpose.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">7. Limitation of Liability</h2>
                <p className="text-muted">
                  Company shall not be liable for any indirect, incidental, special, or consequential damages arising from use of the App.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">8. Termination</h2>
                <p className="text-muted">
                  This license terminates if you breach this Agreement. Upon termination, you must delete the App.
                </p>
              </section>
            </div>

            <footer className="mt-16 pt-8 border-t border-border">
              <p className="text-sm text-muted">
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
