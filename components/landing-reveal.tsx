"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

// Fades + lifts children into view on first scroll intersection. Respects
// prefers-reduced-motion and degrades to visible when IntersectionObserver
// is unavailable (e.g. SSR snapshot before hydration).
export function Reveal({
  children,
  className = "",
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (typeof IntersectionObserver === "undefined") {
      setShown(true);
      return;
    }

    let revealed = false;
    let obs: IntersectionObserver | null = null;

    const reveal = () => {
      if (revealed) return;
      revealed = true;
      setShown(true);
      obs?.disconnect();
      obs = null;
    };

    // Read the viewport on each check. Fold, rotate, and resize can move a
    // section into view without a scroll event.
    const check = () => {
      const node = ref.current;
      if (!node || revealed) return;
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
        return;
      }
      if (!obs) {
        obs = new IntersectionObserver(
          ([entry]) => {
            if (entry.isIntersecting) reveal();
          },
          { threshold: 0.12, rootMargin: "0px 0px -10% 0px" },
        );
        obs.observe(node);
      }
    };

    check();
    window.addEventListener("resize", check);
    window.addEventListener("orientationchange", check);
    return () => {
      obs?.disconnect();
      window.removeEventListener("resize", check);
      window.removeEventListener("orientationchange", check);
    };
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:translate-y-0 motion-reduce:opacity-100 ${
        shown ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      } ${className}`}
    >
      {children}
    </div>
  );
}
