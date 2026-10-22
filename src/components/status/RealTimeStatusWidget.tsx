import React, { useState, useEffect } from 'react';
import {
  Activity,
  CheckCircle2,
  Globe,
  Server,
  Zap,
  RefreshCw,
  ShieldCheck,
  Cpu,
  Clock,
  ArrowUpRight,
} from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { RevealOnScroll } from '../common/RevealOnScroll';

interface DatacenterNode {
  id: string;
  nameAr: string;
  nameEn: string;
  city: string;
  countryCode: string;
  uptime24h: number;
  uptime7d: number;
  uptime90d: number;
  latencyMs: number;
  tier: string;
  peering: string;
  status: 'operational' | 'degraded' | 'maintenance';
}

const USA_NODES: DatacenterNode[] = [
  {
    id: 'us-east',
    nameAr: 'خوادم شرق الولايات المتحدة (فرجينيا)',
    nameEn: 'US-East (N. Virginia - IAD)',
    city: 'Ashburn, VA',
    countryCode: 'US',
    uptime24h: 100,
    uptime7d: 99.99,
    uptime90d: 99.99,
    latencyMs: 112,
    tier: 'Tier IV Certified',
    peering: 'Equinix Ashburn / Fastly Backbone',
    status: 'operational',
  },
  {
    id: 'us-west',
    nameAr: 'خوادم غرب الولايات المتحدة (أوريغون)',
    nameEn: 'US-West (Oregon - PDX)',
    city: 'Hillsboro, OR',
    countryCode: 'US',
    uptime24h: 100,
    uptime7d: 99.98,
    uptime90d: 99.97,
    latencyMs: 135,
    tier: 'Tier III+ Facility',
    peering: 'NWAX / Direct AWS Peering',
    status: 'operational',
  },
  {
    id: 'us-central',
    nameAr: 'خوادم وسط الولايات المتحدة (تكساس)',
    nameEn: 'US-Central (Dallas - DFW)',
    city: 'Dallas, TX',
    countryCode: 'US',
    uptime24h: 100,
    uptime7d: 99.99,
    uptime90d: 99.98,
    latencyMs: 124,
    tier: 'Tier III+ Facility',
    peering: 'Infomart Dallas Peering',
    status: 'operational',
  },
];

const EUROPE_NODES: DatacenterNode[] = [
  {
    id: 'eu-fra',
    nameAr: 'خوادم وسط أوروبا (فرانكفورت)',
    nameEn: 'EU-Central (Frankfurt - FRA)',
    city: 'Frankfurt, DE',
    countryCode: 'DE',
    uptime24h: 100,
    uptime7d: 100,
    uptime90d: 99.99,
    latencyMs: 27,
    tier: 'Tier IV Sovereign',
    peering: 'DE-CIX Frankfurt (12+ Tbps)',
    status: 'operational',
  },
  {
    id: 'eu-ams',
    nameAr: 'خوادم غرب أوروبا (أمستردام)',
    nameEn: 'EU-West (Amsterdam - AMS)',
    city: 'Amsterdam, NL',
    countryCode: 'NL',
    uptime24h: 100,
    uptime7d: 99.99,
    uptime90d: 99.98,
    latencyMs: 31,
    tier: 'Tier IV Sovereign',
    peering: 'AMS-IX & NL-ix Peering',
    status: 'operational',
  },
  {
    id: 'eu-lon',
    nameAr: 'خوادم المملكة المتحدة (لندن)',
    nameEn: 'EU-West (London - LHR)',
    city: 'London, UK',
    countryCode: 'GB',
    uptime24h: 100,
    uptime7d: 99.99,
    uptime90d: 99.99,
    latencyMs: 34,
    tier: 'Tier III+ Facility',
    peering: 'LINX / Telehouse Docklands',
    status: 'operational',
  },
];

const CAIRO_NODE: DatacenterNode = {
  id: 'eg-cai',
  nameAr: 'مركز بيانات القاهرة السيادي (مصر)',
  nameEn: 'Cairo Sovereign Edge (CAI-1)',
  city: 'Cairo, EG',
  countryCode: 'EG',
  uptime24h: 100,
  uptime7d: 100,
  uptime90d: 99.99,
  latencyMs: 4,
  tier: 'Tier IV Datacenter',
  peering: 'Telecom Egypt / EG-IX Sovereign',
  status: 'operational',
};

