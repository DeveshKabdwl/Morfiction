import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeStrip } from './components/MarqueeStrip';
import { AboutSection } from './components/AboutSection';
import { ShowreelSection } from './components/ShowreelSection';
import { ClientsTrust } from './components/ClientsTrust';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { CapabilitiesMatrix } from './components/CapabilitiesMatrix';
import { PhilosophySection } from './components/PhilosophySection';
import { JourneySection } from './components/JourneySection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { InquiryModal } from './components/InquiryModal';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { Project } from './types';

export default function App() {
  const [isInquiryModalOpen, setIsInquiryModalOpen] = useState(false);
  const [inquiryCategory, setInquiryCategory] = useState<string | undefined>(undefined);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('home');

  // Track active section for navbar highlighting
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'featured-work', 'services', 'about', 'journey', 'contact-cta'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleOpenInquiry = (category?: string) => {
    setInquiryCategory(category);
    setIsInquiryModalOpen(true);
  };

  const handleSelectProject = (project: Project) => {
    setSelectedProject(project);
  };

  const handleInitiateFromProject = (projectTitle: string) => {
    handleOpenInquiry(`Campaign similar to ${projectTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#101010] text-[#F3F1EB] selection:bg-[#C7FF3E] selection:text-[#101010] font-body flex flex-col">
      {/* Navigation */}
      <Navbar
        onOpenInquiry={() => handleOpenInquiry()}
        activeSection={activeSection}
      />

      {/* Main Content Sections */}
      <main className="flex-grow flex flex-col w-full">
        {/* Section 1: Cinematic Hero */}
        <Hero onOpenInquiry={() => handleOpenInquiry()} />

        {/* Section 2: Running Marquee Strip */}
        <MarqueeStrip />

        {/* Section 3: About Morfiction & Studio Environment */}
        <AboutSection />

        {/* Section 4: Showreel & BGMI Video Reservation */}
        <ShowreelSection />

        {/* Section 5: Clients & Ecosystem Trust Strip */}
        <ClientsTrust />

        {/* Section 6: Documented Portfolio Grid (with 16:9 BGMI Creators Card) */}
        <PortfolioSection onSelectProject={handleSelectProject} />

        {/* Section 7: Core Capabilities (01 to 06) */}
        <ServicesSection onOpenInquiry={handleOpenInquiry} />

        {/* Section 8: Structured Capabilities Mapped to Verified Execution */}
        <CapabilitiesMatrix />

        {/* Section 9: Studio Philosophy (Creative in Mind. Practical on the Ground.) */}
        <PhilosophySection />

        {/* Section 10: Milestones & Evolution (Since 2017) */}
        <JourneySection />

        {/* Section 11: Final Contact & Project Brief Trigger */}
        <ContactSection onOpenInquiry={() => handleOpenInquiry()} />
      </main>

      {/* Footer */}
      <Footer onOpenInquiry={() => handleOpenInquiry()} />

      {/* Interactive Project Inquiry Modal */}
      <InquiryModal
        isOpen={isInquiryModalOpen}
        onClose={() => setIsInquiryModalOpen(false)}
        initialCategory={inquiryCategory}
      />

      {/* Case Study Dossier Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInitiateProject={handleInitiateFromProject}
      />
    </div>
  );
}
