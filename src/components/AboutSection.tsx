import React from 'react';
import { Globe, ArrowRight, ShieldCheck, Zap } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="w-full px-4 sm:px-8 lg:px-14 py-20 lg:py-24 max-w-7xl mx-auto scroll-mt-20">
      <div className="flex flex-col gap-10 lg:gap-12">
        {/* Full-Width Section Header */}
        <div className="flex flex-col gap-3.5 max-w-5xl">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-[#D4FF00] rounded-full animate-pulse"></span>
            <span className="font-title text-[10px] sm:text-[11px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              ABOUT MORFICTION
            </span>
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl xl:text-6xl tracking-tight uppercase text-[#F3F1EB] font-extrabold leading-[1.1]">
            NOT JUST AN EVENT. AN EXPERIENCE BUILT AROUND GAMING CULTURE.
          </h2>
        </div>

        {/* Balanced 2-Column Content Row Below Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          {/* Left Side: Copy & Highlights */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-6">
            <div className="flex flex-col gap-5">
              {/* Main Narrative Paragraph */}
              <p className="font-body text-base lg:text-lg text-[#A4A4A4] leading-relaxed">
                For nearly a decade, Morfiction has worked across the gaming ecosystem, helping publishers and technology brands grow through esports, creators, community programs and large-scale activations. Our experience spans publisher launches, competitive events, campus activations, brand partnerships and gaming commerce.
              </p>

              {/* Verified Documented Footprint Badge */}
              <div className="p-4 sm:p-5 bg-[#161616] border border-[#2B2B2B] rounded-xl flex items-start gap-4 shadow-lg hover:border-[#D4FF00]/40 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-[#D4FF00]/10 border border-[#D4FF00]/30 flex items-center justify-center shrink-0 text-[#D4FF00] mt-0.5">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="flex flex-col gap-1">
                  <span className="font-title text-[10px] sm:text-[11px] uppercase text-[#D4FF00] tracking-wider font-bold">
                    DOCUMENTED MARKET FOOTPRINT
                  </span>
                  <span className="font-body text-xs sm:text-sm text-[#F3F1EB] leading-relaxed">
                    Active execution experience across India and Southeast Asia, with selected campaigns in Brazil.
                  </span>
                </div>
              </div>

              {/* Key Trust Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#141414] border border-[#252525] text-xs font-display text-[#E5E2E1]">
                  <ShieldCheck className="w-4 h-4 text-[#D4FF00] shrink-0" />
                  <span>Direct Publisher Integration</span>
                </div>
                <div className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg bg-[#141414] border border-[#252525] text-xs font-display text-[#E5E2E1]">
                  <Zap className="w-4 h-4 text-[#D4FF00] shrink-0" />
                  <span>On-Ground Stage Rigor</span>
                </div>
              </div>
            </div>

            {/* CTA Link */}
            <div className="pt-2">
              <a
                href="#journey"
                className="inline-flex items-center gap-2 font-display text-xs sm:text-sm uppercase tracking-wider text-[#D4FF00] hover:text-[#F3F1EB] transition-colors group font-bold"
              >
                <span>EXPLORE OUR HISTORY SINCE 2017</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right Side: Featured Image Asset (Cleanly Aligned with Text Block) */}
          <div className="lg:col-span-6 flex flex-col">
            <div className="relative w-full h-full min-h-[320px] lg:min-h-[380px] bg-[#161616] rounded-2xl overflow-hidden p-2.5 border border-[#2B2B2B] group shadow-2xl flex flex-col justify-between">
              <div className="relative w-full h-full min-h-[300px] overflow-hidden rounded-xl bg-[#202020]">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy18oAAbfHvegnCROut79KT6Zc3rEV9PEqYf_9V3q6OivzpvwxzRHl5ILD2rhKatLHgsXs4lN8PfLRurW0lfeo8hWq9Zod948IErHuXwRa58ldCUlBKefcJdCJ6wk08XhTi7A7rWY497NBeMRnXRFJ2Zk04eifLxGpyWRHpNuu9odX9ePd2mfgAe4Kozkhc-zCqijNu__flVMmmTpJjWcSSYyR6HrQxZJh57uR2YYxbitExzd4yd2P2CCuXcy7CFosSQ"
                  alt="Morfiction workspace with Signify Esports team branding and operational command room"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#101010] via-[#101010]/20 to-transparent opacity-90"></div>

                {/* Bottom Overlay Label */}
                <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between gap-2">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-title text-[10px] uppercase text-[#D4FF00] tracking-wider font-bold">
                      ECOSYSTEM ENVIRONMENT
                    </span>
                    <span className="font-display text-sm sm:text-base font-bold text-[#F3F1EB]">
                      Esports Operations &amp; Studio Infrastructure
                    </span>
                  </div>
                  <div className="hidden sm:inline-flex items-center px-2.5 py-1 bg-[#101010]/95 border border-[#303030] backdrop-blur-md rounded text-[10px] font-display text-[#A4A4A4] uppercase tracking-wider font-semibold shrink-0">
                    OPERATIONAL ARCHITECTURE
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
