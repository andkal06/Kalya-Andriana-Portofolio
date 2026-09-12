import React from 'react';
import { SkyBackground } from './components/SkyBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { EducationSection } from './components/EducationSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ProjectsSection } from './components/ProjectsSection';
import { SkillsSection } from './components/SkillsSection';
import { Contact } from './components/Contact';
import { SectionDivider } from './components/SectionDivider';

export default function App() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#C266A7]/40 selection:text-[#1C1E26]">
      {/* Dynamic Multi-stop Sunset & Twilight Sky Backdrop with Grain and Drifting Clouds */}
      <SkyBackground />

      {/* Fixed Frosted Glass Top Navigation */}
      <Navbar onNavigate={scrollToSection} />

      {/* Main Content Flow with Atmospheric Transitions */}
      <main className="relative z-10 pt-4 pb-12">
        <Hero onNavigate={scrollToSection} />
        <SectionDivider />
        <About />
        <SectionDivider />
        <EducationSection />
        <SectionDivider />
        <ExperienceSection />
        <SectionDivider />
        <ProjectsSection />
        <SectionDivider />
        <SkillsSection />
        <SectionDivider />
        <Contact />
      </main>
    </div>
  );
}
