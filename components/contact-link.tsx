"use client";

import { useEffect, useRef, useState } from "react";

interface ContactLinkProps {
  email: string;
  className?: string;
  children: React.ReactNode;
}

type ToastState = {
  message: string;
  tone: "success" | "error";
} | null;

export function ContactLink({ email, className, children }: ContactLinkProps) {
  const [toast, setToast] = useState<ToastState>(null);
  const [isToastVisible, setIsToastVisible] = useState(false);
  const [isCopied, setIsCopied] = useState(false);
  const hideTimerRef = useRef<number | null>(null);
  const removeTimerRef = useRef<number | null>(null);
  const animationFrameRef = useRef<number | null>(null);
  const copiedLabelTimerRef = useRef<number | null>(null);

  function clearToastTimers() {
    if (hideTimerRef.current !== null) {
      window.clearTimeout(hideTimerRef.current);
      hideTimerRef.current = null;
    }
    if (removeTimerRef.current !== null) {
      window.clearTimeout(removeTimerRef.current);
      removeTimerRef.current = null;
    }
    if (animationFrameRef.current !== null) {
      window.cancelAnimationFrame(animationFrameRef.current);
      animationFrameRef.current = null;
    }
  }

  function clearCopiedTimer() {
    if (copiedLabelTimerRef.current !== null) {
      window.clearTimeout(copiedLabelTimerRef.current);
      copiedLabelTimerRef.current = null;
    }
  }

  function dismissToast() {
    setIsToastVisible(false);
    removeTimerRef.current = window.setTimeout(() => {
      setToast(null);
      removeTimerRef.current = null;
    }, 220);
  }

  useEffect(() => {
    return () => {
      clearToastTimers();
      clearCopiedTimer();
    };
  }, []);

  function showToast(message: string, tone: "success" | "error") {
    clearToastTimers();
    setToast({ message, tone });
    setIsToastVisible(false);
    animationFrameRef.current = window.requestAnimationFrame(() => {
      setIsToastVisible(true);
      animationFrameRef.current = null;
    });
    hideTimerRef.current = window.setTimeout(() => {
      dismissToast();
      hideTimerRef.current = null;
    }, 2200);
  }

  async function handleClick(event: React.MouseEvent<HTMLAnchorElement>) {
    event.preventDefault();
    try {
      if (!navigator?.clipboard?.writeText) {
        throw new Error("Clipboard API unavailable");
      }
      await navigator.clipboard.writeText(email);
      setIsCopied(true);
      clearCopiedTimer();
      copiedLabelTimerRef.current = window.setTimeout(() => {
        setIsCopied(false);
        copiedLabelTimerRef.current = null;
      }, 2200);
      showToast(`Copied ${email} to clipboard`, "success");
    } catch {
      showToast(`Couldn't copy. Email: ${email}`, "error");
    }
  }

  return (
    <>
      <a href={`mailto:${email}`} onClick={handleClick} className={className}>
        {isCopied ? "Copied!" : children}
      </a>
      {toast && (
        <div className="fixed bottom-4 right-4 z-50 pointer-events-none">
          <div
            role="status"
            aria-live="polite"
            className={`rounded-xl border px-4 py-2.5 text-sm shadow-lg backdrop-blur-sm transition-all duration-200 ease-out ${
              isToastVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
            } ${
              toast.tone === "success"
                ? "border-emerald-300/60 bg-emerald-50/95 text-emerald-900 dark:border-emerald-500/40 dark:bg-emerald-950/85 dark:text-emerald-100"
                : "border-amber-300/60 bg-amber-50/95 text-amber-900 dark:border-amber-500/40 dark:bg-amber-950/85 dark:text-amber-100"
            }`}
          >
            {toast.message}
          </div>
        </div>
      )}
    </>
  );
}
