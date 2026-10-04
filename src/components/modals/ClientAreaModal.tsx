import React, { useState } from 'react';
import { X, Lock, Mail, User, ShieldCheck, ArrowRight, ArrowLeft } from 'lucide-react';
import { useApp } from '../../context/AppContext';
import { NuzulLogo } from '../common/NuzulLogo';

export const ClientAreaModal: React.FC = () => {
  const { isClientAreaOpen, setIsClientAreaOpen, clientAreaTab, setClientAreaTab, locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (!isClientAreaOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setIsClientAreaOpen(false);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-md">
      <div
        className={`relative w-full max-w-md overflow-hidden rounded-3xl border p-7 shadow-2xl transition-colors ${
          isDark
            ? 'border-emerald-500/40 bg-[#0a111c] text-white'
            : 'border-slate-200 bg-white text-slate-900'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setIsClientAreaOpen(false)}
          className={`absolute top-5 right-5 rtl:right-auto rtl:left-5 p-1.5 rounded-full transition-colors cursor-pointer ${
            isDark ? 'text-slate-400 hover:text-white hover:bg-white/10' : 'text-slate-500 hover:text-slate-900 hover:bg-slate-100'
          }`}
          aria-label="Close"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Brand header */}
        <div className="flex items-center gap-3">
          <NuzulLogo size="sm" showSubtitle={false} />
          <div>
            <span className="font-mono text-sm font-bold tracking-wider block">
              {isAr ? 'بوابة عملاء نُزول' : 'Nuzul Client Portal'}
            </span>
            <span className="text-[10px] text-emerald-600 dark:text-emerald-400 font-mono">
              {isAr ? 'حلول واستشارات تقنية المعلومات' : 'IT Solutions & Consulting'}
            </span>
          </div>
        </div>

        {/* Tab switcher */}
        <div
          className={`mt-6 flex rounded-xl border p-1 text-xs ${
            isDark ? 'border-white/10 bg-[#0d1524]' : 'border-slate-200 bg-slate-100'
          }`}
        >
          <button
            type="button"
            onClick={() => setClientAreaTab('login')}
            className={`flex-1 rounded-lg py-2 font-bold transition-colors cursor-pointer ${
              clientAreaTab === 'login'
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-current'
            }`}
          >
            {isAr ? 'تسجيل الدخول' : 'Sign In'}
          </button>
          <button
            type="button"
            onClick={() => setClientAreaTab('register')}
            className={`flex-1 rounded-lg py-2 font-bold transition-colors cursor-pointer ${
              clientAreaTab === 'register'
                ? 'bg-emerald-500 text-white shadow-sm'
                : 'text-slate-400 hover:text-current'
            }`}
          >
            {isAr ? 'إنشاء حساب جديد' : 'Register'}
          </button>
        </div>

        {/* Form Body */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {clientAreaTab === 'register' && (
            <div>
              <label className="block text-xs font-semibold mb-1.5">
                {isAr ? 'الاسم الكامل' : 'Full Name'}
              </label>
              <div className="relative flex items-center">
                <User className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={isAr ? 'أحمد محمد' : 'Ahmed Mohamed'}
                  className={`w-full rounded-xl border py-2.5 px-10 text-xs focus:border-emerald-500 focus:outline-none transition-colors ${
                    isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                  }`}
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-xs font-semibold mb-1.5">
              {isAr ? 'البريد الإلكتروني' : 'Email Address'}
            </label>
            <div className="relative flex items-center">
              <Mail className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="name@company.com"
                className={`w-full rounded-xl border py-2.5 px-10 text-xs focus:border-emerald-500 focus:outline-none font-mono transition-colors ${
                  isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>
          </div>

          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold">
                {isAr ? 'كلمة المرور' : 'Password'}
              </label>
              {clientAreaTab === 'login' && (
                <button
                  type="button"
                  onClick={() => setClientAreaTab('forgot')}
                  className="text-[11px] text-emerald-600 dark:text-emerald-400 hover:underline cursor-pointer"
                >
                  {isAr ? 'نسيت كلمة المرور؟' : 'Forgot password?'}
                </button>
              )}
            </div>
            <div className="relative flex items-center">
              <Lock className="absolute left-3.5 rtl:left-auto rtl:right-3.5 h-4 w-4 text-slate-400" />
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••••••"
                className={`w-full rounded-xl border py-2.5 px-10 text-xs focus:border-emerald-500 focus:outline-none font-mono transition-colors ${
                  isDark ? 'bg-white/5 border-white/10 text-white placeholder-slate-500' : 'bg-slate-50 border-slate-200 text-slate-900 placeholder-slate-400'
                }`}
              />
            </div>
          </div>

          {clientAreaTab === 'forgot' && (
            <div
              className={`rounded-xl border p-3 text-xs ${
                isDark ? 'border-emerald-400/20 bg-emerald-950/20 text-slate-300' : 'border-emerald-200 bg-emerald-50 text-slate-700'
              }`}
            >
              {isAr
                ? 'سنرسل لك رابط إعادة تعيين كلمة المرور إلى بريدك الإلكتروني المسجل.'
                : "We'll send a secure password reset link to your registered corporate email."}
            </div>
          )}

          {isSubmitted ? (
            <div className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500/20 border border-emerald-500/40 p-3 text-xs font-bold text-emerald-600 dark:text-emerald-300">
              <ShieldCheck className="h-4 w-4" />
              <span>
                {isAr ? 'تم التحقق بنجاح! جاري تحويلك لبوابة نُزول تِك...' : 'Authenticated successfully! Redirecting to portal...'}
              </span>
            </div>
          ) : (
            <button
              type="submit"
              className="btn btn-primary w-full py-3 text-xs font-bold uppercase tracking-wider cursor-pointer"
            >
              <span>
                {clientAreaTab === 'login'
                  ? isAr ? 'تسجيل الدخول لبوابة العميل' : 'Sign In to Client Portal'
                  : clientAreaTab === 'register'
                  ? isAr ? 'إنشاء الحساب والمتابعة' : 'Create Account & Continue'
                  : isAr ? 'إرسال رابط الاستعادة' : 'Send Reset Link'}
              </span>
            </button>
          )}
        </form>

        <div className="mt-6 text-center text-[11px] text-slate-400">
          <span>{isAr ? 'اتصال محمي ومشفر عبر SSL 256-bit — نُزول تِك' : '256-bit Encrypted SSL Connection — Nuzul Tech'}</span>
        </div>
      </div>
    </div>
  );
};
