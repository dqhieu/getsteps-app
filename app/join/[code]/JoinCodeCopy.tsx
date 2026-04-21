"use client";

import { useState } from "react";

export default function JoinCodeCopy({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore — user can still read the code on screen
    }
  }

  return (
    <div className="mt-4 flex flex-col items-center gap-3">
      <div
        className="font-mono text-3xl font-bold tracking-[0.5em] pl-[0.5em] tabular-nums text-neutral-900 dark:text-neutral-100"
        aria-label={`Invite code: ${code.split("").join(" ")}`}
      >
        {code}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        aria-live="polite"
        className="relative inline-flex min-h-[40px] min-w-[104px] items-center justify-center rounded-full px-4 text-sm font-medium text-orange-600 transition-[background-color,transform] duration-150 hover:bg-orange-500/10 active:scale-[0.96] dark:text-orange-400 dark:hover:bg-orange-400/10"
      >
        <span
          className={`transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
            copied ? "opacity-0 scale-[0.25] blur-[4px]" : "opacity-100 scale-100 blur-0"
          }`}
        >
          Copy code
        </span>
        <span
          className={`absolute inset-0 flex items-center justify-center transition-[opacity,scale,filter] duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
            copied ? "opacity-100 scale-100 blur-0" : "opacity-0 scale-[0.25] blur-[4px]"
          }`}
        >
          Copied!
        </span>
      </button>
    </div>
  );
}
