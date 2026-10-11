import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Send, Sparkles, Building2, User, Mail, Phone, Calendar, MapPin, DollarSign, FileText } from 'lucide-react';
import { InquiryFormData } from '../types';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialCategory?: string;
}

export const InquiryModal: React.FC<InquiryModalProps> = ({
  isOpen,
  onClose,
  initialCategory,
}) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    company: '',
    workEmail: '',
    phone: '',
    projectType: initialCategory || 'Publisher Launch Campaign',
    timeline: 'Q3 / Q4 2025',
    targetRegion: 'India & South Asia',
    budgetTier: '$25K - $75K (Multi-City / Creator)',
    projectOverview: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, projectType: initialCategory }));
    }
  }, [initialCategory]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      const generatedTicket = `MF-${Math.floor(100000 + Math.random() * 900000)}`;
      setTicketId(generatedTicket);
    }, 600);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      company: '',
      workEmail: '',
      phone: '',
      projectType: 'Publisher Launch Campaign',
      timeline: '',
      targetRegion: '',
      budgetTier: '$25K - $75K (Multi-City / Creator)',
      projectOverview: '',
    });
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#101010]/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-[#161616] border border-[#2B2B2B] rounded-2xl p-6 sm:p-8 shadow-2xl my-8 max-h-[92vh] overflow-y-auto">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#2B2B2B]">
          <div className="flex items-center gap-2.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#D4FF00] animate-pulse"></span>
            <div>
              <h3 className="font-display font-bold text-lg sm:text-xl uppercase text-[#F3F1EB]">
                Start a Project Brief
              </h3>
              <p className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider">
                Direct Liaison • Morfiction Agency Team
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-[#191919] text-[#A4A4A4] hover:text-[#F3F1EB] border border-[#303030] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        {isSubmitted ? (
          <div className="py-8 flex flex-col items-center text-center gap-4 animate-in fade-in duration-300">
            <div className="w-16 h-16 rounded-full bg-[#D4FF00]/15 border border-[#D4FF00]/40 flex items-center justify-center text-[#D4FF00]">
              <CheckCircle className="w-8 h-8" />
            </div>

            <h4 className="font-display text-2xl font-bold uppercase text-[#F3F1EB]">
              Project Brief Received!
            </h4>

            <p className="font-body text-sm text-[#A4A4A4] max-w-md">
              Thank you, <strong className="text-[#F3F1EB]">{formData.fullName}</strong>. Your campaign parameters have been submitted directly to our lead production partners.
            </p>

            <div className="p-4 bg-[#101010] border border-[#2B2B2B] rounded-xl w-full max-w-md text-left flex flex-col gap-2">
              <div className="flex items-center justify-between text-xs font-display">
                <span className="text-[#A4A4A4] uppercase">Project Ticket:</span>
                <span className="text-[#D4FF00] font-bold">{ticketId}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-display">
                <span className="text-[#A4A4A4] uppercase">Domain:</span>
                <span className="text-[#F3F1EB]">{formData.projectType}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-display">
                <span className="text-[#A4A4A4] uppercase">Target Region:</span>
                <span className="text-[#F3F1EB]">{formData.targetRegion || 'India & South Asia'}</span>
              </div>
              <div className="flex items-center justify-between text-xs font-display">
                <span className="text-[#A4A4A4] uppercase">Turnaround:</span>
                <span className="text-[#D4FF00]">Within 24 Hours</span>
              </div>
            </div>

            <div className="flex items-center gap-3 pt-3">
              <button
                onClick={handleReset}
                className="px-4 py-2 rounded font-display text-xs uppercase text-[#A4A4A4] hover:text-[#F3F1EB] border border-[#303030] cursor-pointer"
              >
                Submit Another Brief
              </button>
              <button
                onClick={onClose}
                className="px-6 py-2 rounded bg-[#D4FF00] text-[#101010] font-display text-xs font-bold uppercase hover:brightness-110 cursor-pointer shadow-[0_0_15px_rgba(212,255,0,0.3)]"
              >
                Close Window
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Your Name *
                </label>
                <div className="relative">
                  <User className="w-4 h-4 text-[#A4A4A4] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="First & Last Name"
                    className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl pl-9 pr-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Company / Brand / Publisher *
                </label>
                <div className="relative">
                  <Building2 className="w-4 h-4 text-[#A4A4A4] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    required
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Krafton, MSI, Red Bull"
                    className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl pl-9 pr-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Work Email *
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#A4A4A4] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={formData.workEmail}
                    onChange={(e) => setFormData({ ...formData, workEmail: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl pl-9 pr-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Phone / WhatsApp
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-[#A4A4A4] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl pl-9 pr-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Project Domain
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl px-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none cursor-pointer"
                >
                  <option value="Publisher Launch Campaign">Publisher Launch &amp; Community Rollout</option>
                  <option value="Esports Tournament & Arena Finals">Esports Tournament / Stadium Arena</option>
                  <option value="Campus Activations & College Tour">Campus Activations &amp; College Tour</option>
                  <option value="Influencer & Creator Marketing">Influencer &amp; Creator Marketing</option>
                  <option value="Brand Partnership & Hardware Expo">Brand Partnership &amp; Hardware Showcase</option>
                  <option value="Gaming Commerce & Distribution">Gaming Commerce &amp; Retail Network</option>
                </select>
              </div>

              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Target Timeline
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-[#A4A4A4] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    placeholder="e.g. Q3 2025, Immediate"
                    className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl pl-9 pr-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Target Region / Footprint
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-[#A4A4A4] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    value={formData.targetRegion}
                    onChange={(e) => setFormData({ ...formData, targetRegion: e.target.value })}
                    placeholder="India, Southeast Asia, Brazil, Global"
                    className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl pl-9 pr-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                  Estimated Budget Tier
                </label>
                <select
                  value={formData.budgetTier}
                  onChange={(e) => setFormData({ ...formData, budgetTier: e.target.value })}
                  className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl px-3 py-2.5 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none cursor-pointer"
                >
                  <option value="Under $25K (Regional / Campus)">Under $25K (Regional / Single Campus)</option>
                  <option value="$25K - $75K (Multi-City / Creator)">$25K - $75K (Multi-City / Creator Roster)</option>
                  <option value="$75K - $200K (Major LAN / Campus Tour)">$75K - $200K (Major LAN Finals / Pan-India Tour)</option>
                  <option value="$200K+ (Arena / Global Title Launch)">$200K+ (Arena Staging / Full Publisher Launch)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block font-title text-[10px] uppercase text-[#A4A4A4] mb-1.5 font-bold tracking-wider">
                Project Overview &amp; Objectives
              </label>
              <textarea
                rows={3}
                required
                value={formData.projectOverview}
                onChange={(e) => setFormData({ ...formData, projectOverview: e.target.value })}
                placeholder="Briefly describe your game title, target player audience, deliverables, and event scope..."
                className="w-full bg-[#101010] border border-[#2B2B2B] rounded-xl p-3 text-[#F3F1EB] text-xs sm:text-sm focus:border-[#C7FF3E] focus:outline-none transition-colors"
              ></textarea>
            </div>

            {/* Actions */}
            <div className="pt-2 flex items-center justify-between border-t border-[#252525]">
              <span className="font-title text-[10px] text-[#A4A4A4] uppercase tracking-wider hidden sm:inline">
                Confidential • NDA Enforced
              </span>

              <div className="flex items-center gap-3 ml-auto">
                <button
                  type="button"
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-lg text-xs font-display uppercase tracking-wider text-[#A4A4A4] hover:text-[#F3F1EB]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-lg bg-[#D4FF00] text-[#101010] font-display text-xs font-bold uppercase tracking-wider hover:brightness-110 transition-all cursor-pointer shadow-[0_0_18px_rgba(212,255,0,0.35)] disabled:opacity-50"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>{isSubmitting ? 'Sending...' : 'Submit Brief'}</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
