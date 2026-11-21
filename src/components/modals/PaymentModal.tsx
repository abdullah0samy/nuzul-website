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
  Receipt,
  Loader2,
  AlertCircle,
} from 'lucide-react';
import { InstaPayLogo } from '../common/InstaPayLogo';

type PaymentMethod = 'instapay' | 'vodafone' | 'fawry' | 'payment_link' | 'bank';

interface SubmittedReceipt {
  orderRef: string;
  createdAt: string;
  totalEGP: number;
  transferRef?: string;
}

export const PaymentModal: React.FC = () => {
  const {
    lang,
    currency,
    cart,
    clearCart,
    formatPrice,
    isPaymentModalOpen,
    setIsPaymentModalOpen,
  } = useApp();

  const [selectedMethod, setSelectedMethod] = useState<PaymentMethod>('instapay');
  const [referenceNumber, setReferenceNumber] = useState('');
  const [clientName, setClientName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [clientPhone, setClientPhone] = useState('');
  const [clientEmail, setClientEmail] = useState('');
  const [copiedText, setCopiedText] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [receipt, setReceipt] = useState<SubmittedReceipt | null>(null);

  if (!isPaymentModalOpen) return null;

  const totalEGP = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  const handleConfirmOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (cart.length === 0) {
      setSubmitError(
        lang === 'ar' ? 'سلة الطلبات فارغة، يرجى إضافة خدمة أولاً.' : 'Your cart is empty.'
      );
      return;
    }

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const res = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          clientName,
          companyName,
          clientPhone,
          clientEmail,
          paymentMethod: selectedMethod,
          referenceNumber,
          currency,
          lang,
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            type: item.type,
            price: item.price,
            quantity: item.quantity || 1,
            billingCycle: item.billingCycle || 'one-time',
            details: item.details,
          })),
        }),
      });

      const data = await res.json();
      if (!res.ok || !data.ok) {
        const firstFieldErr = data.fieldErrors ? Object.values(data.fieldErrors)[0] : null;
        setSubmitError(
          String(
            firstFieldErr ||
              data.message ||
              (lang === 'ar'
                ? 'تعذر تسجيل الطلب، يرجى مراجعة البيانات المدخلة.'
                : 'Unable to submit order. Please check your details.')
          )
        );
        return;
      }

      setReceipt({
        orderRef: data.orderRef,
        createdAt: data.createdAt,
        totalEGP: data.totalEGP,
        transferRef: referenceNumber.trim() || undefined,
      });
      clearCart();
    } catch {
      setSubmitError(
        lang === 'ar'
          ? 'حصل مشكلة في الاتصال بالسيرفر، جرب تاني من فضلك.'
          : 'Network error while submitting order. Please try again.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    setIsPaymentModalOpen(false);
    setReceipt(null);
    setSubmitError(null);
    setReferenceNumber('');
  };

  return (
    <div
      className="fixed inset-0 z-[80] flex items-center justify-center p-4 overflow-y-auto"
      data-testid="payment-modal"
    >
      <div onClick={handleClose} className="fixed inset-0 bg-overlay backdrop-blur-sm" />

      <div className="relative w-full max-w-3xl glass-panel shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-token flex items-center justify-between bg-surface-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent">
              <Receipt className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-main">
                {lang === 'ar'
                  ? 'تأكيد الطلب وطريقة الدفع'
                  : 'Order Confirmation & Billing'}
              </h3>
              <p className="text-xs text-muted">
                {lang === 'ar'
                  ? 'اختار طريقة الدفع المناسبة وسجّل بياناتك لتأكيد الطلب وإصدار الفاتورة الضريبية'
                  : 'Select your preferred billing method to record your order and receive your official invoice'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleClose}
            aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
            className="min-h-[40px] min-w-[40px] inline-flex items-center justify-center rounded-lg bg-surface border border-token text-muted hover-text-main transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {receipt ? (
          <div className="p-8 md:p-10 text-center space-y-5" data-testid="order-receipt">
            <div className="w-16 h-16 rounded-full bg-success-soft border border-success flex items-center justify-center text-success mx-auto">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold text-main">
              {lang === 'ar'
                ? 'تم تسجيل طلبك بنجاح'
                : 'Your Order Has Been Recorded'}
            </h4>
            <p className="text-sm text-muted max-w-lg mx-auto leading-relaxed">
              {lang === 'ar'
                ? 'تم تسجيل طلبك عند فريق التشغيل والمبيعات. هيتواصل معاك مهندس مختص على الواتساب أو الإيميل لتأكيد الدفع وتسليم بيانات السيرفر أو الخدمة.'
                : 'Your order has been logged with our provisioning and billing team. An engineer will reach out via WhatsApp or email to finalize activation.'}
            </p>
            <div className="p-4 rounded-xl bg-surface border border-token max-w-md mx-auto text-xs text-muted space-y-1.5">
              <div className="flex items-center justify-between gap-2">
                <span>{lang === 'ar' ? 'رقم الطلب المرجعي:' : 'Order Reference:'}</span>
                <span className="text-accent font-bold ltr-num" data-testid="order-ref-code">
                  {receipt.orderRef}
                </span>
              </div>
              <div className="flex items-center justify-between gap-2">
                <span>{lang === 'ar' ? 'الإجمالي المسجّل:' : 'Recorded Total:'}</span>
                <span className="text-main font-bold ltr-num">
                  {formatPrice(receipt.totalEGP)}
                </span>
              </div>
              {receipt.transferRef && (
                <div className="flex items-center justify-between gap-2">
                  <span>{lang === 'ar' ? 'مرجع التحويل:' : 'Transfer Ref:'}</span>
                  <span className="text-main ltr-num">{receipt.transferRef}</span>
                </div>
              )}
            </div>
            <button
              type="button"
              onClick={handleClose}
              className="min-h-[44px] px-8 py-3 rounded-xl btn-primary font-bold text-sm"
            >
              {lang === 'ar' ? 'العودة إلى الموقع' : 'Return to Website'}
            </button>
          </div>
        ) : (
          <div className="p-5 sm:p-6 grid grid-cols-1 lg:grid-cols-12 gap-6 max-h-[78vh] overflow-y-auto">
            {/* Payment Methods Column */}
            <div className="lg:col-span-5 space-y-2.5">
              <div className="text-xs font-bold text-muted mb-2">
                {lang === 'ar' ? '1. اختار طريقة الدفع:' : '1. Choose Billing Method:'}
              </div>

              <button
                type="button"
                onClick={() => setSelectedMethod('instapay')}
                className={`w-full p-3.5 rounded-xl border text-start transition-colors flex items-center justify-between ${
                  selectedMethod === 'instapay'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="flex items-center gap-3">
                  <InstaPayLogo size={26} />
                  <div>
                    <div className="text-sm font-bold text-main">InstaPay Egypt</div>
                    <div className="text-[11px] text-muted">
                      {lang === 'ar' ? 'تحويل بنكي مباشر عبر إنستا باي' : 'Direct IPN Bank Transfer'}
                    </div>
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('vodafone')}
                className={`w-full p-3.5 rounded-xl border text-start transition-colors flex items-center gap-3 ${
                  selectedMethod === 'vodafone'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-danger-soft text-danger flex items-center justify-center shrink-0">
                  <Smartphone className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-main">Vodafone Cash</div>
                  <div className="text-[11px] text-muted">
                    {lang === 'ar' ? 'المحافظ الإلكترونية داخل مصر' : 'Egyptian Mobile Wallets'}
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('payment_link')}
                className={`w-full p-3.5 rounded-xl border text-start transition-colors flex items-center gap-3 ${
                  selectedMethod === 'payment_link'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-accent-soft text-accent flex items-center justify-center shrink-0">
                  <CreditCard className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-main">
                    {lang === 'ar' ? 'رابط دفع إلكتروني (Visa / MC)' : 'Secure Card Payment Link'}
                  </div>
                  <div className="text-[11px] text-muted">
                    {lang === 'ar'
                      ? 'إرسال رابط دفع مؤمّن عبر البريد والواتساب'
                      : 'Hosted 3DS payment link via email/WhatsApp'}
                  </div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('bank')}
                className={`w-full p-3.5 rounded-xl border text-start transition-colors flex items-center gap-3 ${
                  selectedMethod === 'bank'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-surface-2 text-accent flex items-center justify-center shrink-0">
                  <Landmark className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-sm font-bold text-main">
                    {lang === 'ar' ? 'تحويل بنكي رسمي للشركات' : 'Corporate Bank Wire'}
                  </div>
                  <div className="text-[11px] text-muted">CIB Egypt · Tax Invoice</div>
                </div>
              </button>

              <button
                type="button"
                onClick={() => setSelectedMethod('fawry')}
                className={`w-full p-3.5 rounded-xl border text-start transition-colors flex items-center gap-3 ${
                  selectedMethod === 'fawry'
                    ? 'bg-accent-soft border-accent text-main'
                    : 'bg-surface border-token text-muted hover-surface-2'
                }`}
              >
                <div className="w-7 h-7 rounded-lg bg-warning-soft text-warning flex items-center justify-center font-bold text-[10px] shrink-0">
                  Fawry
                </div>
                <div>
                  <div className="text-sm font-bold text-main">Fawry Pay</div>
                  <div className="text-[11px] text-muted">
                    {lang === 'ar' ? 'إصدار كود دفع فوري للطلب' : 'Fawry Reference Billing'}
                  </div>
                </div>
              </button>
            </div>

            {/* Order Summary & Confirmation Form */}
            <div className="lg:col-span-7 bg-surface rounded-2xl p-5 border border-token">
              <form onSubmit={handleConfirmOrder} className="space-y-4">
                <div className="flex items-center justify-between pb-3.5 border-b border-token">
                  <div>
                    <div className="text-xs text-muted">
                      {lang === 'ar' ? 'إجمالي الطلب:' : 'Order Total:'}
                    </div>
                    <div className="text-2xl font-bold text-accent ltr-num">
                      {formatPrice(totalEGP)}
                    </div>
                  </div>
                  <div className="text-end text-xs text-muted ltr-num">
                    {cart.reduce((sum, i) => sum + (i.quantity || 1), 0)}{' '}
                    {lang === 'ar' ? 'بنود' : 'items'}
                  </div>
                </div>

                {/* Method Details */}
                {selectedMethod === 'instapay' && (
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-token flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] text-muted">InstaPay Address (IPA)</div>
                      <div className="text-sm font-bold text-main ltr-num">nuzultech@instapay</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('nuzultech@instapay', 'ipa')}
                      className="px-3 py-1.5 rounded-lg bg-surface text-xs text-main hover-surface-2 border border-token inline-flex items-center gap-1.5"
                    >
                      {copiedText === 'ipa' ? (
                        <Check className="w-3.5 h-3.5 text-success" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedText === 'ipa' ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ' : 'Copy')}</span>
                    </button>
                  </div>
                )}

                {selectedMethod === 'vodafone' && (
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-token flex items-center justify-between gap-2">
                    <div>
                      <div className="text-[11px] text-muted">Vodafone Cash</div>
                      <div className="text-sm font-bold text-main ltr-num">+20 101 1678830</div>
                    </div>
                    <button
                      type="button"
                      onClick={() => handleCopy('01011678830', 'vf')}
                      className="px-3 py-1.5 rounded-lg bg-surface text-xs text-main hover-surface-2 border border-token inline-flex items-center gap-1.5"
                    >
                      {copiedText === 'vf' ? (
                        <Check className="w-3.5 h-3.5 text-success" />
                      ) : (
                        <Copy className="w-3.5 h-3.5" />
                      )}
                      <span>{copiedText === 'vf' ? (lang === 'ar' ? 'تم النسخ' : 'Copied') : (lang === 'ar' ? 'نسخ' : 'Copy')}</span>
                    </button>
                  </div>
                )}

                {selectedMethod === 'payment_link' && (
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-token text-xs text-muted leading-relaxed">
                    {lang === 'ar'
                      ? 'لحماية بيانات بطاقتك، لا نطلب إدخال أرقام البطاقات داخل النموذج؛ فور تسجيل الطلب نرسل لك رابط دفع إلكتروني مؤمّن (3D Secure) باسم شركتك.'
                      : 'For your security, we never collect raw card details directly here. Once submitted, we issue a hosted 3D-Secure payment link tied to your official invoice.'}
                  </div>
                )}

                {selectedMethod === 'bank' && (
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-token space-y-1 text-xs">
                    <div className="font-bold text-accent">
                      {lang === 'ar' ? 'تحويل بنكي رسمي (CIB Egypt)' : 'Corporate Wire (CIB Egypt)'}
                    </div>
                    <div className="text-main">
                      {lang === 'ar'
                        ? 'يتم إرسال بيانات الحساب والفاتورة الضريبية الرسمية فور تأكيد الطلب.'
                        : 'Full IBAN and official tax invoice will be issued upon order confirmation.'}
                    </div>
                  </div>
                )}

                {selectedMethod === 'fawry' && (
                  <div className="p-3.5 rounded-xl bg-surface-2 border border-token text-xs text-muted leading-relaxed">
                    {lang === 'ar'
                      ? 'بعد تسجيل الطلب يصدر فريق الحسابات كود دفع فوري مرتبط برقم طلبك ويُرسل لك على الواتساب.'
                      : 'Our billing desk generates a dedicated Fawry payment code linked to your order reference via WhatsApp.'}
                  </div>
                )}

                {/* Customer Info */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] font-semibold text-main mb-1">
                      {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <input
                      type="text"
                      required
                      value={clientName}
                      onChange={(e) => setClientName(e.target.value)}
                      placeholder={lang === 'ar' ? 'أحمد محمود' : 'Full Name'}
                      className="w-full px-3.5 py-2.5 text-xs input-token"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-main mb-1">
                      {lang === 'ar' ? 'اسم الشركة (اختياري)' : 'Company (Optional)'}
                    </label>
                    <input
                      type="text"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder={lang === 'ar' ? 'اسم الشركة أو الجهة' : 'Company Name'}
                      className="w-full px-3.5 py-2.5 text-xs input-token"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] font-semibold text-main mb-1">
                      {lang === 'ar' ? 'رقم الهاتف / واتساب *' : 'WhatsApp / Phone *'}
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
                  <div>
                    <label className="block text-[11px] font-semibold text-main mb-1">
                      {lang === 'ar' ? 'البريد الإلكتروني (للفاتورة)' : 'Email (for Invoice)'}
                    </label>
                    <input
                      type="email"
                      dir="ltr"
                      value={clientEmail}
                      onChange={(e) => setClientEmail(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full px-3.5 py-2.5 text-xs input-token ltr-num"
                    />
                  </div>
                </div>

                {(selectedMethod === 'instapay' || selectedMethod === 'vodafone' || selectedMethod === 'bank') && (
                  <div>
                    <label className="block text-[11px] font-semibold text-main mb-1">
                      {lang === 'ar'
                        ? 'رقم العملية المرجعي للتحويل (اختياري)'
                        : 'Transfer Reference Number (Optional)'}
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

                {submitError && (
                  <div
                    role="alert"
                    className="p-3 rounded-xl bg-danger-soft border border-danger text-danger text-xs flex items-center gap-2"
                  >
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{submitError}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting || cart.length === 0}
                  data-testid="payment-submit-btn"
                  className="w-full min-h-[46px] py-3 rounded-xl btn-primary font-bold text-sm inline-flex items-center justify-center gap-2 disabled:opacity-60"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-4 h-4 animate-spin" />
                  ) : (
                    <ShieldCheck className="w-4 h-4" />
                  )}
                  <span>
                    {isSubmitting
                      ? lang === 'ar'
                        ? 'جاري تسجيل الطلب...'
                        : 'Recording Order...'
                      : lang === 'ar'
                      ? 'تأكيد وتسجيل الطلب'
                      : 'Confirm & Submit Order'}
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
