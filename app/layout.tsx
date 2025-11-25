import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

export const metadata: Metadata = {
  title: "Steps: Workout & Pedometer",
  description: "Track your daily steps, workouts, and health data with Steps - the ultimate fitness companion for your Apple device.",
  openGraph: {
    images: ['/meta.png'],
  },
  twitter: {
    card: 'summary_large_image',
    images: ['/meta.png'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          data-website-id="dfid_GHemojUg7quBdpkgDlIXS"
          data-domain="getsteps.app"
          src="https://datafa.st/js/script.js"
          strategy="afterInteractive"
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'SF Pro Rounded, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
      >
        {children}
        <Analytics/>
      </body>
    </html>
  );
}
