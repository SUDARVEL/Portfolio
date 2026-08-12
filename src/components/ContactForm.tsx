"use client";

import { FormEvent, useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { siteConfig } from "@/content/site";

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setError(null);

    const form = event.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      email: String(data.get("email") || "").trim(),
      message: String(data.get("message") || "").trim(),
    };

    const supabase = createClient();
    if (!supabase) {
      // Local / pre-Supabase: still give a graceful success path via mailto fallback.
      window.location.href = `mailto:${siteConfig.email}?subject=${encodeURIComponent(
        `Portfolio note from ${payload.name}`,
      )}&body=${encodeURIComponent(payload.message)}`;
      setStatus("sent");
      form.reset();
      return;
    }

    const { error: insertError } = await supabase.from("messages").insert(payload);
    if (insertError) {
      setError(insertError.message);
      setStatus("error");
      return;
    }

    setStatus("sent");
    form.reset();
  }

  return (
    <form onSubmit={onSubmit} className="mt-12 max-w-xl space-y-6">
      <label className="block">
        <span className="text-xs tracking-[0.18em] text-muted uppercase">Name</span>
        <input
          required
          name="name"
          className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-accent"
        />
      </label>
      <label className="block">
        <span className="text-xs tracking-[0.18em] text-muted uppercase">Email</span>
        <input
          required
          type="email"
          name="email"
          className="mt-2 w-full border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-accent"
        />
      </label>
      <label className="block">
        <span className="text-xs tracking-[0.18em] text-muted uppercase">Message</span>
        <textarea
          required
          name="message"
          rows={5}
          className="mt-2 w-full resize-y border-b border-border bg-transparent py-3 outline-none transition-colors focus:border-accent"
        />
      </label>
      <button
        type="submit"
        disabled={status === "sending"}
        className="bg-accent px-6 py-3 text-sm font-medium text-background disabled:opacity-60"
      >
        {status === "sending" ? "Sending…" : "Send message"}
      </button>
      {status === "sent" ? (
        <p className="text-sm text-accent">Thanks — I&apos;ll get back to you soon.</p>
      ) : null}
      {status === "error" && error ? (
        <p className="text-sm text-red-300">{error}</p>
      ) : null}
    </form>
  );
}
