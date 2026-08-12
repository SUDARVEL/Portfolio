"use client";

import Link from "next/link";
import { siteConfig } from "@/content/site";

export function CinematicHero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden">
      <div className="absolute inset-0">
        <video
          className="hero-video h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster=""
          aria-hidden
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(8,9,11,0.35) 0%, rgba(8,9,11,0.55) 42%, rgba(8,9,11,0.92) 100%), radial-gradient(ellipse at center, transparent 20%, var(--film-vignette) 100%)",
          }}
        />
        <div className="film-grain" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-6xl px-5 pb-16 pt-32 md:px-8 md:pb-24">
        <p className="reveal display text-sm tracking-[0.35em] text-accent uppercase md:text-base">
          {siteConfig.brand}
        </p>
        <h1 className="reveal reveal-delay-1 display mt-5 max-w-4xl text-[clamp(2.75rem,8vw,6.5rem)] leading-[0.95] tracking-[-0.02em]">
          {siteConfig.role}
        </h1>
        <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base leading-relaxed text-foreground/80 md:text-lg">
          {siteConfig.tagline}
        </p>
        <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
          <Link
            href="/work"
            className="inline-flex items-center bg-accent px-6 py-3 text-sm font-medium tracking-wide text-background transition-transform duration-300 hover:scale-[1.02]"
          >
            View work
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center border border-border px-6 py-3 text-sm tracking-wide text-foreground transition-colors duration-300 hover:border-accent hover:text-accent"
          >
            Contact
          </Link>
        </div>
        <p className="reveal reveal-delay-4 mt-16 text-xs tracking-[0.22em] text-muted uppercase">
          Scroll to enter the reel
        </p>
      </div>
    </section>
  );
}
