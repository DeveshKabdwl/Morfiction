import React, { useState } from 'react';
import { Project } from '../types';
import { X, Calendar, MapPin, Tag, ArrowRight, ShieldCheck, CheckCircle2, Users, Play, Image as ImageIcon } from 'lucide-react';
import bgmiArtwork from '../assets/MorfictionServices.jpg';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onInitiateProject: (projectTitle: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onInitiateProject,
}) => {
  const [activeMediaTab, setActiveMediaTab] = useState<'artwork' | 'video'>('video');

  if (!project) return null;

  const hasVideo = !!project.youtubeVideoId;
  const youtubeEmbedUrl = project.youtubeVideoId
    ? `https://www.youtube.com/embed/${project.youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`
    : '';

  return (
    <div className="fixed inset-0 z-50 bg-[#101010]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#161616] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl my-8 max-h-[92vh] flex flex-col">
        {/* Header Bar */}
        <div className="p-4 sm:p-5 border-b border-[#2B2B2B] flex items-center justify-between bg-[#121212]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00]"></span>
            <div>
              <span className="font-title text-[10px] text-[#D4FF00] uppercase tracking-wider font-bold block">
                {project.categoryLabel}
              </span>
              <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-[#F3F1EB]">
                {project.title}
              </h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#191919] text-[#A4A4A4] hover:text-[#F3F1EB] border border-[#303030] transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex flex-col gap-6">
          {/* Media Header Controls (if project has embedded video) */}
          {hasVideo && (
            <div className="flex items-center justify-between">
              <span className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider font-bold">
                Project Media Preview
              </span>
              <div className="flex items-center gap-1.5 bg-[#121212] p-1 rounded-lg border border-[#2B2B2B]">
                <button
                  type="button"
                  onClick={() => setActiveMediaTab('video')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-display font-bold uppercase transition-colors cursor-pointer ${
                    activeMediaTab === 'video'
                      ? 'bg-[#D4FF00] text-[#101010]'
                      : 'text-[#A4A4A4] hover:text-[#F3F1EB]'
                  }`}
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Campaign Video</span>
                </button>
                <button
                  type="button"
                  onClick={() => setActiveMediaTab('artwork')}
                  className={`flex items-center gap-1.5 px-3 py-1 rounded text-xs font-display font-bold uppercase transition-colors cursor-pointer ${
                    activeMediaTab === 'artwork'
                      ? 'bg-[#D4FF00] text-[#101010]'
                      : 'text-[#A4A4A4] hover:text-[#F3F1EB]'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  <span>Key Visual Artwork</span>
                </button>
              </div>
            </div>
          )}

          {/* Main Visual or Video Container */}
          <div className="relative aspect-video w-full rounded-xl overflow-hidden bg-[#0a0a0a] border border-[#2B2B2B]">
            {hasVideo && activeMediaTab === 'video' ? (
              <iframe
                src={youtubeEmbedUrl}
                title={`${project.title} Video Preview`}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
            ) : (
              <>
                <img
                  src={project.isCreatorProject ? bgmiArtwork : project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-contain bg-[#0a0a0a]"
                  onError={(e) => {
                    if (project.isCreatorProject) {
                      const target = e.currentTarget;
                      if (!target.dataset.triedFallback) {
                        target.dataset.triedFallback = 'true';
                        target.src = '/Morfiction%20Services.jpg';
                      }
                    }
                  }}
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1.5 rounded bg-[#101010]/90 text-[#D4FF00] font-display text-xs backdrop-blur-md border border-[#303030] font-bold">
                    DOCUMENTED ARCHIVE • {project.date}
                  </span>
                </div>
              </>
            )}
          </div>

          {/* BGMI Specific 16 Creators Highlight Box */}
          {project.isCreatorProject && (
            <div className="p-4 sm:p-5 bg-[#121212] border border-[#D4FF00]/40 rounded-xl flex flex-col gap-3.5 shadow-md">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2 text-[#D4FF00]">
                  <Users className="w-4 h-4" />
                  <span className="font-title text-[11px] uppercase tracking-wider font-bold">
                    16 Featured Creators • Headline Marquee Leads
                  </span>
                </div>
                <span className="px-2.5 py-0.5 rounded bg-[#191919] text-[#D4FF00] text-[10px] font-display border border-[#303030] font-bold">
                  KRAFTON BGMI ECOSYSTEM
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                <div className="p-2.5 bg-[#181818] rounded-lg border border-[#2b2b2b]">
                  <span className="font-display font-bold text-xs text-[#F3F1EB] block">Snax</span>
                  <span className="text-[10px] text-[#A4A4A4]">Sniper &amp; Streamer</span>
                </div>
                <div className="p-2.5 bg-[#181818] rounded-lg border border-[#2b2b2b]">
                  <span className="font-display font-bold text-xs text-[#F3F1EB] block">Sangwan</span>
                  <span className="text-[10px] text-[#A4A4A4]">Veteran IGL &amp; Caster</span>
                </div>
                <div className="p-2.5 bg-[#181818] rounded-lg border border-[#2b2b2b]">
                  <span className="font-display font-bold text-xs text-[#F3F1EB] block">Shreeman Legend</span>
                  <span className="text-[10px] text-[#A4A4A4]">Gaming Entertainer</span>
                </div>
                <div className="p-2.5 bg-[#181818] rounded-lg border border-[#2b2b2b]">
                  <span className="font-display font-bold text-xs text-[#F3F1EB] block">Jonathan</span>
                  <span className="text-[10px] text-[#A4A4A4]">Premier BGMI Fragger</span>
                </div>
              </div>

              <p className="text-[11px] font-body text-[#A4A4A4] pt-1 border-t border-[#222222]">
                Plus 12 prominent creator partners across India engaged across coordinated live stream showmatches, custom room tournaments, and official day-one title launch broadcasts.
              </p>
            </div>
          )}

          {/* Description & Metrics Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 flex flex-col gap-4">
              <h4 className="font-display text-lg text-[#F3F1EB] font-bold uppercase">
                Campaign &amp; Execution Overview
              </h4>
              <p className="font-body text-sm text-[#A4A4A4] leading-relaxed">
                {project.description}
              </p>

              <div className="pt-2 flex flex-col gap-2.5">
                <span className="font-title text-[10px] text-[#D4FF00] uppercase tracking-wider font-bold">
                  Documented Milestones &amp; Deliverables
                </span>
                {project.fullDossier.map((point, index) => (
                  <div key={index} className="flex items-start gap-2.5 text-xs text-[#F3F1EB]">
                    <CheckCircle2 className="w-4 h-4 text-[#D4FF00] shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Metrics column */}
            <div className="bg-[#121212] p-5 rounded-xl border border-[#2B2B2B] flex flex-col justify-between gap-4">
              <div className="flex flex-col gap-3">
                <span className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider font-bold">
                  Project Dossier
                </span>
                {project.metrics?.map((m, idx) => (
                  <div key={idx} className="pb-2 border-b border-[#252525]">
                    <span className="text-[10px] font-title uppercase text-[#A4A4A4] block">
                      {m.label}
                    </span>
                    <span className="font-display text-xs sm:text-sm text-[#F3F1EB] font-bold">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2">
                {project.tags.map((t, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded bg-[#191919] text-[10px] font-display text-[#D4FF00] border border-[#2B2B2B]"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Bottom CTA */}
        <div className="p-4 sm:p-5 bg-[#121212] border-t border-[#2B2B2B] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-display text-[#A4A4A4]">
            <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
            <span>Morfiction Documented Track Record (Est. 2017)</span>
          </div>

          <button
            onClick={() => {
              onClose();
              onInitiateProject(project.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded bg-[#D4FF00] text-[#101010] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_15px_rgba(212,255,0,0.3)]"
          >
            <span>Plan Similar Campaign</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
