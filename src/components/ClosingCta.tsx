"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Sanjay closing CTA — “lets design…” energy × cloudy city end frame */
export function ClosingCta() {
  return (
    <section id="cta" className="relative overflow-hidden px-5 py-24 sm:px-8 sm:py-32">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/city-clouds.png"
          alt=""
          fill
          className="object-cover object-center opacity-45"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,9,0.92) 0%, rgba(6,7,9,0.72) 45%, rgba(6,7,9,0.95) 100%)",
          }}
        />
        <div className="film-grain opacity-20" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease }}
        className="relative mx-auto max-w-6xl rounded-[28px] border border-[var(--line)] bg-[var(--panel)]/80 p-8 backdrop-blur-md sm:p-12"
      >
        <p className="section-badge">◆ Next</p>
        <h2 className="display mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-[var(--cream)] sm:text-6xl">
          Lets design something{" "}
          <span className="italic text-[var(--peach)]">worth shipping</span>
        </h2>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg">
          Have a B2B, EdTech, or AI product that needs a clearer story? I help
          teams turn complex workflows into calm, hire-ready product narratives.
        </p>
        <div className="mt-10 flex flex-wrap gap-3">
          <Link
            href="/contact"
            className="inline-flex rounded-full bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[var(--ink)] transition hover:bg-[var(--peach)]"
          >
            Start a conversation
          </Link>
          <a
            href={`mailto:${siteConfig.email}`}
            className="inline-flex rounded-full border border-[var(--line)] px-6 py-3 text-sm text-[var(--cream)] transition hover:border-[var(--coral)]/50"
          >
            {siteConfig.email}
          </a>
        </div>
      </motion.div>
    </section>
  );
}
