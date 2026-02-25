import type { Metadata } from "next";
import { LandingNavbar, LandingFooter } from "@/components";
import { getSupabase, type FeatureRequest } from "@/lib/supabase";
import { FeedbackBoard } from "./feedback-board";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Feedback Board",
  description:
    "See what users are requesting, what we're building, and what's already shipped. Your voice shapes Steps.",
  alternates: {
    canonical: "https://getsteps.app/feedback",
  },
};

async function fetchFeedback(): Promise<FeatureRequest[]> {
  try {
    const supabase = getSupabase();
    const { data } = await supabase
      .from("feature_request")
      .select(
        "id, created_at, content, upvotes, status, response, app_version, is_pro_user"
      )
      .order("upvotes", { ascending: false })
      .returns<FeatureRequest[]>();
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function FeedbackPage() {
  const items = await fetchFeedback();

  return (
    <>
      <LandingNavbar />
      <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white selection:bg-orange-500/30">
        <div className="pt-24 pb-16 md:pt-32 md:pb-20">
          <div className="container mx-auto px-4 max-w-4xl">
            <header className="mb-12">
              <h1 className="text-3xl md:text-4xl font-medium tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-b from-neutral-900 to-neutral-600 dark:from-white dark:to-neutral-400">
                Feedback Board
              </h1>
              <p className="text-neutral-600 dark:text-neutral-400">
                See what users are requesting, what we&apos;re building, and
                what&apos;s shipped.
              </p>
            </header>

            <FeedbackBoard items={items} />
          </div>
        </div>
      </main>
      <LandingFooter />
    </>
  );
}
