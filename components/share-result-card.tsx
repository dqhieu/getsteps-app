"use client";

import { useState } from "react";

export interface ShareResultCardProps {
  badge: { emoji: string; label: string; colorClass: string };
  comparison?: string;
  shareText: string;
  shareUrl: string;
}

export function ShareResultCard({
  badge,
  comparison,
  shareText,
  shareUrl,
}: ShareResultCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleShare() {
    const fullText = `${shareText}\n${shareUrl}`;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({ text: fullText, url: shareUrl });
        return;
      } catch {
        // Fall through to clipboard
      }
    }
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Silent fail
    }
  }

  return (
    <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-5 border border-neutral-200 dark:border-neutral-700/50 flex flex-col sm:flex-row items-start sm:items-center gap-4">
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-semibold ${badge.colorClass}`}
          >
            <span>{badge.emoji}</span>
            <span>{badge.label}</span>
          </span>
          {comparison && (
            <span className="text-sm text-neutral-600 dark:text-neutral-400">
              {comparison}
            </span>
          )}
        </div>
        <p className="mt-2 text-xs text-neutral-500 dark:text-neutral-400 truncate">
          {shareText}
        </p>
      </div>
      <button
        onClick={handleShare}
        className="flex-shrink-0 flex items-center gap-2 bg-[#ED772F] hover:bg-[#d4651f] text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-colors"
      >
        {copied ? (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
            </svg>
            Copied!
          </>
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
            </svg>
            Share Result
          </>
        )}
      </button>
    </div>
  );
}
