import { SITE } from "./src/consts";
import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import react from "@astrojs/react";
import rehypeExternalLinks from "rehype-external-links";
import icon from "astro-icon";
import robotsTxt from "astro-robots-txt";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          rel: ["nofollow"],
        },
      ],
    ],
  },
  prefetch: true,
  integrations: [
    icon({
      include: {
        bi: [
          "github",
          "google",
          "linkedin",
          "instagram",
          "meta",
          "stack-overflow",
          "twitter-x",
          "wikipedia",
          "youtube",
        ],
        heroicons: ["*"],
      },
      iconDir: "public/icons",
    }),
    mdx(),
    react(),
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          disallow: "/test/",
        },
      ],
    }),
    sitemap({
      filter: (page) => page !== `${SITE.url}/test/`,
    }),
    tailwind(),
  ],
});