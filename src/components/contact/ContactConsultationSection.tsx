import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { ImageSlot } from '../common/ImageSlot';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  CheckCircle2,
  ShieldCheck,
  AlertCircle,
} from 'lucide-react';

export const ContactConsultationSection: React.FC = () => {
  const { lang } = useApp();
  const [searchParams] = useSearchParams();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    serviceType: 'infrastructure',
    details: '',
    website_url: '', // Honeypot field (hidden from real users)
    turnstileVerified: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionResult, setSubmissionResult] = useState<{
    referenceId: string;
    receivedAt: string;
    recipientInbox: string;
  } | null>(null);

  useEffect(() => {
    const preselectedService = searchParams.get('service');
    if (preselectedService) {
      if (
        ['infrastructure', 'cloud', 'security', 'software'].includes(
          preselectedService
        )
      ) {
        setFormData((prev) => ({ ...prev, serviceType: preselectedService }));
      }
    }
  }, [searchParams]);

  const validateField = (field: string, value: string | boolean): string => {
    if (field === 'name') {
      const str = String(value).trim();
      if (!str || str.length < 2) {
        return lang === 'ar'
          ? 'يرجى إدخال الاسم الكامل (حرفين على الأقل)'
          : 'Please enter your full name (at least 2 characters)';
      }
    }
    if (field === 'company') {
      const str = String(value).trim();
      if (!str) {
        return lang === 'ar'
          ? 'يرجى إدخال اسم الشركة أو المؤسسة'
          : 'Please enter your company or organization name';
      }
    }
    if (field === 'phone') {
      const str = String(value).trim();
      if (!str || str.length < 7) {
        return lang === 'ar'
          ? 'يرجى إدخال رقم هاتف أو واتساب صحيح'
          : 'Please enter a valid phone or WhatsApp number';
      }
    }
    if (field === 'email') {
      const str = String(value).trim();
      if (!str || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(str)) {
        return lang === 'ar'
          ? 'يرجى إدخال بريد إلكتروني رسمي صحيح (مثال: name@company.com)'
          : 'Please enter a valid work email address (e.g., name@company.com)';
      }
    }
    if (field === 'details') {
      const str = String(value).trim();
      if (!str || str.length < 10) {
        return lang === 'ar'
          ? 'يرجى كتابة نبذة مختصرة عن متطلبات المشروع (10 أحرف على الأقل)'
          : 'Please describe your project requirements (at least 10 characters)';
      }
    }
    if (field === 'turnstileVerified') {
      if (!value) {
        return lang === 'ar'
          ? 'يرجى تفعيل مربع التحقق الأمني ضد الرسائل الآلية'
          : 'Please check the security verification box';
      }
    }
    return '';
  };

  const validateAll = () => {
    const nextErrors: Record<string, string> = {};
    const fields: Array<keyof typeof formData> = [
      'name',
      'company',
      'phone',
      'email',
      'details',
      'turnstileVerified',
    ];
    for (const f of fields) {
      const msg = validateField(f, formData[f]);
      if (msg) nextErrors[f] = msg;
    }
    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleFieldChange = (
    field: keyof typeof formData,
    value: string | boolean
  ) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      const msg = validateField(field, value);
      setErrors((prev) => {
        const copy = { ...prev };
        if (msg) copy[field] = msg;
        else delete copy[field];
        return copy;
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validateAll()) {
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          lang,
        }),
      });

      const data = await response.json();
      if (!response.ok || !data.ok) {
        if (data.fieldErrors) {
          setErrors(data.fieldErrors);
        }
        setServerError(
          data.message ||
            (lang === 'ar'
              ? 'تعذر إرسال الطلب حالياً. يرجى مراجعة الحقول أو المحاولة مرة أخرى.'
              : 'Could not submit request. Please check the fields and try again.')
        );
        setIsSubmitting(false);
        return;
      }

      setSubmissionResult({
        referenceId: data.referenceId,
        receivedAt: data.receivedAt,
        recipientInbox: data.recipientInbox,
      });
      setIsSubmitting(false);
    } catch {
      setServerError(
        lang === 'ar'
          ? 'حدث خطأ في الاتصال بالخادم. يرجى المحاولة مرة أخرى أو التواصل عبر القنوات المباشرة.'
          : 'Network error while connecting to server. Please try again or use direct contact channels.'
      );
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-page">
      <div className="container-nuzul">
        <div className="max-w-3xl mb-12">
          <p className="text-sm font-semibold text-accent mb-2">
            {lang === 'ar' ? 'تواصل مع الفريق الهندسي' : 'Contact Our Engineering Team'}
          </p>
          <h1 className="text-3xl md:text-5xl font-bold text-main mb-4">
            {lang === 'ar'
              ? 'احجز استشارة هندسية أو اطلب عرض سعر مفصل'
              : 'Book an Engineering Consultation or Request a Proposal'}
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            {lang === 'ar'
              ? 'تحدث مباشرة مع مهندسي البنية التحتية والسحابة في نُزول تِك لمناقشة احتياجات شركتك الفنية وتحديد النطاق المناسب.'
              : 'Speak directly with Nuzul Tech infrastructure and cloud architects to scope your project requirements.'}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form Column */}
          <div className="lg:col-span-7">
            <div className="clean-card p-6 sm:p-10 bg-surface">
              {submissionResult ? (
                <div
                  data-testid="contact-success-state"
                  role="status"
                  aria-live="polite"
                  className="py-10 px-4 text-center space-y-5"
                >
                  <CheckCircle2 className="w-12 h-12 text-success mx-auto" />
                  <h2 className="text-2xl font-bold text-main">
                    {lang === 'ar'
                      ? 'تم تسجيل طلب الاستشارة الهندسية بنجاح'
                      : 'Engineering Consultation Request Received'}
                  </h2>
                  <p className="text-muted text-sm max-w-md mx-auto leading-relaxed">
                    {lang === 'ar'
                      ? 'تم توجيه بيانات مشروعك إلى الفريق الهندسي المختص في نُزول تِك للمراجعة الفنية والتواصل معك خلال ساعات العمل الرسمية.'
                      : 'Your project scope has been routed to Nuzul Tech’s engineering desk for technical review during business hours.'}
                  </p>

                  <div className="max-w-sm mx-auto p-4 rounded-xl bg-page border border-token text-xs space-y-2 text-start">
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-muted">
                        {lang === 'ar' ? 'رقم المرجع:' : 'Reference ID:'}
                      </span>
                      <span
                        data-testid="contact-reference-id"
                        dir="ltr"
                        className="ltr-num font-bold text-accent"
                      >
                        {submissionResult.referenceId}
                      </span>
                    </div>
                    <div className="flex items-center justify-between gap-2">
                      <span className="text-muted">
                        {lang === 'ar' ? 'جهة الاستلام:' : 'Routed To:'}
                      </span>
                      <span dir="ltr" className="ltr-num font-semibold text-main">
                        {submissionResult.recipientInbox}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    data-testid="contact-reset-btn"
                    onClick={() => {
                      setSubmissionResult(null);
                      setErrors({});
                      setServerError(null);
                      setFormData({
                        name: '',
                        company: '',
                        email: '',
                        phone: '',
                        serviceType: 'infrastructure',
                        details: '',
                        website_url: '',
                        turnstileVerified: false,
                      });
                    }}
                    className="btn-secondary px-6 py-2.5 text-sm mt-4"
                  >
                    {lang === 'ar' ? 'إرسال طلب جديد' : 'Submit Another Request'}
                  </button>
                </div>
              ) : (
                <form
                  data-testid="contact-consultation-form"
                  onSubmit={handleSubmit}
                  className="space-y-5"
                  noValidate
                >
                  {serverError && (
                    <div
                      data-testid="contact-error-banner"
                      role="alert"
                      className="p-4 rounded-xl bg-page border border-danger text-danger text-xs sm:text-sm flex items-start gap-2.5"
                    >
                      <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
                      <span>{serverError}</span>
                    </div>
                  )}

                  {/* Honeypot field (hidden from real users, catches bots) */}
                  <div
                    className="hidden"
                    aria-hidden="true"
                  >
                    <label htmlFor="contact-website-url">Website URL</label>
                    <input
                      id="contact-website-url"
                      name="website_url"
                      type="text"
                      tabIndex={-1}
                      autoComplete="off"
                      value={formData.website_url}
                      onChange={(e) =>
                        setFormData({ ...formData, website_url: e.target.value })
                      }
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-sm font-semibold text-main mb-1.5"
                      >
                        {lang === 'ar' ? 'الاسم الكامل *' : 'Full Name *'}
                      </label>
                      <input
                        id="contact-name"
                        data-testid="input-name"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.name)}
                        aria-describedby={errors.name ? 'error-name' : undefined}
                        value={formData.name}
                        onChange={(e) => handleFieldChange('name', e.target.value)}
                        placeholder={lang === 'ar' ? 'أدخل اسمك الكامل' : 'Enter your full name'}
                        className="w-full min-h-[44px] px-4 py-2.5 text-sm input-token"
                      />
                      {errors.name && (
                        <p
                          id="error-name"
                          data-testid="error-name"
                          role="alert"
                          className="text-xs text-danger mt-1.5 font-medium"
                        >
                          {errors.name}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company"
                        className="block text-sm font-semibold text-main mb-1.5"
                      >
                        {lang === 'ar' ? 'اسم الشركة أو المؤسسة *' : 'Company / Organization *'}
                      </label>
                      <input
                        id="contact-company"
                        data-testid="input-company"
                        type="text"
                        required
                        aria-invalid={Boolean(errors.company)}
                        aria-describedby={errors.company ? 'error-company' : undefined}
                        value={formData.company}
                        onChange={(e) => handleFieldChange('company', e.target.value)}
                        placeholder={lang === 'ar' ? 'اسم الشركة أو الجهة' : 'Company name'}
                        className="w-full min-h-[44px] px-4 py-2.5 text-sm input-token"
                      />
                      {errors.company && (
                        <p
                          id="error-company"
                          data-testid="error-company"
                          role="alert"
                          className="text-xs text-danger mt-1.5 font-medium"
                        >
                          {errors.company}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="contact-phone"
                        className="block text-sm font-semibold text-main mb-1.5"
                      >
                        {lang === 'ar' ? 'رقم الهاتف / واتساب *' : 'Phone / WhatsApp *'}
                      </label>
                      <input
                        id="contact-phone"
                        data-testid="input-phone"
                        type="tel"
                        dir="ltr"
                        required
                        aria-invalid={Boolean(errors.phone)}
                        aria-describedby={errors.phone ? 'error-phone' : undefined}
                        value={formData.phone}
                        onChange={(e) => handleFieldChange('phone', e.target.value)}
                        placeholder="+20 100 000 0000"
                        className="w-full min-h-[44px] px-4 py-2.5 text-sm input-token ltr-num"
                      />
                      {errors.phone && (
                        <p
                          id="error-phone"
                          data-testid="error-phone"
                          role="alert"
                          className="text-xs text-danger mt-1.5 font-medium"
                        >
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-sm font-semibold text-main mb-1.5"
                      >
                        {lang === 'ar' ? 'البريد الإلكتروني الرسمي *' : 'Work Email *'}
                      </label>
                      <input
                        id="contact-email"
                        data-testid="input-email"
                        type="email"
                        dir="ltr"
                        required
                        aria-invalid={Boolean(errors.email)}
                        aria-describedby={errors.email ? 'error-email' : undefined}
                        value={formData.email}
                        onChange={(e) => handleFieldChange('email', e.target.value)}
                        placeholder="name@company.com"
                        className="w-full min-h-[44px] px-4 py-2.5 text-sm input-token ltr-num"
                      />
                      {errors.email && (
                        <p
                          id="error-email"
                          data-testid="error-email"
                          role="alert"
                          className="text-xs text-danger mt-1.5 font-medium"
                        >
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-service"
                      className="block text-sm font-semibold text-main mb-1.5"
                    >
                      {lang === 'ar' ? 'نوع الخدمة أو المشروع' : 'Service Category'}
                    </label>
                    <select
                      id="contact-service"
                      data-testid="input-service"
                      value={formData.serviceType}
                      onChange={(e) =>
                        handleFieldChange('serviceType', e.target.value)
                      }
                      className="w-full min-h-[44px] px-4 py-2.5 text-sm input-token"
                    >
                      <option value="infrastructure">
                        {lang === 'ar'
                          ? 'الشبكات والبنية التحتية'
                          : 'Infrastructure & Networks'}
                      </option>
                      <option value="cloud">
                        {lang === 'ar'
                          ? 'الاستضافة والخوادم السحابية'
                          : 'Cloud Hosting & Servers'}
                      </option>
                      <option value="security">
                        {lang === 'ar'
                          ? 'الأمن السيبراني والنسخ الاحتياطي'
                          : 'Cybersecurity & Backups'}
                      </option>
                      <option value="software">
                        {lang === 'ar'
                          ? 'البرمجيات وأنظمة ERP'
                          : 'Software & ERP Systems'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-details"
                      className="block text-sm font-semibold text-main mb-1.5"
                    >
                      {lang === 'ar'
                        ? 'نبذة عن متطلباتك الفنية *'
                        : 'Project Details & Scope *'}
                    </label>
                    <textarea
                      id="contact-details"
                      data-testid="input-details"
                      rows={4}
                      required
                      aria-invalid={Boolean(errors.details)}
                      aria-describedby={errors.details ? 'error-details' : undefined}
                      value={formData.details}
                      onChange={(e) => handleFieldChange('details', e.target.value)}
                      placeholder={
                        lang === 'ar'
                          ? 'اذكر عدد الفروع أو المستخدمين أو مواصفات الخادم المطلوبة...'
                          : 'Describe your branches, user count, or server requirements...'
                      }
                      className="w-full px-4 py-2.5 text-sm input-token"
                    />
                    {errors.details && (
                      <p
                        id="error-details"
                        data-testid="error-details"
                        role="alert"
                        className="text-xs text-danger mt-1.5 font-medium"
                      >
                        {errors.details}
                      </p>
                    )}
                  </div>

                  {/* Spam Protection: Turnstile / Anti-Bot Verification */}
                  <div className="p-4 rounded-xl bg-page border border-token">
                    <div className="flex items-center justify-between gap-3">
                      <label
                        htmlFor="contact-turnstile"
                        className="inline-flex items-center gap-3 cursor-pointer text-xs sm:text-sm font-semibold text-main min-h-[44px]"
                      >
                        <input
                          id="contact-turnstile"
                          data-testid="turnstile-verification-checkbox"
                          type="checkbox"
                          checked={formData.turnstileVerified}
                          onChange={(e) =>
                            handleFieldChange('turnstileVerified', e.target.checked)
                          }
                          aria-invalid={Boolean(errors.turnstileVerified)}
                          aria-describedby={
                            errors.turnstileVerified ? 'error-turnstile' : undefined
                          }
                          className="w-5 h-5 accent-current rounded cursor-pointer"
                        />
                        <span>
                          {lang === 'ar'
                            ? 'تأكيد أنني مستخدم بشري (حماية Cloudflare Turnstile ضد الرسائل الآلية)'
                            : 'Verify human submission (Turnstile anti-spam protection)'}
                        </span>
                      </label>
                      <ShieldCheck className="w-5 h-5 text-accent shrink-0" />
                    </div>
                    {errors.turnstileVerified && (
                      <p
                        id="error-turnstile"
                        data-testid="error-turnstile"
                        role="alert"
                        className="text-xs text-danger mt-1 font-medium"
                      >
                        {errors.turnstileVerified}
                      </p>
                    )}
                  </div>

                  {/* Submit Button + Secondary WhatsApp Option (No unverified response-time promises) */}
                  <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <button
                      type="submit"
                      data-testid="contact-submit-btn"
                      disabled={isSubmitting}
                      className="btn-primary px-8 py-3.5 min-h-[44px] text-sm whitespace-nowrap disabled:opacity-60"
                    >
                      {isSubmitting
                        ? lang === 'ar'
                          ? 'جاري إرسال الطلب...'
                          : 'Submitting Request...'
                        : lang === 'ar'
                        ? 'إرسال طلب الاستشارة'
                        : 'Submit Consultation Request'}
                    </button>

                    <a
                      href={NUZUL_CONTACT.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-testid="contact-secondary-whatsapp"
                      className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-xl border border-token bg-page text-xs sm:text-sm font-semibold text-main hover-text-accent transition-colors whitespace-nowrap"
                    >
                      <MessageCircle className="w-4 h-4 text-success shrink-0" />
                      <span>
                        {lang === 'ar'
                          ? 'خيار ثانوي: محادثة واتساب'
                          : 'Secondary option: WhatsApp Chat'}
                      </span>
                    </a>
                  </div>

                  {/* Plain-language Privacy Notice ([VERIFY with legal] per Master Brief Phase 8) */}
                  <div
                    data-testid="contact-privacy-notice"
                    className="pt-4 border-t border-token text-[11px] sm:text-xs text-muted leading-relaxed"
                  >
                    {lang === 'ar' ? (
                      <p>
                        <strong>إشعار الخصوصية وسرية البيانات:</strong> تُستخدم البيانات
                        المدخلة في هذا النموذج حصرياً للتواصل معك بشأن طلبك الفني وإعداد
                        عرض السعر، ولا يتم بيعها أو مشاركتها مع أي جهات تسويقية خارجية.{' '}
                        <span
                          dir="ltr"
                          className="ltr-num font-semibold text-accent"
                        >
                          [VERIFY with legal]
                        </span>
                      </p>
                    ) : (
                      <p>
                        <strong>Privacy &amp; Confidentiality Notice:</strong> Information
                        submitted through this form is used solely by Nuzul Tech engineers
                        to evaluate your technical inquiry and prepare a quotation, and is
                        never shared with third-party marketers.{' '}
                        <span className="font-semibold text-accent">
                          [VERIFY with legal]
                        </span>
                      </p>
                    )}
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Direct Contact Info + Marked Real Photo Slot */}
          <div className="lg:col-span-5 space-y-6">
            <div className="clean-card p-8 bg-surface space-y-6">
              <h2 className="text-lg font-bold text-main">
                {lang === 'ar' ? 'قنوات التواصل المباشر' : 'Direct Contact Channels'}
              </h2>

              <ul className="space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-main">
                      {lang === 'ar' ? 'المقر الرئيسي' : 'Headquarters'}
                    </div>
                    <div className="text-muted">
                      {lang === 'ar'
                        ? NUZUL_CONTACT.locationAr
                        : NUZUL_CONTACT.locationEn}
                    </div>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Phone className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-main">
                      {lang === 'ar'
                        ? 'المبيعات والاستشارات الهندسية'
                        : 'Engineering Sales'}
                    </div>
                    <a
                      href={`tel:${NUZUL_CONTACT.rawPhone1}`}
                      dir="ltr"
                      className="ltr-num text-muted hover-text-accent"
                    >
                      {NUZUL_CONTACT.phone1}
                    </a>
                  </div>
                </li>

                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold text-main">
                      {lang === 'ar' ? 'البريد الرسمي' : 'Official Email'}
                    </div>
                    <a
                      href={`mailto:${NUZUL_CONTACT.email}`}
                      dir="ltr"
                      className="ltr-num text-muted hover-text-accent"
                    >
                      {NUZUL_CONTACT.email}
                    </a>
                  </div>
                </li>
              </ul>
            </div>

            {/* Clearly marked real team/office photo slot (Section 3.9) */}
            <ImageSlot
              testId="contact-hq-image-slot"
              aspectRatio="video"
              descriptionAr="مساحة مخصصة لصورة فوتوغرافية حقيقية لمقر شركة نُزول تِك بالقاهرة وغرفة عمليات الشبكات"
              descriptionEn="Reserved slot for an authentic photograph of Nuzul Tech’s Cairo headquarters and network operations desk"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
