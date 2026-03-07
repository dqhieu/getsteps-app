import type { Metadata } from "next";
import Image from "next/image";
import { LandingNavbar } from "@/components/landing-navbar";
import { LandingFooter } from "@/components/landing-footer";
import { GpxViewerClient } from "./client";
import { SITE_CONFIG } from "@/lib/constants";
import { RelatedBlogPosts } from "@/components/related-blog-posts";
import { TOOL_RELATED_BLOGS } from "@/lib/internal-links";

export const metadata: Metadata = {
  title: "GPX Viewer - View GPX Files Online Free | Steps",
  description:
    "Upload and view GPX files online for free. Visualize tracks on an interactive map with elevation profiles, distance, speed, waypoints, and route data. No signup required.",
  keywords: [
    "gpx viewer",
    "gpx reader",
    "gpx file viewer",
    "view gpx file",
    "gpx file reader",
    "gpx viewer online",
    "gpx file viewer online",
    "open gpx file",
    "gpx file opener",
    "gpx analyzer",
    "gpx editor",
  ],
  openGraph: {
    title: "GPX Viewer - View GPX Files Online Free",
    description:
      "Upload and visualize your GPX files on an interactive map with elevation profiles, distance, speed, and waypoint data.",
    type: "website",
    url: `${SITE_CONFIG.baseUrl}/tools/gpx-viewer`,
    images: [
      {
        url: "/og/gpx-viewer.png",
        width: 1200,
        height: 630,
        alt: "GPX Viewer - View GPX Files Online",
      },
    ],
  },
  alternates: {
    canonical: `${SITE_CONFIG.baseUrl}/tools/gpx-viewer`,
  },
  twitter: {
    card: "summary_large_image",
    title: "GPX Viewer - View GPX Files Online Free",
    description:
      "Upload and visualize your GPX files on an interactive map with elevation profiles, distance, speed, and waypoint data.",
    images: ["/og/gpx-viewer.png"],
  },
};

