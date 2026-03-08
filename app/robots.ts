import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://getsteps.app";

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/_next/static/",
        "/docs/_next/",
        "/docs/_mintlify/",
      ],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
