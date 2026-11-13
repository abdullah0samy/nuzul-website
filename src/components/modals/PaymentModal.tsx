import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import {
  X,
  CreditCard,
  Smartphone,
  Landmark,
  CheckCircle2,
  Copy,
  Check,
  ShieldCheck,
  Lock,
  Receipt
} from 'lucide-react';
import { InstaPayLogo } from '../common/InstaPayLogo';

type PaymentMethod = 'instapay' | 'vodafone' | 'fawry' | 'card' | 'bank';

export const PaymentModal: React.FC = () => {
  const {
    lang,
    cart,
    clearCart,
    formatPrice,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
  } = useApp();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('instapay');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isPaymentModalOpen) return null;

  const totalEGP = cart.reduce((sum, item) => sum + item.price, 0);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleConfirmPayment = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      clearCart();
    }, 600);
  };

  const handleClose = () => {
    setIsPaymentModalOpen(false);
    setIsSubmitted(false);
    setReferenceNumber('');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 overflow-y-auto">
      <div
        onClick={handleClose}
        className="fixed inset-0 bg-overlay backdrop-blur-xs"
      />

      <div className="relative w-full max-w-3xl rounded-2xl bg-surface border border-token shadow-xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-6 border-b border-token flex items-center justify-between bg-surface-2">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-main">
                {lang === 'ar'
                  ? 'بوابة الدفع وإتمام التعاقد المؤسسي'
                  : 'Enterprise Checkout & Payment Gateway'}
              </h3>
              <p className="text-xs text-muted">
                {lang === 'ar'
                  ? 'اختر وسيلة الدفع المناسبة لك في مصر أو الشرق الأوسط لتفعيل خدماتك فوراً'
                  : 'Select your preferred payment method in Egypt or MENA for instant activation'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
            className="p-2 rounded-lg bg-surface text-muted hover-text-main transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {isSubmitted ? (
          <div className="p-8 md:p-12 text-center space-y-5">
            <div className="w-20 h-20 rounded-full bg-success-soft border border-success flex items-center justify-center text-success mx-auto">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h4 className="text-2xl font-bold text-main">
              {lang === 'ar'
                ? 'تم استلام طلب التفعيل وإشعار الدفع بنجاح!'
                : 'Payment Notification & Order Received!'}
            </h4>
            <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'يقوم قسم الحسابات والتشغيل السحابي بمراجعة المعاملة الآن. ستصلك بيانات الخادم والفاتورة الضريبية الرسمية خلال أقل من 15 دقيقة عبر البريد الإلكتروني والواتساب.'
                : 'Our billing and cloud provisioning team is verifying your transaction. Server credentials and official tax invoice will be sent within 15 minutes.'}
            </p>
            <div className="p-4 rounded-xl bg-page border border-token max-w-md mx-auto text-xs text-muted space-y-1">
              <div>
                {lang === 'ar' ? 'رقم الطلب المرجعي:' : 'Order Reference:'}{' '}
                <span className="text-accent font-bold ltr-num">#NZL-{Math.floor(100000 + Math.random() * 900000)}</span>
              </div>
              {referenceNumber && (
                <div>
                  {lang === 'ar' ? 'مرجع التحويل:' : 'Transfer Ref:'}{' '}
                  <span className="text-main ltr-num">{referenceNumber}</span>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="px-8 py-3.5 rounded-xl btn-primary font-bold text-sm"
            >
              {lang === 'ar' ? 'العودة إلى الموقع' : 'Return to Website'}
            </button>
          </div>
        ) : (
          <div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Payment Methods Column */}
            <div className="lg:col-span-5 space-y-3">
              <div className="text-xs font-bold text-muted mb-2">
                {lang === 'ar' ? '1. اختر وسيلة الدفع:' : '1. Select Payment Method:'}
              </div>

              <button
                type="button"
                onClick={() => setSelectedMethod('instapay')}
                className={`w-full p-3.5 rounded-xl border text-start transition-all flex items-center justify-between ${
                  selectedMethod === 'instapay'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <InstaPayLogo size={28} />
                  <div>
                    <div className="text-sm font-bold text-main">InstaPay Egypt</div>
                    <div className="text-[11px] text-muted">
                      {lang === 'ar' ? 'تحويل لحظي عبر تطبيق إنستا باي' : 'Instant IPN Bank Transfer'}
                    </div>
                  </div>
                </div>
                <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-accent-soft text-accent">
                  {lang === 'ar' ? 'الأسرع' : 'Fastest'}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('vodafone')}
                className={`w-full p-3.5 rounded-xl border text-start transition-all flex items-center justify-between ${
                  selectedMethod === 'vodafone'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-danger-soft text-danger flex items-center justify-center font-bold text-xs">
                    <Smartphone className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-main">Vodafone Cash</div>
                    <div className="text-[11px] text-muted">
                      {lang === 'ar' ? 'فودافون كاش وكافة المحافظ الذكية' : 'Vodafone Cash & Mobile Wallets'}
                    </div>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('fawry')}
                className={`w-full p-3.5 rounded-xl border text-start transition-all flex items-center justify-between ${
                  selectedMethod === 'fawry'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-warning-soft text-warning flex items-center justify-center font-bold text-xs">
                    Fawry
                  </div>
                  <div>
                    <div className="text-sm font-bold text-main">Fawry Pay</div>
                    <div className="text-[11px] text-muted">
                      {lang === 'ar' ? 'كود دفع فوري من أي منفذ أو تطبيق' : 'Fawry Reference Code'}
                    </div>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('card')}
                className={`w-full p-3.5 rounded-xl border text-start transition-all flex items-center justify-between ${
                  selectedMethod === 'card'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-accent-soft text-accent flex items-center justify-center">
                    <CreditCard className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-main">Visa / Mastercard</div>
                    <div className="text-[11px] text-muted">
                      {lang === 'ar' ? 'بطاقات ائتمانية أو خصم مباشر' : 'Credit or Debit Card (3D Secure)'}
                    </div>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('bank')}
                className={`w-full p-3.5 rounded-xl border text-start transition-all flex items-center justify-between ${
                  selectedMethod === 'bank'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-2 text-accent flex items-center justify-center">
                    <Landmark className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-main">
                      {lang === 'ar' ? 'تحويل بنكي رسمي للشركات' : 'Corporate Bank Wire'}
                    </div>
                    <div className="text-[11px] text-muted">CIB / QNB / NBE</div>
                  </div>
                </div>
              </button>
            </div>

            {/* Payment Details & Confirmation Form */}
            <div className="lg:col-span-7 bg-page rounded-2xl p-5 sm:p-6 border border-token flex flex-col justify-between">
              <form onSubmit={handleConfirmPayment} className="space-y-5">
                {/* Summary Banner */}
                <div className="flex items-center justify-between pb-4 border-b border-token">
                  <div>
                    <div className="text-xs text-muted">
                      {lang === 'ar' ? 'إجمالي المبلغ المطلوب سداده:' : 'Total Amount Due:'}
                    </div>
                    <div className="text-2xl font-bold text-accent ltr-num">
                      {formatPrice(totalEGP > 0 ? totalEGP : 550)}
                    </div>
                  </div>
                  <div className="text-end">
                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-accent-soft text-accent text-[11px] font-semibold">
                      <Lock className="w-3 h-3" /> 256-Bit SSL
                    </span>
                  </div>
                </div>

                {/* Dynamic Instructions per Method */}
                {selectedMethod === 'instapay' && (
                  <div className="p-4 rounded-xl bg-surface border border-token space-y-3">
                    <div className="text-xs font-bold text-accent">
                      {lang === 'ar'
                        ? 'بيانات التحويل الفوري عبر تطبيق InstaPay:'
                        : 'InstaPay Instant Transfer Details:'}
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-token">
                      <div>
                        <div className="text-[10px] text-muted">InstaPay Address (IPA)</div>
                        <div className="text-sm font-bold text-main ltr-num">nuzultech@instapay</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('nuzultech@instapay', 'ipa')}
                        className="px-3 py-1.5 rounded-lg bg-surface text-xs text-main hover-surface-2 border border-token flex items-center gap-1.5"
                      >
                        {copiedText === 'ipa' ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'ipa' ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ العنوان' : 'Copy IPA')}</span>
                      </button>
                    </div>
                  </div>
                )}

                {selectedMethod === 'vodafone' && (
                  <div className="p-4 rounded-xl bg-surface border border-token space-y-3">
                    <div className="text-xs font-bold text-danger">
                      {lang === 'ar'
                        ? 'بيانات التحويل عبر محفظة فودافون كاش (Vodafone Cash):'
                        : 'Vodafone Cash Wallet Transfer Details:'}
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-token">
                      <div>
                        <div className="text-[10px] text-muted">Wallet Number</div>
                        <div className="text-sm font-bold text-main ltr-num">0100 000 0000</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('01000000000', 'vf')}
                        className="px-3 py-1.5 rounded-lg bg-surface text-xs text-main hover-surface-2 border border-token flex items-center gap-1.5"
                      >
                        {copiedText === 'vf' ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{copiedText === 'vf' ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ الرقم' : 'Copy')}</span>
                      </button>
                    </div>
                  </div>
                )}

                {selectedMethod === 'fawry' && (
                  <div className="p-4 rounded-xl bg-surface border border-token space-y-2">
                    <div className="text-xs font-bold text-warning">
                      {lang === 'ar' ? 'كود الدفع المرجعي عبر فوري (Fawry Pay):' : 'Fawry Pay Reference Code:'}
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-2 border border-token">
                      <div>
                        <div className="text-[10px] text-muted">Service Code: 78890</div>
                        <div className="text-base font-bold text-warning ltr-num">9482 1104 8832</div>
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy('948211048832', 'fawry')}
                        className="px-3 py-1.5 rounded-lg bg-surface text-xs text-main border border-token flex items-center gap-1.5"
                      >
                        {copiedText === 'fawry' ? <Check className="w-3.5 h-3.5 text-success" /> : <Copy className="w-3.5 h-3.5" />}
                        <span>{lang === 'ar' ? 'نسخ الكود' : 'Copy Code'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {selectedMethod === 'card' && (
                  <div className="space-y-3">
                    <div>
                      <label className="block text-[11px] text-muted mb-1">
                        {lang === 'ar' ? 'رقم البطاقة البنكية (16 رقم)' : 'Card Number'}
                      </label>
                      <input
                        type="text"
                        required
                        dir="ltr"
                        placeholder="4532 •••• •••• ••••"
                        className="w-full px-3.5 py-2.5 text-sm input-token ltr-num"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="block text-[11px] text-muted mb-1">
                          {lang === 'ar' ? 'تاريخ الانتهاء' : 'Expiry Date'}
                        </label>
                        <input
                          type="text"
                          required
                          dir="ltr"
                          placeholder="MM / YY"
                          className="w-full px-3.5 py-2.5 text-sm input-token ltr-num"
                        />
                      </div>
                      <div>
                        <label className="block text-[11px] text-muted mb-1">CVV / CVC</label>
                        <input
                          type="password"
                          required
                          dir="ltr"
                          maxLength={4}
                          placeholder="•••"
                          className="w-full px-3.5 py-2.5 text-sm input-token ltr-num"
                        />
                      </div>
                    </div>
                  </div>
                )}

                {selectedMethod === 'bank' && (
                  <div className="p-4 rounded-xl bg-surface border border-token space-y-2 text-xs">
                    <div className="font-bold text-accent">
                      {lang === 'ar' ? 'الحساب البنكي الرسمي للشركات (CIB Egypt):' : 'Official Corporate Bank Account (CIB Egypt):'}
                    </div>
                    <div className="text-main">
                      {lang === 'ar' ? 'اسم المستفيد: شركة نُزول تِك لتقنية المعلومات' : 'Beneficiary: Nuzul Tech IT Solutions LLC'}
                    </div>
                    <div className="text-muted ltr-num">IBAN: EG890010012900000100048291824</div>
                    <div className="text-muted ltr-num">SWIFT: CIBEEGCX</div>
                  </div>
                )}

                {/* Client Confirmation Fields */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                  <div>
                    <label className="block text-[11px] text-muted mb-1">
                      {lang === 'ar' ? 'اسم العميل / الشركة *' : 'Client / Company Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={lang === 'ar' ? 'الاسم بالكامل' : 'Full Name'}
                      className="w-full px-3.5 py-2.5 text-xs input-token"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-muted mb-1">
                      {lang === 'ar' ? 'رقم الواتساب لاستلام البيانات *' : 'WhatsApp Number *'}
                    </label>
                    <input
                      type="tel"
                      required
                      dir="ltr"
                      value={clientPhone}
                      onChange={(e) => setClientPhone(e.target.value)}
                      placeholder="+20 10..."
                      className="w-full px-3.5 py-2.5 text-xs input-token ltr-num"
                    />
                  </div>
                </div>

                {selectedMethod !== 'card' && (
                  <div>
                    <label className="block text-[11px] text-muted mb-1">
                      {lang === 'ar'
                        ? 'رقم العملية المرجعي أو آخر 4 أرقام من المحول منه (اختياري)'
                        : 'Transaction Reference / Last 4 Digits (Optional)'}
                    </label>
                    <input
                      type="text"
                      dir="ltr"
                      value={referenceNumber}
                      onChange={(e) => setReferenceNumber(e.target.value)}
                      placeholder="e.g. IPN-84920194"
                      className="w-full px-3.5 py-2.5 text-xs input-token ltr-num"
                    />
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl btn-primary font-bold text-sm"
                >
                  <ShieldCheck className="w-5 h-5" />
                  <span>
                    {lang === 'ar'
                      ? 'تأكيد السداد والبدء الفوري في التفعيل'
                      : 'Confirm Payment & Start Instant Activation'}
                  </span>
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
