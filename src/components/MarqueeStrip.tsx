import React from 'react';

export const MarqueeStrip: React.FC = () => {
  const domains = [
    'PUBLISHER LAUNCHES',
    'ESPORTS TOURNAMENTS',
    'CAMPUS ACTIVATIONS',
    'CREATOR CAMPAIGNS',
    'COMMUNITY ENGAGEMENT',
    'BRAND PARTNERSHIPS',
    'RETAIL & DISTRIBUTOR PROGRAMS',
    'GAMING COMMERCE',
  ];

  return (
    <section className="w-full bg-[#161616] py-3.5 overflow-hidden relative border-y border-[#2B2B2B]">
      <div className="animate-marquee-smooth select-none items-center flex" id="marquee-track">
        {/* Set 1 */}
        <div className="flex items-center gap-8 shrink-0 px-4">
          {domains.map((domain, index) => (
            <React.Fragment key={`set1-${index}`}>
              <span className={`font-display text-sm tracking-wider uppercase font-semibold ${
                index % 2 === 0 ? 'text-[#F3F1EB]' : 'text-[#A4A4A4]'
              }`}>
                {domain}
              </span>
              <span className="text-[#C7FF3E] font-bold">•</span>
            </React.Fragment>
          ))}
        </div>

        {/* Set 2 (for continuous loop) */}
        <div aria-hidden="true" className="flex items-center gap-8 shrink-0 px-4">
          {domains.map((domain, index) => (
            <React.Fragment key={`set2-${index}`}>
              <span className={`font-display text-sm tracking-wider uppercase font-semibold ${
                index % 2 === 0 ? 'text-[#F3F1EB]' : 'text-[#A4A4A4]'
              }`}>
                {domain}
              </span>
              <span className="text-[#C7FF3E] font-bold">•</span>
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};
