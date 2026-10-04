import React from 'react';
import { MessageSquare, PhoneCall } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';

export const FloatingChatTrigger: React.FC = () => {
  const { isChatOpen, setIsChatOpen, locale } = useApp();
  const isAr = locale === 'ar';

  if (isChatOpen) return null;

  return (
    <div className="fixed bottom-6 right-6 rtl:right-auto rtl:left-6 z-40 flex items-center gap-2">
      {/* WhatsApp Quick Floating Pill */}
      <a
        href={NUZUL_CONTACT.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-11 w-11 items-center justify-center rounded-full bg-emerald-600 text-white shadow-xl hover:bg-emerald-500 hover:scale-110 active:scale-95 transition-all"
        title={isAr ? 'محادثة فورية عبر واتساب' : 'Chat on WhatsApp'}
        aria-label="WhatsApp"
      >
        <PhoneCall className="h-5 w-5" />
      </a>

      {/* Main Support Chat Trigger */}
      <button
        type="button"
        onClick={() => setIsChatOpen(true)}
        className="flex items-center gap-2.5 rounded-full border border-emerald-500/40 bg-[#0d1524] px-4 py-2.5 shadow-[0_8px_30px_rgba(0,0,0,0.6)] backdrop-blur-md transition-all hover:scale-105 hover:border-emerald-400 active:scale-95 group"
        aria-label="Open Live Support Console"
      >
        <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500 text-[#070c14] font-bold shadow-md group-hover:bg-emerald-400">
          <MessageSquare className="h-4 w-4" />
          <span className="absolute -top-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-emerald-400 border border-[#070c14] animate-ping" />
        </div>

        <div className="text-start">
          <div className="text-[11px] font-bold text-white leading-tight">
            {isAr ? 'دعم نُزول تِك الهندسي' : 'Nuzul Tech Support'}
          </div>
          <div className="text-[10px] text-emerald-400 font-mono">
            {isAr ? 'متاحون الآن 24/7' : 'Cairo Ops Online 24/7'}
          </div>
        </div>
      </button>
    </div>
  );
};
