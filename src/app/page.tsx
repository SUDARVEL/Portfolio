import { AboutCraft } from "@/components/AboutCraft";
import { CinematicHero } from "@/components/CinematicHero";
import { ClosingCta } from "@/components/ClosingCta";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { WhatIDo } from "@/components/WhatIDo";

/** Sanjay home order: Hero → What I do → Work → About → Experience → CTA */
export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <WhatIDo />
      <SelectedWork />
      <AboutCraft />
      <ExperienceStrip />
      <ClosingCta />
    </>
  );
}
