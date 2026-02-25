"use client";

import { useState, useMemo } from "react";
import type { FeatureRequest } from "@/lib/supabase";

type FilterTab = "all" | "pending" | "accepted" | "inprogress" | "done" | "rejected";
type SortOption = "votes" | "newest" | "oldest";

const STATUS_CONFIG = {
  pending: { label: "Pending", color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400" },
  accepted: { label: "Accepted", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  done: { label: "Done", color: "bg-neutral-100 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-300" },
  inprogress: { label: "In Progress", color: "bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400" },
} as const;

const FILTER_TABS: { key: FilterTab; label: string }[] = [
  { key: "all", label: "All" },
  { key: "pending", label: "Pending" },
  { key: "accepted", label: "Accepted" },
  { key: "inprogress", label: "In Progress" },
  { key: "done", label: "Done" },
  { key: "rejected", label: "Rejected" },
];

function relativeTime(dateStr: string): string {
  const now = Date.now();
  const then = new Date(dateStr).getTime();
  const diffSec = Math.floor((now - then) / 1000);

  if (diffSec < 60) return "just now";
  const diffMin = Math.floor(diffSec / 60);
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHr = Math.floor(diffMin / 60);
  if (diffHr < 24) return `${diffHr}h ago`;
  const diffDay = Math.floor(diffHr / 24);
  if (diffDay < 30) return `${diffDay}d ago`;
  const diffMonth = Math.floor(diffDay / 30);
  if (diffMonth < 12) return `${diffMonth}mo ago`;
  return `${Math.floor(diffMonth / 12)}y ago`;
}

export function FeedbackBoard({ items }: { items: FeatureRequest[] }) {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [sort, setSort] = useState<SortOption>("votes");

  const stats = useMemo(() => ({
    total: items.length,
    pending: items.filter((i) => i.status === "pending").length,
    accepted: items.filter((i) => i.status === "accepted").length,
    inprogress: items.filter((i) => i.status === "inprogress").length,
    done: items.filter((i) => i.status === "done").length,
    rejected: items.filter((i) => i.status === "rejected").length,
  }), [items]);

  const filtered = useMemo(() => {
    let list = items;

    if (filter !== "all") {
      list = list.filter((i) => i.status === filter);
    }

    if (sort === "newest") {
      list = [...list].sort(
        (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
      );
    } else if (sort === "oldest") {
      list = [...list].sort(
        (a, b) => new Date(a.created_at).getTime() - new Date(b.created_at).getTime()
      );
    } else {
      list = [...list].sort((a, b) => b.upvotes - a.upvotes);
    }

    return list;
  }, [items, filter, sort]);

  return (
    <>
      {/* Stats bar */}
      <div className="flex flex-wrap gap-4 mb-8 text-sm text-neutral-600 dark:text-neutral-400">
        <span>
          <span className="font-semibold text-neutral-900 dark:text-white">{stats.total}</span> requests
        </span>
        <span>
          <span className="font-semibold text-orange-600 dark:text-orange-400">{stats.pending}</span> pending
        </span>
        <span>
          <span className="font-semibold text-green-600 dark:text-green-400">{stats.accepted}</span> accepted
        </span>
        <span>
          <span className="font-semibold text-purple-600 dark:text-purple-400">{stats.inprogress}</span> in progress
        </span>
        <span>
          <span className="font-semibold text-neutral-700 dark:text-neutral-300">{stats.done}</span> done
        </span>
        <span>
          <span className="font-semibold text-red-600 dark:text-red-400">{stats.rejected}</span> rejected
        </span>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Filter tabs */}
        <div className="flex gap-1 rounded-xl bg-neutral-100 dark:bg-neutral-900 p-1">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                filter === tab.key
                  ? "bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-sm"
                  : "text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sort dropdown */}
        <select
          value={sort}
          onChange={(e) => setSort(e.target.value as SortOption)}
          className="text-sm rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-white px-3 py-1.5"
        >
          <option value="votes">Most Voted</option>
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>

      {/* Feedback list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-neutral-500 dark:text-neutral-500">
          No feedback in this category yet.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-2xl border border-neutral-200 dark:border-neutral-800 p-5 hover:border-[#ED772F]/50 dark:hover:border-[#ED772F]/50 transition-colors"
            >
              <div className="flex gap-4">
                {/* Upvote count */}
                <div className="flex flex-col items-center justify-start pt-0.5 shrink-0">
                  <span className="text-xs text-neutral-500 dark:text-neutral-500">
                    ▲
                  </span>
                  <span className="text-sm font-semibold text-neutral-900 dark:text-white">
                    {item.upvotes}
                  </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_CONFIG[item.status].color}`}
                    >
                      {STATUS_CONFIG[item.status].label}
                    </span>
                    <span className="text-xs text-neutral-500 dark:text-neutral-500">
                      {relativeTime(item.created_at)}
                    </span>
                  </div>

                  <p className="text-sm text-neutral-800 dark:text-neutral-200 whitespace-pre-line">
                    {item.content}
                  </p>

                  {item.response && (
                    <blockquote className="mt-3 border-l-2 border-[#ED772F] pl-3 text-sm text-neutral-600 dark:text-neutral-400 italic">
                      {item.response}
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
