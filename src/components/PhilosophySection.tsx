import React from 'react';
import { PHILOSOPHY_PILLARS } from '../data/morfictionData';
import { Lightbulb, Wrench, Gamepad2 } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Lightbulb className="w-5 h-5 text-[#C7FF3E]" />;
      case 1:
        return <Wrench className="w-5 h-5 text-[#C7FF3E]" />;
      case 2:
        return <Gamepad2 className="w-5 h-5 text-[#C7FF3E]" />;
      default:
        return <Lightbulb className="w-5 h-5 text-[#C7FF3E]" />;
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-20 bg-[#121212] border-y border-[#2B2B2B]">
      <div className="max-w-7xl mx-auto flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-2xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C7FF3E] rounded-full"></span>
            <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              OUR PHILOSOPHY
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] font-bold">
            CREATIVE IN MIND. PRACTICAL ON THE GROUND.
          </h2>
        </div>

        {/* 3 Grounded Pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PHILOSOPHY_PILLARS.map((pillar, idx) => (
            <div
              key={pillar.number}
              className="bg-[#161616] p-7 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between gap-6 hover:border-[#C7FF3E]/50 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#252525]">
                  <span className="font-display text-xs text-[#C7FF3E] font-bold tracking-wider">
                    PILLAR // {pillar.number}
                  </span>
                  <div className="p-2 rounded-lg bg-[#101010] border border-[#262626]">
                    {getPillarIcon(idx)}
                  </div>
                </div>

                <h3 className="font-display text-xl sm:text-2xl uppercase text-[#F3F1EB] mt-4 font-bold">
                  {pillar.title}
                </h3>

                <p className="font-body text-sm text-[#A4A4A4] mt-3 leading-relaxed">
                  {pillar.description}
                </p>
              </div>

              <div className="font-title text-[10px] text-[#C7FF3E] uppercase tracking-wider font-bold pt-3 border-t border-[#252525]">
                {pillar.subtitle}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
