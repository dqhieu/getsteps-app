import type { Metadata, Viewport } from "next";
import { RootDocument, buildRootMetadata, rootViewport } from "@/components/root-document";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = buildRootMetadata({
  locale: "en",
  description: SITE_CONFIG.description,
  canonical: SITE_CONFIG.baseUrl,
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
});

export const viewport: Viewport = rootViewport;

export default function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootDocument description={SITE_CONFIG.description}>{children}</RootDocument>;
}
