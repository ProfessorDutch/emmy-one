import process from "node:process";

const GHL_BASE = "https://services.leadconnectorhq.com";
const GHL_VERSION = "2021-07-28";

export type EnrollmentPayload = {
  business_name: string;
  primary_contact: string;
  contact_title?: string;
  email: string;
  phone: string;
  street_address: string;
  city: string;
  state: string;
  zip: string;
  industry: string;
  website?: string;
  live_transfer?: string;
  press_1: string;
  lead_sources?: string;
  business_hours: string;
  timezone: string;
  calendar_system: string;
  calendar_name?: string[];
  calendar_email?: string[];
  scheduling_rules?: string;
  billing_contact?: string;
  billing_email?: string;
  accept_terms: string;
  authorized_signer: string;
  signer_title: string;
  sign_date: string;
};

function splitName(full: string): { firstName: string; lastName: string } {
  const parts = full.trim().split(/\s+/);
  const firstName = parts.shift() ?? full;
  return { firstName, lastName: parts.join(" ") };
}

function buildNote(data: EnrollmentPayload): string {
  const calendars = (data.calendar_name ?? [])
    .map((name, i) => `  - ${name || "(unnamed)"}${data.calendar_email?.[i] ? ` — ${data.calendar_email[i]}` : ""}`)
    .filter((line) => line.trim() !== "-")
    .join("\n");

  return [
    "MEETEMMY ENROLLMENT",
    `Business: ${data.business_name}`,
    `Primary contact: ${data.primary_contact}${data.contact_title ? ` (${data.contact_title})` : ""}`,
    `Email: ${data.email}`,
    `Phone: ${data.phone}`,
    `Address: ${data.street_address}, ${data.city}, ${data.state} ${data.zip}`,
    `Industry: ${data.industry}`,
    data.website ? `Website: ${data.website}` : null,
    `Live transfer: ${data.live_transfer === "on" ? "Yes" : "No"}`,
    `Press 1: ${data.press_1}`,
    data.lead_sources ? `Lead sources: ${data.lead_sources}` : null,
    `Business hours: ${data.business_hours}`,
    `Time zone: ${data.timezone}`,
    `Calendar system: ${data.calendar_system}`,
    calendars ? `Calendars:\n${calendars}` : null,
    data.scheduling_rules ? `Scheduling rules: ${data.scheduling_rules}` : null,
    data.billing_contact ? `Billing contact: ${data.billing_contact}` : null,
    data.billing_email ? `Billing email: ${data.billing_email}` : null,
    `Terms accepted: ${data.accept_terms === "on" ? "Yes" : "No"}`,
    `Authorized signer: ${data.authorized_signer} (${data.signer_title})`,
    `Signed: ${data.sign_date}`,
  ]
    .filter(Boolean)
    .join("\n");
}

async function ghlFetch(path: string, token: string, body: unknown) {
  const res = await fetch(`${GHL_BASE}${path}`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      Version: GHL_VERSION,
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(body),
  });

  const text = await res.text();
  if (!res.ok) {
    console.error(`GHL ${path} failed [${res.status}]: ${text}`);
    throw new Error(`GHL request failed [${res.status}]: ${text}`);
  }
  try {
    return JSON.parse(text) as Record<string, unknown>;
  } catch {
    return {};
  }
}

export async function pushEnrollmentToGHL(data: EnrollmentPayload) {
  const token = process.env["GHL_PRIVATE_INTEGRATION_TOKEN"];
  const locationId = process.env["GHL_LOCATION_ID"];
  if (!token || !locationId) {
    throw new Error("GoHighLevel credentials are not configured");
  }

  const { firstName, lastName } = splitName(data.primary_contact);

  const upsert = await ghlFetch("/contacts/upsert", token, {
    locationId,
    firstName,
    lastName,
    name: data.primary_contact,
    email: data.email,
    phone: data.phone,
    companyName: data.business_name,
    address1: data.street_address,
    city: data.city,
    state: data.state,
    postalCode: data.zip,
    website: data.website || undefined,
    timezone: data.timezone,
    source: "MeetEmmy Enrollment Form",
    tags: [
      "meetemmy-enrollment",
      `industry:${data.industry}`.toLowerCase(),
      `press1:${data.press_1}`,
      data.live_transfer === "on" ? "live-transfer" : "no-live-transfer",
    ],
  });

  const contact = (upsert["contact"] ?? {}) as { id?: string };
  const contactId = contact.id ?? (upsert["id"] as string | undefined);

  if (contactId) {
    try {
      await ghlFetch(`/contacts/${contactId}/notes`, token, { body: buildNote(data) });
    } catch (err) {
      console.error("GHL note creation failed", err);
    }
  }

  return { contactId };
}
