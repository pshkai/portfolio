import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { AdditionalExperience } from "@/components/sections/AdditionalExperience";
import { CommunityExperience } from "@/components/sections/CommunityExperience";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Experience - Kai",
  description:
    "Kai's full-stack and AI automation work at AitsCCTV, commercial backend development, generative AI production and broader professional experience.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Experience content">
        <PageHeader
          label="Experience"
          title="Software engineering and AI automation."
          subtitle="Current work at AitsCCTV, earlier commercial backend projects and a broader background in creative technology, education and operations."
        />
        <AdditionalExperience />
        <ProfessionalExperience />
        <CommunityExperience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
