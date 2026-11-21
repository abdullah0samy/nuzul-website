import React from 'react';
import { useApp } from '../../context/AppContext';
import { InstaPayLogo } from './InstaPayLogo';
import { ShieldCheck, Lock, CreditCard, Landmark, Smartphone } from 'lucide-react';

interface PaymentBadgesProps {
  variant?: 'default' | 'compact' | 'footer';
  className?: string;
}

export const PaymentBadges: React.FC<PaymentBadgesProps> = ({ variant = 'default', className = '' }) => {
  const { lang } = useApp();

  if (variant === 'footer') {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {/* InstaPay */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-surface border border-navy transition-colors" title="InstaPay Egypt">
          <InstaPayLogo size={18} />
          <span className="text-xs font-bold text-on-navy tracking-wide">InstaPay</span>
        </div>

        {/* Vodafone Cash */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-surface border border-navy transition-colors" title="Vodafone Cash">
          <span className="w-2 h-2 rounded-full bg-danger" />
          <span className="text-xs font-bold text-on-navy">Vodafone Cash</span>
        </div>

        {/* Fawry */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-surface border border-navy transition-colors" title="Fawry Pay">
          <span className="w-2 h-2 rounded-full bg-warning" />
          <span className="text-xs font-bold text-on-navy">Fawry</span>
        </div>

        {/* Visa & Mastercard */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-surface border border-navy transition-colors" title="Visa & Mastercard">
          <CreditCard className="w-3.5 h-3.5 text-navy-accent" />
          <span className="text-xs font-bold text-on-navy">Visa / Mastercard</span>
        </div>

        {/* Bank Transfer */}
        <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-navy-surface border border-navy transition-colors" title="CIB / QNB / NBE Corporate Bank Transfer">
          <Landmark className="w-3.5 h-3.5 text-navy-accent" />
          <span className="text-xs font-semibold text-on-navy-muted">
            {lang === 'ar' ? 'تحويل بنكي (CIB / QNB / الأهلي)' : 'Bank Transfer (CIB / QNB / NBE)'}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={`rounded-2xl bg-surface border border-token p-4 sm:p-5 ${className}`}>
      <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent shrink-0">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-bold text-main flex items-center gap-2">
              <span>{lang === 'ar' ? 'وسائل دفع محلية ودولية مشفرة' : 'Encrypted Local & International Payment Methods'}</span>
              <span className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-accent-soft text-accent text-[10px] font-semibold">
                <Lock className="w-2.5 h-2.5" /> TLS / SSL
              </span>
            </div>
            <p className="text-[11px] text-muted mt-0.5">
              {lang === 'ar'
                ? 'إصدار فاتورة ضريبية إلكترونية رسمية للشركات والمؤسسات عند التعاقد.'
                : 'Official electronic tax invoices issued for corporate and institutional contracts.'}
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-token">
            <InstaPayLogo size={20} />
            <div className="text-start">
              <div className="text-xs font-bold text-main leading-none">InstaPay</div>
              <div className="text-[9px] text-accent font-semibold mt-0.5">{lang === 'ar' ? 'تحويل بنكي سريع' : 'IPN Transfer'}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-token">
            <div className="w-6 h-6 rounded-lg bg-danger-soft border border-danger flex items-center justify-center text-danger shrink-0">
              <Smartphone className="w-3.5 h-3.5" />
            </div>
            <div className="text-start">
              <div className="text-xs font-bold text-main leading-none">Vodafone Cash</div>
              <div className="text-[9px] text-muted mt-0.5">{lang === 'ar' ? 'محافظ إلكترونية' : 'Mobile Wallet'}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-token">
            <div className="w-6 h-6 rounded-lg bg-warning-soft border border-warning flex items-center justify-center text-warning font-bold text-[10px] shrink-0">
              F
            </div>
            <div className="text-start">
              <div className="text-xs font-bold text-main leading-none">Fawry Pay</div>
              <div className="text-[9px] text-muted mt-0.5">{lang === 'ar' ? 'فوري بلس' : 'Fawry Plus'}</div>
            </div>
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-xl bg-surface-2 border border-token">
            <div className="w-6 h-6 rounded-lg bg-accent-soft border border-accent-soft flex items-center justify-center text-accent shrink-0">
              <CreditCard className="w-3.5 h-3.5" />
            </div>
            <div className="text-start">
              <div className="text-xs font-bold text-main leading-none">Visa / Master</div>
              <div className="text-[9px] text-muted mt-0.5">3D Secure</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
