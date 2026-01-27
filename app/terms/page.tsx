import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - Steps App",
  description: "End User License Agreement (EULA) for Steps - Daily Step Counter & Workouts",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-4xl shadow-sm border border-gray-200 p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              END USER LICENSE AGREEMENT (EULA)
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
              Steps - Daily Step Counter & Workouts
            </h2>
          </header>

          <div className="prose prose-gray max-w-none">
            <p className="text-gray-700 mb-8 leading-relaxed">
              This End User License Agreement ("Agreement") is between you and GetSteps ("Company") regarding your use of the Steps application ("App").
            </p>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">1. LICENSE GRANT</h3>
              <p className="text-gray-700 leading-relaxed">
                Subject to your compliance with this Agreement, Company grants you a limited, non-exclusive, non-transferable license to download, install, and use the App on Apple devices that you own or control.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">2. RESTRICTIONS</h3>
              <p className="text-gray-700 leading-relaxed mb-3">
                You may not:
              </p>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>reverse engineer, decompile, or disassemble the App</li>
                <li>modify, adapt, or create derivative works</li>
                <li>distribute, rent, lease, or sublicense the App</li>
                <li>remove or alter any proprietary notices</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">3. HEALTH DATA</h3>
              <p className="text-gray-700 leading-relaxed">
                The App integrates with Apple HealthKit. You are responsible for the accuracy of health data. The App is not a medical device and should not replace professional medical advice.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">4. SUBSCRIPTIONS</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Subscriptions auto-renew unless cancelled 24 hours before current period ends</li>
                <li>Payment charged to iTunes Account at confirmation of purchase</li>
                <li>Manage subscriptions in App Store Account Settings</li>
                <li>No refunds for unused portions of subscription terms</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">5. DISCLAIMER</h3>
              <p className="text-gray-700 leading-relaxed">
                THE APP IS PROVIDED "AS IS" WITHOUT WARRANTIES. COMPANY DISCLAIMS ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">6. LIMITATION OF LIABILITY</h3>
              <p className="text-gray-700 leading-relaxed">
                COMPANY SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, OR CONSEQUENTIAL DAMAGES ARISING FROM USE OF THE APP.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">7. TERMINATION</h3>
              <p className="text-gray-700 leading-relaxed">
                This license terminates if you breach this Agreement. Upon termination, you must delete the App.
              </p>
            </section>
          </div>

          <footer className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 text-center">
              Last updated: {new Date().toLocaleDateString()}
            </p>
          </footer>
        </div>
      </div>
    </div>
  );
}
