import React, { useState } from 'react';
import { X, Copy, Check, ExternalLink, ShieldCheck, ArrowRight, ArrowLeft, Phone, CreditCard, MessageCircle } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { InstaPayLogo } from '../common/InstaPayLogo';

export const PaymentModal: React.FC = () => {
  const { activePaymentModal, setActivePaymentModal, locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [copiedType, setCopiedType] = useState<string | null>(null);

  if (!activePaymentModal) return null;

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopiedType(type);
    setTimeout(() => setCopiedType(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
      <div
        className={`relative w-full max-w-lg overflow-hidden rounded-3xl border p-6 sm:p-8 shadow-2xl transition-colors ${
          isDark
            ? 'border-emerald-500/30 bg-[#0a111c] text-white'
            : 'border-slate-200 bg-white text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setActivePaymentModal(null)}
          className={`absolute top-5 right-5 rtl:right-auto rtl:left-5 p-1.5 rounded-full transition-colors cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Modal Type: InstaPay */}
        {activePaymentModal === 'instapay' && (
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#4A154B] to-[#200524] px-3.5 py-2 shadow-lg border border-purple-500/30">
                <InstaPayLogo size="md" variant="wordmark" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white flex items-center gap-1.5">
                  <span>{isAr ? 'الدفع المباشر عبر' : 'Direct Payment via'}</span>
                  <InstaPayLogo size="md" variant="wordmark" />
                </h3>
                <p className="text-xs text-emerald-400 font-medium">
                  {isAr ? 'التحويل اللحظي المعتمد من البنك المركزي المصري' : 'Instant Transfer Powered by InstaPay Egypt'}
                </p>
              </div>
            </div>

            {/* Main Interactive Callout */}
            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isDark ? 'border-purple-500/30 bg-purple-950/20 text-white' : 'border-purple-200 bg-purple-50 text-slate-900'
              }`}
            >
              <div className="text-[11px] font-mono uppercase text-purple-600 dark:text-purple-300 font-bold">
                {isAr ? 'بيانات التحويل عبر إنستاباي (InstaPay):' : 'InstaPay Payment Details:'}
              </div>

              {/* IPA Address */}
              <div className="mt-3">
                <div className="text-[11px] font-medium text-slate-400 mb-1">
                  {isAr ? 'عنوان الدفع اللحظي (IPA):' : 'Payment Address (IPA):'}
                </div>
                <div
                  className={`flex items-center justify-between gap-2 rounded-xl border p-3 ${
                    isDark ? 'border-purple-400/30 bg-black/40' : 'border-purple-200 bg-white'
                  }`}
                >
                  <span className="font-mono text-base font-bold text-purple-600 dark:text-purple-300" dir="ltr">
                    {NUZUL_CONTACT.instapayAddress}
                  </span>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(NUZUL_CONTACT.instapayAddress, 'ipa')}
                    className="btn btn-secondary inline-flex h-8 items-center gap-1 px-3 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedType === 'ipa' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span>{isAr ? 'تم النسخ' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{isAr ? 'نسخ العنوان' : 'Copy IPA'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Mobile Number for InstaPay */}
              <div className="mt-3">
                <div className="text-[11px] font-medium text-slate-400 mb-1">
                  {isAr ? 'أو التحويل برقم الموبايل المسجل بإنستاباي:' : 'Or via Registered InstaPay Mobile Number:'}
                </div>
                <div
                  className={`flex items-center justify-between gap-2 rounded-xl border p-3 ${
                    isDark ? 'border-purple-400/30 bg-black/40' : 'border-purple-200 bg-white'
                  }`}
                >
                  <span className="font-mono text-base font-bold text-purple-600 dark:text-purple-300" dir="ltr">
                    {NUZUL_CONTACT.instapayPhone}
                  </span>

                  <button
                    type="button"
                    onClick={() => copyToClipboard(NUZUL_CONTACT.instapayPhone, 'instapayPhone')}
                    className="btn btn-secondary inline-flex h-8 items-center gap-1 px-3 text-[11px] font-bold cursor-pointer"
                  >
                    {copiedType === 'instapayPhone' ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-500" />
                        <span>{isAr ? 'تم النسخ' : 'Copied'}</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>{isAr ? 'نسخ الرقم' : 'Copy Number'}</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Instructions */}
              <div className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <div className="font-bold text-slate-800 dark:text-slate-200">{isAr ? 'خطوات التحويل السريع:' : 'Quick Steps:'}</div>
                <div>1. {isAr ? 'افتح تطبيق إنستاباي على هاتفك' : 'Open the InstaPay app on your phone'}</div>
                <div>2. {isAr ? `اختر "إرسال نقود" برقم الهاتف (${NUZUL_CONTACT.instapayPhone}) أو عنوان الـ IPA` : `Select Send Money using Phone (${NUZUL_CONTACT.instapayPhone}) or IPA`}</div>
                <div>3. {isAr ? 'اكتب المبلغ واضغط تأكيد' : 'Enter plan amount and confirm'}</div>
                <div>4. {isAr ? 'أرسل لنا صورة الإيصال عبر واتساب لتفعيل الخدمة فوراً' : 'Share screenshot on WhatsApp for instant provisioning'}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${NUZUL_CONTACT.whatsappUrl}&text=${encodeURIComponent(
                  isAr
                    ? `مرحباً نُزول تِك، قمت بالتحويل عبر إنستاباي إلى (${NUZUL_CONTACT.instapayAddress} / ${NUZUL_CONTACT.instapayPhone}) وأود تأكيد تفعيل الخدمة.`
                    : `Hello Nuzul Tech, I sent a payment via InstaPay to (${NUZUL_CONTACT.instapayAddress} / ${NUZUL_CONTACT.instapayPhone}) and would like to confirm activation.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1 w-full py-3 text-xs font-bold gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{isAr ? 'إرسال إيصال التحويل عبر واتساب' : 'Send Receipt via WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={() => setActivePaymentModal(null)}
                className="btn btn-secondary w-full sm:w-auto py-3 px-5 text-xs font-bold cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        )}

        {/* Modal Type: Vodafone Cash */}
        {activePaymentModal === 'vodafone' && (
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 font-bold text-white shadow-lg">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {isAr ? 'الدفع عبر فودافون كاش (Vodafone Cash)' : 'Vodafone Cash Direct Wallet'}
                </h3>
                <p className="text-xs text-red-600 dark:text-red-400 font-medium">
                  {isAr ? 'تحويل لحظي مباشر لمحفظة الشركة' : 'Instant mobile wallet payment'}
                </p>
              </div>
            </div>

            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isDark ? 'border-red-500/30 bg-red-950/20 text-white' : 'border-red-200 bg-red-50 text-slate-900'
              }`}
            >
              <div className="text-[11px] font-mono uppercase text-red-600 dark:text-red-300 font-bold">
                {isAr ? 'رقم محفظة فودافون كاش المعتمد:' : 'Official Vodafone Cash Wallet Number:'}
              </div>

              <div
                className={`mt-2 flex items-center justify-between gap-2 rounded-xl border p-3 ${
                  isDark ? 'border-red-400/30 bg-black/40' : 'border-red-200 bg-white'
                }`}
              >
                <a
                  href={`tel:*9*7*${NUZUL_CONTACT.vodafoneCash}*0#`}
                  className="font-mono text-lg font-bold text-red-600 dark:text-red-400 hover:underline"
                  dir="ltr"
                >
                  {NUZUL_CONTACT.vodafoneCash}
                </a>

                <button
                  type="button"
                  onClick={() => copyToClipboard(NUZUL_CONTACT.vodafoneCash, 'vodafone')}
                  className="btn btn-secondary inline-flex h-8 items-center gap-1 px-3 text-[11px] font-bold cursor-pointer"
                >
                  {copiedType === 'vodafone' ? (
                    <>
                      <Check className="h-3.5 w-3.5 text-emerald-500" />
                      <span>{isAr ? 'تم النسخ' : 'Copied'}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="h-3.5 w-3.5" />
                      <span>{isAr ? 'نسخ الرقم' : 'Copy Number'}</span>
                    </>
                  )}
                </button>
              </div>

              {/* Instructions */}
              <div className="mt-4 space-y-1.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <div className="font-bold text-slate-800 dark:text-slate-200">{isAr ? 'طريقة التحويل من خط فودافون:' : 'How to send money:'}</div>
                <div>1. {isAr ? `اطلب كود التحويل السريع: *9*7*${NUZUL_CONTACT.vodafoneCash}*المبلغ#` : `Dial: *9*7*${NUZUL_CONTACT.vodafoneCash}*Amount#`}</div>
                <div>2. {isAr ? 'أدخل الرقم السري لمحفظتك لتأكيد التحويل' : 'Enter your Vodafone Cash wallet PIN to confirm'}</div>
                <div>3. {isAr ? 'احفظ رسالة التأكيد وأرسلها عبر واتساب لتفعيل سيرفرك أو خدمتك' : 'Share the confirmation SMS on WhatsApp for instant deployment'}</div>
              </div>
            </div>

            {/* Actions */}
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href={`${NUZUL_CONTACT.whatsappUrl2}&text=${encodeURIComponent(
                  isAr
                    ? `مرحباً نُزول تِك، قمت بالتحويل عبر فودافون كاش إلى ${NUZUL_CONTACT.vodafoneCash} لتفعيل الخدمة.`
                    : `Hello Nuzul Tech, I transferred via Vodafone Cash to ${NUZUL_CONTACT.vodafoneCash} to activate my service.`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary flex-1 w-full py-3 text-xs font-bold gap-2 cursor-pointer shadow-lg"
              >
                <MessageCircle className="h-4 w-4" />
                <span>{isAr ? 'تأكيد التحويل عبر واتساب' : 'Confirm via WhatsApp'}</span>
              </a>

              <button
                type="button"
                onClick={() => setActivePaymentModal(null)}
                className="btn btn-secondary w-full sm:w-auto py-3 px-5 text-xs font-bold cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        )}

        {/* Modal Type: Credit/Debit Cards */}
        {activePaymentModal === 'card' && (
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 font-bold text-white shadow-lg">
                <CreditCard className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">
                  {isAr ? 'الدفع بالبطاقات البنكية (Visa & Mastercard)' : 'Debit & Credit Cards Checkout'}
                </h3>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                  {isAr ? 'بوابة دفع آمنة ومشفرة 3D Secure' : '3D Secure Encrypted Checkout'}
                </p>
              </div>
            </div>

            <div
              className={`mt-6 rounded-2xl border p-5 ${
                isDark ? 'border-blue-500/30 bg-blue-950/20 text-white' : 'border-blue-200 bg-blue-50 text-slate-900'
              }`}
            >
              <div className="space-y-2 text-xs text-slate-600 dark:text-slate-300 leading-relaxed">
                <p>
                  {isAr
                    ? 'نقبل جميع بطاقات فيزا وماستركارد الصادرة من البنوك المصرية والدولية مع خصم مباشر بالجنيه المصري (EGP) أو الدولار.'
                    : 'We accept all Visa & Mastercard debit/credit cards issued by Egyptian and international banks with zero conversion fee.'}
                </p>
                <p className="font-semibold text-slate-800 dark:text-slate-200">
                  {isAr
                    ? 'يمكنك إضافة باقتك أو سيرفرك إلى السلة والمتابعة إلى الدفع الآمن مباشرة.'
                    : 'Add your chosen plan to your cart and proceed directly to secure checkout.'}
                </p>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
              <a
                href="#pricing"
                onClick={() => setActivePaymentModal(null)}
                className="btn btn-primary flex-1 w-full py-3 text-xs font-bold gap-2 cursor-pointer shadow-lg"
              >
                <span>{isAr ? 'استعراض الخطط واختيار السيرفر' : 'Browse Plans & Deploy'}</span>
              </a>

              <button
                type="button"
                onClick={() => setActivePaymentModal(null)}
                className="btn btn-secondary w-full sm:w-auto py-3 px-5 text-xs font-bold cursor-pointer"
              >
                {isAr ? 'إغلاق' : 'Close'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
