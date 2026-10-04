import React, { useState } from 'react';
import { Users, ArrowRight, ArrowLeft, ShieldCheck, Award, Cpu, MapPin, PhoneCall } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';

export const TeamSection: React.FC = () => {
  const { locale } = useApp();
  const isAr = locale === 'ar';
  const [showTeamModal, setShowTeamModal] = useState(false);

  return (
    <section id="team" className="relative overflow-hidden bg-[#070c14] px-5 py-24 text-white sm:px-6 lg:px-8 border-t border-white/10">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-16">
          {/* Left Text */}
          <div className="max-w-xl">
            <div className="eyebrow-mono text-emerald-400">
              <Users className="h-4 w-4" />
              <span>{isAr ? 'فريقنا الهندسي' : 'OUR ENGINEERING TEAM'}</span>
            </div>

            <h2 className="mt-4 text-3xl font-black leading-tight text-white sm:text-4xl">
              {isAr
                ? 'فريق هندسي متخصص في قلب القاهرة'
                : 'Certified Systems Engineers in Cairo, Egypt'}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-slate-300">
              {isAr
                ? 'تأسست نُزول تِك (Nuzul Tech) على يد مهندسي شبكات وسيرفرات وبرمجيات بهدف توفير حلول IT متكاملة وحقيقية للمؤسسات والشركات في مصر. نتحمل المسؤولية كاملة من مرحلة الكابلات والتوريد وحتى استضافة السيرفرات السحابية والأتمتة.'
                : 'Nuzul Tech was built by seasoned network architects, virtualization engineers, and full-stack software leads to provide turnkey IT sovereignty for Egyptian businesses. We take direct ownership of your physical cabling, cloud VPS, and mission-critical workflows.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <button
                type="button"
                onClick={() => setShowTeamModal(true)}
                className="btn btn-primary btn-md group"
              >
                <span>{isAr ? 'عن فريق نُزول تِك' : 'About Nuzul Engineers'}</span>
                {isAr ? (
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </button>

              <a
                href={NUZUL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-md flex items-center justify-center gap-2"
              >
                <PhoneCall className="h-4 w-4 text-emerald-400" />
                <span>{isAr ? 'محادثة المبيعات والمهندسين' : 'Direct Line'}</span>
              </a>
            </div>

            {/* Quick metrics */}
            <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6">
              <div>
                <div className="font-mono text-2xl font-bold text-emerald-400">100%</div>
                <div className="text-xs text-slate-400">
                  {isAr ? 'مهندسون مقيمون في القاهرة' : 'In-House Cairo Engineers'}
                </div>
              </div>
              <div>
                <div className="font-mono text-2xl font-bold text-emerald-400">&lt; 15 min</div>
                <div className="text-xs text-slate-400">
                  {isAr ? 'متوسط سرعة الاستجابة للطوارئ' : 'Average Critical SLA Response'}
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Image Composition */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl border border-white/10 sm:col-span-2 group">
              <img
                src="/images/about-us/hero-team-dark.jpg"
                alt="Nuzul Tech engineering operations and server deployment"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-transparent to-transparent opacity-70" />
              <div className="absolute bottom-4 left-4 right-4 text-xs font-mono text-emerald-300">
                Nuzul Tech Core Data Center Operations & Cairo Infrastructure HQ
              </div>
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
              <img
                src="/images/home/generated/brand-team-office.webp"
                alt="Nuzul Tech modern engineering office in Cairo"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-transparent to-transparent opacity-50" />
            </div>

            <div className="relative overflow-hidden rounded-2xl border border-white/10 group">
              <img
                src="/images/home/generated/brand-developer-hands.webp"
                alt="Systems engineer configuring server terminal"
                className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#070c14] via-transparent to-transparent opacity-50" />
            </div>
          </div>
        </div>
      </div>

      {/* Meet The Team Modal */}
      {showTeamModal && (
        <div className="fixed inset-0 z-[110] flex items-center justify-center bg-black/85 p-4 backdrop-blur-md">
          <div className="relative w-full max-w-xl rounded-3xl border border-emerald-500/40 bg-[#0d1524] p-7 text-white shadow-2xl">
            <button
              onClick={() => setShowTeamModal(false)}
              className="absolute top-5 right-5 rtl:right-auto rtl:left-5 text-slate-400 hover:text-white"
            >
              ✕
            </button>

            <div className="eyebrow-mono text-emerald-400">
              <Award className="h-4 w-4" />
              <span>{isAr ? 'عن شركة نُزول تِك' : 'About Nuzul Tech'}</span>
            </div>

            <h3 className="mt-3 text-2xl font-bold text-white">
              {isAr ? 'بنيتك التحتية في يد هندسية موثوقة' : 'Infrastructure You Can Entrust'}
            </h3>

            <p className="mt-4 text-xs leading-relaxed text-slate-300">
              {isAr
                ? 'فريق نُزول تِك مكون من مهندسي شبكات سيسكو معتمدين، متخصصي نظم افتراضية VMware وProxmox، ومطوري برمجيات مؤسسية. نقدم للمؤسسات المصرية عقود صيانة سنوية معتمدة، فواتير ضريبية رسمية، وخط ساخن للتدخل الهندسي السريع.'
                : 'Our engineering corps includes Cisco-certified network leads, Linux kernel administrators, and high-concurrency database tuners. We provide Egyptian enterprises with formal maintenance SLAs, electronic tax invoicing, and round-the-clock incident response.'}
            </p>

            <div className="mt-6 space-y-2 text-xs">
              <div className="flex items-center gap-2 rounded-xl bg-black/40 p-3 border border-white/5">
                <MapPin className="h-4 w-4 text-emerald-400" />
                <span>{isAr ? NUZUL_CONTACT.locationAr : NUZUL_CONTACT.locationEn}</span>
              </div>
              <div className="flex items-center gap-2 rounded-xl bg-black/40 p-3 border border-white/5">
                <PhoneCall className="h-4 w-4 text-emerald-400" />
                <span dir="ltr">{NUZUL_CONTACT.phone}</span>
              </div>
            </div>

            <button
              onClick={() => setShowTeamModal(false)}
              className="btn btn-primary mt-6 w-full py-2.5 text-xs font-bold uppercase tracking-wider"
            >
              {isAr ? 'إغلاق' : 'Close'}
            </button>
          </div>
        </div>
      )}
    </section>
  );
};
