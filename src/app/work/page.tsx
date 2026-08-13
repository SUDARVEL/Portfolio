import Link from "next/link";
import { projects } from "@/content/site";

export const metadata = { title: "Work" };

export default function WorkPage() {
  return (
    <section className="px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-muted uppercase">Work</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Case studies</h1>
        <p className="mt-5 max-w-2xl text-muted">
          Outcome first, then the thinking — built for hiring managers who need signal fast.
        </p>

        <ul className="mt-16 space-y-6">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group block border border-border p-6 transition-colors hover:border-accent md:p-8"
                style={{ background: project.coverTone }}
              >
                <div className="flex flex-wrap items-center gap-3 text-xs tracking-[0.2em] text-[var(--peach)] uppercase">
                  <span>{project.index}</span>
                  <span>·</span>
                  <span>{project.year}</span>
                </div>
                <h2 className="display mt-3 text-2xl group-hover:text-[var(--peach)] md:text-4xl">
                  {project.impactTitle}
                </h2>
                <p className="mt-3 max-w-2xl text-muted">{project.tagline}</p>
                <div className="mt-6 flex flex-wrap gap-6">
                  {project.metrics.slice(0, 3).map((metric) => (
                    <div key={metric.label}>
                      <p className="display text-xl text-accent">{metric.value}</p>
                      <p className="text-xs text-muted">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
