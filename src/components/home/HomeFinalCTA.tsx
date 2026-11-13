import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { CheckCircle2, MessageCircle, Mail, Loader2 } from 'lucide-react';
import { ScrollReveal } from '../common/MotionPrimitives';

export const HomeFinalCTA: React.FC = () => {
  const { lang } = useApp();
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [need, setNeed] = useState('infrastructure');
  const [turnstileVerified, setTurnstileVerified] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [referenceId, setReferenceId] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) {
      setError(
        lang === 'ar'
          ? 'يرجى إدخال الاسم ورقم الهاتف والبريد الإلكتروني للتواصل.'
          : 'Please enter your name, phone number, and email address.'
      );
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError(
        lang === 'ar'
          ? 'صيغة البريد الإلكتروني غير صحيحة.'
          : 'Please enter a valid email address.'
      );
      return;
    }

    setError('');
    setSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: name.trim(),
          company: company.trim() || (lang === 'ar' ? 'شركة / عميل مباشر' : 'Direct Enterprise Inquiry'),
          phone: phone.trim(),
          email: email.trim(),
          serviceType: need || 'infrastructure',
          details:
            lang === 'ar'
              ? `طلب استشارة سريعة من الصفحة الرئيسية — القطاع: ${need || 'infrastructure'}`
              : `Quick consultation request from Home page — Pillar: ${need || 'infrastructure'}`,
          turnstileVerified,
          website_url: '',
          lang,
        }),
      });
      const data = await response.json();
      if (!response.ok || !data?.ok) {
        setError(
          data?.message ||
            (lang === 'ar'
              ? 'تعذر إرسال الطلب الآن، يرجى المحاولة مرة أخرى.'
              : 'Unable to submit request right now. Please try again.')
        );
      } else {
        setReferenceId(data.referenceId);
      }
    } catch {
      setError(
        lang === 'ar'
          ? 'تعذر الاتصال بالخادم، يرجى التواصل عبر واتساب أو صفحة التواصل.'
          : 'Connection error. Please reach us directly via WhatsApp or the Contact page.'
      );
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section
      data-testid="home-final-cta"
      aria-label={
        lang === 'ar'
          ? 'حجز استشارة هندسية لتقييم البنية التحتية'
          : 'Book an Infrastructure Architecture Consultation'
      }
      className="section-spacing-home bg-hero-band text-hero border-t border-hero"
    >
      <div className="container-nuzul">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Start Column */}
          <ScrollReveal className="lg:col-span-5 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-hero leading-tight">
              {lang === 'ar'
                ? 'تواصل مباشرة مع مهندس حلول البنية التحتية'
                : 'Talk Directly with an Infrastructure Engineer'}
            </h2>
            <p className="text-hero-muted text-base leading-relaxed">
              {lang === 'ar'
                ? 'شاركنا تفاصيل مشروعك أو عدد الفروع لنتواصل معك خلال ساعات العمل الرسمية بعرض سعر مكتوب وجدول تنفيذ محدد.'
                : 'Send your environment details or branch count and a systems engineer will reply during business hours with a written scope and quote.'}
            </p>

            <div className="pt-3 space-y-2.5 border-t border-hero">
              <div>
                <a
                  href={NUZUL_CONTACT.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-semibold text-hero-accent hover:underline"
                >
                  <MessageCircle className="w-4 h-4 shrink-0" />
                  <span>
                    {lang === 'ar' ? 'واتساب مباشر:' : 'Direct WhatsApp:'}{' '}
                    <bdi dir="ltr" className="ltr-num">
                      {NUZUL_CONTACT.phone1}
                    </bdi>
                  </span>
                </a>
              </div>
              <div>
                <a
                  href={`mailto:${NUZUL_CONTACT.email}`}
                  className="inline-flex items-center gap-2 min-h-[44px] text-sm font-medium text-hero-muted hover-text-main transition-colors"
                >
                  <Mail className="w-4 h-4 shrink-0 text-hero-accent" />
                  <bdi dir="ltr" className="ltr-num">
                    {NUZUL_CONTACT.email}
                  </bdi>
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* End Column: Consultation Form Wired to /api/contact */}
          <ScrollReveal className="lg:col-span-7" delay={0.06}>
            <div className="clean-card p-6 sm:p-8 text-main">
              {referenceId ? (
                <div className="p-6 rounded-xl bg-success-soft border border-success text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-success mx-auto" />
                  <h3 className="text-lg font-bold text-main">
                    {lang === 'ar'
                      ? 'تم تسجيل طلب الاستشارة بنجاح'
                      : 'Consultation Request Recorded'}
                  </h3>
                  <p className="text-xs font-semibold text-main">
                    {lang === 'ar' ? 'رقم المرجع:' : 'Reference ID:'}{' '}
                    <bdi dir="ltr" className="ltr-num text-accent">{referenceId}</bdi>
                  </p>
                  <p className="text-sm text-muted">
                    {lang === 'ar'
                      ? 'سيتواصل معك مهندس الحلول المختص خلال يوم عمل واحد.'
                      : 'A solutions engineer will contact you within one business day.'}
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setReferenceId(null);
                      setName('');
                      setCompany('');
                      setEmail('');
                      setPhone('');
                      setNeed('infrastructure');
                    }}
                    className="text-xs font-semibold text-accent underline pt-2 min-h-[44px]"
                  >
                    {lang === 'ar' ? 'إرسال طلب آخر' : 'Send another request'}
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4" noValidate>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-name" className="block text-xs font-semibold text-main mb-1.5">
                        {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        id="cta-name"
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={lang === 'ar' ? 'مثال: أحمد محمود' : 'e.g. Ahmed Mahmoud'}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm input-token"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-company" className="block text-xs font-semibold text-main mb-1.5">
                        {lang === 'ar' ? 'اسم الشركة أو المؤسسة' : 'Company / Organization'}
                      </label>
                      <input
                        id="cta-company"
                        type="text"
                        value={company}
                        onChange={(e) => setCompany(e.target.value)}
                        placeholder={lang === 'ar' ? 'اسم المؤسسة أو الشركة' : 'Organization name'}
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm input-token"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="cta-email" className="block text-xs font-semibold text-main mb-1.5">
                        {lang === 'ar' ? 'البريد الإلكتروني الرسمي *' : 'Work Email *'}
                      </label>
                      <input
                        id="cta-email"
                        type="email"
                        dir="ltr"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="name@company.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm input-token ltr-num"
                      />
                    </div>
                    <div>
                      <label htmlFor="cta-phone" className="block text-xs font-semibold text-main mb-1.5">
                        {lang === 'ar' ? 'رقم الهاتف أو واتساب *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        id="cta-phone"
                        type="tel"
                        dir="ltr"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+20 11..."
                        className="w-full min-h-[44px] px-3.5 py-2.5 text-sm input-token ltr-num"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="cta-need" className="block text-xs font-semibold text-main mb-1.5">
                      {lang === 'ar' ? 'القطاع الهندسي المطلوب' : 'Engineering Pillar'}
                    </label>
                    <select
                      id="cta-need"
                      value={need}
                      onChange={(e) => setNeed(e.target.value)}
                      className="w-full min-h-[44px] px-3.5 py-2.5 text-sm input-token"
                    >
                      <option value="infrastructure">
                        {lang === 'ar' ? 'الشبكات والبنية التحتية' : 'Infrastructure & Networks'}
                      </option>
                      <option value="cloud">
                        {lang === 'ar' ? 'السحابة والخوادم' : 'Cloud & Servers'}
                      </option>
                      <option value="security">
                        {lang === 'ar' ? 'الأمن السيبراني واستمرارية الأعمال' : 'Cybersecurity & Continuity'}
                      </option>
                      <option value="software">
                        {lang === 'ar' ? 'البرمجيات وأنظمة ERP' : 'Software & Enterprise ERP'}
                      </option>
                    </select>
                  </div>

                  <label className="flex items-center gap-2.5 text-xs text-muted cursor-pointer">
                    <input
                      type="checkbox"
                      checked={turnstileVerified}
                      onChange={(e) => setTurnstileVerified(e.target.checked)}
                      className="w-4 h-4 accent-[var(--accent)]"
                    />
                    <span>
                      {lang === 'ar'
                        ? 'أقر بأن هذا الطلب يخص جهة أو مشروعاً فعلياً'
                        : 'I confirm this is a genuine business inquiry'}
                    </span>
                  </label>

                  {error && (
                    <p className="text-xs font-medium text-danger" role="alert">
                      {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary w-full py-3.5 text-sm hover-lift"
                  >
                    {submitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin shrink-0" />
                        <span>{lang === 'ar' ? 'جاري التسجيل...' : 'Submitting...'}</span>
                      </>
                    ) : (
                      <span>{lang === 'ar' ? 'اطلب استشارة هندسية' : 'Request Engineering Consultation'}</span>
                    )}
                  </button>

                  <p className="text-[11px] text-muted text-center">
                    {lang === 'ar'
                      ? 'تُستخدم بياناتك حصرياً للتواصل الهندسي بشأن طلبك ولا تُشارك مع أطراف خارجية.'
                      : 'Your details are used solely to respond to your technical inquiry and are never shared with third parties.'}
                  </p>
                </form>
              )}
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
