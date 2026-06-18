import type { Metadata } from "next";
import { getSupabaseAdmin, type NotificationOptIn } from "@/lib/supabase";
import { computeStats } from "@/lib/notification-stats";
import { DashboardView } from "./dashboard-view";

export const revalidate = 300;

export const metadata: Metadata = {
  title: "Dashboard",
  robots: { index: false, follow: false },
};

async function fetchOptIns(): Promise<NotificationOptIn[]> {
  try {
    const supabase = getSupabaseAdmin();
    const { data } = await supabase
      .from("notification_opt_in")
      .select("device_token, is_pro_user, plan, updated_at")
      .range(0, 9999) // default cap is 1000 rows; lift it to cover all ~4.2k
      .returns<NotificationOptIn[]>();
    return data ?? [];
  } catch {
    return [];
  }
}

export default async function DashboardPage() {
  const rows = await fetchOptIns();
  const stats = computeStats(rows);
  return <DashboardView stats={stats} rows={rows} />;
}
