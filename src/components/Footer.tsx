import React, { useState } from 'react';
import { ArrowRight, Globe } from 'lucide-react';

interface FooterProps {
  onOpenInquiry: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenInquiry }) => {
  const [activeLegalModal, setActiveLegalModal] = useState<string | null>(null);

  return (
    <footer className="w-full bg-[#0d0d0d] border-t border-[#252525]">
      <div className="w-full px-4 sm:px-8 lg:px-14 py-16 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          {/* Brand Summary */}
          <div className="md:col-span-6 flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <span className="font-display text-2xl tracking-tight uppercase text-[#F3F1EB] font-extrabold">
                Morfiction
              </span>
            </div>

            <p className="font-body text-sm text-[#A4A4A4] max-w-lg leading-relaxed">
              Gaming growth and distribution partner established in 2017. Helping publishers, esports organisations and technology brands connect with players through publisher launches, tournaments, campus activations and creator programs.
            </p>

            <div className="flex items-center gap-2 pt-2 text-xs font-display text-[#A4A4A4]">
              <span className="w-2 h-2 rounded-full bg-[#C7FF3E]"></span>
              <span className="font-title text-[10px] tracking-widest uppercase font-semibold">
                Verified Footprint: India • Southeast Asia • Brazil
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-title text-[11px] text-[#F3F1EB] uppercase tracking-widest font-bold">
              Navigation
            </span>
            <nav className="flex flex-col gap-2 font-display text-xs text-[#A4A4A4]">
              <a href="#home" className="hover:text-[#C7FF3E] transition-colors">
                Home Overview
              </a>
              <a href="#featured-work" className="hover:text-[#C7FF3E] transition-colors">
                Documented Work
              </a>
              <a href="#services" className="hover:text-[#C7FF3E] transition-colors">
                Core Capabilities
              </a>
              <a href="#about" className="hover:text-[#C7FF3E] transition-colors">
                About Morfiction
              </a>
              <a href="#journey" className="hover:text-[#C7FF3E] transition-colors">
                Journey Since 2017
              </a>
            </nav>
          </div>

          {/* Initiate Brief Quick Trigger */}
          <div className="md:col-span-3 flex flex-col gap-3">
            <span className="font-title text-[11px] text-[#F3F1EB] uppercase tracking-widest font-bold">
              Initiate Brief
            </span>
            <p className="font-body text-xs text-[#A4A4A4] leading-relaxed">
              Ready to launch a game title, tournament, or campus activation campaign?
            </p>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center gap-1.5 font-display text-xs text-[#C7FF3E] hover:underline uppercase font-bold tracking-wider text-left pt-1 cursor-pointer"
            >
              <span>Start Project Brief</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-6 border-t border-[#202020] flex flex-col md:flex-row items-center justify-between gap-4 font-display text-xs text-[#A4A4A4]">
          <div>
            © 2017–2025 Morfiction. All documented rights reserved.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveLegalModal('privacy')}
              className="hover:text-[#F3F1EB] transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => setActiveLegalModal('terms')}
              className="hover:text-[#F3F1EB] transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => setActiveLegalModal('disclosures')}
              className="hover:text-[#F3F1EB] transition-colors cursor-pointer"
            >
              Publisher Disclosures
            </button>
          </div>
        </div>
      </div>

      {/* Legal Simple Drawer / Dialog */}
      {activeLegalModal && (
        <div className="fixed inset-0 z-50 bg-[#101010]/85 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-[#161616] border border-[#2B2B2B] rounded-xl p-6 max-w-lg w-full flex flex-col gap-4">
            <h4 className="font-display text-base font-bold text-[#F3F1EB] uppercase">
              {activeLegalModal === 'privacy' && 'Privacy Policy'}
              {activeLegalModal === 'terms' && 'Terms of Service'}
              {activeLegalModal === 'disclosures' && 'Publisher Disclosures'}
            </h4>
            <p className="font-body text-xs text-[#A4A4A4] leading-relaxed">
              {activeLegalModal === 'privacy' &&
                'Morfiction treats all partner briefs and publisher launch assets under strict confidentiality. Client briefs, creator fee agreements, and launch dates are protected under mutual NDA.'}
              {activeLegalModal === 'terms' &&
                'All project deliverables, esports stage productions, and creator campaigns operate under authorized publisher agreements and brand partner service contracts.'}
              {activeLegalModal === 'disclosures' &&
                'All referenced titles (Battlegrounds Mobile India, PUBG Mobile, Point Blank, etc.) and hardware brands (NVIDIA, MSI, Acer, AMD, ZOTAC) remain trademarks of their respective copyright holders.'}
            </p>
            <button
              onClick={() => setActiveLegalModal(null)}
              className="mt-2 py-2 px-4 rounded bg-[#101010] border border-[#303030] text-[#F3F1EB] font-display text-xs font-bold uppercase self-end hover:bg-[#202020]"
            >
              Dismiss
            </button>
          </div>
        </div>
      )}
    </footer>
  );
};
