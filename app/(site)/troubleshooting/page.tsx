import type { Metadata } from "next";
import { LandingNavbar, LandingFooter } from "@/components";
import { ContactLink } from "@/components/contact-link";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Widgets not updating",
  description:
    "Fix Steps home screen widgets that only update when you open the app. Turn on Background App Refresh, allow Apple Health access, and re-sync your steps.",
  alternates: {
    canonical: "https://getsteps.app/troubleshooting",
  },
};

export default function TroubleshootingPage() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-background text-foreground selection:bg-accent/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-3xl">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 text-foreground">
                Widgets not updating
              </h1>
              <p className="text-muted text-lg">
                Home screen widgets should keep up with your steps while Steps is closed. If they only change after you open the app, Background App Refresh is usually off for Steps.
              </p>
            </header>

            <div className="space-y-10">
              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">1. Turn on Background App Refresh on iPhone</h2>
                <ol className="list-decimal list-inside text-muted space-y-1.5 ml-1">
                  <li>Open <span className="text-foreground">Settings</span></li>
                  <li>Tap <span className="text-foreground">General</span></li>
                  <li>Tap <span className="text-foreground">Background App Refresh</span></li>
                  <li>If the top control is Off, set it to <span className="text-foreground">Wi-Fi &amp; Cellular</span> (or <span className="text-foreground">Wi-Fi</span>)</li>
                  <li>Turn <span className="text-foreground">Steps</span> on in the app list</li>
                </ol>
                <p className="mt-4 rounded-xl border border-accent/30 bg-chip px-4 py-3 text-chip-text ">
                  Low Power Mode pauses Background App Refresh. Turn it off in <span className="text-foreground">Settings → Battery</span>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">2. Apple Watch face</h2>
                <p className="text-muted mb-4">
                  iPhone Home Screen widgets do not read the watch. These steps are only for a watch-face complication that stays stuck.
                </p>
                <ol className="list-decimal list-inside text-muted space-y-1.5 ml-1">
                  <li>On your iPhone, open the <span className="text-foreground">Watch</span> app</li>
                  <li>Tap <span className="text-foreground">General</span></li>
                  <li>Tap <span className="text-foreground">Background App Refresh</span></li>
                  <li>Turn Background App Refresh on, then turn <span className="text-foreground">Steps</span> on</li>
                  <li>On the watch: <span className="text-foreground">Settings → General → Background App Refresh</span>, and confirm Steps is on</li>
                </ol>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">3. Allow Steps to read Apple Health</h2>
                <p className="text-muted mb-4">
                  If this permission is missing, Steps never starts watching for new steps, so nothing new is written for the widgets. Finish setup in the app as well. Steps only asks for Health access after onboarding is complete.
                </p>
                <ul className="list-disc list-inside text-muted space-y-1.5 ml-1">
                  <li>Settings → Privacy &amp; Security → Health → Steps → turn Steps on</li>
                  <li>Or open Steps and finish the Health connection</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">4. Open Steps while the iPhone is unlocked</h2>
                <p className="text-muted">
                  Apple Health can’t be read while your iPhone is locked. If Steps wakes up in the background then, it skips the widget update so it doesn’t save a zero. Open Steps while your iPhone is unlocked. That stores today’s step count.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">5. Re-sync if the number is still old</h2>
                <p className="text-muted">
                  In Steps, open <span className="text-foreground">Settings → Widgets &amp; Data → Re-sync Apple Health data</span>. That forces a fresh Health read and reloads your widgets.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-medium text-foreground mb-4">Still stuck?</h2>
                <p className="text-muted">
                  Email{" "}
                  <ContactLink email={SITE_CONFIG.supportEmail} className="text-foreground underline underline-offset-2 ">
                    {SITE_CONFIG.supportEmail}
                  </ContactLink>
                  {" "}and we’ll help you sort it out.
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
