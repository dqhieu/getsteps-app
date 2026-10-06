"use client";

import { useState, useMemo, useEffect, useCallback } from "react";
import Image from "next/image";
import type { FeatureRequest } from "@/lib/supabase";
import { SITE_CONFIG } from "@/lib/constants";

type FilterTab = "all" | "pending" | "accepted" | "inprogress" | "done" | "rejected";
type SortOption = "votes" | "newest" | "oldest";

const STATUS_CONFIG = {
  pending: { label: "Pending", color: "bg-chip text-chip-text" },
  accepted: { label: "Accepted", color: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400" },
  rejected: { label: "Rejected", color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400" },
  done: { label: "Done", color: "bg-surface text-muted-soft  dark:text-muted" },
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

type DialogMode = null | "upvote" | "submit";

function AppStoreDialog({ mode, onClose }: { mode: DialogMode; onClose: () => void }) {
  const [rendered, setRendered] = useState(false);
  const [visible, setVisible] = useState(false);

  // Enter: render DOM first, then animate in on next frame
  // Exit: animate out, then unmount after transition
  useEffect(() => {
    if (mode) {
      setRendered(true);
    } else {
      setVisible(false);
      const timer = setTimeout(() => setRendered(false), 200);
      return () => clearTimeout(timer);
    }
  }, [mode]);

  useEffect(() => {
    if (rendered && mode) {
      // Double rAF ensures the browser has painted the initial (hidden) state
      requestAnimationFrame(() => {
        requestAnimationFrame(() => setVisible(true));
      });
    }
  }, [rendered, mode]);

  // Close on Escape key
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  if (!rendered) return null;

  const isUpvote = mode === "upvote";
  const title = isUpvote ? "Upvote in the App" : "Submit Feedback in the App";
  const description = isUpvote
    ? "To upvote feature requests, open Steps on your iPhone and head to Settings > Feature Requests."
    : "To submit a new feature request or bug report, open Steps on your iPhone and head to Settings > Feature Requests.";

  return (
    <div
      className={`edge-modal fixed inset-0 z-50 flex items-center justify-center transition-all duration-200 ${
        visible ? "bg-black/50 backdrop-blur-sm" : "bg-black/0"
      }`}
      onClick={onClose}
    >
      <div
        className={`w-full max-w-sm rounded-2xl bg-card border border-border p-6 shadow-xl transition-all duration-200 ${
          visible ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h3 className="text-lg font-semibold text-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-muted mb-6">
          {description}
        </p>
        <div className="flex flex-col gap-3">
          <a
            href={SITE_CONFIG.appStoreUrl} data-fast-goal="open-app-store"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-medium text-white hover:bg-[#d9691f] transition-colors"
          >
            <Image
              src="/app_icon.png"
              alt="Steps"
              width={24}
              height={24}
              className="rounded-md"
            />
            Open Steps on the App Store
          </a>
          <button
            onClick={onClose}
            className="text-sm text-muted hover:text-muted-soft dark:hover:text-muted transition-colors"
          >
            Maybe later
          </button>
        </div>
      </div>
    </div>
  );
}

export function FeedbackBoard({ items }: { items: FeatureRequest[] }) {
  const [filter, setFilter] = useState<FilterTab>("all");
  const [sort, setSort] = useState<SortOption>("newest");
  const [dialogMode, setDialogMode] = useState<DialogMode>(null);
  const closeDialog = useCallback(() => setDialogMode(null), []);

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
      <div className="flex flex-wrap gap-4 mb-8 text-sm text-muted">
        <span>
          <span className="font-semibold text-foreground">{stats.total}</span> requests
        </span>
        <span>
          <span className="font-semibold text-chip-text">{stats.pending}</span> pending
        </span>
        <span>
          <span className="font-semibold text-green-600 dark:text-green-400">{stats.accepted}</span> accepted
        </span>
        <span>
          <span className="font-semibold text-purple-600 dark:text-purple-400">{stats.inprogress}</span> in progress
        </span>
        <span>
          <span className="font-semibold text-muted-soft">{stats.done}</span> done
        </span>
        <span>
          <span className="font-semibold text-red-600 dark:text-red-400">{stats.rejected}</span> rejected
        </span>
      </div>

      {/* Controls */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
        {/* Filter tabs */}
        <div className="flex gap-1 rounded-xl bg-surface  p-1">
          {FILTER_TABS.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setFilter(tab.key)}
              className={`px-3 py-1.5 text-sm rounded-lg font-medium transition-colors ${
                filter === tab.key
                  ? "bg-card text-foreground shadow-sm"
                  : "text-muted hover:text-foreground"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Sort dropdown */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value as SortOption)}
            className="text-sm rounded-lg border border-border bg-card text-foreground pl-3 pr-9 py-1.5 appearance-none bg-[length:16px_16px] bg-[position:right_0.5rem_center] bg-no-repeat bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%20fill%3D%22%23737373%22%3E%3Cpath%20fill-rule%3D%22evenodd%22%20d%3D%22M5.23%207.21a.75.75%200%20011.06.02L10%2011.168l3.71-3.938a.75.75%200%20111.08%201.04l-4.25%204.5a.75.75%200%2001-1.08%200l-4.25-4.5a.75.75%200%2001.02-1.06z%22%20clip-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E')]"
          >
            <option value="votes">Most Voted</option>
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
          </select>

          {/* Submit feedback button */}
          <button
            onClick={() => setDialogMode("submit")}
            className="text-sm rounded-lg bg-accent px-4 py-1.5 font-medium text-white hover:bg-[#d9691f] transition-colors"
          >
            Submit Feedback
          </button>
        </div>
      </div>

      {/* Feedback list */}
      {filtered.length === 0 ? (
        <div className="text-center py-16 text-muted">
          No feedback in this category yet.
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((item) => (
            <div
              key={item.id}
              className="rounded-[20px] bg-card p-5 shadow-[var(--shadow-border)] hover:border-accent/50 dark:hover:border-accent/50 transition-colors"
            >
              <div className="flex gap-4">
                {/* Upvote button */}
                <button
                  onClick={() => setDialogMode("upvote")}
                  className="flex flex-col items-center justify-start pt-0.5 shrink-0 rounded-lg px-1.5 py-1 hover:bg-ghost-hover transition-colors cursor-pointer"
                  title="Upvote this request"
                >
                  <span className="text-xs text-muted group-hover:text-accent">
                    ▲
                  </span>
                  <span className="text-sm font-semibold text-foreground">
                    {item.upvotes}
                  </span>
                </button>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <div className="flex flex-wrap items-center gap-2 mb-1.5">
                    <span
                      className={`inline-block text-xs font-medium px-2 py-0.5 rounded-full ${STATUS_CONFIG[item.status].color}`}
                    >
                      {STATUS_CONFIG[item.status].label}
                    </span>
                    <span className="text-xs text-muted">
                      {relativeTime(item.created_at)}
                    </span>
                  </div>

                  <p className="text-sm text-foreground whitespace-pre-line">
                    {item.content}
                  </p>

                  {item.response && (
                    <blockquote className="mt-3 border-l-2 border-accent pl-3 text-sm text-muted italic">
                      {item.response}
                    </blockquote>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <AppStoreDialog mode={dialogMode} onClose={closeDialog} />
    </>
  );
}
