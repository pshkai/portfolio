import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";

export const metadata: Metadata = {
  title: "Projects - Kai",
  description:
    "Full-stack projects and AitsCCTV case studies by Kai: LINE automation, marketing intelligence, a Next.js rebuild, floor-plan prototyping and independent applications.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Projects content">
        <PageHeader
          label="Projects"
          title="Projects and case studies."
          subtitle="Full-stack products, AI workflows and prototypes, with the implementation and current status of each project."
        />
        <PersonalProjects />
        <ProfessionalExperience />
      </main>
      <Footer />
    </>
  );
}
