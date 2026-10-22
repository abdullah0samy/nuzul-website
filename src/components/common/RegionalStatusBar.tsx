import React, { useState, useRef, useEffect } from 'react';
import { Server, Activity, ShieldCheck, ChevronDown, CheckCircle2, Globe, Cpu } from 'lucide-react';
import { useApp } from '../../context/AppContext';

interface RegionalNode {
  id: string;
  code: string;
  cityAr: string;
  cityEn: string;
  latency: string;
  status: 'operational' | 'degraded';
  roleAr: string;
  roleEn: string;
  specsAr: string;
  specsEn: string;
}

export const RegionalStatusBar: React.FC<{ variant?: 'topbar' | 'standalone' }> = ({
  variant = 'topbar',
}) => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const nodes: RegionalNode[] = [
    {
      id: 'cai',
      code: 'CAI-1',
      cityAr: 'القاهرة',
      cityEn: 'Cairo Edge',
      latency: '4ms',
      status: 'operational',
      roleAr: 'المقر الرئيسي والبنية المحلية',
      roleEn: 'Primary Sovereign Edge HQ',
      specsAr: 'Tier-III • NVMe متصل بالـ EG-IX',
      specsEn: 'Tier-III • Direct EG-IX Interconnect',
    },
    {
      id: 'fra',
      code: 'FRA-1',
      cityAr: 'فرانكفورت',
      cityEn: 'Frankfurt',
      latency: '28ms',
      status: 'operational',
      roleAr: 'بوابة الحوسبة الأوروبية',
      roleEn: 'European Cloud Gateway',
      specsAr: 'Tier-IV • مسار كابلات بحرية مباشر',
      specsEn: 'Tier-IV • Redundant Subsea Cable Routing',
    },
    {
      id: 'ruh',
      code: 'RUH-1',
      cityAr: 'الرياض',
      cityEn: 'Riyadh',
      latency: '18ms',
      status: 'operational',
      roleAr: 'محطة الربط والنسخ بالخليج',
      roleEn: 'GCC Hybrid Replica Hub',
      specsAr: 'عزل جغرافي آمن للنسخ الاحتياطي',
      specsEn: 'Geographically Isolated Backup Vault',
    },
  ];

  return (
    <div className="relative inline-block" ref={containerRef}>
      {/* Compact Status Trigger Bar */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`group flex items-center gap-2 sm:gap-2.5 rounded-full px-2.5 sm:px-3 py-1 text-xs font-mono transition-all cursor-pointer ${
          isDark
            ? 'bg-white/[0.04] hover:bg-white/[0.08] text-slate-300 border border-white/10 hover:border-emerald-500/40 shadow-sm'
            : 'bg-white/80 hover:bg-white text-slate-700 border border-slate-200/90 hover:border-emerald-500/50 shadow-xs'
        }`}
        title={isAr ? 'حالة الخوادم الإقليمية ونقاط الاتصال' : 'Regional Server Health & Latency'}
        aria-expanded={isOpen}
      >
        {/* Subtle Icon & Overall Beacon */}
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
          </span>
          <Server className="h-3 w-3 text-emerald-500 hidden sm:inline" />
        </div>

        {/* Cairo Node (Primary) */}
        <div className="flex items-center gap-1 text-[11px] font-bold">
          <span className="text-slate-400 font-normal">CAI:</span>
          <span className="text-emerald-500 dark:text-emerald-400">4ms</span>
        </div>

        <span className="hidden md:inline text-slate-500/40">|</span>

        {/* Frankfurt Node */}
        <div className="hidden md:flex items-center gap-1 text-[11px]">
          <span className="text-slate-400">FRA:</span>
          <span className="text-emerald-500 dark:text-emerald-400 font-medium">28ms</span>
        </div>

        <span className="hidden lg:inline text-slate-500/40">|</span>

        {/* Riyadh Node */}
        <div className="hidden lg:flex items-center gap-1 text-[11px]">
          <span className="text-slate-400">RUH:</span>
          <span className="text-emerald-500 dark:text-emerald-400 font-medium">18ms</span>
        </div>

        {/* Status Pill Badge */}
        <span className="hidden sm:inline-flex items-center gap-1 rounded-full bg-emerald-500/10 px-1.5 py-0.5 text-[10px] font-bold text-emerald-600 dark:text-emerald-400 border border-emerald-500/20">
          <CheckCircle2 className="h-2.5 w-2.5" />
          <span>99.98%</span>
        </span>

        <ChevronDown
          className={`h-3 w-3 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-emerald-500' : 'group-hover:text-slate-200'
          }`}
        />
      </button>

      {/* Elegant Popover Card displaying regional details */}
      {isOpen && (
        <div
          className={`absolute top-full mt-2 w-[310px] sm:w-[350px] overflow-hidden rounded-2xl border p-3.5 shadow-2xl backdrop-blur-xl z-50 transition-all ${
            isDark
              ? 'border-white/10 bg-[#0a101d]/95 text-white shadow-[0_15px_40px_rgba(0,0,0,0.7)]'
              : 'border-slate-200 bg-white/95 text-slate-900 shadow-xl'
          } ${isAr ? 'right-0 sm:left-auto' : 'left-0 sm:right-auto'}`}
        >
          {/* Header */}
          <div className="flex items-center justify-between border-b pb-2.5 mb-3 border-current/10">
            <div className="flex items-center gap-2">
              <Activity className="h-3.5 w-3.5 text-emerald-500" />
              <span className="font-mono text-xs font-bold text-emerald-600 dark:text-emerald-400">
                {isAr ? 'حالة الشبكة الإقليمية (Live Nodes)' : 'Regional Network Status'}
              </span>
            </div>
            <span className="rounded-full bg-emerald-500/15 px-2 py-0.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
              SLA 99.98%
            </span>
          </div>

          {/* Regional Nodes List */}
          <div className="space-y-2">
            {nodes.map((node) => (
              <div
                key={node.id}
                className={`rounded-xl border p-2.5 transition-colors ${
                  isDark
                    ? 'bg-white/[0.02] border-white/5 hover:border-emerald-500/30'
                    : 'bg-slate-50 border-slate-100 hover:border-emerald-200'
                }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 shadow-sm shadow-emerald-500/50" />
                    <span className="font-mono font-bold text-xs">{node.code}</span>
                    <span className="text-xs text-slate-500 dark:text-slate-400">
                      ({isAr ? node.cityAr : node.cityEn})
                    </span>
                  </div>

                  <span className="rounded-md bg-emerald-500/10 px-1.5 py-0.5 font-mono text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                    {node.latency}
                  </span>
                </div>

                <div className="flex items-center justify-between text-[11px] text-slate-400">
                  <span>{isAr ? node.roleAr : node.roleEn}</span>
                  <span className="font-mono text-[10px] text-slate-500">
                    {isAr ? node.specsAr : node.specsEn}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Link to Full Dashboard */}
          <div className="mt-3 pt-2.5 border-t border-current/10 space-y-2">
            <div className="flex items-center justify-between text-[11px] text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1 font-mono">
                <ShieldCheck className="h-3.5 w-3.5 text-emerald-500" />
                <span>{isAr ? 'عقود SLA موثقة' : 'Enterprise SLAs'}</span>
              </span>
              <span className="font-mono text-[10px]">
                {isAr ? 'استجابة طوارئ خلال 15 دقيقة' : '15m Emergency MTTR'}
              </span>
            </div>

            <a
              href="#status-dashboard"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 w-full rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 py-1.5 text-xs font-bold transition-colors"
            >
              <Activity className="h-3 w-3" />
              <span>{isAr ? 'عرض لوحة المراقبة الكاملة (USA / EU)' : 'Full Telemetry Dashboard (USA / EU)'}</span>
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
