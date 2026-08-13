import { AboutCraft } from "@/components/AboutCraft";
import { ClosingCta } from "@/components/ClosingCta";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { WhatIDo } from "@/components/WhatIDo";
import { SpatialCanvasHero } from "@/components/spatial/SpatialCanvasHero";

/** Spatial infinite-canvas hero → Sanjay hiring structure below */
export default function HomePage() {
  return (
    <>
      <SpatialCanvasHero />
      <WhatIDo />
      <SelectedWork />
      <AboutCraft />
      <ExperienceStrip />
      <ClosingCta />
    </>
  );
}
