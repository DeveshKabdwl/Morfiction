import React from 'react';
import { CORE_CAPABILITIES } from '../data/morfictionData';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

interface ServicesSectionProps {
  onOpenInquiry: (category?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="services" className="w-full px-4 sm:px-8 lg:px-14 py-20 bg-[#121212] border-y border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C7FF3E] rounded-full"></span>
            <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              CORE CAPABILITIES
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] font-bold">
            EXPERTISE ACROSS THE GAMING LIFECYCLE.
          </h2>
          <p className="font-body text-sm sm:text-base text-[#A4A4A4] mt-1">
            Six foundational areas documented from company operations, publisher partnerships, and live execution across India and international markets.
          </p>
        </div>

        {/* 6 Clean Capability Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CORE_CAPABILITIES.map((cap) => (
            <div
              key={cap.number}
              className="bg-[#161616] p-7 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between hover:border-[#C7FF3E]/70 transition-all group shadow-lg"
            >
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                  <span className="font-display text-3xl sm:text-4xl text-[#C7FF3E] font-extrabold">
                    {cap.number}
                  </span>
                  <button
                    onClick={() => onOpenInquiry(cap.title)}
                    className="opacity-0 group-hover:opacity-100 transition-opacity p-2 rounded-lg bg-[#202020] hover:bg-[#C7FF3E] hover:text-[#101010] text-[#C7FF3E] cursor-pointer"
                    title={`Inquire about ${cap.title}`}
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                <h3 className="font-display text-xl uppercase text-[#F3F1EB] group-hover:text-[#C7FF3E] transition-colors font-bold leading-snug">
                  {cap.title}
                </h3>

                <p className="font-body text-sm text-[#A4A4A4] leading-relaxed">
                  {cap.description}
                </p>

                {/* Key Deliverables Bullet Points */}
                <div className="pt-2 flex flex-col gap-2">
                  {cap.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs font-body text-[#D4D2CD]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#C7FF3E] shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-5 border-t border-[#252525] mt-6 font-display text-xs text-[#A4A4A4]">
                {cap.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-1 rounded bg-[#101010] text-[11px] text-[#F3F1EB] border border-[#282828]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
