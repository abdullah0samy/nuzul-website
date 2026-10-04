import React, { useEffect, useRef, useState } from 'react';
import { Users, ShieldCheck, Clock, CheckCircle, Building2, Server } from 'lucide-react';
import { useApp } from '../../context/AppContext';

const AnimatedCounter: React.FC<{ target: number; suffix?: string; isDecimal?: boolean }> = ({
  target,
  suffix = '',
  isDecimal = false,
}) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
          const duration = 1400;
          const startTime = performance.now();

          const animate = (currentTime: number) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const easeProgress = 1 - Math.pow(1 - progress, 3);
            const currentVal = target * easeProgress;
            setVal(currentVal);

            if (progress < 1) {
              requestAnimationFrame(animate);
            } else {
              setVal(target);
            }
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => observer.disconnect();
  }, [target, hasAnimated]);

  return (
    <span ref={ref} className="figures">
      {isDecimal ? val.toFixed(2) : Math.round(val).toLocaleString()}
      {suffix}
    </span>
  );
};

export const StatsSection: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  return (
    <section
      className={`relative scroll-mt-24 px-5 py-24 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center">
          <div className="eyebrow-mono justify-center text-emerald-600 dark:text-emerald-400">
            <CheckCircle className="h-4 w-4" />
            <span>{isAr ? 'أرقام وإحصائيات حقيقية' : 'PROVEN TRACK RECORD'}</span>
          </div>

          <h2 className="mt-4 text-3xl font-black leading-tight sm:text-4xl">
            {isAr
              ? 'إحصائيات واقعية تعكس ثقة مجتمع الأعمال والمستشفيات في مصر'
              : 'Proven Metrics Backed by Enterprise Trust'}
          </h2>

          <p
            className={`mt-3 text-base leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-slate-600'
            }`}
          >
            {isAr
              ? 'أرقام وإنجازات موثقة تعكس الاستقرار التشغيلي والأداء الهندسي الذي نبنيه مع عملائنا يومياً.'
              : 'Transparent operational metrics from production healthcare, corporate, and private cloud deployments across Egypt.'}
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {/* Stat 1: 1,000+ Customers */}
          <div
            className={`flex flex-col items-center gap-3 rounded-3xl border-2 p-8 transition-transform duration-300 hover:-translate-y-1 ${
              isDark
                ? 'border-white/10 bg-[#0d1524] shadow-xl'
                : 'border-slate-200 bg-slate-50 shadow-sm'
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-500/15 text-emerald-500">
              <Users className="h-6 w-6" />
            </span>
            <div className="text-3xl font-black text-emerald-600 dark:text-emerald-400">
              <AnimatedCounter target={1000} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-slate-400 text-center">
              {isAr ? 'عميل ومؤسسة يثقون بنا في مصر' : 'Customers who trust us across Egypt'}
            </div>
          </div>

          {/* Stat 2: 99.98% Uptime */}
          <div
            className={`flex flex-col items-center gap-3 rounded-3xl border-2 p-8 transition-transform duration-300 hover:-translate-y-1 ${
              isDark
                ? 'border-white/10 bg-[#0d1524] shadow-xl'
                : 'border-slate-200 bg-slate-50 shadow-sm'
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-teal-500/15 text-teal-500">
              <ShieldCheck className="h-6 w-6" />
            </span>
            <div className="text-3xl font-black text-teal-600 dark:text-teal-400">
              <span className="figures">99.98%</span>
            </div>
            <div className="text-xs font-semibold text-slate-400 text-center">
              {isAr ? 'جاهزية البنية التحتية والسيرفرات' : 'Enterprise Infrastructure Uptime'}
            </div>
          </div>

          {/* Stat 3: 24/7 Support & <15 Min SLA */}
          <div
            className={`flex flex-col items-center gap-3 rounded-3xl border-2 p-8 transition-transform duration-300 hover:-translate-y-1 ${
              isDark
                ? 'border-white/10 bg-[#0d1524] shadow-xl'
                : 'border-slate-200 bg-slate-50 shadow-sm'
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/15 text-cyan-500">
              <Clock className="h-6 w-6" />
            </span>
            <div className="text-3xl font-black text-cyan-600 dark:text-cyan-400">
              <span className="figures">&lt; 15</span>
              <span className="text-base font-bold text-slate-400 mr-1">{isAr ? 'دقيقة' : 'min'}</span>
            </div>
            <div className="text-xs font-semibold text-slate-400 text-center">
              {isAr ? 'زمن الاستجابة الفني الهندسي 24/7' : '24/7 Engineering SLA Response Time'}
            </div>
          </div>

          {/* Stat 4: 120+ Healthcare & Enterprise Deployments */}
          <div
            className={`flex flex-col items-center gap-3 rounded-3xl border-2 p-8 transition-transform duration-300 hover:-translate-y-1 ${
              isDark
                ? 'border-white/10 bg-[#0d1524] shadow-xl'
                : 'border-slate-200 bg-slate-50 shadow-sm'
            }`}
          >
            <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-amber-500/15 text-amber-500">
              <Building2 className="h-6 w-6" />
            </span>
            <div className="text-3xl font-black text-amber-600 dark:text-amber-400">
              <AnimatedCounter target={120} suffix="+" />
            </div>
            <div className="text-xs font-semibold text-slate-400 text-center">
              {isAr ? 'مستشفى وعيادة ومقر تم تجهيزه' : 'Hospital & Corporate Facilities Deployed'}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
