import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { AdditionalExperience } from "@/components/sections/AdditionalExperience";
import { CommunityExperience } from "@/components/sections/CommunityExperience";

export const metadata: Metadata = {
  title: "Experience - Kai",
  description:
    "Kai's backend software engineering experience, with broader work across generative AI workflows, technical education, MarTech operations, community initiatives, and startup leadership.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Experience content">
        <PageHeader
          label="Experience"
          title="Engineering is the focus. The broader journey shaped how I work."
          subtitle="My core experience is in backend development and product-focused engineering, supported by a broader background in generative AI, technical education, MarTech operations, and coaching."
        />
        <ProfessionalExperience />
        <AdditionalExperience />
        <CommunityExperience />
      </main>
      <Footer />
    </>
  );
}
