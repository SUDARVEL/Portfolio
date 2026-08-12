"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/content/site";

const ease = [0.22, 1, 0.36, 1] as const;

export function SelectedWork({ projects }: { projects: Project[] }) {
  return (
    <section id="selected-work" className="border-b border-border px-5 py-24 md:px-8 md:py-32">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, ease }}
        >
          <p className="text-xs tracking-[0.24em] text-muted uppercase">Selected work</p>
          <h2 className="display mt-3 max-w-2xl text-3xl md:text-5xl">
            A tiny fraction of the stories I shape.
          </h2>
        </motion.div>

        <ul className="mt-16 space-y-0">
          {projects.map((project, index) => (
            <motion.li
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.35 }}
              transition={{ duration: 0.7, delay: index * 0.08, ease }}
              className="border-t border-border"
            >
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-6 py-10 md:grid-cols-[minmax(0,1.1fr)_minmax(0,1.4fr)_auto] md:items-end md:gap-10 md:py-12"
              >
                <div
                  className="relative min-h-40 overflow-hidden md:min-h-48"
                  style={{ background: project.coverTone }}
                >
                  <div className="absolute inset-0 opacity-40 transition-opacity duration-500 group-hover:opacity-70">
                    <div className="film-grain" />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <p className="text-xs tracking-[0.2em] text-accent uppercase">
                      {project.year}
                    </p>
                  </div>
                </div>
                <div>
                  <h3 className="display text-2xl transition-colors duration-300 group-hover:text-accent md:text-4xl">
                    {project.title}
                  </h3>
                  <p className="mt-3 max-w-md text-muted">{project.tagline}</p>
                  <p className="mt-4 text-sm text-foreground/70">
                    {project.role} · {project.tags.join(" · ")}
                  </p>
                </div>
                <span className="text-sm tracking-wide text-accent transition-transform duration-300 group-hover:translate-x-1">
                  Case study →
                </span>
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
