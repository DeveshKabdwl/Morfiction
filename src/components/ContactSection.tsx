import React from 'react';
import { Flame, ArrowRight, CheckCircle2, Globe } from 'lucide-react';

interface ContactSectionProps {
  onOpenInquiry: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ onOpenInquiry }) => {
  return (
    <section id="contact-cta" className="w-full px-4 sm:px-8 lg:px-14 py-20 max-w-7xl mx-auto">
      <div className="relative bg-[#161616] rounded-3xl p-8 sm:p-14 lg:p-20 overflow-hidden border border-[#2B2B2B] shadow-2xl flex flex-col items-center text-center gap-8">
        {/* Glow backdrop */}
        <div className="absolute inset-0 pointer-events-none opacity-25">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem] rounded-full bg-[#C7FF3E]/20 blur-3xl"></div>
        </div>

        <div className="relative z-10 flex flex-col items-center gap-3 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#101010] border border-[#303030] w-fit">
            <span className="w-2 h-2 rounded-full bg-[#C7FF3E] animate-pulse"></span>
            <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              LET'S START THE CONVERSATION
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl tracking-tight uppercase text-[#F3F1EB] font-extrabold leading-tight">
            HAVE AN IDEA? LET'S MAKE IT HAPPEN.
          </h2>

          <p className="font-body text-base sm:text-lg text-[#A4A4A4] max-w-2xl mt-1">
            Planning a gaming campaign, esports event, campus activation or brand experience? Tell us what you're working on and let's build something unforgettable.
          </p>
        </div>

        {/* Action CTAs */}
        <div className="relative z-10 flex flex-wrap items-center justify-center gap-4">
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#D4FF00] text-[#101010] font-display text-xs uppercase font-extrabold tracking-wider hover:brightness-110 transition-all shadow-[0_0_24px_rgba(212,255,0,0.35)] hover:-translate-y-0.5 cursor-pointer"
          >
            <Flame className="w-4 h-4" />
            <span>START A PROJECT</span>
          </button>

          <a
            href="#featured-work"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded bg-[#101010] border border-[#303030] text-[#F3F1EB] font-display text-xs uppercase font-bold tracking-wider hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Factual Ecosystem Signals */}
        <div className="relative z-10 pt-4 flex flex-wrap items-center justify-center gap-6 font-display text-xs text-[#A4A4A4]">
          <span className="flex items-center gap-1.5">
            <CheckCircle2 className="w-4 h-4 text-[#D4FF00]" />
            <span>DIRECT ECOSYSTEM PARTNER</span>
          </span>
          <span className="hidden sm:inline text-[#353535]">•</span>
          <span className="flex items-center gap-1.5">
            <Globe className="w-4 h-4 text-[#D4FF00]" />
            <span>ACTIVE: INDIA • SOUTHEAST ASIA • BRAZIL</span>
          </span>
        </div>
      </div>
    </section>
  );
};
