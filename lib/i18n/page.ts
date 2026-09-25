import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCALES, OG_LOCALE, isLocale, type Locale } from "./config";
import { absoluteUrl, alternatesFor } from "./href";

export type LangParams = Promise<{ lang: string }>;

export interface LangPageProps {
  params: LangParams;
}

export function localeStaticParams(): { lang: Locale }[] {
  return LOCALES.map((lang) => ({ lang }));
}

export async function getLocale(params: LangParams): Promise<Locale> {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  return lang;
}

export interface PageMetaMessages {
  title: string;
  description: string;
  keywords?: string[];
  ogTitle?: string;
  ogDescription?: string;
  ogImageAlt?: string;
}

export interface PageMetadataOptions {
  locale: Locale;
  /** Unprefixed path of the page, e.g. `/tools/bmi-calculator`. */
  path: string;
  meta: PageMetaMessages;
  ogImage?: string;
  /** Unprefixed path the canonical should point at when it isn't `path`. */
  canonicalPath?: string;
}

export function buildPageMetadata({
  locale,
  path,
  meta,
  ogImage = "/meta.png",
  canonicalPath,
}: PageMetadataOptions): Metadata {
  const ogTitle = meta.ogTitle ?? meta.title;
  return {
    title: meta.title,
    description: meta.description,
    ...(meta.keywords ? { keywords: meta.keywords } : {}),
    openGraph: {
      title: ogTitle,
      description: meta.ogDescription ?? meta.description,
      type: "website",
      url: absoluteUrl(locale, path),
      locale: OG_LOCALE[locale],
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: meta.ogImageAlt ?? ogTitle,
        },
      ],
    },
    alternates: alternatesFor(locale, path, canonicalPath),
  };
}
