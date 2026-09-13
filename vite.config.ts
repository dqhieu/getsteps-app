import matter from "gray-matter";
import { defineConfig, type Plugin } from "vite";
import vinext from "vinext";
import { cloudflare } from "@cloudflare/vite-plugin";
import { kvDataAdapter } from "@vinext/cloudflare/cache/kv-data-adapter";
import { cdnAdapter } from "@vinext/cloudflare/cache/cdn-adapter";
import { imagesOptimizer } from "@vinext/cloudflare/images/images-optimizer";

function stripBlogFrontmatter(): Plugin {
  return {
    name: "strip-blog-frontmatter",
    enforce: "pre",
    transform(code, id) {
      const [filename, query = ""] = id.split("?");
      if (!filename.includes("/content/blog/") || !/\.mdx?$/.test(filename)) {
        return null;
      }
      if (/(?:^|&)raw(?:&|$)/.test(query)) {
        return null;
      }
      return matter(code).content;
    },
  };
}

export default defineConfig({
  plugins: [
    stripBlogFrontmatter(),
    // vinext auto-injects @mdx-js/rollup with plugins from next.config
    vinext({
      cache: { data: kvDataAdapter(), cdn: cdnAdapter() },
      images: { optimizer: imagesOptimizer() },
    }),
    cloudflare({
      viteEnvironment: {
        name: "rsc",
        childEnvironments: ["ssr"],
      },
    }),
  ],
});
