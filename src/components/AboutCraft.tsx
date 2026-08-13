"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { siteConfig } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Sanjay about block × cloudy sunset theme */
export function AboutCraft() {
  return (
    <section id="about" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <p className="section-badge">◆ About</p>
        <div className="mt-8 grid gap-10 overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--panel)] lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, ease }}
            className="relative min-h-[320px] overflow-hidden lg:min-h-full"
          >
            <Image
              src="/images/hero/profile-clouds.png"
              alt={`${siteConfig.name} looking out over a cloudy sunset city`}
              fill
              className="object-cover object-[center_20%]"
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            <div
              aria-hidden
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, transparent 40%, rgba(6,7,9,0.75) 100%)",
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="flex flex-col justify-center p-7 sm:p-10"
          >
            <h2 className="display text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
              A little about myself
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[var(--muted)] sm:text-lg">
              <p>
                I&apos;m {siteConfig.name} — a Product Designer who turns messy,
                real-world workflows into products people actually understand.
              </p>
              <p>
                I work across B2B SaaS, EdTech, AI-first, and health-adjacent
                products — pairing research, usability testing, and Figma systems
                with cross-functional Agile delivery.
              </p>
              <p>
                Based in {siteConfig.location}. Currently Associate UI/UX Designer
                at Digival IT Solutions.
              </p>
            </div>
            <Link
              href="/resume"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--ink)]/40 px-5 py-2.5 text-sm text-[var(--cream)] transition hover:border-[var(--coral)]/50 hover:text-[var(--peach)]"
            >
              Read the resume →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
