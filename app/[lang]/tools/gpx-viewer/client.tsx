"use client";

import { GpxViewer } from "@/components/gpx-viewer";
import type { Locale } from "@/lib/i18n/config";
import type { GpxViewerMessages } from "@/lib/i18n/messages/tool-pages/gpx-viewer/en";

export function GpxViewerClient({
  t,
  locale,
}: {
  t: GpxViewerMessages["tool"];
  locale: Locale;
}) {
  return <GpxViewer t={t} locale={locale} />;
}
