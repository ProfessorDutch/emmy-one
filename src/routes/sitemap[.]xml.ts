import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

const BASE_URL = "https://meetemmy.com";

export const Route = createFileRoute("/sitemap.xml")({
  server: {
    handlers: {
      GET: async () => {
        const today = new Date().toISOString().slice(0, 10);
        const paths: Array<{ path: string; changefreq: string; priority: string }> = [
          { path: "/", changefreq: "weekly", priority: "1.0" },
          { path: "/the-6am-moment", changefreq: "monthly", priority: "0.8" },
          { path: "/crisis-search", changefreq: "monthly", priority: "0.8" },
          { path: "/prominence-theory", changefreq: "monthly", priority: "0.8" },
          { path: "/answer-appointment-review", changefreq: "monthly", priority: "0.8" },
          
          { path: "/emergency-whitelist", changefreq: "monthly", priority: "0.8" },
          { path: "/crisis-to-whitelist", changefreq: "monthly", priority: "0.8" },
          { path: "/the-net", changefreq: "monthly", priority: "0.8" },
          { path: "/crisis-response-management", changefreq: "monthly", priority: "0.8" },
          { path: "/mustard-seed", changefreq: "monthly", priority: "0.8" },
          { path: "/the-tree", changefreq: "monthly", priority: "0.8" },
          { path: "/the-amygdala-hijack", changefreq: "monthly", priority: "0.8" },
          { path: "/the-certainty-effect", changefreq: "monthly", priority: "0.8" },
          { path: "/dutch", changefreq: "monthly", priority: "0.8" },
          { path: "/lexicon", changefreq: "monthly", priority: "0.7" },
        ];
        const xml = [
          `<?xml version="1.0" encoding="UTF-8"?>`,
          `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
          ...paths.map((p) =>
            [
              `  <url>`,
              `    <loc>${BASE_URL}${p.path}</loc>`,
              `    <lastmod>${today}</lastmod>`,
              `    <changefreq>${p.changefreq}</changefreq>`,
              `    <priority>${p.priority}</priority>`,
              `  </url>`,
            ].join("\n"),
          ),
          `</urlset>`,
        ].join("\n");

        return new Response(xml, {
          headers: {
            "Content-Type": "application/xml",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
