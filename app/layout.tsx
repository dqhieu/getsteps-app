import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next";

const baseUrl = "https://getsteps.app";
const appName = "Steps: Workout & Pedometer";
const appDescription =
  "Track your daily steps, workouts, and health data with Steps - the ultimate fitness companion for your Apple device.";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: appName,
    template: `%s | Steps App`,
  },
  description: appDescription,
  applicationName: appName,
  keywords: [
    "step counter",
    "pedometer",
    "workout tracker",
    "fitness app",
    "Apple Watch",
    "health tracking",
    "daily steps",
    "exercise tracker",
    "walking tracker",
    "activity tracker",
  ],
  authors: [{ name: "Steps App" }],
  creator: "Steps App",
  publisher: "Steps App",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    title: appName,
    description: appDescription,
    siteName: appName,
    images: [
      {
        url: "/meta.png",
        width: 1200,
        height: 630,
        alt: "Steps App - Workout & Pedometer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: appDescription,
    images: ["/meta.png"],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: appName,
  },
  formatDetection: {
    telephone: false,
  },
  category: "Health & Fitness",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "SoftwareApplication",
              name: appName,
              description: appDescription,
              url: baseUrl,
              applicationCategory: "HealthApplication",
              operatingSystem: "iOS",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              image: `${baseUrl}/meta.png`,
              screenshot: `${baseUrl}/screenshots/screenshot1.png`,
              downloadUrl:
                "https://apps.apple.com/us/app/steps-workout-pedometer/id6746096378",
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                ratingCount: "1",
              },
            }),
          }}
        />
      </head>
      <body
        className="antialiased"
        style={{ fontFamily: 'SF Pro Rounded, -apple-system, BlinkMacSystemFont, system-ui, sans-serif' }}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
