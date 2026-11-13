import React, { useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

export function usePrefersReducedMotion(): boolean {
  const framerReduced = useReducedMotion();
  const [mediaReduced, setMediaReduced] = useState<boolean>(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    const onChange = (e: MediaQueryListEvent) => setMediaReduced(e.matches);
    setMediaReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  return Boolean(framerReduced || mediaReduced);
}

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  testId?: string;
}

/**
 * ScrollReveal: Animates strictly transform (16px translateY) and opacity once when entering viewport.
 * Respects prefers-reduced-motion by rendering a static element with zero animation.
 */
export const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className = '',
  delay = 0,
  testId,
}) => {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        data-testid={testId}
        data-motion-mode="static"
        className={className}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      data-testid={testId}
      data-motion-mode="animated"
      initial={{ opacity: 0.98, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12 }}
      transition={{
        duration: 0.42,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerGroupProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  testId?: string;
}

/**
 * StaggerGroup & StaggerItem: Coordinates staggered reveal of child elements.
 */
export const StaggerGroup: React.FC<StaggerGroupProps> = ({
  children,
  className = '',
  staggerDelay = 0.08,
  testId,
}) => {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div
        data-testid={testId}
        data-motion-mode="static"
        className={className}
      >
        {children}
      </div>
    );
  }

  return (
    <motion.div
      data-testid={testId}
      data-motion-mode="animated"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        visible: {
          transition: {
            staggerChildren: staggerDelay,
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface StaggerItemProps {
  children: React.ReactNode;
  className?: string;
  testId?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  className = '',
  testId,
}) => {
  const reducedMotion = usePrefersReducedMotion();

  if (reducedMotion) {
    return (
      <div data-testid={testId} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      data-testid={testId}
      variants={{
        hidden: { opacity: 0.98, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.38,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  durationMs?: number;
  className?: string;
  testId?: string;
}

/**
 * AnimatedCounter: Animates a numeric figure once when it enters the viewport.
 * Uses Western numerals isolated in <bdi dir="ltr">.
 * In reduced-motion mode, displays the final target value immediately without ticking.
 */
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  value,
  suffix = '',
  prefix = '',
  durationMs = 550,
  className = '',
  testId,
}) => {
  const reducedMotion = usePrefersReducedMotion();
  const [displayValue, setDisplayValue] = useState<number>(value);
  const hasAnimatedRef = useRef<boolean>(false);
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (reducedMotion) {
      setDisplayValue(value);
      hasAnimatedRef.current = true;
      return;
    }

    const el = spanRef.current;
    if (!el || hasAnimatedRef.current) return;

    let rafId: number | null = null;

    const runCounter = () => {
      if (hasAnimatedRef.current) return;
      hasAnimatedRef.current = true;
      const startTime = performance.now();
      const startVal = Math.max(0, Math.floor(value * 0.25));

      const tick = (now: number) => {
        const elapsed = now - startTime;
        const progress = Math.min(1, elapsed / durationMs);
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(startVal + (value - startVal) * eased);
        setDisplayValue(current);
        if (progress < 1) {
          rafId = requestAnimationFrame(tick);
        } else {
          setDisplayValue(value);
        }
      };

      rafId = requestAnimationFrame(tick);
    };

    if (typeof IntersectionObserver === 'undefined') {
      setDisplayValue(value);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            runCounter();
            observer.disconnect();
            break;
          }
        }
      },
      { threshold: 0.15 }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [value, durationMs, reducedMotion]);

  return (
    <bdi
      ref={spanRef}
      dir="ltr"
      data-testid={testId}
      data-target-value={value}
      data-counter-animated={String(hasAnimatedRef.current)}
      className={`ltr-num ${className}`}
    >
      {prefix}
      {displayValue}
      {suffix}
    </bdi>
  );
};
