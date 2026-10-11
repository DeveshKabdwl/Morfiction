import React, { useState } from 'react';
import { Menu, X, ArrowUpRight, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenInquiry: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenInquiry, activeSection }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Our Work', href: '#featured-work', id: 'featured-work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Journey', href: '#journey', id: 'journey' },
    { label: 'Contact', href: '#contact-cta', id: 'contact-cta' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#101010]/90 backdrop-blur-md border-b border-[#2B2B2B]">
      <div className="h-20 w-full px-4 sm:px-8 lg:px-14 flex items-center justify-between max-w-7xl mx-auto">
        {/* Brand Logo */}
        <div className="flex items-center gap-3">
          <a href="#home" className="flex items-center gap-2.5 group">
            <span className="font-display font-bold text-2xl tracking-tight uppercase text-[#F3F1EB] group-hover:text-[#D4FF00] transition-colors">
              Morfiction
            </span>
            <span className="hidden sm:inline-block font-title text-[10px] text-[#A4A4A4] uppercase border-l pl-2.5 border-[#303030] tracking-widest font-semibold">
              Gaming Growth Partner
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`font-display text-sm tracking-wide transition-colors ${
                  isActive
                    ? 'text-[#D4FF00] font-bold drop-shadow-[0_0_8px_rgba(212,255,0,0.3)]'
                    : 'text-[#A4A4A4] hover:text-[#F3F1EB]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Header Action & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <button
            onClick={onOpenInquiry}
            className="hidden sm:inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded bg-[#D4FF00] text-[#101010] font-display text-xs uppercase font-bold tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_18px_rgba(212,255,0,0.35)] hover:-translate-y-0.5"
          >
            <Flame className="w-3.5 h-3.5" />
            <span>Start a Project</span>
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded text-[#A4A4A4] hover:text-[#F3F1EB] hover:bg-[#191919] transition-colors border border-[#303030]"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#161616] border-b border-[#2B2B2B] px-6 py-6 flex flex-col gap-4 animate-in fade-in slide-in-from-top duration-200">
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-display text-base text-[#F3F1EB] hover:text-[#C7FF3E] py-1 border-b border-[#252525] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ArrowUpRight className="w-4 h-4 text-[#A4A4A4]" />
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenInquiry();
            }}
            className="w-full mt-2 py-3 rounded bg-[#C7FF3E] text-[#101010] font-display text-xs uppercase font-bold tracking-wider hover:brightness-110 text-center flex items-center justify-center gap-2"
          >
            <Flame className="w-4 h-4" />
            <span>Start a Project</span>
          </button>
        </div>
      )}
    </header>
  );
};
