import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { Bricolage_Grotesque } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import "@/app/globals.css";
import { SITE_CONFIG } from "@/lib/constants";
import { DEFAULT_LOCALE, HREFLANG, OG_LOCALE, type Locale } from "@/lib/i18n/config";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin", "latin-ext"],
  display: "swap",
  variable: "--font-bricolage",
});

const { baseUrl, name: appName, appStoreUrl } = SITE_CONFIG;

export interface RootMetadataOptions {
  locale: Locale;
  description: string;
  keywords: string[];
  /** Fallback canonical for pages that don't declare their own. */
  canonical?: string;
}

export function buildRootMetadata({
  locale,
  description,
  keywords,
  canonical,
}: RootMetadataOptions): Metadata {
  return {
    metadataBase: new URL(baseUrl),
    title: {
      default: appName,
      template: `%s | Steps: Workout & Pedometer`,
    },
    description,
    applicationName: appName,
    ...(canonical ? { alternates: { canonical } } : {}),
    keywords,
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
      locale: OG_LOCALE[locale],
      url: baseUrl,
      title: appName,
      description,
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
      description,
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
}

export const rootViewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#0a0a0a" },
  ],
};

export function RootDocument({
  locale = DEFAULT_LOCALE,
  description,
  children,
}: {
  locale?: Locale;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <html lang={HREFLANG[locale]}>
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
              description,
              url: baseUrl,
              inLanguage: HREFLANG[locale],
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
                "AI Coach — personalized on-device workout feedback",
                "Workout Chat — ask questions about any workout",
                "23+ workout types (running, walking, cycling, hiking, yoga, strength)",
                "Heart rate zones and per-split workout breakdowns",
                "10 home screen and Lock Screen widgets",
                "GPX export for routes",
                "8 personal record categories",
                "App Lock — block apps until daily step goal is hit",
                "Yearly fitness insights recap",
                "Streaks and daily goals",
                "Siri Shortcuts integration",
                "Stepboard — optional opt-in group step leaderboards",
                "World Stats — global community totals, rank, and percentile",
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
