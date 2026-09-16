import React from 'react';
import { SkyBackground } from './components/SkyBackground';
import { Sidebar } from './components/Sidebar';
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
      // Offset scroll by mobile top bar height if on small screens
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        const yOffset = -72;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      } else {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div className="relative min-h-screen selection:bg-[#C266A7]/40 selection:text-[#1C1E26]">
      {/* Dynamic Multi-stop Sunset & Twilight Sky Backdrop with Grain and Drifting Clouds */}
      <SkyBackground />

      {/* Fixed Frosted Glass Vertical Sidebar (240px) & Mobile Header */}
      <Sidebar onNavigate={scrollToSection} />

      {/* Main Content Area with exact 240px margin-left and 2rem 4rem padding */}
      <main className="relative z-10 pt-20 lg:pt-0 lg:ml-[240px] transition-all duration-300">
        <div className="w-full px-5 sm:px-8 md:px-12 lg:px-16 py-6 sm:py-8 lg:py-10 max-w-[1400px] mx-auto space-y-6">
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
        </div>
      </main>
    </div>
  );
}
