import React from 'react';
import { CAPABILITY_MAPPING } from '../data/morfictionData';
import { 
  Gamepad2, 
  GraduationCap, 
  Trophy, 
  Video, 
  Network, 
  Handshake 
} from 'lucide-react';

export const CapabilitiesMatrix: React.FC = () => {
  const getIcon = (domain: string) => {
    switch (domain) {
      case 'Publisher Launches':
        return <Gamepad2 className="w-5 h-5 text-[#C7FF3E]" />;
      case 'Campus Activations':
        return <GraduationCap className="w-5 h-5 text-[#C7FF3E]" />;
      case 'Esports Operations':
        return <Trophy className="w-5 h-5 text-[#C7FF3E]" />;
      case 'Creator Campaigns':
        return <Video className="w-5 h-5 text-[#C7FF3E]" />;
      case 'Community Building':
        return <Network className="w-5 h-5 text-[#C7FF3E]" />;
      case 'Ecosystem Collaborations':
        return <Handshake className="w-5 h-5 text-[#C7FF3E]" />;
      default:
        return <Gamepad2 className="w-5 h-5 text-[#C7FF3E]" />;
    }
  };

  return (
    <section className="w-full px-4 sm:px-8 lg:px-14 py-20 max-w-7xl mx-auto">
      <div className="flex flex-col gap-10">
        <div className="flex flex-col gap-2 max-w-3xl">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 bg-[#C7FF3E] rounded-full"></span>
            <span className="font-title text-[10px] tracking-widest text-[#A4A4A4] uppercase font-bold">
              AUTHENTIC TRACK RECORD
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl tracking-tight uppercase text-[#F3F1EB] font-bold">
            CAPABILITIES MAPPED TO EXECUTION.
          </h2>
          <p className="font-body text-sm sm:text-base text-[#A4A4A4] mt-1">
            A factual matrix of capabilities validated through company milestones and documented industry brand engagements.
          </p>
        </div>

        {/* Structured Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CAPABILITY_MAPPING.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#161616] p-6 rounded-2xl border border-[#2B2B2B] flex flex-col justify-between hover:border-[#C7FF3E]/50 transition-colors"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-2.5">
                  <div className="p-2 rounded-lg bg-[#101010] border border-[#282828]">
                    {getIcon(item.domain)}
                  </div>
                  <h3 className="font-display text-lg text-[#F3F1EB] font-bold uppercase">
                    {item.domain}
                  </h3>
                </div>
                <p className="font-body text-xs sm:text-sm text-[#A4A4A4] leading-relaxed">
                  {item.focus}
                </p>
              </div>

              <div className="pt-4 border-t border-[#252525] mt-5 flex flex-col gap-1">
                <span className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider font-semibold">
                  Track-Record References:
                </span>
                <span className="font-display text-xs text-[#C7FF3E] font-bold tracking-wide">
                  {item.verifiedPartners}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
