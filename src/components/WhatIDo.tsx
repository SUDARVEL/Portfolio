"use client";

import { motion } from "framer-motion";

const ease = [0.22, 1, 0.36, 1] as const;

/** Sanjay "What I do" intro — cinematic cloudy theme */
export function WhatIDo() {
  return (
    <section className="px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="section-badge">◆ What I do</p>
          <h2 className="display mt-4 max-w-4xl text-3xl leading-tight text-[var(--cream)] sm:text-5xl">
            I turn messy, real-world problems into products people actually{" "}
            <span className="italic text-[var(--peach)]">understand</span>
          </h2>
          <p className="mt-5 max-w-2xl text-[var(--muted)] sm:text-lg">
            Interfaces that feel obvious, systems that scale, and details that
            quietly do the work — across EdTech, AI-first, and enterprise
            platforms.
          </p>
        </motion.div>

        <div className="mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2">
          {[
            {
              value: "1+",
              label: "Years designing",
              detail:
                "End-to-end product design across EdTech, AI-first, and enterprise platforms.",
            },
            {
              value: "250+",
              label: "Sessions supported",
              detail:
                "Digiclass live attendance UX — plus +15% efficiency / −18% errors on Digival workflows.",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: index * 0.08, ease }}
              className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8"
            >
              <p className="display text-5xl text-[var(--accent)] sm:text-6xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm tracking-wide text-[var(--cream)]">
                {stat.label}
              </p>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-[var(--muted)]">
                {stat.detail}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
