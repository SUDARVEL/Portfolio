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
          <p className="text-xs tracking-[0.24em] text-muted uppercase">About / craft</p>
          <h2 className="display mt-3 text-3xl md:text-5xl">Designed like a reel, shipped like a product.</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1, ease }}
          className="space-y-6 text-base leading-relaxed text-foreground/80 md:text-lg"
        >
          <p>
            I&apos;m {siteConfig.name} — a UX & product designer who treats the first viewport as a
            single composition. Brand first, one message, one dominant visual, then the work.
          </p>
          <p>
            My craft sits between editorial storytelling and product pragmatism: interaction that
            earns attention, motion that clarifies hierarchy, and case studies hiring teams can
            skim without getting lost.
          </p>
          <p className="text-muted">
            Based in {siteConfig.location}. Currently shaping recovery fitness experiences at
            Oncosmart.
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
