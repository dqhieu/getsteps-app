import vinextHandler from "vinext/server/fetch-handler";

type FetchHandler = {
  fetch(request: Request, env: unknown, ctx: unknown): Promise<Response>;
};

const handler = vinextHandler as FetchHandler;

// vinext's Cloudflare CDN adapter only edge-caches pages, so metadata routes are
// served as no-store and re-rendered on every crawl (the sitemap is ~2 MB of
// XML). Their content comes from the repo, so it only changes on deploy, and
// Workers Cache is scoped to each deployed version; a day is a safety cap.
const METADATA_PATHS = new Set([
  "/sitemap.xml",
  "/robots.txt",
  "/manifest.webmanifest",
  "/icon.png",
  "/favicon.ico",
]);
const METADATA_EDGE_CACHE = "public, max-age=86400, stale-while-revalidate=604800";

export default {
  async fetch(request: Request, env: unknown, ctx: unknown): Promise<Response> {
    const response = await handler.fetch(request, env, ctx);

    if (
      request.method !== "GET" ||
      response.status !== 200 ||
      !METADATA_PATHS.has(new URL(request.url).pathname)
    ) {
      return response;
    }

    const cached = new Response(response.body, response);
    cached.headers.set("Cache-Control", "public, max-age=3600");
    cached.headers.set("CDN-Cache-Control", METADATA_EDGE_CACHE);
    return cached;
  },
};
