import type { NotificationOptIn } from "./supabase";

export interface PlanBreakdown {
  monthly: number;
  yearly: number;
  other: number;
  none: number;
}

export interface MonthBucket {
  month: string; // "YYYY-MM"
  count: number;
}

export interface NotificationStats {
  total: number;
  pro: number;
  proPct: number; // 0–100, one decimal place
  free: number;
  planBreakdown: PlanBreakdown;
  byMonth: MonthBucket[];
}

export function computeStats(rows: NotificationOptIn[]): NotificationStats {
  const total = rows.length;
  const pro = rows.filter((r) => r.is_pro_user === true).length;
  const free = total - pro;
  const proPct = total === 0 ? 0 : Math.round((pro / total) * 1000) / 10;

  const planBreakdown: PlanBreakdown = { monthly: 0, yearly: 0, other: 0, none: 0 };
  for (const r of rows) {
    if (!r.plan) planBreakdown.none++;
    else if (r.plan.includes("monthly")) planBreakdown.monthly++;
    else if (r.plan.includes("yearly")) planBreakdown.yearly++;
    else planBreakdown.other++;
  }

  const monthMap = new Map<string, number>();
  for (const r of rows) {
    if (!r.updated_at) continue;
    const month = r.updated_at.slice(0, 7); // "YYYY-MM"
    monthMap.set(month, (monthMap.get(month) ?? 0) + 1);
  }
  const byMonth = [...monthMap.entries()]
    .map(([month, count]) => ({ month, count }))
    .sort((a, b) => a.month.localeCompare(b.month));

  return { total, pro, proPct, free, planBreakdown, byMonth };
}
