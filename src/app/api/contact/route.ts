/**
 * POST /api/contact — the contact form's backend. Validates the message, then sends it to
 * CONTACT_EMAIL through Resend's REST API with the visitor's address as Reply-To, so
 * replying in the inbox answers them directly.
 *
 * Body: { name, email, subject, message, org?, website? } (`website` is a honeypot field
 * that people never see; anything in it is treated as spam and silently accepted).
 * Responds { ok: true } or { error } with a 4xx/5xx status.
 */

const RESEND_URL = "https://api.resend.com/emails";
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const LIMITS = { name: 100, email: 254, subject: 150, org: 150, message: 5000 } as const;

/**
 * Three messages per sender address per hour. In memory, so it is per server instance and
 * resets on a cold start — enough to stop a form being resubmitted in a loop, not a
 * guarantee against a determined sender.
 */
const RATE_LIMIT = 3;
const RATE_WINDOW_MS = 60 * 60 * 1000;
const sent = new Map<string, number[]>();

/** Sends from this address in the last hour. */
function recentSends(email: string, now: number) {
  return (sent.get(email) ?? []).filter((at) => now - at < RATE_WINDOW_MS);
}

/** Counts a delivered message; only successful sends count towards the limit. */
function recordSend(email: string, now: number) {
  sent.set(email, [...recentSends(email, now), now]);
  // Keep the map from growing without bound on a long-lived instance.
  if (sent.size > 5000) {
    for (const [key, times] of sent) if (times.every((at) => now - at >= RATE_WINDOW_MS)) sent.delete(key);
  }
}

const text = (value: unknown) => (typeof value === "string" ? value.trim() : "");
const error = (message: string, status: number) => Response.json({ error: message }, { status });

export async function POST(request: Request) {
  const body = (await request.json().catch(() => null)) as Record<string, unknown> | null;
  if (!body || typeof body !== "object") return error("Send the form as JSON.", 400);

  // Bots fill every field; people never see this one.
  if (text(body.website)) return Response.json({ ok: true });

  const name = text(body.name);
  const email = text(body.email).toLowerCase();
  const subject = text(body.subject);
  const org = text(body.org);
  const message = text(body.message);

  if (!name || !email || !subject || !message) return error("Please fill in your name, email, subject and message.", 400);
  if (!EMAIL.test(email)) return error("Please enter a valid email address.", 400);
  if (name.length > LIMITS.name) return error(`Please keep your name under ${LIMITS.name} characters.`, 400);
  if (email.length > LIMITS.email) return error("That email address is too long.", 400);
  if (subject.length > LIMITS.subject) return error(`Please keep the subject under ${LIMITS.subject} characters.`, 400);
  if (org.length > LIMITS.org) return error(`Please keep the organisation under ${LIMITS.org} characters.`, 400);
  if (message.length > LIMITS.message) return error(`Please keep your message under ${LIMITS.message.toLocaleString("en-GB")} characters.`, 400);
  // Header injection: a subject or name can't span lines.
  if (/[\r\n]/.test(name + subject + org)) return error("Please keep the name and subject on one line.", 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_EMAIL ?? "info@yakasista.com";
  const from = process.env.CONTACT_FROM ?? "Yakasista website <website@yakasista.com>";
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return error("The form isn't working right now. Please email info@yakasista.com instead.", 503);
  }

  if (recentSends(email, Date.now()).length >= RATE_LIMIT) {
    return error("You've sent a few messages already — please wait an hour, or email us directly.", 429);
  }

  const response = await fetch(RESEND_URL, {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      reply_to: email,
      subject: `[Website] ${subject}`,
      text: `${message}\n\n— ${name}${org ? `, ${org}` : ""}\n${email}\n\nSent from the contact form on yakasista.com.`,
    }),
    signal: AbortSignal.timeout(10_000),
  }).catch((err: unknown) => {
    console.error("Contact form: Resend request failed", err);
    return null;
  });

  if (!response?.ok) {
    if (response) console.error("Contact form: Resend returned", response.status, await response.text().catch(() => ""));
    return error("We couldn't send your message. Please try again, or email info@yakasista.com.", 502);
  }
  recordSend(email, Date.now());
  return Response.json({ ok: true });
}
