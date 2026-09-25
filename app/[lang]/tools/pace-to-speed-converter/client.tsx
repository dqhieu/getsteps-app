"use client";

import { PaceSpeedConverter } from "@/components/pace-speed-converter";
import type { Locale } from "@/lib/i18n/config";
import type { PaceToSpeedConverterMessages } from "@/lib/i18n/messages/tool-pages/pace-to-speed-converter/en";

export function PaceSpeedConverterClient({
  t,
  locale,
}: {
  t: PaceToSpeedConverterMessages["calculator"];
  locale: Locale;
}) {
  return <PaceSpeedConverter t={t} locale={locale} />;
}
