import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHeader } from "@/components/ui/PageHeader";
import { AdditionalExperience } from "@/components/sections/AdditionalExperience";
import { CommunityExperience } from "@/components/sections/CommunityExperience";
import { Education } from "@/components/sections/Education";

export const metadata: Metadata = {
  title: "Experience - Kai",
  description:
    "Kai's professional experience in full-stack engineering, AI automation, generative AI production, volunteering and community leadership.",
};

export default function ExperiencePage() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Experience content">
        <PageHeader
          label="Experience"
          title="Software engineering and AI automation."
          subtitle="Professional experience across software engineering, AI automation, creative technology, education and operations."
        />
        <AdditionalExperience />
        <CommunityExperience />
        <Education />
      </main>
      <Footer />
    </>
  );
}
