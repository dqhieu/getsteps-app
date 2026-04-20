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
        className="font-mono text-3xl font-bold tracking-[0.5em] text-neutral-900 dark:text-neutral-100"
        aria-label={`Invite code: ${code.split("").join(" ")}`}
      >
        {code}
      </div>
      <button
        type="button"
        onClick={handleCopy}
        className="text-sm text-orange-600 dark:text-orange-400 hover:underline"
      >
        {copied ? "Copied!" : "Copy code"}
      </button>
    </div>
  );
}
