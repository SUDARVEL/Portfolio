"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
/** Sanjay-style sticky pill header — cinematic dark theme */
export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const links = [
    { href: "/#work", label: "Work" },
    { href: "/#about", label: "About" },
    { href: "/resume", label: "Resume" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <div
        className={`mx-auto flex max-w-5xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-5 ${
          scrolled || open
            ? "border-[rgba(32,191,234,0.22)] bg-[#071522]/88 shadow-lg backdrop-blur-md"
            : "border-[rgba(32,191,234,0.14)] bg-[#071522]/45 backdrop-blur-sm"
        }`}
      >
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#20BFEA] text-xs font-semibold text-[#041018]">
            KS
          </span>
          <span className="text-sm font-semibold tracking-wide text-[#e9e2d7]">
            SUDARVEL
          </span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#e9e2d7]/75 md:flex">
          {links.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[#e9e2d7]"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[#e9e2d7] md:hidden"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="flex w-4 flex-col gap-1">
            <span className={`block h-px bg-current transition ${open ? "translate-y-[5px] rotate-45" : ""}`} />
            <span className={`block h-px bg-current transition ${open ? "opacity-0" : ""}`} />
            <span className={`block h-px bg-current transition ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
          </span>
        </button>
      </div>

      {open ? (
        <div className="mx-auto mt-2 max-w-5xl rounded-3xl border border-border bg-[#20191e]/95 p-4 backdrop-blur-md md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-xl px-3 py-3 text-[#e9e2d7]">
                {item.label}
              </Link>
            ))}
            <Link href="/contact" className="rounded-xl px-3 py-3 text-accent">
              Contact
            </Link>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
