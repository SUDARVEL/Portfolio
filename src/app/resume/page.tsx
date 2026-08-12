import Link from "next/link";
import { resume, siteConfig } from "@/content/site";

export const metadata = { title: "Resume" };

export default function ResumePage() {
  return (
    <section className="px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-muted uppercase">Resume</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">{siteConfig.name}</h1>
        <p className="mt-3 text-lg text-accent">{resume.headline}</p>
        <p className="mt-5 max-w-2xl text-muted">{resume.summary}</p>

        <div className="mt-16 grid gap-16 md:grid-cols-[1.4fr_0.8fr]">
          <div>
            <h2 className="text-xs tracking-[0.22em] text-muted uppercase">Experience</h2>
            <ul className="mt-8 space-y-12">
              {resume.experience.map((job) => (
                <li key={`${job.org}-${job.period}`}>
                  <p className="text-sm text-accent">{job.period}</p>
                  <h3 className="display mt-2 text-2xl">
                    {job.role} · {job.org}
                  </h3>
                  <ul className="mt-4 space-y-2 text-foreground/80">
                    {job.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </div>

          <aside className="space-y-12">
            <div>
              <h2 className="text-xs tracking-[0.22em] text-muted uppercase">Skills</h2>
              <ul className="mt-5 space-y-2 text-foreground/80">
                {resume.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.22em] text-muted uppercase">Tools</h2>
              <ul className="mt-5 space-y-2 text-foreground/80">
                {resume.tools.map((tool) => (
                  <li key={tool}>{tool}</li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs tracking-[0.22em] text-muted uppercase">Education</h2>
              <ul className="mt-5 space-y-4">
                {resume.education.map((item) => (
                  <li key={item.title}>
                    <p className="display text-xl">{item.title}</p>
                    <p className="mt-2 text-sm text-muted">{item.detail}</p>
                  </li>
                ))}
              </ul>
            </div>
            <p className="text-sm text-muted">
              {siteConfig.email}
              <br />
              {siteConfig.location}
            </p>
            <Link
              href="/contact"
              className="inline-flex bg-accent px-5 py-3 text-sm font-medium text-background"
            >
              Contact me
            </Link>
          </aside>
        </div>
      </div>
    </section>
  );
}
