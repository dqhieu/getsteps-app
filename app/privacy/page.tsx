import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - Steps: Workout & Pedometer",
  description: "Privacy Policy for Steps: Workout & Pedometer. Learn how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="bg-white rounded-4xl shadow-sm border border-gray-200 p-8 md:p-12">
          <header className="mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
              PRIVACY POLICY
            </h1>
            <h2 className="text-xl md:text-2xl text-gray-600 font-medium mb-2">
              Steps: Workout & Pedometer
            </h2>
            <p className="text-gray-500">
              Effective Date: {new Date().toLocaleDateString()}
            </p>
          </header>

          <div className="prose prose-gray max-w-none">
            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">INFORMATION WE COLLECT</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Health Data (with your permission):</h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                  <li>Step counts, walking/running distance, flights climbed</li>
                  <li>Workout data</li>
                  <li>Data accessed through Apple HealthKit</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Usage Analytics:</h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                  <li>App usage patterns and feature interactions</li>
                  <li>Device information and app performance data</li>
                  <li>Crash reports and diagnostic information</li>
                </ul>
              </div>

              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Account Information:</h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                  <li>Subscription status and purchase history</li>
                  <li>App preferences and settings</li>
                </ul>
              </div>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HOW WE USE INFORMATION</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Display your health and fitness data within the app</li>
                <li>Provide personalized insights and trends</li>
                <li>Improve app functionality and user experience</li>
                <li>Process subscription purchases and provide customer support</li>
                <li>Send relevant notifications about your progress</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DATA SHARING</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium text-gray-800 mb-3">Third-Party Services:</h4>
                <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                  <li><strong>RevenueCat:</strong> Subscription management and purchase processing</li>
                  <li><strong>PostHog:</strong> Anonymous usage analytics and app improvement</li>
                  <li><strong>Supabase:</strong> Backend services for app functionality</li>
                </ul>
              </div>

              <p className="text-gray-700 leading-relaxed font-medium">
                We do not sell personal information to third parties.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">HEALTH DATA PROTECTION</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li><strong>Your health data is never uploaded to our servers</strong> - all health data remains on your device</li>
                <li>Health data is stored locally on your device and in Apple's secure HealthKit</li>
                <li>Health data is encrypted and protected by Apple's security measures</li>
                <li>You control what health data the app can access through iOS permissions</li>
                <li>Health data is not shared without your explicit consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DATA RETENTION</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li><strong>Health data:</strong> Retained as long as the app is installed</li>
                <li><strong>Analytics data:</strong> Retained for up to 2 years</li>
                <li><strong>Account data:</strong> Retained during active subscription period</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">YOUR RIGHTS</h3>
              <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-2 ml-4">
                <li>Request access to your personal data</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Withdraw consent for data processing</li>
                <li>Opt-out of analytics data collection</li>
              </ul>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">DATA SECURITY</h3>
              <p className="text-gray-700 leading-relaxed">
                We implement appropriate technical and organizational measures to protect your data, including encryption, secure data transmission, and access controls.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CHILDREN'S PRIVACY</h3>
              <p className="text-gray-700 leading-relaxed">
                The App is not intended for children under 13. We do not knowingly collect personal information from children under 13.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CHANGES TO POLICY</h3>
              <p className="text-gray-700 leading-relaxed">
                We may update this Privacy Policy. Continued use of the App constitutes acceptance of any changes.
              </p>
            </section>

            <section className="mb-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">CONTACT US</h3>
              <div className="space-y-2">
                <p className="text-gray-700 leading-relaxed">
                  support@getsteps.app
                </p>
              </div>
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
