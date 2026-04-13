import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { AboutSection } from "@/components/AboutSection";
import { ProjectsSection } from "@/components/ProjectsSection";
import { ContactFooter } from "@/components/ContactFooter";

export default function Home() {
  return (
    <main className="min-h-screen bg-background relative selection:bg-primary/30">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <ContactFooter />
    </main>
  );
}
