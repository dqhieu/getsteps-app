import { cache } from "react";
import { notFound } from "next/navigation";
import { headers } from "next/headers";
import type { Metadata } from "next";
import { getSupabase } from "@/lib/supabase";
import { SITE_CONFIG } from "@/lib/constants";
import JoinCodeCopy from "./JoinCodeCopy";

interface GroupPreview {
  id: string;
  name: string;
  member_count: number;
  admin_first_name: string;
}

const CODE_REGEX = /^[A-Z2-9]{4}$/;

const fetchPreview = cache(
  async (code: string): Promise<GroupPreview | null> => {
    const supabase = getSupabase();
    // Cast to any because the RPC function type isn't in the generated Database
    // types (no typed Database generic is passed to createClient in lib/supabase.ts).
    const { data, error } = await (supabase.rpc as any)(
      "get_stepboard_group_preview",
      { p_invite_code: code }
    );
    if (error) {
      throw error;
    }
    const row = Array.isArray(data) ? data[0] : data;
    if (!row) return null;
    return row as GroupPreview;
  }
);

function normalizeCode(raw: string): string | null {
  const upper = raw.trim().toUpperCase();
  if (!CODE_REGEX.test(upper)) return null;
  return upper;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ code: string }>;
}): Promise<Metadata> {
  const { code: rawCode } = await params;
  const code = normalizeCode(rawCode);
  if (!code) return { title: "Invite not found — Steps" };

  const preview = await fetchPreview(code).catch(() => null);
  if (!preview) return { title: "Invite not found — Steps" };

  const invitedBy = preview.admin_first_name
    ? `Invited by ${preview.admin_first_name}`
    : "Join this Stepboard group";
  const description = `${preview.member_count} ${
    preview.member_count === 1 ? "member" : "members"
  } · ${invitedBy}. Track steps together with friends.`;
  const title = `Join "${preview.name}" on Steps`;
  const url = `https://getsteps.app/join/${code}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url,
      images: [{ url: "https://getsteps.app/og/stepboard-group.png" }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    other: {
      "apple-itunes-app": `app-id=6746096378, app-argument=${url}`,
    },
  };
}

export default async function JoinPage({
  params,
}: {
  params: Promise<{ code: string }>;
}) {
  const { code: rawCode } = await params;
  const code = normalizeCode(rawCode);
  if (!code) notFound();

  const preview = await fetchPreview(code);
  if (!preview) notFound();

  const hdrs = await headers();
  const ua = hdrs.get("user-agent") ?? "";
  const isIOS = /iPhone|iPad|iPod/.test(ua);

  // Safari suppresses Universal Links when the href points to the same
  // origin the user is already on. Use the steps:// custom scheme so iOS
  // prompts "Open in Steps?" and launches the app via handleDeepLink's
  // JOIN_GROUP branch instead.
  const primaryHref = isIOS
    ? `steps://open?screen=JOIN_GROUP&code=${code}`
    : SITE_CONFIG.appStoreUrl;
  const primaryLabel = isIOS ? "Open in Steps" : "Get Steps";

  const memberWord = preview.member_count === 1 ? "member" : "members";
  const invitedBy = preview.admin_first_name
    ? `Invited by ${preview.admin_first_name}`
    : "Invited to join this Stepboard group";

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16">
      <div className="w-full max-w-md text-center">
        <p className="text-sm uppercase tracking-widest text-neutral-500 dark:text-neutral-400">
          You've been invited to join
        </p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight sm:text-5xl">
          {preview.name}
        </h1>
        <p className="mt-4 text-base text-neutral-600 dark:text-neutral-300">
          👥 {preview.member_count} {memberWord} · {invitedBy}
        </p>

        <div className="mt-10 flex flex-col gap-3">
          <a
            href={primaryHref}
            className="inline-flex items-center justify-center rounded-full bg-orange-500 px-6 py-3 text-white font-medium hover:bg-orange-600 transition"
          >
            {primaryLabel}
          </a>
          {isIOS && (
            <a
              href={SITE_CONFIG.appStoreUrl}
              className="inline-flex items-center justify-center rounded-full border border-neutral-300 dark:border-neutral-700 px-6 py-3 font-medium hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
            >
              Get Steps on the App Store
            </a>
          )}
        </div>

        <div className="mt-12 border-t border-neutral-200 dark:border-neutral-800 pt-8">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            Or enter this code in the app:
          </p>
          <JoinCodeCopy code={code} />
        </div>
      </div>
    </main>
  );
}
