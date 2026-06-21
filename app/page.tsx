import {
  LandingNavbar,
  LandingHero,
  LandingScreenshots,
  LandingStepboardTotal,
  LandingTrust,
  LandingSpotlights,
  LandingYearlyInsights,
  LandingFeatureGrid,
  LandingPrivacy,
  LandingCTA,
  LandingFooter,
} from "@/components";

export default function Home() {
  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white overflow-hidden selection:bg-orange-500/30">
        <LandingHero />
        <LandingScreenshots />
        <LandingStepboardTotal />
        <LandingTrust />
        <LandingSpotlights />
        <LandingYearlyInsights />
        <LandingFeatureGrid />
        <LandingPrivacy />
        <LandingCTA />
      </main>
      <LandingFooter />
    </>
  );
}
