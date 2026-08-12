"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Sanjay-style impact cards × Sudarvel cinematic theme
 * Numbered panels, outcome titles, metrics, clear CTA — dark sunset palette
 */
export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section id="selected-work" className="border-b border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
          className="max-w-3xl"
        >
          <p className="text-xs tracking-[0.24em] text-muted uppercase">Selected work</p>
          <h2 className="display mt-3 text-3xl md:text-5xl">
            Check out some of my work
          </h2>
          <p className="mt-4 text-muted md:text-lg">
            A few products I&apos;ve helped shape — and the thinking behind them.
          </p>
        </motion.div>

        <ul className="mt-14 space-y-8 md:mt-16 md:space-y-10">
          {projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7, delay: index * 0.06, ease }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group relative block overflow-hidden border border-border transition-colors duration-300 hover:border-[var(--accent)]"
                style={{ background: project.coverTone }}
              >
                <div className="film-grain opacity-20" />
                <div className="relative grid gap-8 p-6 sm:p-8 md:grid-cols-[1.2fr_0.8fr] md:gap-12 md:p-10 lg:p-12">
                  <div>
                    <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] text-[var(--peach)] uppercase">
                      <span>{project.index}</span>
                      <span className="text-muted">·</span>
                      <span>{project.year}</span>
                    </div>
                    <h3 className="display mt-4 max-w-xl text-2xl leading-tight text-[#e9e2d7] transition-colors group-hover:text-[var(--peach)] sm:text-3xl md:text-4xl">
                      {project.impactTitle}
                    </h3>
                    <p className="mt-4 max-w-xl text-sm leading-relaxed text-[#e9e2d7]/75 md:text-base">
                      {project.tagline}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="border border-border px-3 py-1 text-xs tracking-wide text-muted"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="mt-8 inline-flex items-center gap-2 bg-[#e9e2d7] px-5 py-3 text-sm font-medium text-[#060709] transition-transform duration-300 group-hover:translate-x-1">
                      View case study →
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 self-end sm:gap-5">
                    {project.metrics.slice(0, 4).map((metric) => (
                      <div key={metric.label} className="border border-border/80 bg-black/25 p-4 backdrop-blur-sm">
                        <p className="display text-2xl text-[var(--accent)] md:text-3xl">
                          {metric.value}
                        </p>
                        <p className="mt-2 text-xs leading-snug text-muted">{metric.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
