"use client";

import { useState } from "react";

export const CONTACT_EMAIL = "info@yakasista.com";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true },
  { name: "org", label: "Council or organisation", type: "text", autoComplete: "organization", required: false },
] as const;

/**
 * The site is static and has no mail service, so "Send" opens the visitor's
 * own email app with the message written and addressed — and the thank-you
 * card says to press send there. Nothing claims a message was delivered.
 * To deliver directly, add a form backend (e.g. a route handler + Resend).
 */
export function ContactForm({ email }: { email: string }) {
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setError("Please fill in your name, email and message.");
      return;
    }
    setError(null);
    const data = new FormData(form);
    const name = String(data.get("name"));
    const org = String(data.get("org") || "");
    const subject = `Enquiry from ${name}${org ? ` (${org})` : ""}`;
    const body = `${data.get("message")}\n\n— ${name}${org ? `, ${org}` : ""}\n${data.get("email")}`;
    window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  }

  if (sent) {
    return (
      <div role="status" className="rounded-[32px] bg-pine p-10 text-parchment sm:p-12">
        <p className="caption text-parchment/70!">Message ready</p>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">Thank you.</h2>
        <p className="mt-5 leading-relaxed text-parchment/85">
          Your email app should have opened with your message to {email}. Press send there and we&apos;ll reply within a
          couple of working days.
        </p>
        <p className="mt-4 text-sm text-parchment/70">
          Nothing opened? Email us directly at{" "}
          <a href={`mailto:${email}`} className="underline">
            {email}
          </a>
          .
        </p>
        <button onClick={() => setSent(false)} className="mt-8 rounded-[99px] bg-parchment px-6 py-3 font-medium text-pine hover:bg-card">
          Write another
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="grid gap-5 rounded-[32px] border border-line bg-card p-8 sm:p-10">
      {FIELDS.map((f) => (
        <label key={f.name} className="grid gap-2">
          <span className="text-sm font-medium">
            {f.label}
            {!f.required && <span className="font-normal text-sage"> (optional)</span>}
          </span>
          <input
            name={f.name}
            type={f.type}
            autoComplete={f.autoComplete}
            required={f.required}
            className="h-12 rounded-2xl border border-line bg-parchment px-4 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
          />
        </label>
      ))}
      <label className="grid gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          className="rounded-2xl border border-line bg-parchment px-4 py-3 outline-none focus:border-green focus:ring-2 focus:ring-green/20"
        />
      </label>
      {error && (
        <p role="alert" className="text-sm text-rose">
          {error}
        </p>
      )}
      <button type="submit" className="justify-self-start rounded-[99px] bg-pine px-7 py-3 font-medium text-parchment hover:bg-green">
        Send
      </button>
      <p className="text-xs text-sage">Opens your email app with the message ready to send.</p>
    </form>
  );
}
