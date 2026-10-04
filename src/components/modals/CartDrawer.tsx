import React, { useState } from 'react';
import { X, Trash2, CheckCircle, ShieldCheck, ArrowRight, ArrowLeft, Tag, Phone, ExternalLink } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { InstaPayLogo } from '../common/InstaPayLogo';

export const CartDrawer: React.FC = () => {
  const {
    isCartOpen,
    setIsCartOpen,
    cart,
    removeFromCart,
    clearCart,
    updateCartBilling,
    formatPrice,
    setActivePaymentModal,
    locale,
    theme,
  } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<'instapay' | 'vodafone' | 'card'>('instapay');
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  if (!isCartOpen) return null;

  const discountMultipliers: Record<number, number> = {
    1: 1.0,
    12: 0.8, // 20% off
    24: 0.65, // 35% off
    36: 0.5, // 50% off
  };

  const calculateItemTotal = (baseEGP: number, months: number) => {
    const mult = discountMultipliers[months] || 1.0;
    return baseEGP * months * mult;
  };

  const rawSubtotalEGP = cart.reduce(
    (acc, item) => acc + calculateItemTotal(item.baseMonthlyEGP, item.months),
    0
  );

  const finalTotalEGP = promoApplied ? rawSubtotalEGP * 0.9 : rawSubtotalEGP;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'NUZUL2026' || promoCode.trim().toUpperCase() === 'EGYPT') {
      setPromoApplied(true);
    }
  };

  const handleCheckout = () => {
    if (paymentMethod === 'instapay') {
      setIsCartOpen(false);
      setActivePaymentModal('instapay');
      return;
    }
    if (paymentMethod === 'vodafone') {
      setIsCartOpen(false);
      setActivePaymentModal('vodafone');
      return;
    }

    setIsCheckingOut(true);
    setTimeout(() => {
      setIsCheckingOut(false);
      setOrderComplete(true);
      setTimeout(() => {
        clearCart();
        setOrderComplete(false);
        setIsCartOpen(false);
      }, 2500);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[105] flex justify-end bg-black/80 backdrop-blur-sm rtl:justify-start">
      <div
        className={`relative flex h-full w-full max-w-md flex-col border-l p-6 shadow-2xl rtl:border-l-0 rtl:border-r transition-colors ${
          isDark
            ? 'border-white/10 bg-[#0a111c] text-white'
            : 'border-slate-200 bg-white text-slate-900'
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-current/10 pb-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-base font-bold">
              {isAr ? 'عربة الخدمات والسيرفرات' : 'Services & Server Cart'}
            </span>
            <span className="rounded-full bg-emerald-500/20 px-2 py-0.5 font-mono text-xs font-bold text-emerald-600 dark:text-emerald-300">
              {cart.length}
            </span>
          </div>

          <button
            onClick={() => setIsCartOpen(false)}
            className="text-slate-400 hover:text-current transition-colors cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content */}
        {orderComplete ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center p-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-500 border border-emerald-500/40">
              <CheckCircle className="h-8 w-8" />
            </div>
            <h3 className="mt-4 text-xl font-bold">
              {isAr ? 'تم تأكيد طلبك بنجاح!' : 'Order Confirmed!'}
            </h3>
            <p className="mt-2 text-xs text-slate-400">
              {isAr
                ? 'سيقوم فريق الدعم بتجهيز الخادم وإرسال بيانات الدخول عبر بريدك الإلكتروني وواتساب.'
                : 'Our engineers are provisioning your server and will email your credentials.'}
            </p>
          </div>
        ) : cart.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center text-center p-6">
            <p className="text-sm text-slate-400">
              {isAr ? 'عربة التسوق فارغة حالياً' : 'Your cart is currently empty'}
            </p>
            <a
              href="#pricing"
              onClick={() => setIsCartOpen(false)}
              className="btn btn-primary mt-4 py-2 px-5 text-xs font-bold"
            >
              {isAr ? 'استعراض السيرفرات والباقات' : 'Browse Servers'}
            </a>
          </div>
        ) : (
          <div className="flex flex-1 flex-col justify-between overflow-y-auto py-4">
            {/* Cart Items List */}
            <div className="space-y-3 pr-1">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className={`rounded-2xl border p-4 ${
                    isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-slate-50'
                  }`}
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="text-sm font-bold">{item.planName}</h4>
                      <p className="mt-0.5 text-xs font-mono text-emerald-600 dark:text-emerald-400">
                        {item.serverLocation === 'cairo' ? '🇪🇬 Cairo Core Datacenter' : '🇩🇪 Frankfurt Cloud'}
                      </p>
                    </div>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
                      title={isAr ? 'حذف' : 'Remove'}
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  {/* Billing Term */}
                  <div className="mt-3">
                    <label className="text-[11px] text-slate-400 block mb-1">
                      {isAr ? 'مدة التعاقد والخصم:' : 'Term & Savings:'}
                    </label>
                    <div className="grid grid-cols-4 gap-1 font-mono text-[10px]">
                      {([1, 12, 24, 36] as const).map((m) => (
                        <button
                          key={m}
                          type="button"
                          onClick={() => updateCartBilling(item.id, m)}
                          className={`rounded-lg border py-1.5 transition-colors cursor-pointer ${
                            item.months === m
                              ? 'border-emerald-500 bg-emerald-500/20 text-emerald-600 dark:text-emerald-200 font-bold'
                              : isDark
                              ? 'border-white/5 bg-white/[0.02] text-slate-400 hover:text-white'
                              : 'border-slate-200 bg-white text-slate-600 hover:text-slate-900'
                          }`}
                        >
                          <div>{m}M</div>
                          <div className="text-[9px] opacity-75">
                            {m === 1 ? 'عادي' : m === 12 ? '-20%' : m === 24 ? '-35%' : '-50%'}
                          </div>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Total for item */}
                  <div className="mt-3 flex items-center justify-between border-t border-current/10 pt-2 text-xs">
                    <span className="text-slate-400">
                      {isAr ? 'الإجمالي للخدمة:' : 'Item total:'}
                    </span>
                    <span className="figures font-bold text-emerald-600 dark:text-emerald-400">
                      {formatPrice(calculateItemTotal(item.baseMonthlyEGP, item.months))}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Summary & Payment Choice */}
            <div className="border-t border-current/10 pt-4 mt-4 space-y-3">
              {/* Promo code */}
              <form onSubmit={handleApplyPromo} className="flex gap-2">
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder={isAr ? 'كود الخصم (جرب NUZUL2026)' : 'Promo Code (try NUZUL2026)'}
                  className={`flex-1 rounded-xl border px-3 py-1.5 text-xs focus:border-emerald-500 focus:outline-none ${
                    isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
                <button
                  type="submit"
                  className="btn btn-secondary py-1.5 px-3 text-xs font-semibold cursor-pointer"
                >
                  {isAr ? 'تطبيق' : 'Apply'}
                </button>
              </form>

              {promoApplied && (
                <div className="flex items-center gap-1.5 text-xs font-semibold text-emerald-500">
                  <CheckCircle className="h-3.5 w-3.5" />
                  <span>{isAr ? 'تم تطبيق خصم 10% بنجاح!' : '10% Promo discount applied!'}</span>
                </div>
              )}

              {/* Totals */}
              <div className="space-y-1.5 text-xs border-t border-current/10 pt-3">
                <div className="flex justify-between text-slate-400">
                  <span>{isAr ? 'المجموع الفرعي:' : 'Subtotal:'}</span>
                  <span className="figures">{formatPrice(rawSubtotalEGP)}</span>
                </div>
                {promoApplied && (
                  <div className="flex justify-between text-emerald-500 font-semibold">
                    <span>{isAr ? 'خصم البروموكود:' : 'Discount:'}</span>
                    <span className="figures">-10%</span>
                  </div>
                )}
                <div className="flex justify-between text-sm font-black pt-1 border-t border-current/10">
                  <span>{isAr ? 'المبلغ الإجمالي:' : 'Grand Total:'}</span>
                  <span className="figures text-emerald-600 dark:text-emerald-400">{formatPrice(finalTotalEGP)}</span>
                </div>
              </div>

              {/* Payment Method Selector */}
              <div className="pt-2">
                <label className="text-[11px] text-slate-400 block mb-1.5 font-bold">
                  {isAr ? 'اختر طريقة الدفع الفورية في مصر:' : 'Select Instant Payment Method:'}
                </label>
                <div className="grid grid-cols-3 gap-1.5 text-[11px] font-mono font-bold">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('instapay')}
                    className={`flex items-center justify-center gap-1.5 rounded-xl border p-2 text-center transition-all cursor-pointer ${
                      paymentMethod === 'instapay'
                        ? 'border-purple-500 bg-gradient-to-r from-[#380e3e] to-[#200524] text-white ring-1 ring-purple-500 shadow-sm'
                        : isDark
                        ? 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    <InstaPayLogo size="sm" variant="wordmark" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('vodafone')}
                    className={`rounded-xl border p-2 text-center transition-all cursor-pointer ${
                      paymentMethod === 'vodafone'
                        ? 'border-red-500 bg-red-500/20 text-red-600 dark:text-red-300 ring-1 ring-red-500'
                        : isDark
                        ? 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    Vodafone
                  </button>
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('card')}
                    className={`rounded-xl border p-2 text-center transition-all cursor-pointer ${
                      paymentMethod === 'card'
                        ? 'border-emerald-500 bg-emerald-500/20 text-emerald-600 dark:text-emerald-300 ring-1 ring-emerald-500'
                        : isDark
                        ? 'border-white/10 bg-white/5 text-slate-400 hover:text-white'
                        : 'border-slate-200 bg-slate-50 text-slate-600'
                    }`}
                  >
                    Card
                  </button>
                </div>
              </div>

              {/* Checkout Button */}
              <button
                type="button"
                onClick={handleCheckout}
                disabled={isCheckingOut}
                className="btn btn-primary w-full py-3 text-xs font-bold uppercase tracking-wider cursor-pointer shadow-lg shadow-emerald-500/20"
              >
                <span>
                  {isCheckingOut
                    ? isAr
                      ? 'جاري تجهيز الفاتورة...'
                      : 'Processing Order...'
                    : paymentMethod === 'instapay'
                    ? isAr
                      ? 'متابعة الدفع عبر إنستاباي'
                      : 'Pay via InstaPay'
                    : paymentMethod === 'vodafone'
                    ? isAr
                      ? 'متابعة الدفع عبر فودافون كاش'
                      : 'Pay via Vodafone Cash'
                    : isAr
                    ? 'إتمام الحجز وتفعيل الخادم'
                    : 'Complete Order & Deploy'}
                </span>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
