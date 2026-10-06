import type { Metadata, Viewport } from "next";
import Link from "next/link";
import { Bricolage_Grotesque } from "next/font/google";
import "@/app/globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bricolage",
});

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function GlobalNotFound() {
  return (
    <html lang="en" className={bricolage.variable}>
      <body className={`${bricolage.className} bg-background text-foreground antialiased`}>
        <main className="safe-gutter-6 flex min-h-screen flex-col items-center justify-center text-center">
          <p className="text-sm font-medium text-muted">404</p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-balance">
            This page could not be found.
          </h1>
          <Link
            href="/"
            className="mt-8 inline-flex min-h-[44px] items-center justify-center rounded-full bg-accent px-6 py-3 font-medium text-white transition-[background-color,transform] duration-150 hover:opacity-90 active:scale-[0.96]"
          >
            Back to getsteps.app
          </Link>
        </main>
      </body>
    </html>
  );
}
