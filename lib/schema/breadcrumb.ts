import { SITE_CONFIG } from "@/lib/constants";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export function buildBreadcrumbList(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.path.startsWith("http")
        ? item.path
        : `${SITE_CONFIG.baseUrl}${item.path}`,
    })),
  };
}
