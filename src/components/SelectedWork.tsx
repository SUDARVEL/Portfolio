"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/content/site";

/** Sanjay work-card anatomy × cloudy sunset cinematic theme */
export function SelectedWork() {
  return (
    <section id="work" className="scroll-mt-28 px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex items-end justify-between gap-6 sm:mb-14">
          <div>
            <p className="section-badge">◆ Selected work</p>
            <h2 className="display mt-3 text-3xl font-semibold tracking-tight text-[var(--cream)] sm:text-5xl">
              Recent projects
            </h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm leading-relaxed text-[var(--muted)] sm:block">
            Outcome first. Context next. Decisions that moved the product.
          </p>
        </div>

        <div className="space-y-6 sm:space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.slug}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: index * 0.06 }}
            >
              <Link
                href={`/work/${project.slug}`}
                className="group grid overflow-hidden rounded-[28px] border border-[var(--line)] bg-[var(--panel)] transition hover:border-[var(--coral)]/45 lg:grid-cols-[1.05fr_0.95fr]"
              >
                <div className="flex flex-col justify-between p-7 sm:p-9">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 text-[11px] uppercase tracking-[0.16em] text-[var(--muted)]">
                      <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                        {project.index}
                      </span>
                      <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                        {project.year}
                      </span>
                      <span className="rounded-full border border-[var(--line)] px-2.5 py-1">
                        {project.role}
                      </span>
                    </div>
                    <h3 className="display mt-5 text-2xl font-semibold tracking-tight text-[var(--cream)] transition group-hover:text-[var(--peach)] sm:text-4xl">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--coral)]">
                      {project.meta.client ?? project.tags[0]}
                    </p>
                    <p className="mt-4 max-w-xl text-base leading-relaxed text-[var(--muted)]">
                      {project.impactTitle}
                    </p>
                    {project.metrics.length > 0 ? (
                      <div className="mt-6 flex flex-wrap gap-2">
                        {project.metrics.slice(0, 3).map((metric) => (
                          <span
                            key={metric.label}
                            className="rounded-full border border-[var(--line)] bg-[var(--ink)]/50 px-3 py-1.5 text-xs text-[var(--cream)]"
                          >
                            <span className="font-semibold text-[var(--peach)]">
                              {metric.value}
                            </span>{" "}
                            {metric.label}
                          </span>
                        ))}
                      </div>
                    ) : null}
                  </div>
                  <span className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--cream)]">
                    View case study
                    <span
                      aria-hidden
                      className="transition group-hover:translate-x-1"
                    >
                      →
                    </span>
                  </span>
                </div>

                <div className="relative min-h-[240px] overflow-hidden border-t border-[var(--line)] bg-[linear-gradient(160deg,#20191E_0%,#392B33_45%,#6D5260_100%)] lg:min-h-full lg:border-l lg:border-t-0">
                  <Image
                    src="/images/hero/city-clouds.png"
                    alt=""
                    fill
                    className="object-cover opacity-35 transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div
                    aria-hidden
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(6,7,9,0.15) 0%, rgba(6,7,9,0.55) 55%, rgba(6,7,9,0.85) 100%)",
                    }}
                  />
                  <div className="absolute inset-0 flex items-end justify-center p-6 sm:p-8">
                    <div className="w-full max-w-sm overflow-hidden rounded-2xl border border-white/10 bg-[var(--ink)]/75 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-sm transition duration-500 group-hover:-translate-y-1">
                      <div className="border-b border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.18em] text-[var(--muted)]">
                        {project.tags[0]} · preview
                      </div>
                      <div className="space-y-3 p-4">
                        <div className="h-2 w-2/3 rounded-full bg-[var(--coral)]/70" />
                        <div className="h-2 w-full rounded-full bg-white/10" />
                        <div className="h-2 w-5/6 rounded-full bg-white/10" />
                        <div className="mt-4 grid grid-cols-3 gap-2">
                          <div className="aspect-[4/3] rounded-lg bg-[var(--coral)]/25" />
                          <div className="aspect-[4/3] rounded-lg bg-[var(--amber)]/20" />
                          <div className="aspect-[4/3] rounded-lg bg-white/10" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
