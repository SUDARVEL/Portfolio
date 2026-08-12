"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { resume, siteConfig } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/** Sanjay-style experience timeline in Sudarvel cinematic theme */
export function ExperienceStrip() {
  return (
    <section id="experience" className="border-b border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs tracking-[0.24em] text-muted uppercase">Experience</p>
          <h2 className="display mt-3 max-w-2xl text-3xl md:text-5xl">
            From intern to shipping EdTech & AI products
          </h2>
          <p className="mt-4 max-w-2xl text-muted">
            {resume.summary}
          </p>
        </motion.div>

        <ol className="mt-14 space-y-0 border-l border-border md:mt-16">
          {resume.experience.map((job, index) => (
            <motion.li
              key={`${job.org}-${job.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.65, delay: index * 0.08, ease }}
              className="relative pl-8 pb-12 last:pb-0 md:pl-12"
            >
              <span className="absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="text-xs tracking-[0.18em] text-[var(--peach)] uppercase">
                {job.period}
                {job.location ? ` · ${job.location}` : ""}
              </p>
              <h3 className="display mt-2 text-2xl md:text-3xl">
                {job.role}
              </h3>
              <p className="mt-1 text-muted">{job.org}</p>
              <ul className="mt-4 max-w-2xl space-y-2 text-sm text-foreground/80 md:text-base">
                {job.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ol>

        <Link
          href="/resume"
          className="mt-10 inline-flex border-b border-accent pb-1 text-sm tracking-wide text-accent"
        >
          Full resume →
        </Link>
        <p className="mt-6 text-sm text-muted">{siteConfig.proofLine}</p>
      </div>
    </section>
  );
}
