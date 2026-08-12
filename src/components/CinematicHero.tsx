"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";

/**
 * Hero rules (research + book + design brief):
 * - One composition, brand-first (SUDARVEL)
 * - One headline, one supporting line, one CTA group
 * - Full-bleed cinematic media (edge-to-edge)
 * - Motion helps presence; never blocks reading
 * - Responsive: phone → desktop without layout collapse
 */
export function CinematicHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-end overflow-hidden"
    >
      <div className="absolute inset-0">
        <video
          className={`h-full w-full object-cover object-center ${
            reduceMotion ? "" : "hero-video"
          }`}
          autoPlay={!reduceMotion}
          muted
          loop={!reduceMotion}
          playsInline
          preload="metadata"
          aria-hidden
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,9,11,0.45) 0%, rgba(8,9,11,0.58) 38%, rgba(8,9,11,0.94) 100%), radial-gradient(ellipse at 50% 35%, transparent 10%, var(--film-vignette) 100%)",
          }}
        />
        <div className="film-grain opacity-[0.14] sm:opacity-[0.18]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pb-[max(4rem,env(safe-area-inset-bottom))] pt-28 sm:px-6 md:px-8 md:pb-24 md:pt-32">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[11px] tracking-[0.32em] text-accent uppercase sm:text-sm sm:tracking-[0.35em] md:text-base"
        >
          {siteConfig.brand}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-4 max-w-[11ch] text-[clamp(2.5rem,11vw,6.5rem)] leading-[0.94] tracking-[-0.03em] sm:mt-5 sm:max-w-4xl"
        >
          {siteConfig.role}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-foreground/82 sm:mt-6 sm:max-w-xl sm:text-base md:text-lg"
        >
          {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <Link
            href="/work"
            className="inline-flex min-h-12 w-full items-center justify-center bg-accent px-6 py-3 text-sm font-medium tracking-wide text-background transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center border border-border px-6 py-3 text-sm tracking-wide text-foreground transition-colors duration-300 hover:border-accent hover:text-accent sm:w-auto"
          >
            Contact
          </Link>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-12 hidden text-xs tracking-[0.22em] text-muted uppercase sm:mt-16 sm:block"
        >
          Scroll to enter the reel
        </motion.p>
      </div>
    </section>
  );
}
