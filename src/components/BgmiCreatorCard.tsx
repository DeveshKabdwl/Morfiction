import React, { useState } from 'react';
import { ArrowUpRight, ShieldCheck, Users, Trophy, Play, X, Maximize2, Sparkles } from 'lucide-react';
import { Project } from '../types';
import bgmiArtwork from '../assets/MorfictionServices.jpg';

interface BgmiCreatorCardProps {
  project: Project;
  onSelectProject: (project: Project) => void;
}

export const BgmiCreatorCard: React.FC<BgmiCreatorCardProps> = ({ project, onSelectProject }) => {
  const [imgSrc, setImgSrc] = useState<string>(bgmiArtwork);
  const [failedCount, setFailedCount] = useState<number>(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState<boolean>(false);

  const youtubeVideoId = project.youtubeVideoId || 'zRmWCTV87D8';
  const youtubeEmbedUrl = `https://www.youtube.com/embed/${youtubeVideoId}?autoplay=1&rel=0&modestbranding=1`;

  const fallbackCandidates = [
    bgmiArtwork,
    '/Morfiction%20Services.jpg',
    '/Morfiction Services.jpg',
    '/morfiction-services.jpg',
    '/Morfiction%20Services.jpeg',
    '/Morfiction Services.jpeg',
    '/bgmi-creators.jpg',
  ];

  const handleImageError = () => {
    const nextIndex = failedCount + 1;
    if (nextIndex < fallbackCandidates.length) {
      setImgSrc(fallbackCandidates[nextIndex]);
      setFailedCount(nextIndex);
    }
  };

  return (
    <>
      <div className="lg:col-span-12 bg-[#161616] rounded-2xl overflow-hidden flex flex-col group border border-[#2B2B2B] hover:border-[#D4FF00]/70 transition-all shadow-xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
          {/* Left: Genuine Photographic Artwork with Background Cover and Play Button Overlay */}
          <div
            onClick={() => setIsVideoModalOpen(true)}
            style={{
              backgroundImage: `url(${bgmiArtwork})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
            className="lg:col-span-7 relative aspect-video bg-[#0a0a0a] overflow-hidden border-b lg:border-b-0 lg:border-r border-[#2B2B2B] flex items-center justify-center cursor-pointer group/thumb"
          >
            <img
              src={imgSrc}
              alt="BGMI Creator Campaigns featuring Snax, Sangwan, Shreeman Legend, and Jonathan - Battlegrounds Mobile India"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.01]"
              onError={handleImageError}
              loading="eager"
            />

            {/* Subtle Gradient & Hover Dimmer */}
            <div className="absolute inset-0 bg-black/25 group-hover/thumb:bg-black/40 transition-colors pointer-events-none"></div>

            {/* Center Play Button Overlay for Instant Video Launch */}
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 pointer-events-none">
              <button
                type="button"
                aria-label="Play BGMI Campaign Launch Video"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#D4FF00] text-[#101010] flex items-center justify-center shadow-[0_0_32px_rgba(212,255,0,0.6)] group-hover/thumb:scale-110 transition-transform duration-300"
              >
                <Play className="w-7 h-7 sm:w-9 sm:h-9 fill-current ml-1" />
              </button>
              <span className="px-2.5 py-1 rounded bg-[#101010]/95 text-[#D4FF00] font-display text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md border border-[#D4FF00]/40 shadow-md">
                WATCH BGMI LAUNCH VIDEO
              </span>
            </div>

            {/* Top Overlays */}
            <div className="absolute top-3 left-3 sm:top-4 sm:left-4 flex flex-wrap items-center gap-2 pointer-events-none">
              <span className="px-2.5 sm:px-3 py-1 rounded bg-[#101010]/95 text-[#D4FF00] font-display text-[11px] sm:text-xs backdrop-blur-md border border-[#303030] font-bold shadow-md">
                FEATURED PUBLISHER ROLLOUT
              </span>
            </div>

            {/* Bottom Overlays */}
            <div className="absolute bottom-3 left-3 right-3 sm:bottom-4 sm:left-4 sm:right-4 flex items-center justify-between pointer-events-none">
              <span className="px-2.5 py-1 rounded bg-[#101010]/95 text-[#F3F1EB] font-title text-[9px] sm:text-[10px] tracking-wider uppercase border border-[#303030] backdrop-blur-sm font-semibold shadow-md">
                SNAX • SANGWAN • SHREEMAN LEGEND • JONATHAN
              </span>
              <span className="px-2 py-0.5 rounded bg-[#101010]/95 text-[#D4FF00] font-display text-[9px] sm:text-[10px] border border-[#D4FF00]/30 font-bold backdrop-blur-sm shadow-md">
                16 CREATORS • KRAFTON ECOSYSTEM
              </span>
            </div>
          </div>

          {/* Right: Campaign Description & Working View Brief CTA */}
          <div className="lg:col-span-5 p-6 lg:p-8 flex flex-col justify-between bg-[#141414]">
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center justify-between">
                <span className="font-title text-[10px] text-[#D4FF00] uppercase tracking-widest font-bold">
                  FEATURED PUBLISHER ROLLOUT
                </span>
                <span className="font-display text-xs text-[#A4A4A4]">
                  JULY 2021
                </span>
              </div>

              <h3 className="font-display text-2xl lg:text-3xl text-[#F3F1EB] uppercase font-bold group-hover:text-[#D4FF00] transition-colors leading-tight">
                BGMI Creator Campaigns
              </h3>

              {/* Exact Requested Card Description */}
              <p className="font-body text-sm text-[#A4A4A4] leading-relaxed">
                Headline title rollout activation for Battlegrounds Mobile India (BGMI) engaging a total of 16 prominent gaming creators, featuring Snax, Sangwan, Shreeman Legend, and Jonathan.
              </p>

              {/* Factual Highlights Box with Updated 16 Featured Creators Badge */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                <div className="p-3 bg-[#101010] rounded-xl border border-[#262626]">
                  <div className="flex items-center gap-1.5 text-xs font-display text-[#F3F1EB] font-bold">
                    <Users className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>16 Featured Creators</span>
                  </div>
                  <span className="text-[10px] text-[#A4A4A4] block mt-1 font-body">
                    Headline talent: Snax, Sangwan, Shreeman, Jonathan
                  </span>
                </div>

                <div className="p-3 bg-[#101010] rounded-xl border border-[#262626]">
                  <div className="flex items-center gap-1.5 text-xs font-display text-[#F3F1EB] font-bold">
                    <Trophy className="w-3.5 h-3.5 text-[#D4FF00]" />
                    <span>Krafton Ecosystem</span>
                  </div>
                  <span className="text-[10px] text-[#A4A4A4] block mt-1 font-body">
                    Ecosystem campaign &amp; launch production
                  </span>
                </div>
              </div>
            </div>

            {/* Actions: Watch Video + Working View Brief Button */}
            <div className="pt-5 border-t border-[#252525] mt-5 flex flex-wrap items-center justify-between gap-3">
              <button
                type="button"
                onClick={() => setIsVideoModalOpen(true)}
                className="inline-flex items-center gap-1.5 text-xs font-display text-[#D4FF00] hover:underline font-bold uppercase cursor-pointer"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Watch Campaign Video</span>
              </button>

              <button
                type="button"
                onClick={() => onSelectProject(project)}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#D4FF00] text-[#101010] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_18px_rgba(212,255,0,0.3)] hover:-translate-y-0.5"
              >
                <span>View Brief</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Embedded 16:9 YouTube Video Lightbox Modal for BGMI Campaign */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 bg-[#0a0a0a]/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-8 animate-in fade-in duration-200">
          <div className="relative w-full max-w-5xl bg-[#141414] border border-[#2B2B2B] rounded-2xl overflow-hidden shadow-2xl flex flex-col">
            {/* Header */}
            <div className="p-4 sm:p-5 border-b border-[#2B2B2B] flex items-center justify-between bg-[#101010]">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
                <div>
                  <h3 className="font-display font-bold text-base sm:text-lg text-[#F3F1EB] uppercase tracking-wide">
                    Battlegrounds Mobile India • 16-Creator Launch Campaign
                  </h3>
                  <p className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider">
                    Official Publisher Campaign Video • Krafton Ecosystem
                  </p>
                </div>
              </div>

              <button
                onClick={() => setIsVideoModalOpen(false)}
                className="p-2 rounded-lg bg-[#191919] text-[#A4A4A4] hover:text-[#F3F1EB] border border-[#303030] transition-colors cursor-pointer"
                aria-label="Close video modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Responsive 16:9 YouTube iFrame Embed */}
            <div className="relative aspect-video w-full bg-[#000000]">
              <iframe
                src={youtubeEmbedUrl}
                title="BGMI Creator Campaign Launch Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full border-0 absolute inset-0"
              />
            </div>

            {/* Lightbox Footer Bar */}
            <div className="p-4 bg-[#101010] border-t border-[#2B2B2B] flex flex-col sm:flex-row items-center justify-between gap-3 text-xs font-display text-[#A4A4A4]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#D4FF00]" />
                <span>KRAFTON PUBLISHER EXECUTION • 16 CREATORS ROLLOUT</span>
              </div>
              <button
                type="button"
                onClick={() => {
                  setIsVideoModalOpen(false);
                  onSelectProject(project);
                }}
                className="text-[#D4FF00] hover:underline font-bold uppercase tracking-wider cursor-pointer"
              >
                Read Full Campaign Brief &amp; Metrics →
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
