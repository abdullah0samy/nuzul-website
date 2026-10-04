import React, { useState, useEffect } from 'react';
import { ShieldCheck, ArrowRight, ArrowLeft, PhoneCall, Server, CheckCircle2, Activity, Globe } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { PaymentBadges } from '../common/PaymentBadges';

export const HeroSection: React.FC = () => {
  const { locale, selectedDatacenter, setSelectedDatacenter, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [cpuUsage, setCpuUsage] = useState(26);
  const [ramUsage, setRamUsage] = useState(64);
  const [ssdUsage, setSsdUsage] = useState(48);
  const [ping, setPing] = useState(selectedDatacenter === 'cairo' ? 4 : 28);

  useEffect(() => {
    const interval = setInterval(() => {
      setCpuUsage((prev) => {
        const delta = Math.floor(Math.random() * 5) - 2;
        return Math.min(Math.max(prev + delta, 20), 32);
      });
      setRamUsage((prev) => {
        const delta = Math.floor(Math.random() * 3) - 1;
        return Math.min(Math.max(prev + delta, 60), 68);
      });
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setPing(selectedDatacenter === 'cairo' ? 4 : 28);
  }, [selectedDatacenter]);

  const barHeights = [52, 70, 62, 88, 74, 80, 68, 92, 96];

  return (
    <section
      className={`relative overflow-hidden px-5 pt-12 pb-32 sm:px-6 lg:px-8 transition-colors ${
        isDark
          ? 'bg-gradient-to-b from-[#070c14] via-[#0a111c] to-[#070c14] text-white'
          : 'bg-gradient-to-b from-white via-slate-50 to-slate-100 text-slate-900'
      }`}
    >
      {/* Background radial glow */}
      <div
        className="pointer-events-none absolute -top-40 left-1/2 -z-10 h-[520px] w-[950px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.15)_0%,transparent_70%)] blur-[100px]"
        aria-hidden="true"
      />

      <div className="mx-auto max-w-7xl">
        <div className="grid w-full items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* Left Column: Mission, Heading & Badges */}
          <div className="relative z-10 max-w-2xl">
            {/* Eyebrow */}
            <div className="eyebrow-mono text-emerald-600 dark:text-emerald-400">
              <ShieldCheck className="h-4 w-4" />
              <span>{isAr ? 'حلول IT والسيرفرات السحابية للمؤسسات' : 'Enterprise IT & Cloud Solutions'}</span>
            </div>

            {/* Main Headline */}
            <h1 className="mt-5 text-[clamp(2.1rem,4.2vw,3.8rem)] font-black leading-[1.12] tracking-tight">
              <span className={`block ${isDark ? 'text-white' : 'text-slate-900'}`}>
                {isAr ? 'بنيتك التحتية، ضيفنا،' : 'Your Infrastructure, Our Guest,'}
              </span>
              <span
                className={`block text-transparent bg-clip-text ${
                  isDark
                    ? 'bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400'
                    : 'bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-700'
                }`}
              >
                {isAr ? 'وفي يد أمينة' : 'In Trusted Hands'}
              </span>
            </h1>

            {/* Subtitle */}
            <p
              className={`mt-6 max-w-xl text-lg leading-relaxed ${
                isDark ? 'text-slate-300' : 'text-slate-600'
              }`}
            >
              {isAr
                ? 'حلول تقنية متكاملة من الشبكات والسيرفرات السحابية إلى البرمجيات المخصصة واستضافة الأعمال — مصممة للسوق المصري مع دعم فني هندسي حقيقي 24/7.'
                : 'End-to-end IT solutions from network cabling & cloud VPS to bespoke enterprise software — built for Egyptian businesses with 24/7 on-site & remote engineering.'}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a href="#packages" className="btn btn-primary btn-lg group cursor-pointer shadow-lg shadow-emerald-500/20">
                <span>{isAr ? 'ابدأ الآن واستكشف الباقات' : 'Explore Packages'}</span>
                {isAr ? (
                  <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
                ) : (
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                )}
              </a>

              <a
                href={NUZUL_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className={`btn btn-secondary btn-lg flex items-center gap-2 cursor-pointer transition-colors ${
                  isDark
                    ? 'border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/10'
                    : 'border-emerald-500/40 text-emerald-700 hover:bg-emerald-50 shadow-sm'
                }`}
              >
                <PhoneCall className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'تواصل عبر واتساب' : 'Chat via WhatsApp'}</span>
              </a>
            </div>

            {/* Interactive Clickable Payment Badges */}
            <div className="mt-8 pt-6 border-t border-current/10">
              <div className="text-[11px] font-mono text-slate-400 mb-2 uppercase tracking-wider">
                {isAr ? 'طرق الدفع الفورية المعتمدة في مصر (اضغط للدفع):' : 'Supported Instant Payments in Egypt (Click to Pay):'}
              </div>
              <PaymentBadges />
            </div>

            {/* Trust checkmarks */}
            <div
              className={`mt-6 flex flex-wrap gap-x-6 gap-y-2 text-xs font-semibold ${
                isDark ? 'text-slate-300' : 'text-slate-700'
              }`}
            >
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'مهندسون بالمقر في القاهرة' : 'Local Cairo Engineers'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'جاهزية بنية تحتية 99.98%' : '99.98% Infrastructure Uptime'}</span>
              </div>
              <div className="inline-flex items-center gap-1.5">
                <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                <span>{isAr ? 'دعم فني واستجابة في دقائق' : 'Fast Response SLAs'}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Live Enterprise Server & Network Telemetry */}
          <div className="relative z-10 w-full lg:ml-auto">
            <div
              className={`relative mx-auto w-full max-w-[40rem] rounded-3xl border p-5 shadow-2xl backdrop-blur-xl transition-colors ${
                isDark
                  ? 'border-white/10 bg-[#0d1524]'
                  : 'border-slate-200 bg-white shadow-xl'
              }`}
            >
              {/* Telemetry Header */}
              <div className="flex items-center justify-between border-b pb-4 mb-4 border-current/10">
                <div className="flex items-center gap-2.5">
                  <span className="status-dot" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-emerald-500">
                    {isAr ? 'مركز بيانات القاهرة — تيليمتري حي' : 'CAIRO DC NODE — LIVE TELEMETRY'}
                  </span>
                </div>

                {/* Datacenter selector */}
                <div className="flex rounded-lg border border-current/10 p-0.5 text-[11px] font-mono">
                  <button
                    type="button"
                    onClick={() => setSelectedDatacenter('cairo')}
                    className={`rounded-md px-2 py-0.5 font-bold transition-colors cursor-pointer ${
                      selectedDatacenter === 'cairo'
                        ? 'bg-emerald-500 text-white'
                        : 'text-slate-400 hover:text-current'
                    }`}
                  >
                    CAI-1 (4ms)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedDatacenter('eu')}
                    className={`rounded-md px-2 py-0.5 font-bold transition-colors cursor-pointer ${
                      selectedDatacenter === 'eu'
                        ? 'bg-emerald-500 text-white'
                        : 'text-slate-400 hover:text-current'
                    }`}
                  >
                    FRA-1 (28ms)
                  </button>
                </div>
              </div>

              {/* Real-time Server Vitals */}
              <div className="grid grid-cols-3 gap-3">
                <div
                  className={`rounded-2xl border p-3 ${
                    isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-mono">CPU LOAD</div>
                  <div className="figures mt-1 text-2xl font-black text-emerald-500">{cpuUsage}%</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-500/20 overflow-hidden">
                    <div className="h-full bg-emerald-500 transition-all duration-500" style={{ width: `${cpuUsage}%` }} />
                  </div>
                </div>

                <div
                  className={`rounded-2xl border p-3 ${
                    isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-mono">RAM ALLOC</div>
                  <div className="figures mt-1 text-2xl font-black text-cyan-500">{ramUsage}%</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-500/20 overflow-hidden">
                    <div className="h-full bg-cyan-500 transition-all duration-500" style={{ width: `${ramUsage}%` }} />
                  </div>
                </div>

                <div
                  className={`rounded-2xl border p-3 ${
                    isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                  }`}
                >
                  <div className="text-[10px] text-slate-400 font-mono">LATENCY</div>
                  <div className="figures mt-1 text-2xl font-black text-indigo-500">{ping}ms</div>
                  <div className="mt-2 h-1.5 w-full rounded-full bg-slate-500/20 overflow-hidden">
                    <div className="h-full bg-indigo-500" style={{ width: '18%' }} />
                  </div>
                </div>
              </div>

              {/* Animated Live Network Traffic Bars */}
              <div
                className={`mt-4 rounded-2xl border p-4 ${
                  isDark ? 'bg-white/5 border-white/5' : 'bg-slate-50 border-slate-200'
                }`}
              >
                <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-3">
                  <span>NETWORK THROUGHPUT · 10Gbps UPLINK</span>
                  <span className="text-emerald-500 font-bold">99.98% SLA</span>
                </div>

                <div className="flex h-16 items-end justify-between gap-1 sm:gap-2 px-1">
                  {barHeights.map((h, i) => (
                    <div
                      key={i}
                      className="hero-server-bar w-full rounded-t-md transition-all duration-700"
                      style={{ height: `${h}%` }}
                    />
                  ))}
                </div>
              </div>

              {/* Server Spec Summary */}
              <div className="mt-4 flex items-center justify-between text-[11px] font-mono text-slate-400 px-1">
                <span className="flex items-center gap-1.5">
                  <Server className="h-3.5 w-3.5 text-emerald-500" />
                  <span>NVMe Gen4 Enterprise RAID</span>
                </span>
                <span>Tier-III Cairo Facility</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
