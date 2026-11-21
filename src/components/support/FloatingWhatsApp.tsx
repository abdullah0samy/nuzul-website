import React, { useEffect, useRef, useState, useCallback } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { useApp } from '../../context/AppContext';
import { NUZUL_CONTACT } from '../../data/nuzulData';
import { MessageCircle } from 'lucide-react';
import { usePrefersReducedMotion } from '../common/MotionPrimitives';

const INACTIVITY_TIMEOUT_MS = 10_000;

export const FloatingWhatsApp: React.FC = () => {
  const { lang } = useApp();
  const reducedMotion = usePrefersReducedMotion();
  const [isMinimized, setIsMinimized] = useState(false);
  const isMinimizedRef = useRef(false);
  const timerRef = useRef<number | null>(null);

  // Muted-by-default optional soft notification chime state
  const [isSoundMuted] = useState<boolean>(() => {
    try {
      return localStorage.getItem('nuzul-whatsapp-sound') !== 'unmuted';
    } catch {
      return true;
    }
  });

  // Dynamic visual status indicator based on local Cairo time (Sun–Thu 09:00–18:00)
  const getIsBusinessHours = useCallback((): boolean => {
    try {
      const now = new Date();
      const formatter = new Intl.DateTimeFormat('en-US', {
        timeZone: 'Africa/Cairo',
        weekday: 'short',
        hour: 'numeric',
        hour12: false,
      });
      const parts = formatter.formatToParts(now);
      const weekday = parts.find((p) => p.type === 'weekday')?.value || '';
      const hourStr = parts.find((p) => p.type === 'hour')?.value || '0';
      const hour = parseInt(hourStr, 10);

      const isBusinessDay = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu'].includes(weekday);
      const isWorkingHour = hour >= 9 && hour < 18;
      return isBusinessDay && isWorkingHour;
    } catch {
      return true;
    }
  }, []);

  const [isOnline, setIsOnline] = useState<boolean>(getIsBusinessHours());

  useEffect(() => {
    setIsOnline(getIsBusinessHours());
    const interval = window.setInterval(() => {
      setIsOnline(getIsBusinessHours());
    }, 60_000);
    return () => window.clearInterval(interval);
  }, [getIsBusinessHours]);

  // Soft notification sound (muted by default) played when expanding automatically
  const playSoftNotificationSound = useCallback(() => {
    if (isSoundMuted) return;
    try {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof window.AudioContext }).webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      if (ctx.state === 'suspended') return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(587.33, ctx.currentTime);
      gain.gain.setValueAtTime(0.015, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.16);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      osc.stop(ctx.currentTime + 0.16);
    } catch {
      // Ignore audio errors
    }
  }, [isSoundMuted]);

  useEffect(() => {
    isMinimizedRef.current = isMinimized;
  }, [isMinimized]);

  useEffect(() => {
    const scheduleMinimize = () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      timerRef.current = window.setTimeout(() => {
        isMinimizedRef.current = true;
        setIsMinimized(true);
      }, INACTIVITY_TIMEOUT_MS);
    };

    const handleActivity = () => {
      if (!isMinimizedRef.current) {
        scheduleMinimize();
      }
    };

    const handleExpandFromScroll = () => {
      if (isMinimizedRef.current) {
        playSoftNotificationSound();
      }
      isMinimizedRef.current = false;
      setIsMinimized(false);
      scheduleMinimize();
    };

    scheduleMinimize();

    window.addEventListener('scroll', handleExpandFromScroll, { passive: true });
    window.addEventListener('mousemove', handleActivity, { passive: true });
    window.addEventListener('mousedown', handleActivity, { passive: true });
    window.addEventListener('keydown', handleActivity, { passive: true });
    window.addEventListener('touchstart', handleActivity, { passive: true });

    return () => {
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
      window.removeEventListener('scroll', handleExpandFromScroll);
      window.removeEventListener('mousemove', handleActivity);
      window.removeEventListener('mousedown', handleActivity);
      window.removeEventListener('keydown', handleActivity);
      window.removeEventListener('touchstart', handleActivity);
    };
  }, [playSoftNotificationSound]);

  const message =
    lang === 'ar'
      ? 'مرحبا فريق نزول تك، أرغب في الاستفسار عن خدماتكم.'
      : 'Hello Nuzul Tech team, I would like to inquire about your services.';

  const whatsappUrl = `${NUZUL_CONTACT.whatsappBaseUrl}?text=${encodeURIComponent(message)}`;

  // Simple event tracker on click to monitor engagement
  const handleWhatsAppClick = () => {
    try {
      const payload = {
        event: 'whatsapp_fab_click',
        timestamp: new Date().toISOString(),
        status: isOnline ? 'Online' : 'Away',
        soundMuted: isSoundMuted,
        lang,
      };
      console.info('[Nuzul Analytics] whatsapp_fab_click', payload);
      const win = window as unknown as { __nuzulAnalytics?: Array<typeof payload> };
      win.__nuzulAnalytics = win.__nuzulAnalytics || [];
      win.__nuzulAnalytics.push(payload);
    } catch {
      // Safe fallback
    }
  };

  const statusText = isOnline
    ? lang === 'ar'
      ? 'متصل'
      : 'Online'
    : lang === 'ar'
    ? 'غير متصل'
    : 'Away';

  const accessibleLabel =
    lang === 'ar'
      ? `واتساب (${statusText}) — محادثة مباشرة مع فريق الدعم (يفتح في تبويب جديد)`
      : `WhatsApp (${statusText}) — Direct support chat (opens in a new tab)`;

  return (
    <motion.div
      data-testid="floating-whatsapp-wrapper"
      data-minimized={isMinimized ? 'true' : 'false'}
      initial={reducedMotion ? false : { opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
      className="fixed bottom-4 end-4 sm:bottom-6 sm:end-6 z-40 group"
    >
      {/* Descriptive Tooltip with Dynamic Local Business Hours Status */}
      <div
        id="whatsapp-fab-tooltip"
        role="tooltip"
        data-testid="whatsapp-fab-tooltip"
        className="pointer-events-none absolute bottom-full mb-2.5 end-0 w-max max-w-[260px] rounded-xl bg-surface border border-token px-3.5 py-2.5 shadow-lg opacity-0 translate-y-1 transition-all duration-200 group-hover:opacity-100 group-hover:translate-y-0 group-focus-within:opacity-100 group-focus-within:translate-y-0"
      >
        <div className="flex items-center gap-2 mb-1">
          <span
            data-testid="whatsapp-status-dot"
            aria-hidden="true"
            className="w-2 h-2 rounded-full shrink-0"
            style={{ backgroundColor: isOnline ? 'var(--success)' : 'var(--warning)' }}
          />
          <span className="text-xs font-bold text-main">
            {isOnline
              ? lang === 'ar'
                ? 'متاح الآن (ساعات العمل)'
                : 'Online (Business Hours)'
              : lang === 'ar'
              ? 'خارج ساعات العمل — اترك رسالة'
              : 'Away — Leave a message'}
          </span>
        </div>
        <p className="text-[11px] text-muted leading-tight">
          {lang === 'ar'
            ? 'محادثة عبر واتساب مع فريق نزول تك'
            : 'Direct WhatsApp chat with Nuzul Tech'}
        </p>
      </div>

      <motion.a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        data-testid="whatsapp-fab-link"
        data-minimized={isMinimized ? 'true' : 'false'}
        data-status={isOnline ? 'online' : 'away'}
        data-sound-muted={isSoundMuted ? 'true' : 'false'}
        aria-label={accessibleLabel}
        aria-describedby="whatsapp-fab-tooltip"
        onClick={handleWhatsAppClick}
        onMouseEnter={() => {
          if (isMinimized) {
            playSoftNotificationSound();
            setIsMinimized(false);
          }
        }}
        onFocus={() => setIsMinimized(false)}
        animate={
          reducedMotion
            ? undefined
            : {
                scale: 1,
                opacity: isMinimized ? 0.92 : 1,
              }
        }
        whileHover={reducedMotion ? undefined : { scale: 1.04, opacity: 1 }}
        whileTap={reducedMotion ? undefined : { scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 420, damping: 26 }}
        className={`whatsapp-fab relative inline-flex items-center justify-center min-w-[44px] min-h-[44px] rounded-xl font-semibold text-sm origin-center shadow-lg focus:outline-none focus:ring-2 focus:ring-[var(--focus)] ${
          isMinimized ? 'p-3' : 'gap-2 px-3.5 py-2.5 sm:px-4 sm:py-3'
        }`}
      >
        <MessageCircle
          className="w-5 h-5 shrink-0 transition-all duration-200"
          aria-hidden="true"
        />

        <AnimatePresence initial={false}>
          {!isMinimized && (
            <motion.span
              key="whatsapp-label"
              initial={reducedMotion ? false : { opacity: 0, width: 0 }}
              animate={{ opacity: 1, width: 'auto' }}
              exit={reducedMotion ? undefined : { opacity: 0, width: 0 }}
              transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="hidden sm:inline-flex items-center overflow-hidden whitespace-nowrap text-xs font-bold"
            >
              <span>{lang === 'ar' ? 'واتساب' : 'WhatsApp'}</span>
            </motion.span>
          )}
        </AnimatePresence>

        <span className="sr-only">{accessibleLabel}</span>
      </motion.a>
    </motion.div>
  );
};
