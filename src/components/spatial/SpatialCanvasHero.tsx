"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import { useReducedMotion } from "framer-motion";
import { siteConfig } from "@/content/site";

const SpatialCanvas = dynamic(
  () => import("@/components/spatial/SpatialCanvas").then((m) => m.SpatialCanvas),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-full w-full items-center justify-center bg-[#050B12] text-sm text-[#6f8aa0]">
        Loading design universe…
      </div>
    ),
  },
);

/**
 * AgenticUI-style scroll-driven infinite canvas hero.
 * Scroll = camera thrust through Sudarvel's floating design universe.
 */
export function SpatialCanvasHero() {
  const reduceMotion = useReducedMotion();
  const [focusTitle, setFocusTitle] = useState<string | null>(null);
  const [focusIntensity, setFocusIntensity] = useState(0);
  const [speed, setSpeed] = useState(0);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  const onFocusChange = useCallback((title: string | null, intensity: number) => {
    setFocusTitle(title);
    setFocusIntensity(intensity);
  }, []);

  const onVelocityChange = useCallback((v: number) => {
    setSpeed(v);
  }, []);

  const blur = Math.min(speed * 3.2, 6);

  return (
    <section
      className="relative h-[100svh] w-full overflow-hidden bg-[#050B12]"
      aria-label="Spatial design universe hero"
    >
      <div
        className="absolute inset-0"
        style={{
          filter: reduceMotion ? undefined : `blur(${blur * 0.15}px)`,
          transform: reduceMotion ? undefined : `scale(${1 + Math.min(speed, 1.2) * 0.012})`,
          willChange: "filter, transform",
        }}
      >
        {ready ? (
          <SpatialCanvas
            reducedMotion={!!reduceMotion}
            onFocusChange={onFocusChange}
            onVelocityChange={onVelocityChange}
          />
        ) : null}
      </div>

      {/* Volumetric haze + chromatic edge */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at 50% 35%, rgba(32,191,234,0.12), transparent 55%), radial-gradient(ellipse at 50% 100%, rgba(255,180,92,0.1), transparent 40%), linear-gradient(180deg, rgba(5,11,18,0.15) 0%, transparent 30%, rgba(5,11,18,0.55) 100%)",
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.12] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
        }}
      />

      {/* Brand / copy overlay — AgenticUI minimal chrome */}
      <div className="pointer-events-none absolute inset-x-0 top-0 z-20 flex items-start justify-between px-5 pt-24 sm:px-8">
        <div
          className="max-w-md transition-opacity duration-300"
          style={{ opacity: 1 - focusIntensity * 0.85 }}
        >
          <p className="text-xs tracking-[0.22em] text-[#20BFEA] uppercase">
            Scroll to fly
          </p>
          <h1 className="mt-3 font-[family-name:var(--font-display)] text-4xl font-semibold tracking-tight text-[#e8f4fb] sm:text-6xl">
            {siteConfig.brand}
          </h1>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-[#8eabbf] sm:text-base">
            A lone designer beneath an infinite canvas — scroll to thrust the
            camera through the work.
          </p>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 px-5 pb-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="text-center sm:text-left">
            <p className="text-[11px] tracking-[0.2em] text-[#6f8aa0] uppercase">
              {focusTitle
                ? "Approaching project"
                : `${siteConfig.greeting} · Product designer`}
            </p>
            <p
              className="mt-1 font-[family-name:var(--font-display)] text-xl text-[#e8f4fb] transition-all duration-300 sm:text-2xl"
              style={{
                opacity: focusTitle ? 0.2 + focusIntensity : 0.85,
                transform: focusTitle ? `scale(${1 + focusIntensity * 0.08})` : undefined,
              }}
            >
              {focusTitle ?? "Create > Consume · Chennai"}
            </p>
          </div>

          <div className="pointer-events-auto flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-[rgba(32,191,234,0.25)] bg-[rgba(7,21,34,0.65)] px-4 py-2 text-xs tracking-wide text-[#8eabbf] backdrop-blur-md">
              Wheel / trackpad = camera thrust
            </span>
            <Link
              href="#work"
              className="rounded-full bg-[#20BFEA] px-5 py-2.5 text-sm font-medium text-[#041018] transition hover:bg-[#7adff5]"
            >
              Enter selected work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
