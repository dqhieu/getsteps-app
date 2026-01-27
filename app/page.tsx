import {
  LandingNavbar,
  LandingHero,
  LandingScreenshots,
  LandingFeatures,
  LandingYearlyInsights,
  LandingPersonalRecords,
  LandingWorkouts,
  LandingPrivacy,
  LandingTestimonial,
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
        <LandingFeatures />
        <LandingYearlyInsights />
        <LandingPersonalRecords />
        <LandingWorkouts />
        <LandingPrivacy />
        <LandingTestimonial />
        <LandingCTA />
      </main>
      <LandingFooter />
    </>
  );
}