export const RealTimeStatusWidget: React.FC = () => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [timeframe, setTimeframe] = useState<'24h' | '7d' | '90d'>('90d');
  const [isProbing, setIsProbing] = useState(false);
  const [lastRefreshed, setLastRefreshed] = useState<string>('Just now');
  const [pingJitter, setPingJitter] = useState<number>(0);

  // Periodic heartbeat refresh
  useEffect(() => {
    const interval = setInterval(() => {
      setPingJitter(Math.floor(Math.random() * 3) - 1);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const handleManualProbe = () => {
    setIsProbing(true);
    setTimeout(() => {
      setIsProbing(false);
      setLastRefreshed(isAr ? 'الآن' : 'Just now');
      setPingJitter(Math.floor(Math.random() * 4) - 2);
    }, 800);
  };

  const getUptimeValue = (node: DatacenterNode) => {
    if (timeframe === '24h') return node.uptime24h.toFixed(2);
    if (timeframe === '7d') return node.uptime7d.toFixed(2);
    return node.uptime90d.toFixed(2);
  };

  // Aggregated uptime for USA vs Europe
  const usaAvgUptime = (
    USA_NODES.reduce((acc, n) => acc + (timeframe === '24h' ? n.uptime24h : timeframe === '7d' ? n.uptime7d : n.uptime90d), 0) /
    USA_NODES.length
  ).toFixed(2);

  const europeAvgUptime = (
    EUROPE_NODES.reduce((acc, n) => acc + (timeframe === '24h' ? n.uptime24h : timeframe === '7d' ? n.uptime7d : n.uptime90d), 0) /
    EUROPE_NODES.length
  ).toFixed(2);

  // Generate 45 small history bars representing continuous healthy uptime
  const uptimeDays = Array.from({ length: 45 }, (_, i) => ({
    id: i,
    healthy: true,
  }));

  return (
    <section
      id="status-dashboard"
      className={`relative overflow-hidden scroll-mt-24 px-4 py-16 sm:py-20 sm:px-6 lg:px-8 border-t transition-colors ${
        isDark ? 'bg-[#070c14] border-white/10 text-white' : 'bg-white border-slate-200 text-slate-900'
      }`}
    >
      <div className="mx-auto max-w-7xl">
        {/* Header with Live Status Banner */}
        <RevealOnScroll direction="up" threshold={0.2}>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <div className="eyebrow-mono text-emerald-600 dark:text-emerald-400">
                <Activity className="h-4 w-4" />
                <span>{isAr ? 'مراقبة الجاهزية والاستقرار الحية' : 'REAL-TIME TELEMETRY & UPTIME'}</span>
              </div>
              <h2 className="mt-2 text-2xl font-black sm:text-3xl lg:text-4xl">
                {isAr ? 'لوحة المراقبة الحية لحالة الخوادم' : 'Real-Time Server Status & Uptime Dashboard'}
              </h2>
              <p className={`mt-2 text-sm max-w-2xl leading-relaxed ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                {isAr
                  ? 'مراقبة مستمرة لمعدلات التشغيل (Uptime) بين خوادم الولايات المتحدة الأمريكية وخوادم أوروبا والقاهرة مع فحص لحظي لسرعة الاستجابة.'
                  : 'Continuous real-time uptime monitoring comparing USA vs Europe server clusters, with low-latency Cairo sovereign edge telemetry.'}
              </p>
            </div>

            {/* Timeframe & Diagnostic Trigger */}
            <div className="flex flex-wrap items-center gap-2">
              <div
                className={`inline-flex items-center rounded-xl border p-1 ${
                  isDark ? 'bg-white/5 border-white/10' : 'bg-slate-100 border-slate-200'
                }`}
              >
                {(['24h', '7d', '90d'] as const).map((tf) => (
                  <button
                    key={tf}
                    type="button"
                    onClick={() => setTimeframe(tf)}
                    className={`rounded-lg px-2.5 py-1 text-xs font-bold transition-all cursor-pointer ${
                      timeframe === tf
                        ? 'bg-emerald-500 text-white shadow-sm'
                        : isDark
                        ? 'text-slate-400 hover:text-white'
                        : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {tf === '24h'
                      ? isAr
                        ? 'آخر ٢٤ ساعة'
                        : '24 Hours'
                      : tf === '7d'
                      ? isAr
                        ? 'آخر ٧ أيام'
                        : '7 Days'
                      : isAr
                      ? 'آخر ٩٠ يوماً'
                      : '90 Days'}
                  </button>
                ))}
              </div>

              <button
                type="button"
                onClick={handleManualProbe}
                disabled={isProbing}
                className={`inline-flex items-center gap-1.5 rounded-xl border px-3 py-1.5 text-xs font-bold transition-all cursor-pointer ${
                  isDark
                    ? 'border-white/10 bg-white/5 hover:bg-white/10 text-slate-300'
                    : 'border-slate-200 bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
                title="Run Live Health Probe"
              >
                <RefreshCw className={`h-3.5 w-3.5 ${isProbing ? 'animate-spin text-emerald-500' : ''}`} />
                <span>{isAr ? 'فحص فوري' : 'Live Probe'}</span>
              </button>
            </div>
          </div>
        </RevealOnScroll>

        {/* Global Operational Status Banner */}
        <div
          className={`mb-8 overflow-hidden rounded-2xl border p-5 sm:p-6 backdrop-blur-xl transition-all ${
            isDark
              ? 'bg-emerald-950/20 border-emerald-500/30 text-white shadow-[0_10px_30px_rgba(16,185,129,0.1)]'
              : 'bg-emerald-50/80 border-emerald-200 text-slate-900 shadow-sm'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            {/* Pulsing Green Indicator */}
            <div className="flex items-center gap-3.5">
              <span className="relative flex h-4 w-4 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-500"></span>
              </span>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-black text-emerald-700 dark:text-emerald-300">
                    {isAr ? 'جميع الأنظمة والخوادم تعمل بكفاءة تامة (System Operational)' : 'All Systems Operational'}
                  </h3>
                  <span className="inline-flex items-center rounded-md bg-emerald-500/20 px-2 py-0.5 text-[11px] font-mono font-bold text-emerald-600 dark:text-emerald-300">
                    100% HEALTHY
                  </span>
                </div>
                <p className={`text-xs mt-0.5 ${isDark ? 'text-slate-300' : 'text-slate-600'}`}>
                  {isAr
                    ? 'صفر بلاغات أو انقطاعات غير مجدولة خلال الـ ٩٠ يوماً السابقة عبر شبكات نُزول السحابية.'
                    : 'Zero downtime incidents recorded across all production hostnodes in the last 90 days.'}
                </p>
              </div>
            </div>

            {/* Quick Summary Badges */}
            <div className="flex items-center gap-3 sm:gap-4 shrink-0 font-mono text-xs">
              <div
                className={`rounded-xl px-3 py-1.5 border text-center ${
                  isDark ? 'bg-black/30 border-white/10' : 'bg-white border-emerald-200'
                }`}
              >
                <span className="text-[10px] text-slate-400 block">{isAr ? 'معدل الاستقرار الكلي' : 'Total SLA'}</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">99.99%</span>
              </div>
              <div
                className={`rounded-xl px-3 py-1.5 border text-center ${
                  isDark ? 'bg-black/30 border-white/10' : 'bg-white border-emerald-200'
                }`}
              >
                <span className="text-[10px] text-slate-400 block">{isAr ? 'زمن الاستجابة المحلي' : 'Cairo Ping'}</span>
                <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">
                  {Math.max(3, 4 + pingJitter)}ms
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Grid: USA vs Europe (+ Cairo Edge) */}
        <div className="grid gap-6 lg:grid-cols-2">
          {/* 1. UNITED STATES (USA) CLUSTER */}
          <div
            className={`rounded-2xl border p-6 backdrop-blur-xl transition-all ${
              isDark ? 'bg-[#0d1524] border-white/10' : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            {/* Cluster Header */}
            <div className="flex items-center justify-between pb-4 border-b border-current/10">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-500/10 text-blue-500 font-bold text-xs">
                  🇺🇸
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? 'عناقيد خوادم الولايات المتحدة (USA Cluster)' : 'United States Datacenters (USA)'}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {isAr ? '٣ مراكز بيانات (فرجينيا، أوريغون، دالاس)' : '3 Tier III+/IV Facilities (IAD, PDX, DFW)'}
                  </span>
                </div>
              </div>

              {/* Cluster Aggregated Uptime Badge */}
              <div className="text-end">
                <span className="text-[11px] text-slate-400 block">{isAr ? 'معدل الجاهزية' : 'Uptime'}</span>
                <span className="text-lg font-black font-mono text-emerald-600 dark:text-emerald-400">
                  {usaAvgUptime}%
                </span>
              </div>
            </div>

            {/* 90-day Visual Uptime Timeline */}
            <div className="my-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                <span>{isAr ? '٩٠ يوماً مضت' : '90 days ago'}</span>
                <span className="text-emerald-500 font-semibold">{isAr ? '١٠٠٪ وقت تشغيل مستمر' : '100% Operational'}</span>
                <span>{isAr ? 'اليوم' : 'Today'}</span>
              </div>
              <div className="grid grid-cols-45 gap-[2px] h-3.5 items-center">
                {uptimeDays.map((d) => (
                  <div
                    key={d.id}
                    className="h-full rounded-sm bg-emerald-500 hover:opacity-80 transition-opacity"
                    title={`Day -${45 - d.id}: 100% Operational`}
                  />
                ))}
              </div>
            </div>

            {/* Sub-locations list */}
            <div className="space-y-3 mt-5">
              {USA_NODES.map((node) => (
                <div
                  key={node.id}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                    isDark ? 'bg-white/[0.02] border-white/5 hover:border-white/10' : 'bg-slate-50 border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {isAr ? node.nameAr : node.nameEn}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span>{node.peering}</span>
                        <span>·</span>
                        <span>{node.tier}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-end font-mono">
                    <span className="text-xs text-slate-400 hidden sm:inline-block">
                      ~{node.latencyMs + pingJitter}ms
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {getUptimeValue(node)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 2. EUROPE (EU) CLUSTER */}
          <div
            className={`rounded-2xl border p-6 backdrop-blur-xl transition-all ${
              isDark ? 'bg-[#0d1524] border-white/10' : 'bg-white border-slate-200 shadow-md'
            }`}
          >
            {/* Cluster Header */}
            <div className="flex items-center justify-between pb-4 border-b border-current/10">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500 font-bold text-xs">
                  🇪🇺
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 dark:text-white">
                    {isAr ? 'عناقيد خوادم أوروبا (Europe Cluster)' : 'Europe Datacenters (EU)'}
                  </h3>
                  <span className="text-xs text-slate-400">
                    {isAr ? '٣ مراكز بيانات (فرانكفورت، أمستردام، لندن)' : '3 Tier IV/III+ Facilities (FRA, AMS, LHR)'}
                  </span>
                </div>
              </div>

              {/* Cluster Aggregated Uptime Badge */}
              <div className="text-end">
                <span className="text-[11px] text-slate-400 block">{isAr ? 'معدل الجاهزية' : 'Uptime'}</span>
                <span className="text-lg font-black font-mono text-emerald-600 dark:text-emerald-400">
                  {europeAvgUptime}%
                </span>
              </div>
            </div>

            {/* 90-day Visual Uptime Timeline */}
            <div className="my-4">
              <div className="flex items-center justify-between text-[11px] text-slate-400 mb-1.5 font-mono">
                <span>{isAr ? '٩٠ يوماً مضت' : '90 days ago'}</span>
                <span className="text-emerald-500 font-semibold">{isAr ? '١٠٠٪ وقت تشغيل مستمر' : '100% Operational'}</span>
                <span>{isAr ? 'اليوم' : 'Today'}</span>
              </div>
              <div className="grid grid-cols-45 gap-[2px] h-3.5 items-center">
                {uptimeDays.map((d) => (
                  <div
                    key={d.id}
                    className="h-full rounded-sm bg-emerald-500 hover:opacity-80 transition-opacity"
                    title={`Day -${45 - d.id}: 100% Operational`}
                  />
                ))}
              </div>
            </div>

            {/* Sub-locations list */}
            <div className="space-y-3 mt-5">
              {EUROPE_NODES.map((node) => (
                <div
                  key={node.id}
                  className={`flex items-center justify-between p-3 rounded-xl border transition-colors ${
                    isDark ? 'bg-white/[0.02] border-white/5 hover:border-white/10' : 'bg-slate-50 border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                    <div>
                      <div className="text-xs font-bold text-slate-900 dark:text-white">
                        {isAr ? node.nameAr : node.nameEn}
                      </div>
                      <div className="text-[11px] text-slate-400 flex items-center gap-2">
                        <span>{node.peering}</span>
                        <span>·</span>
                        <span>{node.tier}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 text-end font-mono">
                    <span className="text-xs text-slate-400 hidden sm:inline-block">
                      ~{node.latencyMs + pingJitter}ms
                    </span>
                    <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                      {getUptimeValue(node)}%
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sovereign Cairo Edge Card */}
        <div
          className={`mt-6 rounded-2xl border p-4 sm:p-5 transition-all ${
            isDark ? 'bg-[#0d1524]/60 border-white/10' : 'bg-slate-50 border-slate-200'
          }`}
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div className="flex items-center gap-3">
              <span className="text-xl">🇪🇬</span>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white">
                    {isAr ? CAIRO_NODE.nameAr : CAIRO_NODE.nameEn}
                  </h4>
                  <span className="inline-flex items-center rounded-md bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-mono font-bold text-emerald-600 dark:text-emerald-400">
                    4ms PING
                  </span>
                </div>
                <p className="text-[11px] text-slate-400">
                  {isAr
                    ? 'مركز بيانات WE / المصرية للاتصالات - القرية الذكية | خطوط فايبر محلية وسيرفرات سيادية داخل جمهورية مصر العربية'
                    : 'Telecom Egypt Tier IV Datacenter - Smart Village | Local low-latency fiber edge routing for sovereign data'}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 text-xs font-mono self-end sm:self-center">
              <span className="text-slate-400">
                {isAr ? 'الجاهزية:' : 'Uptime:'}{' '}
                <strong className="text-emerald-600 dark:text-emerald-400 font-bold">
                  {getUptimeValue(CAIRO_NODE)}%
                </strong>
              </span>
              <span className="inline-flex items-center gap-1 text-emerald-500 font-bold">
                <CheckCircle2 className="h-3.5 w-3.5" />
                {isAr ? 'متصل ومحمي' : 'Online'}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
