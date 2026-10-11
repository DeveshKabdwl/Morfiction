import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const ClientsTrust: React.FC = () => {
  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-20 bg-[#121212] border-y border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 bg-[#C7FF3E] rounded-full"></span>
              <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
                VERIFIED INDUSTRY ENGAGEMENTS
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] font-bold">
              EXPERIENCE ACROSS THE GAMING ECOSYSTEM.
            </h2>
            <p className="font-body text-sm sm:text-base text-[#A4A4A4] max-w-2xl">
              Trusted by global publishers, esports titles, and hardware leaders across India, Southeast Asia and international markets.
            </p>
          </div>

          <a
            href="#featured-work"
            className="inline-flex items-center gap-1.5 font-display text-xs text-[#C7FF3E] hover:text-[#F3F1EB] transition-colors uppercase tracking-wider font-bold"
          >
            <span>View documented work</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Segmented Brand Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Segment 1: Publishers & Gaming Titles */}
          <div className="bg-[#161616] p-6 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between hover:border-[#C7FF3E]/40 transition-colors">
            <div className="flex flex-col gap-2">
              <span className="font-title text-[11px] text-[#C7FF3E] uppercase tracking-wider font-bold">
                Publishers &amp; Gaming Titles
              </span>
              <p className="font-body text-xs text-[#A4A4A4]">
                Direct publisher launches, community circuits, and official competitive formats.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#252525] mt-6">
              <div className="bg-[#101010] p-3 rounded-xl border border-[#262626]">
                <span className="font-display text-base text-[#F3F1EB] block font-bold">
                  PUBG Mobile
                </span>
                <span className="font-display text-[11px] text-[#A4A4A4]">
                  Global / BGMI Circuit
                </span>
              </div>
              <div className="bg-[#101010] p-3 rounded-xl border border-[#262626]">
                <span className="font-display text-base text-[#F3F1EB] block font-bold">
                  Point Blank
                </span>
                <span className="font-display text-[11px] text-[#A4A4A4]">
                  Publisher Title Rollout
                </span>
              </div>
            </div>
          </div>

          {/* Segment 2: Technology Brands */}
          <div className="bg-[#161616] p-6 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between hover:border-[#C7FF3E]/40 transition-colors">
            <div className="flex flex-col gap-2">
              <span className="font-title text-[11px] text-[#C7FF3E] uppercase tracking-wider font-bold">
                Technology Brands
              </span>
              <p className="font-body text-xs text-[#A4A4A4]">
                Hardware activations, college tours, and gaming experience zones.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-2 pt-6 border-t border-[#252525] mt-6">
              <div className="bg-[#101010] p-2.5 rounded-lg text-center border border-[#262626]">
                <span className="font-display text-xs text-[#F3F1EB] font-bold block">NVIDIA</span>
                <span className="font-display text-[9px] text-[#A4A4A4] block">Activations</span>
              </div>
              <div className="bg-[#101010] p-2.5 rounded-lg text-center border border-[#262626]">
                <span className="font-display text-xs text-[#F3F1EB] font-bold block">MSI</span>
                <span className="font-display text-[9px] text-[#A4A4A4] block">Campus Hubs</span>
              </div>
              <div className="bg-[#101010] p-2.5 rounded-lg text-center border border-[#262626]">
                <span className="font-display text-xs text-[#F3F1EB] font-bold block">Acer</span>
                <span className="font-display text-[9px] text-[#A4A4A4] block">Hardware</span>
              </div>
              <div className="bg-[#101010] p-2.5 rounded-lg text-center border border-[#262626]">
                <span className="font-display text-xs text-[#F3F1EB] font-bold block">AMD</span>
                <span className="font-display text-[9px] text-[#A4A4A4] block">Tech Tours</span>
              </div>
              <div className="bg-[#101010] p-2.5 rounded-lg text-center col-span-2 border border-[#262626]">
                <span className="font-display text-xs text-[#F3F1EB] font-bold block">ZOTAC</span>
                <span className="font-display text-[9px] text-[#A4A4A4] block">Campus Activations</span>
              </div>
            </div>
          </div>

          {/* Segment 3: Industry Track Record */}
          <div className="bg-[#161616] p-6 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between hover:border-[#C7FF3E]/40 transition-colors">
            <div className="flex flex-col gap-2">
              <span className="font-title text-[11px] text-[#C7FF3E] uppercase tracking-wider font-bold">
                Industry Track Record
              </span>
              <p className="font-body text-xs text-[#A4A4A4]">
                Creative, production, and ecosystem collaborations spanning campaigns.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-6 border-t border-[#252525] mt-6">
              <div className="bg-[#101010] p-3 rounded-xl border border-[#262626]">
                <span className="font-display text-base text-[#F3F1EB] block font-bold">
                  AcidTrip Arts
                </span>
                <span className="font-display text-[11px] text-[#A4A4A4]">
                  Creative Collaboration
                </span>
              </div>
              <div className="bg-[#101010] p-3 rounded-xl border border-[#262626]">
                <span className="font-display text-base text-[#F3F1EB] block font-bold">
                  Arizing Pixel
                </span>
                <span className="font-display text-[11px] text-[#A4A4A4]">
                  Production Partner
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
