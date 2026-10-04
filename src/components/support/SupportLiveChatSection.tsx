import React, { useState } from 'react';
import { Send, PhoneCall, CheckCircle2, ShieldCheck, Mail, Building, User, Phone, Sparkles } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT, NUZUL_SERVICES } from '../../data/nuzulData';

export const SupportLiveChatSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [fullName, setFullName] = useState('');
  const [orgName, setOrgName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('الخوادم السحابية واستضافة الأعمال');
  const [deploymentType, setDeploymentType] = useState('سحابي Cloud VPS');
  const [details, setDetails] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = isAr
      ? `طلب استشارة تقنية من: ${fullName || 'عميل مهتم'}\nالمؤسسة: ${orgName || 'غير محدد'}\nالخدمة: ${service}\nنوع النشر: ${deploymentType}\nالتفاصيل: ${details || 'أرغب في مناقشة المتطلبات وتجهيز عرض سعر'}`
      : `New Consultation Request from: ${fullName || 'Client'}\nOrganization: ${orgName || 'N/A'}\nService: ${service}\nDeployment: ${deploymentType}\nDetails: ${details || 'Inquiry about deployment'}`;

    window.open(`${NUZUL_CONTACT.whatsappUrl}&text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section
      id="contact"
      className={`relative scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:items-center lg:gap-16">
          {/* Left Text */}
          <div className="max-w-xl">
            <div className="eyebrow-mono text-emerald-500">
              <ShieldCheck className="h-4 w-4" />
              <span>{isAr ? 'طلب استشارة وعرض سعر' : 'REQUEST CONSULTATION'}</span>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
              {isAr
                ? 'جاهزون لتأسيس وتأمين بنيتك التحتية وسيرفراتك'
                : 'Ready to Architect & Secure Your Infrastructure?'}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-400">
              {isAr
                ? 'املأ النموذج وسيقوم مهندس أنظمة وشبكات من مقرنا في القاهرة بدراسة متطلباتك والتواصل معك خلال أقل من 15 دقيقة لمناقشة التفاصيل وتحديد خطة العمل.'
                : 'Submit your requirements and a lead systems engineer from our Cairo HQ will review your architecture and respond within 15 minutes.'}
            </p>

            {/* Quick Guarantees */}
            <div className="mt-8 space-y-3 border-t border-b py-6 border-white/10">
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'استشارة هندسية أولية مجانية بدون التزام' : 'Free preliminary engineering audit with no commitment'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'معاينة ميدانية فورية لمقرك داخل محافظات مصر' : 'Rapid on-site surveys available across Egypt'}</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-slate-300">
                <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0" />
                <span>{isAr ? 'عقود صيانة رسمية وفواتير ضريبية إلكترونية معتمدة' : 'Formal SLA contracts and official electronic tax invoices'}</span>
              </div>
            </div>

            {/* Direct Line */}
            <div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
              <span>{isAr ? 'الخط الساخن الهندسي:' : 'Engineering Hotline:'}</span>
              <a
                href={`tel:${NUZUL_CONTACT.rawPhone}`}
                className="font-bold text-emerald-400 hover:underline"
                dir="ltr"
              >
                {NUZUL_CONTACT.phone}
              </a>
              <span>·</span>
              <a
                href={NUZUL_CONTACT.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#0a66c2] hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right Executive Contact Form */}
          <div
            className={`rounded-3xl border p-6 sm:p-8 shadow-2xl transition-all ${
              isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-slate-50'
            }`}
          >
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-10">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/40 mb-4">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {isAr ? 'تم استلام طلب الاستشارة بنجاح!' : 'Consultation Request Received!'}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-300 max-w-sm">
                  {isAr
                    ? 'شكراً لتواصلك مع نُزول تِك. سيقوم مهندس متخصص بمراجعة متطلباتك والاتصال بك خلال دقائق معدودة.'
                    : 'Thank you for reaching out. A systems engineer will contact you shortly to coordinate your consultation.'}
                </p>

                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="btn btn-primary mt-6 py-2.5 px-6 text-xs font-bold inline-flex items-center gap-2 cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4" />
                  <span>{isAr ? 'متابعة الطلب فوراً عبر واتساب' : 'Follow Up on WhatsApp'}</span>
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-center justify-between border-b pb-3 border-white/10">
                  <div className="text-sm font-black text-white flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-emerald-400" />
                    <span>{isAr ? 'نموذج طلب استشارة وعرض أسعار' : 'Request Architecture Consultation'}</span>
                  </div>
                  <span className="text-[10px] font-mono text-emerald-400 font-bold">
                    {isAr ? 'استجابة في أقل من ١٥ دقيقة' : '<15 Min SLA'}
                  </span>
                </div>

                {/* Name & Org */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'الاسم الكامل *' : 'Full Name *'}
                    </label>
                    <div className="relative flex items-center">
                      <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder={isAr ? 'أحمد سامي' : 'Ahmed Samy'}
                        className="w-full rounded-xl border border-white/10 bg-black/30 py-2.5 px-10 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'اسم الشركة / العيادة / المؤسسة *' : 'Company / Clinic / Organization *'}
                    </label>
                    <div className="relative flex items-center">
                      <Building className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="text"
                        required
                        value={orgName}
                        onChange={(e) => setOrgName(e.target.value)}
                        placeholder={isAr ? 'مستشفى الشفاء / مكتب استشارات' : 'Organization Name'}
                        className="w-full rounded-xl border border-white/10 bg-black/30 py-2.5 px-10 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none"
                      />
                    </div>
                  </div>
                </div>

                {/* Phone & Service */}
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'رقم الهاتف / الواتساب *' : 'Phone / WhatsApp *'}
                    </label>
                    <div className="relative flex items-center">
                      <Phone className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                      <input
                        type="tel"
                        required
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="01140565057"
                        className="w-full rounded-xl border border-white/10 bg-black/30 py-2.5 px-10 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                      {isAr ? 'الخدمة المطلوبة *' : 'Required Service *'}
                    </label>
                    <select
                      value={service}
                      onChange={(e) => setService(e.target.value)}
                      className="w-full rounded-xl border border-white/10 bg-[#070c14] py-2.5 px-3 text-xs text-emerald-300 focus:border-emerald-400 focus:outline-none font-semibold"
                    >
                      <option value="الخوادم السحابية وخوادم العمل عن بُعد">الخوادم السحابية وخوادم العمل عن بُعد (تبدأ من 1000 ج.م)</option>
                      <option value="سيرفرات سحابية Cloud VPS مُدارة">سيرفرات سحابية Cloud VPS مُدارة</option>
                      <option value="أنظمة إدارة المستشفيات والعيادات HIS/EMR">أنظمة إدارة المستشفيات والعيادات HIS/EMR</option>
                      <option value="تجهيز البنية التحتية والشبكات والسنترال">تجهيز البنية التحتية والشبكات والسنترال VOIP</option>
                      <option value="حوكمة البريد الإلكتروني وأرشيف السجلات">حوكمة البريد الإلكتروني وأرشيف السجلات</option>
                      <option value="أمن الشبكات وجدران الحماية Firewall & SIEM">أمن الشبكات وجدران الحماية Firewall & SIEM</option>
                      <option value="حلول النسخ الاحتياطي السحابي والمحلي">حلول النسخ الاحتياطي السحابي والمحلي</option>
                      <option value="تطوير المواقع والمتاجر الإلكترونية">تطوير المواقع والمتاجر الإلكترونية</option>
                      <option value="قطاع تقني كامل كخدمة IT as a Service">قطاع تقني كامل كخدمة IT as a Service</option>
                    </select>
                  </div>
                </div>

                {/* Deployment Model */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isAr ? 'بيئة التشغيل المفضلة' : 'Preferred Deployment Model'}
                  </label>
                  <div className="grid grid-cols-3 gap-2 text-xs font-mono">
                    {[
                      { id: 'cloud', labelAr: 'سحابي Cloud', labelEn: 'Private Cloud' },
                      { id: 'onprem', labelAr: 'محلي On-Premises', labelEn: 'On-Premises' },
                      { id: 'hybrid', labelAr: 'هجين Hybrid', labelEn: 'Hybrid Model' },
                    ].map((m) => (
                      <button
                        key={m.id}
                        type="button"
                        onClick={() => setDeploymentType(m.labelAr)}
                        className={`rounded-xl border py-2 px-2 text-center transition-colors cursor-pointer ${
                          deploymentType.includes(m.id) || deploymentType === m.labelAr
                            ? 'border-emerald-400 bg-emerald-500/20 text-emerald-300 font-bold'
                            : 'border-white/10 bg-black/20 text-slate-400 hover:text-white'
                        }`}
                      >
                        {isAr ? m.labelAr : m.labelEn}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    {isAr ? 'ملاحظات أو تفاصيل المتطلبات' : 'Project Details / Notes'}
                  </label>
                  <textarea
                    rows={3}
                    value={details}
                    onChange={(e) => setDetails(e.target.value)}
                    placeholder={
                      isAr
                        ? 'اكتب نبذة عن عدد المستخدمين، البرامج المستخدمة، أو متطلبات الربط...'
                        : 'Number of users, databases, or specific networking requirements...'
                    }
                    className="w-full rounded-xl border border-white/10 bg-black/30 p-3 text-xs text-white placeholder-slate-500 focus:border-emerald-400 focus:outline-none resize-none"
                  />
                </div>

                {/* Actions */}
                <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="submit"
                    className="btn btn-primary flex-1 py-3 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center gap-2 cursor-pointer shadow-lg shadow-emerald-500/20"
                  >
                    <Send className="h-3.5 w-3.5" />
                    <span>{isAr ? 'إرسال طلب الاستشارة الفورية' : 'Submit Consultation Request'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="btn btn-secondary py-3 px-4 text-xs font-bold inline-flex items-center justify-center gap-2 cursor-pointer border-emerald-500/30 text-emerald-300"
                  >
                    <PhoneCall className="h-3.5 w-3.5 text-emerald-400" />
                    <span>{isAr ? 'إرسال عبر واتساب' : 'Send via WhatsApp'}</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
