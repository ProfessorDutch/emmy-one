import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import html from "@/content/pages/emergency-whitelist.html?raw";

export const Route = createFileRoute("/emergency-whitelist")({
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
