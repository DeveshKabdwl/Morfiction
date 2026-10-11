import React from 'react';
import { ArrowRight, Flame, Globe2, ChevronDown, Trophy, Users, Sparkles } from 'lucide-react';

interface HeroProps {
  onOpenInquiry: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenInquiry }) => {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden px-4 sm:px-8 lg:px-14 pt-28 pb-16 min-h-[840px] flex flex-col justify-between bg-[radial-gradient(ellipse_80%_80%_at_50%_-15%,rgba(199,255,62,0.12),rgba(16,16,16,0))]"
    >
      {/* Background Ambience Grid & Glow */}
      <div className="absolute inset-0 pointer-events-none opacity-20">
        <div className="absolute top-1/4 -left-32 w-96 h-96 rounded-full bg-[#C7FF3E]/15 blur-3xl"></div>
        <div className="absolute bottom-10 right-0 w-[36rem] h-[36rem] rounded-full bg-[#202020]/60 blur-3xl"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,#000_70%,transparent_100%)]"></div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto w-full my-auto flex flex-col gap-8">
        {/* Eyebrow Pill */}
        <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-[#191919] border border-[#303030] w-fit shadow-sm">
          <span className="w-2 h-2 rounded-full bg-[#C7FF3E] animate-pulse"></span>
          <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
            GAMING GROWTH &amp; DISTRIBUTION PARTNER | EST. 2017
          </span>
        </div>

        {/* Monumental Display Title */}
        <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl xl:text-8xl tracking-tighter text-[#F3F1EB] uppercase leading-[1.05] font-extrabold">
          WE HELP GAMING BRANDS{' '}
          <span className="text-[#D4FF00] drop-shadow-[0_0_28px_rgba(212,255,0,0.45)]">
            GROW.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="font-body text-base sm:text-lg lg:text-xl text-[#A4A4A4] max-w-3xl font-normal leading-relaxed">
          Since 2017, Morfiction has helped gaming publishers, esports organisations and technology brands connect with players through publisher launches, esports tournaments, campus activations, creator campaigns and community programs.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <a
            href="#featured-work"
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-[#D4FF00] text-[#101010] font-display text-xs uppercase font-extrabold tracking-wider hover:brightness-110 transition-all shadow-[0_0_24px_rgba(212,255,0,0.35)] hover:-translate-y-0.5"
          >
            <span>EXPLORE OUR WORK</span>
            <ArrowRight className="w-4 h-4" />
          </a>
          <button
            onClick={onOpenInquiry}
            className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded bg-transparent border border-[#353535] text-[#F3F1EB] font-display text-xs uppercase font-bold tracking-wider hover:border-[#D4FF00] hover:text-[#D4FF00] transition-all cursor-pointer hover:bg-[#191919]"
          >
            <Flame className="w-4 h-4 text-[#D4FF00]" />
            <span>START A PROJECT</span>
          </button>
        </div>

        {/* Factual Metrics HUD Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-6 border-t border-[#252525]">
          <div className="bg-[#151515] p-3.5 rounded border border-[#2A2A2A]">
            <div className="flex items-center gap-2 text-[#C7FF3E] mb-1">
              <Trophy className="w-4 h-4" />
              <span className="font-display font-bold text-xl sm:text-2xl text-[#F3F1EB]">2017</span>
            </div>
            <span className="font-title text-[10px] uppercase text-[#A4A4A4] tracking-wider block font-semibold">
              Established Heritage
            </span>
          </div>

          <div className="bg-[#151515] p-3.5 rounded border border-[#2A2A2A]">
            <div className="flex items-center gap-2 text-[#C7FF3E] mb-1">
              <Users className="w-4 h-4" />
              <span className="font-display font-bold text-xl sm:text-2xl text-[#F3F1EB]">100+</span>
            </div>
            <span className="font-title text-[10px] uppercase text-[#A4A4A4] tracking-wider block font-semibold">
              Arena &amp; Campus Stages
            </span>
          </div>

          <div className="bg-[#151515] p-3.5 rounded border border-[#2A2A2A]">
            <div className="flex items-center gap-2 text-[#C7FF3E] mb-1">
              <Sparkles className="w-4 h-4" />
              <span className="font-display font-bold text-xl sm:text-2xl text-[#F3F1EB]">50M+</span>
            </div>
            <span className="font-title text-[10px] uppercase text-[#A4A4A4] tracking-wider block font-semibold">
              Organic Campaign Reach
            </span>
          </div>

          <div className="bg-[#151515] p-3.5 rounded border border-[#2A2A2A]">
            <div className="flex items-center gap-2 text-[#C7FF3E] mb-1">
              <Globe2 className="w-4 h-4" />
              <span className="font-display font-bold text-xl sm:text-2xl text-[#F3F1EB]">3 Reg.</span>
            </div>
            <span className="font-title text-[10px] uppercase text-[#A4A4A4] tracking-wider block font-semibold">
              India • SEA • Brazil
            </span>
          </div>
        </div>
      </div>

      {/* Live HUD Bottom Bar */}
      <div className="relative z-10 max-w-6xl mx-auto w-full pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-[#A4A4A4] border-t border-[#252525]">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 font-display text-xs">
            <span className="w-2 h-2 rounded-full bg-[#C7FF3E] animate-ping"></span>
            <span className="uppercase tracking-wider font-semibold text-[#F3F1EB]">
              ECOSYSTEM FOOTPRINT: ACTIVE
            </span>
          </div>
          <span className="text-[#353535]">/</span>
          <span className="font-display text-xs uppercase tracking-wider text-[#C7FF3E]">
            INDIA • SOUTHEAST ASIA • BRAZIL
          </span>
        </div>

        <a
          href="#featured-work"
          className="inline-flex items-center gap-1.5 font-display text-xs text-[#A4A4A4] hover:text-[#C7FF3E] transition-colors group uppercase tracking-wider font-medium"
        >
          <span>Scroll to Documented Work</span>
          <ChevronDown className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform" />
        </a>
      </div>
    </section>
  );
};
