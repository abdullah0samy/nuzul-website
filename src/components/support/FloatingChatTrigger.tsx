import React, { useState, useRef, useEffect } from 'react';
import {
  MessageSquare,
  PhoneCall,
  Phone,
  X,
  Headphones,
  ChevronUp,
  Sparkles,
  ShieldCheck,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';

export const FloatingChatTrigger: React.FC = () => {
  const { isChatOpen, setIsChatOpen, locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  if (isChatOpen) return null;

  return (
    <div
      ref={containerRef}
      className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex flex-col items-end rtl:items-start"
    >
      {/* Expandable Support Quick Menu */}
      {isMenuOpen && (
        <div
          className={`mb-3 w-72 rounded-2xl border p-4 shadow-2xl backdrop-blur-xl transition-all duration-300 animate-in fade-in slide-in-from-bottom-3 ${
            isDark
              ? 'border-white/10 bg-[#0d1525]/95 text-white shadow-[0_20px_50px_rgba(0,0,0,0.7)]'
              : 'border-slate-200 bg-white/95 text-slate-900 shadow-2xl'
          }`}
        >
          <div className="flex items-center justify-between border-b pb-2.5 mb-3 border-current/10">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-xs font-bold font-mono">
                {isAr ? 'مركز الاتصال والدعم المباشر' : 'Live Operations Hub'}
              </span>
            </div>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="rounded-lg p-1 text-slate-400 hover:text-current transition-colors"
              aria-label="Close menu"
            >
              <X className="h-4 w-4" />
            </button>
          </div>

          <div className="space-y-2">
            {/* 1. WhatsApp Action */}
            <a
              href={NUZUL_CONTACT.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl border p-2.5 transition-all group ${
                isDark
                  ? 'border-emerald-500/20 bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-300'
                  : 'border-emerald-200 bg-emerald-50 hover:bg-emerald-100 text-emerald-900'
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500 text-white shadow-sm">
                <PhoneCall className="h-4 w-4" />
              </div>
              <div className="text-start">
                <div className="text-xs font-bold leading-snug">
                  {isAr ? 'محادثة فورية عبر واتساب' : 'Instant WhatsApp'}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {isAr ? 'رد فوري من مهندس مناوب' : 'Instant response from engineer'}
                </div>
              </div>
            </a>

            {/* 2. Direct Emergency Phone Hotline */}
            <a
              href={`tel:${NUZUL_CONTACT.rawPhone}`}
              onClick={() => setIsMenuOpen(false)}
              className={`flex items-center gap-3 rounded-xl border p-2.5 transition-all group ${
                isDark
                  ? 'border-white/5 bg-white/[0.03] hover:bg-white/[0.08] text-white'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-slate-500/20 text-slate-300">
                <Phone className="h-4 w-4" />
              </div>
              <div className="text-start">
                <div className="text-xs font-bold leading-snug">
                  {isAr ? 'اتصال هاتفي مباشر' : 'Direct Phone Hotline'}
                </div>
                <div className="text-[10px] text-slate-400 font-mono" dir="ltr">
                  {NUZUL_CONTACT.phone1}
                </div>
              </div>
            </a>

            {/* 3. Tech Consultation Chat Console */}
            <button
              type="button"
              onClick={() => {
                setIsMenuOpen(false);
                setIsChatOpen(true);
              }}
              className={`w-full flex items-center gap-3 rounded-xl border p-2.5 transition-all group cursor-pointer ${
                isDark
                  ? 'border-white/5 bg-white/[0.03] hover:bg-white/[0.08] text-white'
                  : 'border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-800'
              }`}
            >
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-500/20 text-cyan-400">
                <Headphones className="h-4 w-4" />
              </div>
              <div className="text-start">
                <div className="text-xs font-bold leading-snug">
                  {isAr ? 'مستشار الدعم والأنظمة' : 'Technical Support Console'}
                </div>
                <div className="text-[10px] text-slate-400 font-mono">
                  {isAr ? 'استشارات فنية وباقات' : 'Interactive solutions advisor'}
                </div>
              </div>
            </button>
          </div>

          <div className="mt-3 pt-2 border-t border-current/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
            <span className="flex items-center gap-1">
              <ShieldCheck className="h-3 w-3 text-emerald-500" />
              <span>SLA 24/7/365</span>
            </span>
            <span>Cairo Ops</span>
          </div>
        </div>
      )}

      {/* Main Single Luxury Floating Action Trigger Button */}
      <button
        type="button"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className={`group relative flex items-center gap-2.5 rounded-full border px-4 py-2.5 shadow-[0_10px_35px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer ${
          isMenuOpen
            ? 'border-emerald-400 bg-emerald-500 text-white shadow-emerald-500/30'
            : isDark
            ? 'border-emerald-500/30 bg-[#0d1525]/90 text-white hover:border-emerald-400'
            : 'border-emerald-500/30 bg-white/95 text-slate-900 hover:border-emerald-500 shadow-xl'
        }`}
        aria-label="Open support options"
      >
        <div className="relative flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500 text-white shadow-sm">
          {isMenuOpen ? (
            <X className="h-4 w-4" />
          ) : (
            <>
              <MessageSquare className="h-3.5 w-3.5" />
              <span className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-emerald-300 animate-ping" />
            </>
          )}
        </div>

        <div className="text-start hidden sm:block">
          <div className="text-[11px] font-bold leading-tight">
            {isAr ? 'تواصل مع نُزول' : 'Contact Nuzul'}
          </div>
          <div className="text-[10px] text-emerald-500 dark:text-emerald-400 font-mono font-medium">
            {isAr ? 'دعم هندسي 24/7' : 'Cairo Ops Online'}
          </div>
        </div>

        <ChevronUp
          className={`h-3.5 w-3.5 text-slate-400 transition-transform duration-200 ${
            isMenuOpen ? 'rotate-180 text-white' : ''
          }`}
        />
      </button>
    </div>
  );
};

