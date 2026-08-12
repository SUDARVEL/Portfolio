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
          Editorial deep-dives — problem, process, outcome. Built for hiring managers who need
          signal fast.
        </p>

        <ul className="mt-16 divide-y divide-border border-y border-border">
          {projects.map((project) => (
            <li key={project.slug}>
              <Link
                href={`/work/${project.slug}`}
                className="group grid gap-4 py-10 md:grid-cols-[140px_1fr_auto] md:items-center md:gap-10"
              >
                <span className="text-sm tracking-[0.18em] text-accent uppercase">
                  {project.year}
                </span>
                <div>
                  <h2 className="display text-2xl transition-colors group-hover:text-accent md:text-3xl">
                    {project.title}
                  </h2>
                  <p className="mt-2 text-muted">{project.tagline}</p>
                </div>
                <span className="text-sm text-accent">Open →</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
