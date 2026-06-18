"use client";

import { useState, useMemo } from "react";
import type { NotificationStats } from "@/lib/notification-stats";
import type { NotificationOptIn } from "@/lib/supabase";

type FilterTab = "all" | "pro" | "free";
type SortOption = "newest" | "oldest";
const PAGE_SIZE = 50;

function relativeTime(dateStr: string | null): string {
  if (!dateStr) return "—";
  const diffSec = Math.floor((Date.now() - new Date(dateStr).getTime()) / 1000);
  if (diffSec < 60) return "just now";
  const m = Math.floor(diffSec / 60);
  if (m < 60) return `${m}m ago`;
  const h = Math.floor(m / 60);
  if (h < 24) return `${h}h ago`;
  const d = Math.floor(h / 24);
  if (d < 30) return `${d}d ago`;
  const mo = Math.floor(d / 30);
  if (mo < 12) return `${mo}mo ago`;
  return `${Math.floor(mo / 12)}y ago`;
}

function StatCard({ label, value, sub }: { label: string; value: string; sub?: string }) {
  return (
    <div className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5">
      <div className="text-sm text-neutral-500 dark:text-neutral-400">{label}</div>
      <div className="mt-1 text-2xl font-semibold text-neutral-900 dark:text-white">{value}</div>
      {sub && <div className="mt-0.5 text-xs text-neutral-500 dark:text-neutral-500">{sub}</div>}
    </div>
  );
}

function TokenCell({ token }: { token: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => {
        navigator.clipboard.writeText(token);
        setCopied(true);
        setTimeout(() => setCopied(false), 1200);
      }}
      title="Click to copy full token"
      className="font-mono text-xs text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] transition-colors"
    >
      {copied ? "copied!" : `${token.slice(0, 12)}…`}
    </button>
  );
}

export function DashboardView({ stats, rows }: { stats: NotificationStats; rows: NotificationOptIn[] }) {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(0);

  const maxMonth = useMemo(
    () => stats.byMonth.reduce((m, b) => Math.max(m, b.count), 0),
    [stats.byMonth]
  );

  const filtered = useMemo(() => {
    let list = rows;
    if (filter === "pro") list = list.filter((r) => r.is_pro_user === true);
    else if (filter === "free") list = list.filter((r) => r.is_pro_user !== true);
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((r) => r.device_token.toLowerCase().includes(q));
    }
    const ts = (r: NotificationOptIn) => (r.updated_at ? new Date(r.updated_at).getTime() : 0);
    list = [...list].sort((a, b) => (sort === "newest" ? ts(b) - ts(a) : ts(a) - ts(b)));
    return list;
  }, [rows, filter, search, sort]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const safePage = Math.min(page, pageCount - 1);
  const pageRows = filtered.slice(safePage * PAGE_SIZE, safePage * PAGE_SIZE + PAGE_SIZE);

  return (
    <main className="min-h-screen bg-white dark:bg-neutral-950 text-neutral-900 dark:text-white">
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <header className="mb-8">
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight">Notification Opt-Ins</h1>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
            {stats.total.toLocaleString()} devices · data refreshes every 5 minutes
          </p>
        </header>

        {/* Stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard label="Total opt-ins" value={stats.total.toLocaleString()} />
          <StatCard label="Pro users" value={stats.pro.toLocaleString()} sub={`${stats.proPct}% of total`} />
          <StatCard label="Free users" value={stats.free.toLocaleString()} />
          <StatCard
            label="Plans"
            value={`${stats.planBreakdown.monthly + stats.planBreakdown.yearly}`}
            sub={`${stats.planBreakdown.monthly} monthly · ${stats.planBreakdown.yearly} yearly`}
          />
        </div>

        {/* Monthly chart */}
        <section className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 mb-10">
          <h2 className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-4">
            Opt-ins by month (last updated)
          </h2>
          {stats.byMonth.length === 0 ? (
            <p className="text-sm text-neutral-500">No dated records.</p>
          ) : (
            <div className="space-y-2">
              {stats.byMonth.map((b) => (
                <div key={b.month} className="flex items-center gap-3 text-xs">
                  <span className="w-16 shrink-0 text-neutral-500 dark:text-neutral-400">{b.month}</span>
                  <div className="flex-1 bg-neutral-100 dark:bg-neutral-900 rounded">
                    <div
                      className="h-5 rounded bg-[#ED772F]"
                      style={{ width: `${maxMonth ? (b.count / maxMonth) * 100 : 0}%` }}
                    />
                  </div>
                  <span className="w-12 shrink-0 text-right text-neutral-700 dark:text-neutral-300">{b.count}</span>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* Controls */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
          <div className="flex gap-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 p-1">
            {(["all", "pro", "free"] as FilterTab[]).map((t) => (
              <button
                key={t}
                onClick={() => { setFilter(t); setPage(0); }}
                className={`px-3 py-1.5 text-sm rounded-lg font-medium capitalize transition-colors ${
                  filter === t
                    ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                    : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <input
              value={search}
              onChange={(e) => { setSearch(e.target.value); setPage(0); }}
              placeholder="Search device token…"
              className="text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5 w-56"
            />
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value as SortOption)}
              className="text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 px-3 py-1.5"
            >
              <option value="newest">Newest</option>
              <option value="oldest">Oldest</option>
            </select>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto rounded-2xl border border-neutral-200 dark:border-neutral-800">
          <table className="w-full text-sm">
            <thead className="text-left text-neutral-500 dark:text-neutral-400 border-b border-neutral-200 dark:border-neutral-800">
              <tr>
                <th className="px-4 py-3 font-medium">Device token</th>
                <th className="px-4 py-3 font-medium">Tier</th>
                <th className="px-4 py-3 font-medium">Plan</th>
                <th className="px-4 py-3 font-medium">Updated</th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr><td colSpan={4} className="px-4 py-12 text-center text-neutral-500">No matching records.</td></tr>
              ) : (
                pageRows.map((r) => (
                  <tr key={r.device_token} className="border-b border-neutral-100 dark:border-neutral-900 last:border-0">
                    <td className="px-4 py-3"><TokenCell token={r.device_token} /></td>
                    <td className="px-4 py-3">
                      <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${
                        r.is_pro_user
                          ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                          : "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400"
                      }`}>
                        {r.is_pro_user ? "Pro" : "Free"}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-neutral-600 dark:text-neutral-400 font-mono text-xs">
                      {r.plan ?? "—"}
                    </td>
                    <td className="px-4 py-3 text-neutral-500 dark:text-neutral-500">{relativeTime(r.updated_at)}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between mt-4 text-sm text-neutral-500">
          <span>{filtered.length.toLocaleString()} records</span>
          <div className="flex items-center gap-3">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={safePage === 0}
              className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 disabled:opacity-40"
            >
              Prev
            </button>
            <span>{safePage + 1} / {pageCount}</span>
            <button
              onClick={() => setPage((p) => Math.min(pageCount - 1, p + 1))}
              disabled={safePage >= pageCount - 1}
              className="px-3 py-1.5 rounded-lg border border-neutral-200 dark:border-neutral-800 disabled:opacity-40"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
