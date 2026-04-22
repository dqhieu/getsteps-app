import { MetadataRoute } from "next";

const AI_SEARCH_BOTS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "anthropic-ai",
  "Google-Extended",
  "GoogleOther",
  "Applebot-Extended",
  "Bingbot",
  "Amazonbot",
  "Meta-ExternalAgent",
  "DuckAssistBot",
  "YouBot",
  "Cohere-ai",
  "MistralAI-User",
];

const COMMON_DISALLOWS = [
  "/_next/static/",
  "/docs/_next/",
  "/docs/_mintlify/",
];

export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://getsteps.app";

  return {
    rules: [
      ...AI_SEARCH_BOTS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: COMMON_DISALLOWS,
      })),
      {
        userAgent: "CCBot",
        disallow: "/",
      },
      {
        userAgent: "*",
        allow: "/",
        disallow: COMMON_DISALLOWS,
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
