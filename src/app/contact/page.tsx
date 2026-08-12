import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/content/site";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <section className="px-5 pb-24 pt-28 md:px-8 md:pb-32 md:pt-36">
      <div className="mx-auto w-full max-w-6xl">
        <p className="text-xs tracking-[0.24em] text-muted uppercase">Contact</p>
        <h1 className="display mt-3 text-4xl md:text-6xl">Let&apos;s make the next frame.</h1>
        <p className="mt-5 max-w-xl text-muted">
          Project inquiries, portfolio feedback, or a quick hello — I read every note.
        </p>
        <p className="mt-4 text-sm text-foreground/70">
          Prefer email?{" "}
          <a href={`mailto:${siteConfig.email}`} className="text-accent">
            {siteConfig.email}
          </a>
        </p>
        <ContactForm />
      </div>
    </section>
  );
}
