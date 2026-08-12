"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";

/**
 * Storytelling hero — “The view that builds dreams”
 * Shot 09 still (storyboard). Replace with Higgsfield MP4 at /videos/hero.mp4 later.
 */
export function CinematicHero() {
  const reduceMotion = useReducedMotion();

  return (
    <section
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-end overflow-hidden bg-[#060709]"
    >
      <div className="absolute inset-0">
        <Image
          src="/images/hero/end-frame.png"
          alt="Sudarvel at a high-rise desk overlooking an Indian city at sunset — cinematic anime hero frame"
          fill
          priority
          sizes="100vw"
          className={`object-cover object-[center_28%] ${
            reduceMotion ? "" : "hero-media"
          }`}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(6,7,9,0.25) 0%, rgba(6,7,9,0.42) 38%, rgba(6,7,9,0.93) 100%), radial-gradient(ellipse at 58% 28%, transparent 12%, rgba(6,7,9,0.5) 100%)",
          }}
        />
        <div className="film-grain" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col px-5 pb-[max(4rem,env(safe-area-inset-bottom))] pt-28 sm:px-6 md:px-8 md:pb-24 md:pt-32">
        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="display text-[11px] tracking-[0.34em] uppercase sm:text-sm"
          style={{ color: "var(--peach)" }}
        >
          {siteConfig.brand}
        </motion.p>

        <motion.h1
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          className="display mt-4 max-w-[12ch] text-[clamp(2.6rem,11vw,6.4rem)] leading-[0.94] tracking-[-0.03em] text-[#e9e2d7] sm:mt-5 sm:max-w-4xl"
        >
          {siteConfig.role}
        </motion.h1>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.14, ease: [0.22, 1, 0.36, 1] }}
          className="mt-5 max-w-md text-[0.95rem] leading-relaxed text-[#e9e2d7]/85 sm:mt-6 sm:max-w-xl sm:text-base md:text-lg"
        >
          {siteConfig.greeting}. {siteConfig.tagline}
        </motion.p>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row sm:flex-wrap sm:items-center sm:gap-4"
        >
          <Link
            href="/work"
            className="inline-flex min-h-12 w-full items-center justify-center bg-accent px-6 py-3 text-sm font-medium tracking-wide text-[#060709] transition-transform duration-300 hover:scale-[1.02] sm:w-auto"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="inline-flex min-h-12 w-full items-center justify-center border border-border px-6 py-3 text-sm tracking-wide text-[#e9e2d7] transition-colors duration-300 hover:border-[var(--peach)] hover:text-[var(--peach)] sm:w-auto"
          >
            Contact
          </Link>
        </motion.div>

        <motion.p
          initial={reduceMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.36 }}
          className="mt-12 hidden text-xs tracking-[0.22em] text-muted uppercase sm:mt-16 sm:block"
        >
          Scroll into the work
        </motion.p>
      </div>
    </section>
  );
}
