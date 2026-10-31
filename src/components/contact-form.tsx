"use client";

import { useState } from "react";

export const CONTACT_EMAIL = "info@yakasista.com";

const FIELDS = [
  { name: "name", label: "Name", type: "text", autoComplete: "name", required: true, maxLength: 100 },
  { name: "email", label: "Email", type: "email", autoComplete: "email", required: true, maxLength: 254 },
  { name: "org", label: "Council or organisation", type: "text", autoComplete: "organization", required: false, maxLength: 150 },
  { name: "subject", label: "Subject", type: "text", autoComplete: "off", required: true, maxLength: 150 },
] as const;

const inputClass =
  "h-12 rounded-2xl border border-line bg-parchment px-4 outline-none focus:border-green focus:ring-2 focus:ring-green/20 disabled:opacity-60";

type Status = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string };

/** The contact form: posts to /api/contact, which emails CONTACT_EMAIL through Resend. */
export function ContactForm({ email }: { email: string }) {
  const [status, setStatus] = useState<Status>({ kind: "idle" });
  const sending = status.kind === "sending";

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    if (!form.checkValidity()) {
      form.reportValidity();
      setStatus({ kind: "error", message: "Please fill in your name, email, subject and message." });
      return;
    }
    setStatus({ kind: "sending" });
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(Object.fromEntries(new FormData(form))),
    }).catch(() => null);
    const body = (await response?.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

    if (response?.ok && body?.ok) {
      form.reset();
      setStatus({ kind: "sent" });
    } else {
      setStatus({
        kind: "error",
        message: body?.error ?? "We couldn't send your message. Please check your connection and try again.",
      });
    }
  }

  if (status.kind === "sent") {
    return (
      <div role="status" className="rounded-[32px] bg-pine p-10 text-parchment sm:p-12">
        <p className="caption text-parchment/70!">Message sent</p>
        <h2 className="mt-4 font-serif text-5xl tracking-tight">Thank you.</h2>
        <p className="mt-5 leading-relaxed text-parchment/85">
          Message sent — we&apos;ll get back to you shortly, usually within a couple of working days.
        </p>
        <button
          onClick={() => setStatus({ kind: "idle" })}
          className="mt-8 rounded-[99px] bg-parchment px-6 py-3 font-medium text-pine hover:bg-card"
        >
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
            maxLength={f.maxLength}
            disabled={sending}
            className={inputClass}
          />
        </label>
      ))}
      <label className="grid gap-2">
        <span className="text-sm font-medium">Message</span>
        <textarea
          name="message"
          required
          rows={6}
          maxLength={5000}
          disabled={sending}
          className="rounded-2xl border border-line bg-parchment px-4 py-3 outline-none focus:border-green focus:ring-2 focus:ring-green/20 disabled:opacity-60"
        />
      </label>
      {/* A honeypot: hidden from people, so only bots fill it in. */}
      <label aria-hidden className="absolute -left-[9999px] h-px w-px overflow-hidden">
        Website
        <input name="website" type="text" tabIndex={-1} autoComplete="off" />
      </label>
      {status.kind === "error" && (
        <p role="alert" className="text-sm text-rose">
          {status.message}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        aria-busy={sending}
        className="justify-self-start rounded-[99px] bg-pine px-7 py-3 font-medium text-parchment hover:bg-green disabled:cursor-wait disabled:opacity-70"
      >
        {sending ? "Sending…" : "Send"}
      </button>
      <p className="text-xs text-sage">
        Goes straight to {email}. We use your details only to reply to you.
      </p>
    </form>
  );
}
