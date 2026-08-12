"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function ClosingCta() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-28 md:px-8 md:py-36">
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(ellipse at 30% 20%, rgba(226,184,122,0.14), transparent 45%), radial-gradient(ellipse at 80% 80%, rgba(40,70,70,0.25), transparent 40%)",
        }}
      />
      <div className="film-grain opacity-10" />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 0.85, ease }}
        className="relative mx-auto w-full max-w-6xl"
      >
        <p className="text-xs tracking-[0.24em] text-muted uppercase">Next frame</p>
        <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
          Have a product that needs a clearer story?
        </h2>
        <p className="mt-6 max-w-xl text-muted">
          Tell me about the problem, the audience, and the deadline. I&apos;ll reply with a
          thoughtful next step.
        </p>
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/contact"
            className="inline-flex bg-accent px-6 py-3 text-sm font-medium text-background transition-transform duration-300 hover:scale-[1.02]"
          >
            Start a conversation
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex border border-border px-6 py-3 text-sm text-foreground transition-colors hover:border-accent"
          >
            {siteConfig.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
