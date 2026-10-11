import React, { useState } from 'react';
import { Project, ProjectCategory } from '../types';
import { VERIFIED_PROJECTS } from '../data/morfictionData';
import { BgmiCreatorCard } from './BgmiCreatorCard';
import { ArrowUpRight, Play } from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProject: (project: Project) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const filterTabs: { id: ProjectCategory; label: string }[] = [
    { id: 'all', label: 'ALL PROJECTS' },
    { id: 'esports', label: 'ESPORTS EVENTS' },
    { id: 'publisher', label: 'PUBLISHER LAUNCHES' },
    { id: 'campus', label: 'CAMPUS & COLLEGE' },
    { id: 'brand', label: 'BRAND ACTIVATIONS' },
  ];

  const handleFilterClick = (filterId: ProjectCategory) => {
    if (filterId === activeFilter) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveFilter(filterId);
      setIsTransitioning(false);
    }, 150);
  };

  const filteredProjects = VERIFIED_PROJECTS.filter((project) => {
    if (activeFilter === 'all') return true;
    return project.category === activeFilter;
  });

  return (
    <section id="featured-work" className="w-full px-4 sm:px-8 lg:px-14 py-20 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col">
        {/* ROW 1: Header Block Spanning Full Width */}
        <div className="flex flex-col gap-2 max-w-4xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#D4FF00] rounded-full animate-pulse"></span>
            <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              DOCUMENTED IMPACT / SELECTED WORK
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] mt-1 font-bold">
            SELECTED WORK. DOCUMENTED IMPACT.
          </h2>
          <p className="font-body text-sm sm:text-base text-[#A4A4A4] leading-relaxed mt-1">
            Explore documented tournament stages, publisher campaigns, campus tours, and hardware activations.
          </p>
        </div>

        {/* ROW 2: Full-Width Filter Bar with Horizontal Scrolling on Mobile */}
        <div className="w-full flex flex-col md:flex-row md:items-center justify-between border-b border-white/10 pb-4 mt-6 mb-8 gap-4">
          {/* Filter Navigation Pills (Single Inline Row, Non-Wrapping, Horizontal Swipeable on Mobile) */}
          <div className="flex flex-row flex-nowrap items-center gap-3 overflow-x-auto [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden py-1 w-full md:w-auto">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleFilterClick(tab.id)}
                  className={`shrink-0 px-4 py-2 rounded-lg font-display text-xs tracking-wider uppercase font-bold transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#D4FF00] text-[#101010] shadow-[0_0_16px_rgba(212,255,0,0.35)] scale-100'
                      : 'text-[#A4A4A4] bg-[#161616] border border-[#2B2B2B] hover:text-[#F3F1EB] hover:border-[#404040]'
                  }`}
                  aria-pressed={isActive}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Project Counter Badge Cleanly on the Far Right */}
          <div className="shrink-0 flex items-center gap-2 text-xs font-display text-[#A4A4A4] pt-1 md:pt-0">
            <span>
              SHOWING <strong className="text-[#D4FF00]">{filteredProjects.length}</strong> DOCUMENTED {activeFilter === 'all' ? 'PROJECTS' : 'ITEMS'}
            </span>
          </div>
        </div>

        {/* Animated Project Cards Grid */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-12 gap-6 transition-all duration-300 ${
            isTransitioning ? 'opacity-0 scale-[0.98]' : 'opacity-100 scale-100'
          }`}
        >
          {filteredProjects.map((project) => {
            // Render BGMI Creator Campaign card (Image Reference 2)
            if (project.id === 'bgmi-creator-campaign') {
              return (
                <BgmiCreatorCard
                  key={project.id}
                  project={project}
                  onSelectProject={onSelectProject}
                />
              );
            }

            // Render Cobx Masters Large Featured Bento Card
            if (project.id === 'cobx-masters') {
              return (
                <div
                  key={project.id}
                  onClick={() => onSelectProject(project)}
                  className="lg:col-span-12 bg-[#161616] rounded-2xl overflow-hidden flex flex-col group border border-[#2B2B2B] hover:border-[#D4FF00]/70 transition-all cursor-pointer shadow-xl"
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                    {/* Left: Main Stage Photo */}
                    <div className="lg:col-span-7 relative aspect-video lg:aspect-auto min-h-[340px] overflow-hidden bg-[#202020] border-b lg:border-b-0 lg:border-r border-[#2B2B2B]">
                      <img
                        src={project.imageUrl}
                        alt="Cobx Masters Arena stage, trophy reveal, casters and tournament champions"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        loading="lazy"
                      />
                      <div className="absolute top-4 left-4 flex items-center gap-2">
                        <span className="px-3 py-1.5 rounded bg-[#101010]/90 text-[#D4FF00] font-display text-xs backdrop-blur-md border border-[#303030] font-bold">
                          {project.categoryLabel}
                        </span>
                      </div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-2.5 py-1 rounded bg-[#101010]/90 text-[#F3F1EB] font-display text-xs border border-[#303030] backdrop-blur-sm font-semibold">
                          MUMBAI ARENA FINALS • 2019
                        </span>
                      </div>
                    </div>

                    {/* Right: Casters & Broadcast Desk Preview Frame */}
                    <div className="lg:col-span-5 relative p-6 sm:p-8 flex flex-col justify-between bg-[#141414]">
                      <div className="relative aspect-video rounded-xl overflow-hidden border border-[#2B2B2B] group/video bg-[#1a1a1a]">
                        <img
                          src={project.secondaryImageUrl || project.imageUrl}
                          alt="Cobx Masters Casters and Stage Broadcast"
                          className="w-full h-full object-cover opacity-75 group-hover/video:opacity-90 transition-opacity"
                          loading="lazy"
                        />
                        <div className="absolute inset-0 bg-[#101010]/50 flex flex-col items-center justify-center p-3 text-center">
                          <div className="w-12 h-12 rounded-full bg-[#D4FF00] text-[#101010] flex items-center justify-center mb-2 shadow-md">
                            <Play className="w-5 h-5 fill-current ml-0.5" />
                          </div>
                          <span className="font-display text-[11px] text-[#D4FF00] font-bold uppercase tracking-wider bg-[#101010]/90 px-2 py-0.5 rounded border border-[#D4FF00]/30">
                            COBX MASTERS STADIUM BROADCAST
                          </span>
                          <span className="font-body text-[11px] text-[#A4A4A4] mt-1">
                            Live caster desk &amp; stadium match feed
                          </span>
                        </div>
                      </div>

                      <div className="pt-5 flex flex-col">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-2xl lg:text-3xl text-[#F3F1EB] uppercase group-hover:text-[#D4FF00] transition-colors font-bold">
                            {project.title}
                          </h3>
                          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#D4FF00] text-[#101010] font-display text-xs font-bold uppercase tracking-wider">
                            <span>View Brief</span>
                            <ArrowUpRight className="w-3.5 h-3.5" />
                          </span>
                        </div>

                        <p className="font-body text-sm text-[#A4A4A4] mt-2">
                          {project.description}
                        </p>

                        <div className="flex items-center gap-4 pt-4 border-t border-[#252525] mt-5 font-display text-xs text-[#A4A4A4]">
                          <span className="text-[#D4FF00] font-semibold">PRIMARY ARENA STAGING</span>
                          <span>•</span>
                          <span>APRIL 2019</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }

            // Standard Project Cards (Chaos IIMA, Esports Events 2018, Cafe Events, NVIDIA)
            return (
              <div
                key={project.id}
                onClick={() => onSelectProject(project)}
                className="lg:col-span-6 bg-[#161616] rounded-2xl overflow-hidden flex flex-col group border border-[#2B2B2B] hover:border-[#D4FF00]/70 transition-all cursor-pointer shadow-xl"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#202020]">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1.5 rounded bg-[#101010]/90 text-[#D4FF00] font-display text-xs backdrop-blur-md border border-[#303030] font-bold">
                      {project.categoryLabel}
                    </span>
                  </div>
                </div>

                <div className="p-6 sm:p-7 flex flex-col justify-between flex-grow gap-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h3 className="font-display text-xl text-[#F3F1EB] uppercase group-hover:text-[#D4FF00] transition-colors font-bold">
                        {project.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs font-display text-[#D4FF00] font-bold uppercase group-hover:underline">
                        <span>View Brief</span>
                        <ArrowUpRight className="w-4 h-4" />
                      </span>
                    </div>
                    <p className="font-body text-sm text-[#A4A4A4] mt-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap items-center gap-2 pt-3 border-t border-[#252525] font-display text-xs text-[#A4A4A4]">
                    {project.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2.5 py-1 rounded bg-[#101010] text-[#D4FF00] text-[11px] border border-[#262626] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
