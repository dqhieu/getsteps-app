import type { Metadata, Viewport } from "next";
import { RootDocument, buildRootMetadata, rootViewport } from "@/components/root-document";
import { getCommonMessages } from "@/lib/i18n/messages/common";
import { getLocale, localeStaticParams, type LangParams } from "@/lib/i18n/page";

export const dynamicParams = false;

export function generateStaticParams() {
  return localeStaticParams();
}

export async function generateMetadata({ params }: { params: LangParams }): Promise<Metadata> {
  const locale = await getLocale(params);
  const { site } = getCommonMessages(locale);
  return buildRootMetadata({
    locale,
    description: site.description,
    keywords: site.keywords,
  });
}

export const viewport: Viewport = rootViewport;

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: LangParams;
}>) {
  const locale = await getLocale(params);
  return (
    <RootDocument locale={locale} description={getCommonMessages(locale).site.description}>
      {children}
    </RootDocument>
  );
}
