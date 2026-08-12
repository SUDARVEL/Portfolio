import { AboutCraft } from "@/components/AboutCraft";
import { CinematicHero } from "@/components/CinematicHero";
import { ClosingCta } from "@/components/ClosingCta";
import { ExperienceStrip } from "@/components/ExperienceStrip";
import { SelectedWork } from "@/components/SelectedWork";
import { projects } from "@/content/site";

export default function HomePage() {
  return (
    <>
      <CinematicHero />
      <SelectedWork projects={projects} />
      <ExperienceStrip />
      <AboutCraft />
      <ClosingCta />
    </>
  );
}
