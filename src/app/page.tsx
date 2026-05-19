import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { PersonalProjects } from "@/components/sections/PersonalProjects";
import { ProfessionalExperience } from "@/components/sections/ProfessionalExperience";
import { WorkStyle } from "@/components/sections/WorkStyle";
import { Contact } from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <Navbar />
      <main id="main-content" aria-label="Portfolio content">
        <Hero />
        <About />
        <Skills />
        <PersonalProjects />
        <ProfessionalExperience />
        <WorkStyle />
        <Contact />
      </main>
      <Footer />
    </>
  );
}