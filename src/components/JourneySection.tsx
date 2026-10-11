import React from 'react';
import { TIMELINE_MILESTONES } from '../data/morfictionData';
import { Calendar, MapPin } from 'lucide-react';

export const JourneySection: React.FC = () => {
  return (
    <section id="journey" className="w-full px-4 sm:px-8 lg:px-14 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C7FF3E] rounded-full"></span>
            <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              MILESTONES &amp; EVOLUTION
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] font-bold">
            SELECTED WORK ACROSS THE JOURNEY (SINCE 2017)
          </h2>
          <p className="font-body text-base text-[#A4A4A4] leading-relaxed mt-1">
            Chronological record of verified esports tournaments, collegiate activations, and publisher engagements documented across our company history.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TIMELINE_MILESTONES.map((item) => (
            <div
              key={item.number}
              className="bg-[#161616] p-6 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between hover:border-[#C7FF3E]/50 transition-colors shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[#252525]">
                  <div className="flex items-center gap-2 text-[#C7FF3E]">
                    <Calendar className="w-4 h-4" />
                    <span className="font-display text-sm font-bold tracking-wider">
                      {item.date}
                    </span>
                  </div>
                  <span className="font-display text-xs text-[#A4A4A4] font-semibold">
                    {item.number}
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-xl text-[#F3F1EB] uppercase mt-4 font-bold">
                  {item.title}
                </h3>

                <p className="font-body text-xs sm:text-sm text-[#A4A4A4] mt-2 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 border-t border-[#252525] mt-5 flex items-center justify-between text-xs">
                <span className="font-title text-[10px] text-[#C7FF3E] font-bold uppercase tracking-wider">
                  {item.category}
                </span>
                {item.venue && (
                  <span className="flex items-center gap-1 text-[11px] font-display text-[#A4A4A4]">
                    <MapPin className="w-3 h-3 text-[#A4A4A4]" />
                    <span>{item.venue}</span>
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
