"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";

/**
 * Sanjay hero structure × cloudy sunset cinematic theme
 * Greeting → product / designer → building @ company → location
 * Full-bleed cloudy city / desk visual (clouds required)
 */
export function CinematicHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative min-h-[100svh] overflow-hidden bg-[#060709]">
      <div className="absolute inset-0">
        <Image
          src="/images/hero/desk-clouds.png"
          alt="Sudarvel at a desk overlooking a cloudy Indian sunset city"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[70%_center] md:object-[center_30%] ${
            reduceMotion ? "" : "hero-media"
          }`}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(90deg, rgba(6,7,9,0.88) 0%, rgba(6,7,9,0.55) 42%, rgba(6,7,9,0.25) 70%, rgba(6,7,9,0.45) 100%), linear-gradient(180deg, rgba(6,7,9,0.35) 0%, transparent 35%, rgba(6,7,9,0.75) 100%)",
          }}
        />
        <div className="film-grain opacity-20" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-6xl flex-col justify-end px-5 pb-10 pt-28 sm:px-8 md:justify-center md:pb-16 md:pt-24">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-sm text-[#e9e2d7]/85 md:text-base"
        >
          {siteConfig.greeting}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.06 }}
          className="mt-3 max-w-3xl"
        >
          <span className="block text-[clamp(3rem,12vw,7rem)] font-semibold leading-[0.9] tracking-[-0.04em] text-[#e9e2d7]">
            product
          </span>
          <span
            className="display mt-1 block text-[clamp(2.6rem,10vw,5.5rem)] leading-[0.95] text-[var(--peach)]"
            style={{ fontStyle: "italic" }}
          >
            designer
          </span>
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mt-6 max-w-md text-base text-[#e9e2d7]/85 md:text-lg"
        >
          Building B2B SaaS, EdTech & AI-first products @{" "}
          <span className="inline-flex items-center rounded-full border border-border bg-black/30 px-3 py-1 text-sm text-[var(--peach)] backdrop-blur-sm">
            Digival
          </span>
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-border/60 pt-6 text-xs tracking-[0.18em] text-muted uppercase"
        >
          <span>Based in · Chennai, TN</span>
          <span className="text-[var(--peach)]">Create &gt; Consume</span>
        </motion.div>
      </div>
    </section>
  );
}
