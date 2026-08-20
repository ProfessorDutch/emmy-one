import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";
import { z } from "zod";

const enrollSchema = z.object({
  business_name: z.string().trim().min(1, "Business name is required").max(200),
  primary_contact: z.string().trim().min(1, "Primary contact is required").max(200),
  contact_title: z.string().trim().max(200).optional(),
  email: z.string().trim().email("Invalid email").max(255),
  phone: z.string().trim().min(1, "Phone is required").max(50),
  street_address: z.string().trim().min(1, "Street address is required").max(300),
  city: z.string().trim().min(1, "City is required").max(100),
  state: z.string().trim().min(1, "State is required").max(100),
  zip: z.string().trim().min(1, "ZIP is required").max(20),
  industry: z.string().trim().min(1, "Industry is required").max(100),
  website: z.string().trim().max(500).optional().or(z.literal("")),
  live_transfer: z.enum(["on"]).optional(),
  press_1: z.enum(["yes", "no", "not-sure"], { message: "Please select a Press 1 option" }),
  lead_sources: z.string().trim().max(2000).optional().or(z.literal("")),
  business_hours: z.string().trim().min(1, "Business hours are required").max(500),
  timezone: z.string().trim().min(1, "Time zone is required").max(50),
  calendar_system: z.string().trim().min(1, "Calendar system is required").max(50),
  calendar_name: z.array(z.string().trim().max(200)).optional().default([]),
  calendar_email: z.array(z.string().trim().max(500)).optional().default([]),
  scheduling_rules: z.string().trim().max(2000).optional().or(z.literal("")),
  billing_contact: z.string().trim().max(200).optional().or(z.literal("")),
  billing_email: z.string().trim().email("Invalid billing email").max(255).optional().or(z.literal("")),
  accept_terms: z.enum(["on"], { message: "You must accept the enrollment terms" }),
  authorized_signer: z.string().trim().min(1, "Authorized signer is required").max(200),
  signer_title: z.string().trim().min(1, "Signer title is required").max(200),
  sign_date: z.string().trim().min(1, "Date is required").max(50),
});

export const Route = createFileRoute("/api/public/enroll")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
            status: 400,
            headers: { "Content-Type": "application/json" },
          });
        }

        const parsed = enrollSchema.safeParse(body);
        if (!parsed.success) {
          return new Response(
            JSON.stringify({ error: "Validation failed", issues: parsed.error.flatten() }),
            { status: 400, headers: { "Content-Type": "application/json" } },
          );
        }

        try {
          const { pushEnrollmentToGHL } = await import("@/lib/ghl.server");
          await pushEnrollmentToGHL(parsed.data);
        } catch (err) {
          console.error("Enrollment sync failed", err);
          return new Response(
            JSON.stringify({
              error:
                "We received your details but could not complete enrollment automatically. Please contact us at 844-321-3669.",
            }),
            { status: 502, headers: { "Content-Type": "application/json" } },
          );
        }

        return new Response(
          JSON.stringify({
            success: true,
            message: "Enrollment received. We will follow up within one business day.",
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );

      },
    },
  },
});
