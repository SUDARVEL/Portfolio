"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function AboutCraft() {
  return (
    <section id="about" className="border-b border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto grid w-full max-w-6xl gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs tracking-[0.24em] text-muted uppercase">About me</p>
          <h2 className="display mt-3 text-3xl md:text-5xl">
            A little about myself
          </h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          <p>
            I&apos;m {siteConfig.name} — a Product Designer who turns messy, real-world
            workflows into products people actually understand.
          </p>
          <p>
            I work across B2B SaaS, EdTech, AI-first, and health-adjacent products —
            pairing research, usability testing, and Figma systems with cross-functional
            Agile delivery. Recent work includes Digiclass attendance UX, OncoSmart rehab
            fitness, and an AI fintech assistant.
          </p>
          <p className="text-muted">
            Based in {siteConfig.location}. Currently Associate UI/UX Designer at Digival
            IT Solutions.
          </p>
          <Link
            href="/resume"
            className="inline-flex border-b border-accent pb-1 text-sm tracking-wide text-accent"
          >
            Read the resume
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