export default function GpxViewerPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-neutral-950">
      <LandingNavbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-neutral-900 dark:text-white mb-4">
            GPX Viewer - View GPX Files Online
          </h1>
          <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
            Upload and visualize your GPX files. View tracks on an interactive map
            with elevation profiles, distance, speed, and waypoint data.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="pb-4">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-neutral-600 dark:text-neutral-400 text-center">
            Drag and drop any .gpx file to instantly view your route on a map. Works with files from Strava, Garmin, Apple Watch, Komoot, and any other GPS device or app.
          </p>
        </div>
      </section>

      {/* Tool Section */}
      <section className="py-8 md:py-12">
        <div className="container mx-auto px-4 max-w-3xl">
          <GpxViewerClient />
        </div>
      </section>

      {/* What is a GPX File? */}
      <section className="py-12 md:py-16 bg-neutral-50 dark:bg-neutral-900/50">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
              What Is a GPX File?
            </h2>
            <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">
              GPX (GPS Exchange Format) is the standard XML file format for storing GPS data. It contains latitude, longitude, elevation, and timestamps for tracks, routes, and waypoints. GPX files are used by virtually every GPS device and fitness app including Garmin, Strava, Apple Watch, Komoot, and AllTrails.
            </p>
            <p className="text-sm text-neutral-600 dark:text-neutral-400">
              Common uses include recording running or cycling routes, planning hiking trails, sharing routes with others, and analyzing workout data like elevation gain, distance, and pace. This free GPX viewer lets you open and visualize any GPX file directly in your browser — no software installation needed.
            </p>
          </div>

          {/* FAQ */}
          <div className="mt-6 bg-white dark:bg-neutral-800/50 rounded-2xl p-6 md:p-8 border border-neutral-200 dark:border-neutral-700/50">
            <h2 className="text-xl font-semibold text-neutral-900 dark:text-white mb-6">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How do I open a GPX file?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Simply drag and drop your .gpx file onto the upload area above, or click to browse your files. The viewer will instantly parse the file and display your tracks on an interactive map with stats like distance, elevation, and speed. Your file is processed entirely in your browser — nothing is uploaded to any server.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What data does a GPX file contain?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  A GPX file stores three types of data: tracks (recorded paths from GPS), routes (planned navigation paths), and waypoints (individual points of interest). Each point includes latitude, longitude, and optionally elevation and timestamp. This allows calculating distance, speed, elevation gain/loss, and duration.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  How do I export a GPX file from my fitness app?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Most fitness apps support GPX export. In Strava, open an activity and choose &quot;Export GPX&quot; from the menu. In Garmin Connect, go to the activity and click the gear icon to export. On Apple Watch, use the Steps app or a third-party tool to export workouts as GPX files. Check your app&apos;s settings or export options.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  Is my GPX data private and secure?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  Yes. This GPX viewer processes your file entirely in your browser using JavaScript. Your GPX data is never uploaded to any server or stored anywhere. Once you close the page, the data is gone. This makes it completely safe for viewing personal routes and location data.
                </p>
              </details>

              <details className="group">
                <summary className="cursor-pointer font-medium text-neutral-900 dark:text-white hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">
                  What apps create GPX files?
                </summary>
                <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-400">
                  GPX files are created by most GPS and fitness apps including Strava, Garmin Connect, Apple Watch (via Steps or third-party apps), Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros, and many more. Any GPS device from Garmin, Wahoo, or similar brands can also export GPX files.
                </p>
              </details>
            </div>
          </div>

          {/* Related tools */}
          <div className="mt-4">
            <p className="text-sm font-medium text-neutral-700 dark:text-neutral-300 mb-3">Related Tools</p>
            <div className="flex flex-wrap gap-2">
              <a href="/tools/running-pace-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Running Pace Calculator</a>
              <a href="/tools/distance-equivalent-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Distance Equivalent Calculator</a>
              <a href="/tools/heart-rate-zones-calculator" className="text-sm px-3 py-1.5 rounded-lg bg-neutral-100 dark:bg-neutral-700 text-neutral-700 dark:text-neutral-300 hover:text-[#ED772F] dark:hover:text-[#ED772F] transition-colors">Heart Rate Zones Calculator</a>
            </div>
          </div>
          <RelatedBlogPosts items={TOOL_RELATED_BLOGS["gpx-viewer"] || []} />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Record & Export GPX with Steps
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8 max-w-xl mx-auto">
            Track your workouts and export GPX files directly from the Steps app on iPhone and Apple Watch.
          </p>
          <a
            href={SITE_CONFIG.appStoreUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform hover:scale-105 active:scale-95 inline-block"
            aria-label="Download on the App Store"
          >
            <Image
              src="/badge_light_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto dark:hidden"
            />
            <Image
              src="/badge_dark_mode.svg"
              alt="Download on the App Store"
              width={120}
              height={40}
              className="h-12 w-auto hidden dark:block"
            />
          </a>
          <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
            Free on the App Store
          </p>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "How do I open a GPX file?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Drag and drop your .gpx file onto the upload area or click to browse. The viewer parses the file in your browser and displays tracks on an interactive map with distance, elevation, and speed stats. Nothing is uploaded to any server."
                }
              },
              {
                "@type": "Question",
                "name": "What data does a GPX file contain?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "A GPX file stores tracks (recorded GPS paths), routes (planned navigation paths), and waypoints (points of interest). Each point includes latitude, longitude, and optionally elevation and timestamp, enabling calculation of distance, speed, and elevation gain."
                }
              },
              {
                "@type": "Question",
                "name": "How do I export a GPX file from my fitness app?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Most fitness apps support GPX export. In Strava, open an activity and choose 'Export GPX'. In Garmin Connect, click the gear icon to export. On Apple Watch, use the Steps app or a third-party tool to export workouts as GPX files."
                }
              },
              {
                "@type": "Question",
                "name": "Is my GPX data private and secure?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Yes. This GPX viewer processes your file entirely in your browser. Your GPX data is never uploaded to any server or stored anywhere. Once you close the page, the data is gone."
                }
              },
              {
                "@type": "Question",
                "name": "What apps create GPX files?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "GPX files are created by most GPS and fitness apps including Strava, Garmin Connect, Apple Watch, Komoot, AllTrails, MapMyRun, Runkeeper, Suunto, Polar, Wahoo, Coros, and many more."
                }
              }
            ]
          })
        }}
      />

      <LandingFooter />
    </div>
  );
}
