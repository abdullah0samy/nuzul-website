import React from 'react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { InstaPayLogo } from './InstaPayLogo';

export const PaymentBadges: React.FC<{ compact?: boolean }> = ({ compact = false }) => {
  const { setActivePaymentModal, locale } = useApp();
  const isAr = locale === 'ar';

  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* InstaPay Official Clickable Badge */}
      <button
        type="button"
        onClick={() => setActivePaymentModal('instapay')}
        className="group flex items-center gap-2 rounded-xl border border-purple-500/40 bg-gradient-to-r from-[#2e0933] to-[#17041a] px-3 py-1.5 text-xs font-bold text-white transition-all hover:scale-105 hover:border-purple-400 shadow-sm cursor-pointer"
        title={isAr ? 'اضغط للدفع الفوري عبر إنستاباي' : 'Click to pay instantly via InstaPay'}
      >
        <InstaPayLogo size="md" variant="wordmark" />
        <span className="rounded bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.2 text-[9px] text-emerald-400 font-sans font-medium">
          {isAr ? 'لحظي' : 'Instant'}
        </span>
      </button>

      {/* Vodafone Cash Clickable Badge */}
      <button
        type="button"
        onClick={() => setActivePaymentModal('vodafone')}
        className="group flex items-center gap-1.5 rounded-xl border border-red-500/40 bg-red-950/30 px-3 py-1.5 font-mono text-xs font-bold text-red-200 transition-all hover:scale-105 hover:border-red-400 hover:bg-red-900/40 shadow-sm cursor-pointer"
        title={isAr ? 'اضغط للدفع عبر فودافون كاش' : 'Click to pay via Vodafone Cash'}
      >
        <span className="flex h-5 w-5 items-center justify-center rounded-md bg-red-600 text-[10px] font-black text-white">
          VF
        </span>
        <span>Vodafone Cash</span>
      </button>

      {/* Visa Clickable Badge */}
      <button
        type="button"
        onClick={() => setActivePaymentModal('card')}
        className="group flex items-center gap-1.5 rounded-xl border border-blue-500/30 bg-blue-950/20 px-3 py-1.5 font-mono text-xs font-bold text-blue-200 transition-all hover:scale-105 hover:border-blue-400 hover:bg-blue-900/40 shadow-sm cursor-pointer"
        title={isAr ? 'الدفع ببطاقات فيزا' : 'Pay via Visa'}
      >
        <span className="font-black italic tracking-wider text-blue-400">VISA</span>
      </button>

      {/* Mastercard Clickable Badge */}
      <button
        type="button"
        onClick={() => setActivePaymentModal('card')}
        className="group flex items-center gap-1.5 rounded-xl border border-orange-500/30 bg-orange-950/20 px-3 py-1.5 font-mono text-xs font-bold text-orange-200 transition-all hover:scale-105 hover:border-orange-400 hover:bg-orange-900/40 shadow-sm cursor-pointer"
        title={isAr ? 'الدفع ببطاقات ماستركارد' : 'Pay via Mastercard'}
      >
        <span className="flex items-center -space-x-1">
          <span className="h-3.5 w-3.5 rounded-full bg-red-500 opacity-90" />
          <span className="h-3.5 w-3.5 rounded-full bg-amber-500 opacity-90" />
        </span>
        <span className="text-[11px] font-semibold text-slate-200">Mastercard</span>
      </button>
    </div>
  );
};
