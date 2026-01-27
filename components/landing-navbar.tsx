"use client";

import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/constants";

export function LandingNavbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-neutral-950/80 backdrop-blur-lg border-b border-neutral-200 dark:border-neutral-800">
      <div className="container mx-auto px-4 h-14 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/app_icon.png"
            alt="Steps"
            width={32}
            height={32}
            className="rounded-lg"
          />
          <span className="font-semibold text-neutral-900 dark:text-white hidden sm:inline">
            Steps
          </span>
        </Link>

        {/* Nav Links */}
        <div className="flex items-center gap-4 sm:gap-6">
          <Link
            href="/privacy"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="text-sm text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
          >
            Terms
          </Link>
          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-3 py-1.5 rounded-full bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:opacity-90 transition-opacity"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}
