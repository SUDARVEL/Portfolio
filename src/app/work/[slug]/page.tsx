import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/content/site";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return { title: project?.title ?? slug };
}

/**
 * Case study = Fedor BLUF + Sanjay depth
 * Poster (outcome) → metrics → meta → why → challenge → status → decisions → process → outcome → learnings
 */
export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  const next =
    projects[(projects.findIndex((item) => item.slug === slug) + 1) % projects.length];

  return (
    <article>
      <header className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div className="absolute inset-0" style={{ background: project.coverTone }} />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/55 to-transparent" />
        <div className="film-grain" />
        <div className="relative mx-auto w-full max-w-6xl">
          <Link href="/work" className="text-sm text-muted transition-colors hover:text-accent">
            ← All work
          </Link>
          <p className="mt-8 text-xs tracking-[0.24em] text-[var(--peach)] uppercase">
            {project.index} · {project.year} · {project.role}
          </p>
          <h1 className="display mt-4 max-w-4xl text-4xl md:text-6xl">
            {project.impactTitle}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/80">{project.tagline}</p>
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

          {/* Bottom line up front — Fedor / Tarek */}
          <div className="mt-10 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {project.metrics.map((metric) => (
              <div key={metric.label} className="border border-border bg-black/30 p-4">
                <p className="display text-2xl text-accent md:text-3xl">{metric.value}</p>
                <p className="mt-2 text-xs text-muted">{metric.label}</p>
              </div>
            ))}
          </div>

          <dl className="mt-10 grid gap-4 text-sm text-foreground/75 sm:grid-cols-2 lg:grid-cols-4">
            {project.meta.client ? (
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">Client</dt>
                <dd className="mt-1">{project.meta.client}</dd>
              </div>
            ) : null}
            {project.meta.team ? (
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">Team</dt>
                <dd className="mt-1">{project.meta.team}</dd>
              </div>
            ) : null}
            {project.meta.platforms ? (
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">Platforms</dt>
                <dd className="mt-1">{project.meta.platforms}</dd>
              </div>
            ) : null}
            {project.meta.duration ? (
              <div>
                <dt className="text-xs tracking-[0.18em] text-muted uppercase">Timeline</dt>
                <dd className="mt-1">{project.meta.duration}</dd>
              </div>
            ) : null}
          </dl>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl space-y-16 px-5 py-16 md:px-8 md:py-24">
        <p className="text-base leading-relaxed text-foreground/80 md:text-lg">
          {project.summary}
        </p>

        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="display text-2xl md:text-3xl">{section.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              {section.body}
            </p>
          </section>
        ))}

        {project.decisions && project.decisions.length > 0 ? (
          <section>
            <h2 className="display text-2xl md:text-3xl">Key product decisions</h2>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {project.decisions.map((decision) => (
                <li
                  key={decision.title}
                  className="border border-border bg-surface/60 p-5"
                >
                  <h3 className="text-lg text-[var(--peach)]">{decision.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{decision.body}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        <div className="flex flex-wrap gap-4 border-t border-border pt-10">
          <Link
            href="/contact"
            className="inline-flex bg-accent px-6 py-3 text-sm font-medium text-[#060709]"
          >
            Discuss a similar project
          </Link>
          <Link
            href={`/work/${next.slug}`}
            className="inline-flex border border-border px-6 py-3 text-sm text-foreground hover:border-accent"
          >
            Next: {next.title} →
          </Link>
        </div>
      </div>
    </article>
  );
}
