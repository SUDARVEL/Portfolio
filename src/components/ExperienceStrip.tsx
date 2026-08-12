"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resume, siteConfig } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Sanjay experience timeline × cinematic cloudy theme */
export function ExperienceStrip() {
  return (
    <section id="experience" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease }}
        >
          <p className="section-badge">◆ Experience</p>
          <h2 className="display mt-3 max-w-2xl text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
            From intern to shipping EdTech & AI products
          </h2>
          <p className="mt-4 max-w-2xl text-[var(--muted)]">{resume.summary}</p>
        </motion.div>

        <ol className="mt-12 space-y-5 sm:mt-14">
          {resume.experience.map((job, index) => (
            <motion.li
              key={`${job.org}-${job.period}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.55, delay: index * 0.06, ease }}
              className="rounded-[24px] border border-[var(--line)] bg-[var(--panel)] p-6 sm:p-8"
            >
              <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                <span className="rounded-full border border-[var(--line)] px-2.5 py-1 text-[var(--peach)]">
                  {job.period}
                </span>
                {job.location ? (
                  <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                    {job.location}
                  </span>
                ) : null}
              </div>
              <h3 className="display mt-4 text-2xl text-[var(--cream)] sm:text-3xl">
                {job.role}
              </h3>
              <p className="mt-1 text-[var(--coral)]">{job.org}</p>
              <ul className="mt-5 max-w-3xl space-y-2 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
                {job.points.map((point) => (
                  <li key={point} className="flex gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--accent)]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/resume"
            className="inline-flex items-center gap-2 text-sm text-[var(--cream)] transition hover:text-[var(--peach)]"
          >
            Full resume →
          </Link>
          <p className="text-sm text-[var(--muted)]">{siteConfig.proofLine}</p>
        </div>
      </div>
    </section>
  );
}
