import type { Metadata } from "next";
import Link from "next/link";
import "@/app/globals.css";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default function GlobalNotFound() {
  return (
    <html lang="en">
      <body className="bg-white text-neutral-900 antialiased dark:bg-neutral-950 dark:text-white">
        <main className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
          <p className="text-sm font-medium text-neutral-500">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance">
            This page could not be found.
          </h1>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-orange-500 px-6 py-3 font-medium text-white transition-[background-color,transform] duration-150 hover:bg-orange-600 active:scale-[0.96]"
          >
            Back to getsteps.app
          </Link>
        </main>
      </body>
    </html>
  );
}
