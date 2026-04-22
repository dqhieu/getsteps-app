import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bricolage",
});

const { baseUrl, name: appName, description: appDescription, appStoreUrl } = SITE_CONFIG;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: appName,
    template: `%s | Steps: Workout & Pedometer`,
  },
  description: appDescription,
  applicationName: appName,
  alternates: {
    canonical: baseUrl,
  },
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
  authors: [{ name: "Steps: Workout & Pedometer" }],
  creator: "Steps: Workout & Pedometer",
  publisher: "Steps: Workout & Pedometer",
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
        alt: "Steps: Workout & Pedometer",
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
  other: {
    "apple-itunes-app": "app-id=6746096378",
  },
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
        <Script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="db1Nki7eHGI10Xnrqus+LA"
          strategy="afterInteractive"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "MobileApplication",
              name: appName,
              alternateName: "Steps",
              description: appDescription,
              url: baseUrl,
              applicationCategory: "HealthApplication",
              applicationSubCategory: "Fitness",
              operatingSystem: "iOS 17+, watchOS 10+",
              offers: {
                "@type": "Offer",
                price: "0",
                priceCurrency: "USD",
              },
              image: `${baseUrl}/meta.png`,
              screenshot: [
                `${baseUrl}/screenshots/screenshot1.png`,
                `${baseUrl}/screenshots/screenshot2.png`,
                `${baseUrl}/screenshots/screenshot3.png`,
              ],
              installUrl: appStoreUrl,
              downloadUrl: appStoreUrl,
              sameAs: [appStoreUrl],
              featureList: [
                "Automatic step counting via iPhone and Apple Watch",
                "23+ workout types (running, walking, cycling, hiking, yoga, strength)",
                "8 home screen and Lock Screen widgets",
                "GPX export for routes",
                "8 personal record categories",
                "App Lock — block apps until daily step goal is hit",
                "Yearly fitness insights recap",
                "Streaks and daily goals",
                "Siri Shortcuts integration",
                "Stepboard — optional opt-in group step leaderboards",
              ],
              author: {
                "@type": "Organization",
                name: "Steps",
                url: `${baseUrl}/about`,
              },
              publisher: {
                "@type": "Organization",
                name: "Steps",
                url: baseUrl,
                logo: {
                  "@type": "ImageObject",
                  url: `${baseUrl}/app_icon.png`,
                },
              },
            }),
          }}
        />
      </head>
      <body className={`${bricolage.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
