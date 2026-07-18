import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import html from "@/content/pages/lexicon.html?raw";

export const Route = createFileRoute("/lexicon")({
  server: {
    handlers: {
      GET: () =>
        new Response(html, {
          headers: {
            "Content-Type": "text/html; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        }),
    },
  },
});
