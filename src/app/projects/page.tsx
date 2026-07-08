import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { PersonalProjects } from "@/components/sections/PersonalProjects";

export const metadata: Metadata = {
  title: "Projects - Kai",
  description:
    "Product-focused software projects by Kai, including backend APIs, full-stack applications, browser extensions, and technical builds.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Projects content">
        <PageHeader
          label="Projects"
          title="Things I've built independently."
          subtitle="Product-focused applications and technical builds that show how I approach architecture, problem solving, and shipping ideas end to end."
        />
        <PersonalProjects />
      </main>
      <Footer />
    </>
  );
}
