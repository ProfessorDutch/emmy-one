import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import html from "@/content/pages/answer-appointment-review.html?raw";

export const Route = createFileRoute("/answer-appointment-review")({
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
