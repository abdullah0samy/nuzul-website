import React, { useState } from 'react';
import { useApp } from '../../context/AppContext';
import { X, Lock, Mail, KeyRound, Server, ShieldCheck, CheckCircle2, Activity, HardDrive, Cpu } from 'lucide-react';

export const ClientAreaModal: React.FC = () => {
  const { lang, isClientAreaOpen, setIsClientAreaOpen } = useApp();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isClientAreaOpen) return null;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoggedIn(true);
  };

  const handleDemoAccess = () => {
    setEmail('enterprise@client-company.eg');
    setIsLoggedIn(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        onClick={() => setIsClientAreaOpen(false)}
        className="fixed inset-0 bg-overlay backdrop-blur-xs"
      />

      <div className="relative w-full max-w-2xl rounded-2xl bg-surface border border-token shadow-xl overflow-hidden z-10">
        {/* Header */}
        <div className="p-6 border-b border-token flex items-center justify-between bg-surface-2">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-accent-soft border border-accent-soft flex items-center justify-center text-accent">
              <Lock className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-main">
                {lang === 'ar' ? 'بوابة عملاء نُزول تِك السحابية' : 'Nuzul Tech Cloud Client Portal'}
              </h3>
              <p className="text-xs text-muted">
                {lang === 'ar' ? 'إدارة الخوادم، الفواتير، وتذاكر الدعم الفني الموحدة' : 'Manage servers, invoices, and support tickets'}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={() => setIsClientAreaOpen(false)}
            aria-label={lang === 'ar' ? 'إغلاق' : 'Close'}
            className="p-2 rounded-lg bg-surface text-muted hover-text-main transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 md:p-8">
          {!isLoggedIn ? (
            <form onSubmit={handleLogin} className="space-y-5 max-w-md mx-auto">
              <div>
                <label className="block text-xs font-semibold text-main mb-2">
                  {lang === 'ar' ? 'البريد الإلكتروني المؤسسي' : 'Corporate Email'}
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-muted absolute top-1/2 -translate-y-1/2 start-3.5" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="admin@yourcompany.com"
                    dir="ltr"
                    className="w-full ps-10 pe-4 py-3 text-sm input-token ltr-num"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-main mb-2">
                  {lang === 'ar' ? 'كلمة المرور' : 'Password'}
                </label>
                <div className="relative">
                  <KeyRound className="w-4 h-4 text-muted absolute top-1/2 -translate-y-1/2 start-3.5" />
                  <input
                    type="password"
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••••••"
                    dir="ltr"
                    className="w-full ps-10 pe-4 py-3 text-sm input-token ltr-num"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl btn-primary font-bold text-sm"
              >
                {lang === 'ar' ? 'تسجيل الدخول إلى لوحة التحكم' : 'Sign In to Control Panel'}
              </button>

              <div className="relative py-2 flex items-center justify-center">
                <div className="border-t border-token w-full" />
                <span className="bg-surface px-3 text-xs text-muted">
                  {lang === 'ar' ? 'أو' : 'OR'}
                </span>
                <div className="border-t border-token w-full" />
              </div>

              <button
                type="button"
                onClick={handleDemoAccess}
                className="w-full py-3 rounded-xl btn-secondary text-xs font-bold"
              >
                {lang === 'ar' ? 'معاينة لوحة تحكم عميل تجريبية (Live Demo)' : 'Preview Live Demo Client Dashboard'}
              </button>
            </form>
          ) : (
            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-accent-soft border border-accent-soft">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-6 h-6 text-accent" />
                  <div>
                    <div className="text-sm font-bold text-main">
                      {lang === 'ar' ? 'مرحباً بك في لوحة التحكم السحابية' : 'Welcome to Cloud Control Panel'}
                    </div>
                    <div className="text-xs text-muted ltr-num">{email}</div>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsLoggedIn(false)}
                  className="px-3 py-1.5 rounded-lg bg-surface text-xs text-muted hover-text-main border border-token"
                >
                  {lang === 'ar' ? 'تسجيل الخروج' : 'Sign Out'}
                </button>
              </div>

              {/* Active Instances */}
              <div>
                <h4 className="text-xs font-bold text-muted uppercase mb-3">
                  {lang === 'ar' ? 'الخوادم السحابية النشطة (Active Cloud Instances)' : 'Active Cloud Instances'}
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl bg-page border border-token space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-main flex items-center gap-2">
                        <Server className="w-4 h-4 text-accent" />
                        prd-erp-cairo-01
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-success-soft text-success">
                        ONLINE
                      </span>
                    </div>
                    <div className="text-xs text-muted ltr-num">IP: 197.45.118.24 • Cairo EG-CAI</div>
                    <div className="grid grid-cols-3 gap-2 pt-2 border-t border-token text-[11px]">
                      <div className="text-muted flex items-center gap-1">
                        <Cpu className="w-3 h-3 text-accent" /> <span className="ltr-num">24%</span>
                      </div>
                      <div className="text-muted flex items-center gap-1">
                        <Activity className="w-3 h-3 text-accent" /> <span className="ltr-num">6.2/16GB</span>
                      </div>
                      <div className="text-muted flex items-center gap-1">
                        <HardDrive className="w-3 h-3 text-accent" /> <span className="ltr-num">48% NVMe</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-page border border-token space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-main flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-accent" />
                        dr-backup-riyadh-02
                      </span>
                      <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-success-soft text-success">
                        SYNCED
                      </span>
                    </div>
                    <div className="text-xs text-muted ltr-num">IP: 95.177.204.88 • Riyadh DR Node</div>
                    <div className="text-[11px] text-accent pt-2 border-t border-token">
                      {lang === 'ar' ? 'آخر نسخ احتياطي ناجح: منذ 14 دقيقة' : 'Last snapshot: 14 mins ago'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
