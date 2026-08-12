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

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();

  return (
    <article>
      <header className="relative overflow-hidden px-5 pb-16 pt-32 md:px-8 md:pb-24 md:pt-40">
        <div
          className="absolute inset-0"
          style={{ background: project.coverTone }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent" />
        <div className="film-grain" />
        <div className="relative mx-auto w-full max-w-6xl">
          <Link href="/work" className="text-sm text-muted transition-colors hover:text-accent">
            ← All work
          </Link>
          <p className="mt-8 text-xs tracking-[0.24em] text-accent uppercase">
            {project.year} · {project.role}
          </p>
          <h1 className="display mt-4 max-w-4xl text-4xl md:text-6xl">{project.title}</h1>
          <p className="mt-5 max-w-2xl text-lg text-foreground/80">{project.tagline}</p>
          <p className="mt-6 max-w-2xl text-muted">{project.summary}</p>
          <p className="mt-6 text-sm text-foreground/70">{project.tags.join(" · ")}</p>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl space-y-14 px-5 py-16 md:px-8 md:py-24">
        {project.sections.map((section) => (
          <section key={section.heading}>
            <h2 className="display text-2xl md:text-3xl">{section.heading}</h2>
            <p className="mt-4 text-base leading-relaxed text-foreground/80 md:text-lg">
              {section.body}
            </p>
          </section>
        ))}
        <Link
          href="/contact"
          className="inline-flex bg-accent px-6 py-3 text-sm font-medium text-background"
        >
          Discuss a similar project
        </Link>
      </div>
    </article>
  );
}
