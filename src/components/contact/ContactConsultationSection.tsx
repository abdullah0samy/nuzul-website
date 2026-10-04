import React, { useState } from 'react';
import {
  Send,
  PhoneCall,
  Mail,
  Building2,
  User,
  ShieldCheck,
  Server,
  Activity,
  CheckCircle2,
  Clock,
  MapPin,
  Sparkles,
  ExternalLink,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT, NUZUL_SERVICES } from '../../data/nuzulData';

export const ContactConsultationSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    service: 'enterprise-turnkey',
    phone: '',
    email: '',
    scope: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
    }, 1000);
  };

  const handleWhatsAppForward = () => {
    const text = isAr
      ? `مرحباً نُزول تِك، أود حجز استشارة بخصوص: ${formData.service} للشركة/المستشفى: ${formData.company || formData.name}. رقم التواصل: ${formData.phone}`
      : `Hello Nuzul Tech, I want to consult about: ${formData.service} for company/hospital: ${formData.company || formData.name}. Phone: ${formData.phone}`;
    window.open(`${NUZUL_CONTACT.whatsappUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="contact"
      className={`relative overflow-hidden scroll-mt-24 px-5 py-20 sm:py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark
          ? 'bg-[#070c14] border-white/10 text-white'
          : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-16">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <Mail className="h-4 w-4" />
            <span>{isAr ? 'طلب استشارة وتواصل هندسي' : 'ENTERPRISE CONSULTATION & INQUIRY'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr
              ? 'تواصل مع فريقنا الهندسي لتشخيص وتطوير بنيتك التحتية'
              : 'Consult Our Senior Infrastructure & Software Engineers'}
          </h2>

          <p
            className={`mt-4 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'سواء كنت بحاجة إلى خوادم سحابية مخصصة، تجهيز شبكات وسنترال للمستشفيات، منصة عيادات سحابية، أو حماية بريد شركتك — نتحمل المسؤولية كاملة من التخطيط حتى التسليم والتأمين.'
              : 'Whether you require dedicated cloud VPS clusters, hospital IT & structured cabling, Clinic SaaS deployment, or corporate mail security — we provide end-to-end engineering sovereignty.'}
          </p>
        </div>

        {/* 2 Columns: Left = Interactive Consultation Form, Right = HQ & Data Center Operations */}
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          {/* ==============================================================
              LEFT COLUMN: ENTERPRISE CONSULTATION FORM
              ============================================================== */}
          <div
            className={`rounded-3xl border p-7 sm:p-9 transition-colors shadow-2xl ${
              isDark
                ? 'border-emerald-500/30 bg-gradient-to-b from-[#0d1524] to-[#0a111c]'
                : 'border-slate-200 bg-slate-50'
            }`}
          >
            <div className="flex items-center justify-between border-b pb-4 mb-6 border-current/10">
              <div>
                <h3 className="text-xl font-bold">
                  {isAr ? 'نموذج طلب الاستشارة وعروض الأسعار' : 'Request Consultation & Technical Quote'}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {isAr ? 'متوسط وقت الرد الهندسي أقل من ١٥ دقيقة خلال ساعات العمل' : 'Average engineering SLA response under 15 minutes'}
                </p>
              </div>
              <span className="flex h-10 w-10 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-500">
                <Send className="h-5 w-5" />
              </span>
            </div>

            {isSuccess ? (
              <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-6 text-center space-y-4">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-emerald-500 text-white shadow-lg">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <h4 className="text-lg font-bold text-emerald-400">
                  {isAr ? 'تم استلام طلبك بنجاح!' : 'Your Request Has Been Received!'}
                </h4>
                <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                  {isAr
                    ? 'سيقوم مهندس النظم المختص بمراجعة متطلباتك والاتصال بك هاتفياً أو عبر البريد الإلكتروني خلال دقائق معدودة.'
                    : 'A senior systems engineer is reviewing your infrastructure requirements and will reach out shortly.'}
                </p>
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppForward}
                    className="btn btn-primary px-5 py-2.5 text-xs font-bold gap-2"
                  >
                    <PhoneCall className="h-4 w-4" />
                    <span>{isAr ? 'متابعة الطلب على واتساب فوراً' : 'Follow Up on WhatsApp Now'}</span>
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        company: '',
                        service: 'enterprise-turnkey',
                        phone: '',
                        email: '',
                        scope: '',
                      });
                    }}
                    className="btn btn-secondary px-4 py-2.5 text-xs font-semibold"
                  >
                    {isAr ? 'إرسال طلب آخر' : 'Submit Another Request'}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {/* Name & Company */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-semibold mb-1.5 text-slate-300">
                      {isAr ? 'الاسم بالكامل' : 'Full Name'} <span className="text-red-400">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder={isAr ? 'م. كريم أحمد' : 'Eng. Karim Ahmed'}
                        className={`w-full rounded-xl border py-2.5 px-10 focus:border-emerald-500 focus:outline-none transition-colors ${
                          isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block font-semibold mb-1.5 text-slate-300">
                      {isAr ? 'اسم الشركة / المنشأة الطبية' : 'Company or Clinic Name'} <span className="text-red-400">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <Building2 className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder={isAr ? 'مستشفى / شركة تجارية / عيادة' : 'e.g. Healthcare Center, Trading Co.'}
                        className={`w-full rounded-xl border py-2.5 px-10 focus:border-emerald-500 focus:outline-none transition-colors ${
                          isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Service Dropdown & Phone */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block font-semibold mb-1.5 text-slate-300">
                      {isAr ? 'الخدمة المطلوبة' : 'Service of Interest'} <span className="text-red-400">*</span>
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className={`w-full rounded-xl border py-2.5 px-3 focus:border-emerald-500 focus:outline-none transition-colors ${
                        isDark ? 'bg-[#0d1524] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
                      }`}
                    >
                      <option value="enterprise-turnkey">
                        {isAr ? 'تجهيز IT متكامل تحت سقف واحد (Turnkey IT)' : 'Turnkey IT Infrastructure'}
                      </option>
                      <option value="cloud-vps">
                        {isAr ? 'الخوادم السحابية المدارة واستضافة الأعمال (تبدأ من 1000 ج.م)' : 'Managed Cloud VPS & Hosting (from 1,000 EGP/mo)'}
                      </option>
                      <option value="hospital-his">
                        {isAr ? 'نظام المستشفيات الشامل (HIS Platform)' : 'Hospital Information System (HIS)'}
                      </option>
                      <option value="clinic-saas">
                        {isAr ? 'منصة العيادات (ClinicCore™ SaaS / On-Premises)' : 'ClinicCore™ SaaS / On-Premises'}
                      </option>
                      <option value="corporate-email">
                        {isAr ? 'خدمة الإيميلات الرسمية وحماية DMARC' : 'Corporate Email & DMARC'}
                      </option>
                      <option value="cloud-vps">
                        {isAr ? 'سيرفرات سحابية واستضافة المواقع' : 'Cloud VPS & Web Hosting'}
                      </option>
                      <option value="network-firewall">
                        {isAr ? 'أمن الشبكات، السنترال VOIP، والجدران النارية' : 'VoIP Telephony & Firewalls'}
                      </option>
                      <option value="it-as-a-service">
                        {isAr ? 'قطاع تقني كامل كخدمة (IT as a Service)' : 'Full IT as a Service (ITaaS)'}
                      </option>
                      <option value="software-dev">
                        {isAr ? 'تطوير البرمجيات وتطبيقات الموبايل المخصصة' : 'Custom Software & Mobile Apps'}
                      </option>
                    </select>
                  </div>

                  <div>
                    <label className="block font-semibold mb-1.5 text-slate-300">
                      {isAr ? 'رقم الهاتف / الواتساب' : 'Phone or WhatsApp'} <span className="text-red-400">*</span>
                    </label>
                    <div className="relative flex items-center">
                      <PhoneCall className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="01140565057"
                        className={`w-full rounded-xl border py-2.5 px-10 focus:border-emerald-500 focus:outline-none transition-colors font-mono ${
                          isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                        }`}
                        dir="ltr"
                      />
                    </div>
                  </div>
                </div>

                {/* Email Address */}
                <div>
                  <label className="block font-semibold mb-1.5 text-slate-300">
                    {isAr ? 'البريد الإلكتروني للعمل' : 'Work Email Address'}
                  </label>
                  <div className="relative flex items-center">
                    <Mail className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@company.com"
                      className={`w-full rounded-xl border py-2.5 px-10 focus:border-emerald-500 focus:outline-none transition-colors font-mono ${
                        isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                      }`}
                    />
                  </div>
                </div>

                {/* Project Scope / Details */}
                <div>
                  <label className="block font-semibold mb-1.5 text-slate-300">
                    {isAr ? 'وصف موجز للمشروع أو الاحتياجات' : 'Project Scope & Requirements'}
                  </label>
                  <textarea
                    rows={3}
                    value={formData.scope}
                    onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                    placeholder={
                      isAr
                        ? 'مثال: نحتاج لتشغيل برنامج حسابات لـ 15 مستخدماً عن بعد، أو تجهيز شبكة وسيرفرات لفرع جديد...'
                        : 'e.g. Looking to host remote accounting software for 15 users, or deploy VoIP across 2 branches...'
                    }
                    className={`w-full rounded-xl border py-2.5 px-3 focus:border-emerald-500 focus:outline-none transition-colors resize-none ${
                      isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-white border-slate-200 text-slate-900 placeholder-slate-400'
                    }`}
                  />
                </div>

                {/* Submit Action */}
                <div className="pt-2 flex flex-col sm:flex-row items-center gap-3">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="btn btn-primary w-full sm:flex-1 py-3 text-xs font-bold uppercase tracking-wider cursor-pointer"
                  >
                    <span>
                      {isSubmitting
                        ? isAr
                          ? 'جاري إرسال الطلب...'
                          : 'Submitting Request...'
                        : isAr
                        ? 'إرسال طلب الاستشارة الفورية'
                        : 'Submit Consultation Request'}
                    </span>
                    <Send className="h-4 w-4" />
                  </button>

                  <a
                    href={NUZUL_CONTACT.whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary w-full sm:w-auto px-4 py-3 text-xs font-bold flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <PhoneCall className="h-4 w-4 text-emerald-500" />
                    <span>{isAr ? 'واتساب مباشر' : 'Direct WhatsApp'}</span>
                  </a>
                </div>
              </form>
            )}
          </div>

          {/* ==============================================================
              RIGHT COLUMN: DATA CENTER OPERATIONS & CAIRO HQ VISUAL
              ============================================================== */}
          <div className="space-y-6">
            {/* Primary Visual Showcase Card */}
            <div
              className={`relative overflow-hidden rounded-3xl border transition-all ${
                isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-white'
              }`}
            >
              {/* Photo with realistic data center styling */}
              <div className="relative h-64 w-full overflow-hidden group">
                <img
                  src="/images/about-us/hero-team-dark.jpg"
                  alt="Nuzul Tech Core Data Center Operations & Cairo Infrastructure HQ"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-[#070c14]/40 to-transparent" />

                {/* Live Overlaid Status Tag */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-500/40 bg-black/60 px-3 py-1 font-mono text-[10px] font-bold text-emerald-400 backdrop-blur-md">
                    <span className="status-dot" />
                    <span>CAIRO DC TIER-III CONNECTED</span>
                  </span>

                  <span className="rounded-full bg-black/60 px-2.5 py-0.5 font-mono text-[10px] font-bold text-slate-300 backdrop-blur-md">
                    99.98% UPTIME
                  </span>
                </div>

                {/* Title at the bottom of the photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-[11px] font-mono font-bold text-emerald-400">
                    NUZUL TECH INFRASTRUCTURE COMMAND
                  </div>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Nuzul Tech Core Data Center Operations & Cairo Infrastructure HQ
                  </h4>
                </div>
              </div>

              {/* Data Center Highlights & Operations Spec */}
              <div className="p-6 space-y-4 text-xs">
                <div className="grid grid-cols-2 gap-3">
                  <div
                    className={`rounded-2xl border p-3 ${
                      isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-[10px] text-slate-400 font-mono">
                      {isAr ? 'سرعة الاستجابة للطوارئ' : 'Emergency SLA Response'}
                    </div>
                    <div className="font-mono text-lg font-bold text-emerald-500 mt-1">&lt; 15 Min</div>
                    <div className="text-[10px] text-slate-500">
                      {isAr ? 'فريق هندسي متخصص 24/7' : '24/7 On-Call Engineers'}
                    </div>
                  </div>

                  <div
                    className={`rounded-2xl border p-3 ${
                      isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                    }`}
                  >
                    <div className="text-[10px] text-slate-400 font-mono">
                      {isAr ? 'الاعتماد والمطابقة' : 'Enterprise Compliance'}
                    </div>
                    <div className="font-mono text-lg font-bold text-emerald-500 mt-1">100% Legal</div>
                    <div className="text-[10px] text-slate-500">
                      {isAr ? 'فواتير ضريبية وعقود رسمية' : 'Tax Invoices & Contracts'}
                    </div>
                  </div>
                </div>

                {/* HQ & Support Details */}
                <div
                  className={`rounded-2xl border p-4 space-y-2.5 ${
                    isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <MapPin className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span>{isAr ? NUZUL_CONTACT.locationAr : NUZUL_CONTACT.locationEn}</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <PhoneCall className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span dir="ltr" className="font-mono font-medium">
                      {NUZUL_CONTACT.phone}
                    </span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Mail className="h-4 w-4 text-emerald-500 shrink-0" />
                    <span className="font-mono">support@nuzultech.com / sales@nuzultech.com</span>
                  </div>
                </div>

                {/* Additional Office Photos */}
                <div className="grid grid-cols-2 gap-3 pt-1">
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 group h-24">
                    <img
                      src="/images/home/generated/brand-team-office.webp"
                      alt="Nuzul Tech engineering office"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/90">
                      NOC Dispatch Room
                    </span>
                  </div>

                  <div className="relative overflow-hidden rounded-2xl border border-white/10 group h-24">
                    <img
                      src="/images/home/generated/brand-developer-hands.webp"
                      alt="Systems engineer terminal"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-black/40" />
                    <span className="absolute bottom-2 left-2 text-[10px] font-mono text-white/90">
                      Virtualization Core
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
