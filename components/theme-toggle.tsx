"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

const iconClassName =
  "absolute inset-0 m-auto size-4 transition-[opacity,transform,filter] duration-200 ease-[cubic-bezier(0.2,0,0,1)]";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <Button
      type="button"
      variant="ghost"
      size="sm"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative size-8 shrink-0 px-0"
    >
      <SunIcon
        className={`${iconClassName} ${
          mounted && !isDark
            ? "scale-100 opacity-100 blur-none"
            : "scale-[0.25] opacity-0 blur-[4px]"
        }`}
      />
      <MoonIcon
        className={`${iconClassName} ${
          isDark
            ? "scale-100 opacity-100 blur-none"
            : "scale-[0.25] opacity-0 blur-[4px]"
        }`}
      />
    </Button>
  );
}

function SunIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <circle
        cx="12"
        cy="12"
        r="4"
        stroke="currentColor"
        strokeWidth="1.75"
      />
      <path
        d="M12 3v1.5M12 19.5V21M21 12h-1.5M4.5 12H3M18.36 5.64l-1.06 1.06M6.7 17.3l-1.06 1.06M18.36 18.36l-1.06-1.06M6.7 6.7 5.64 5.64"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MoonIcon({ className }: { className: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 24 24"
      fill="none"
      className={className}
    >
      <path
        d="M21 14.3A8.5 8.5 0 1 1 9.7 3 7 7 0 0 0 21 14.3z"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
