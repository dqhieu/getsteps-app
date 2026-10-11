import createMDX from "@next/mdx";
import type { NextConfig } from "next";
import remarkGfm from "remark-gfm";

const nextConfig: NextConfig = {
  pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],
  experimental: {
    // Two root layouts (localized and English-only) cannot render a shared
    // not-found. Unmatched URLs use this document instead of returning 200.
    globalNotFound: true,
  },
  async headers() {
    return [
      {
        source: "/.well-known/apple-app-site-association",
        headers: [{ key: "Content-Type", value: "application/json" }],
      },
    ];
  },
  async redirects() {
    return [
      {
        source: "/features/:path*",
        destination: "/docs/features/:path*",
        permanent: true,
      },
      // Locale-prefixed paths outside the localized site sections keep
      // redirecting to the Mintlify docs; see resolveLocaleRoute().
    ];
  },
  async rewrites() {
    return [
      {
        source: "/_mintlify/:path*",
        destination: "https://steps-9a9e4b74.mintlify.dev/_mintlify/:path*",
      },
      {
        source: "/api/request",
        destination: "https://steps-9a9e4b74.mintlify.dev/_mintlify/api/request",
      },
      {
        source: "/docs/llms.txt",
        destination: "https://steps-9a9e4b74.mintlify.dev/llms.txt",
      },
      {
        source: "/docs/llms-full.txt",
        destination: "https://steps-9a9e4b74.mintlify.dev/llms-full.txt",
      },
      {
        source: "/docs/sitemap.xml",
        destination: "https://steps-9a9e4b74.mintlify.dev/sitemap.xml",
      },
      {
        source: "/docs/robots.txt",
        destination: "https://steps-9a9e4b74.mintlify.dev/robots.txt",
      },
      {
        source: "/docs/mcp",
        destination: "https://steps-9a9e4b74.mintlify.dev/mcp",
      },
      {
        source: "/docs",
        destination: "https://steps-9a9e4b74.mintlify.dev/docs",
      },
      {
        source: "/docs/:path*",
        destination: "https://steps-9a9e4b74.mintlify.dev/docs/:path*",
      },
      {
        source: "/mintlify-assets/:path+",
        destination: "https://steps-9a9e4b74.mintlify.dev/mintlify-assets/:path+",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

export default withMDX(nextConfig);
