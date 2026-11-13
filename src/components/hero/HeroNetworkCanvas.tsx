import React, { useEffect, useRef } from 'react';

interface HeroNetworkCanvasProps {
  mode?: 'hero' | 'global';
  className?: string;
}

interface NetworkNode {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  isAccent: boolean;
}

export const HeroNetworkCanvas: React.FC<HeroNetworkCanvasProps> = ({
  mode = 'global',
  className = '',
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const getMetrics = (vw: number, vh: number) => {
      const isMobile = vw < 768;
      return {
        isMobile,
        nodeCount: isMobile ? 28 : 95,
        linkDist: isMobile ? 105 : 145,
        dpr: Math.min(window.devicePixelRatio || 1, 2),
        w: vw,
        h: vh,
      };
    };

    let width = window.innerWidth;
    let height = window.innerHeight;
    let metrics = getMetrics(width, height);

    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    let prefersReduced = mediaQuery.matches;
    let isTabHidden = document.visibilityState === 'hidden';
    let isHeroOutOfView = false;
    let rafId = 0;

    const createNodes = (count: number, w: number, h: number): NetworkNode[] => {
      const generated: NetworkNode[] = [];
      for (let i = 0; i < count; i++) {
        generated.push({
          x: Math.random() * w,
          y: Math.random() * h,
          vx: (Math.random() - 0.5) * 0.42,
          vy: (Math.random() - 0.5) * 0.42,
          radius: i % 5 === 0 ? 3.2 : 1.9 + Math.random() * 1.4,
          isAccent: i % 3 === 0,
        });
      }
      return generated;
    };

    let nodes: NetworkNode[] = createNodes(metrics.nodeCount, width, height);

    const getPauseReason = (): string => {
      if (prefersReduced) return 'reduced-motion';
      if (isTabHidden) return 'tab-hidden';
      if (mode === 'hero' && isHeroOutOfView) return 'hero-scrolled';
      return 'none';
    };

    const syncCanvasAttributes = () => {
      const pauseReason = getPauseReason();
      const running = pauseReason === 'none';
      const motionState = prefersReduced
        ? 'static-reduced'
        : running
          ? 'running'
          : 'paused';

      canvas.setAttribute('data-node-count', String(metrics.nodeCount));
      canvas.setAttribute('data-dpr', String(metrics.dpr));
      canvas.setAttribute('data-canvas-running', running ? 'true' : 'false');
      canvas.setAttribute('data-canvas-pause-reason', pauseReason);
      canvas.setAttribute('data-motion-state', motionState);
      return running;
    };

    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width || window.innerWidth;
      height = rect.height || window.innerHeight;
      const nextMetrics = getMetrics(width, height);
      const countChanged = nextMetrics.nodeCount !== metrics.nodeCount;
      metrics = nextMetrics;

      canvas.width = Math.round(width * metrics.dpr);
      canvas.height = Math.round(height * metrics.dpr);
      ctx.setTransform(metrics.dpr, 0, 0, metrics.dpr, 0, 0);

      if (countChanged || nodes.length === 0) {
        nodes = createNodes(metrics.nodeCount, width, height);
      }
      syncCanvasAttributes();
    };

    const readThemeColors = () => {
      const styles = getComputedStyle(document.documentElement);
      return {
        nodePrimary: styles.getPropertyValue('--canvas-node-primary').trim() || '#0E6B64',
        nodeSecondary: styles.getPropertyValue('--canvas-node-secondary').trim() || '#1D4ED8',
        lineRgb: styles.getPropertyValue('--canvas-line-rgb').trim() || '14, 107, 100',
        lineAlpha: parseFloat(styles.getPropertyValue('--canvas-line-alpha')) || 0.44,
        nodeAlpha: parseFloat(styles.getPropertyValue('--canvas-node-alpha')) || 0.86,
      };
    };

    let colors = readThemeColors();

    const drawFrame = (advance: boolean) => {
      ctx.clearRect(0, 0, width, height);

      if (advance) {
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          n.x += n.vx;
          n.y += n.vy;

          if (n.x < 0 || n.x > width) n.vx *= -1;
          if (n.y < 0 || n.y > height) n.vy *= -1;
          n.x = Math.max(0, Math.min(width, n.x));
          n.y = Math.max(0, Math.min(height, n.y));
        }
      }

      const maxDist = metrics.linkDist;
      const maxDistSq = maxDist * maxDist;

      ctx.lineWidth = 1.15;
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const distSq = dx * dx + dy * dy;
          if (distSq < maxDistSq) {
            const dist = Math.sqrt(distSq);
            const alpha = (1 - dist / maxDist) * colors.lineAlpha;
            ctx.strokeStyle = `rgba(${colors.lineRgb}, ${alpha.toFixed(3)})`;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        ctx.globalAlpha = colors.nodeAlpha;
        ctx.fillStyle = n.isAccent ? colors.nodePrimary : colors.nodeSecondary;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();

        if (i % 5 === 0) {
          ctx.globalAlpha = colors.nodeAlpha * 0.28;
          ctx.strokeStyle = colors.nodePrimary;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.arc(n.x, n.y, n.radius + 3.2, 0, Math.PI * 2);
          ctx.stroke();
        }
      }
      ctx.globalAlpha = 1;
    };

    const tick = () => {
      if (!syncCanvasAttributes()) {
        rafId = 0;
        drawFrame(false);
        return;
      }
      drawFrame(true);
      rafId = window.requestAnimationFrame(tick);
    };

    const startOrStopLoop = () => {
      const running = syncCanvasAttributes();
      if (running) {
        if (!rafId) {
          rafId = window.requestAnimationFrame(tick);
        }
      } else {
        if (rafId) {
          window.cancelAnimationFrame(rafId);
          rafId = 0;
        }
        drawFrame(false);
      }
    };

    resizeCanvas();
    startOrStopLoop();

    const onResize = () => {
      resizeCanvas();
      drawFrame(false);
    };

    const onVisibility = () => {
      isTabHidden = document.visibilityState === 'hidden';
      startOrStopLoop();
    };

    const onReducedMotionChange = (e: MediaQueryListEvent) => {
      prefersReduced = e.matches;
      startOrStopLoop();
    };

    const themeObserver = new MutationObserver(() => {
      colors = readThemeColors();
      drawFrame(false);
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    });

    let heroObserver: IntersectionObserver | null = null;
    if (mode === 'hero' && 'IntersectionObserver' in window) {
      heroObserver = new IntersectionObserver(
        (entries) => {
          const entry = entries[0];
          isHeroOutOfView = Boolean(entry && !entry.isIntersecting);
          startOrStopLoop();
        },
        { threshold: 0.05 }
      );
      heroObserver.observe(canvas);
    }

    window.addEventListener('resize', onResize, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    mediaQuery.addEventListener('change', onReducedMotionChange);

    return () => {
      if (rafId) window.cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      document.removeEventListener('visibilitychange', onVisibility);
      mediaQuery.removeEventListener('change', onReducedMotionChange);
      themeObserver.disconnect();
      if (heroObserver) heroObserver.disconnect();
    };
  }, [mode]);

  return (
    <canvas
      ref={canvasRef}
      data-testid="hero-network-canvas"
      data-canvas-mode={mode}
      aria-hidden="true"
      className={`${
        mode === 'global'
          ? 'fixed inset-0 w-full h-full pointer-events-none z-0'
          : 'absolute inset-0 w-full h-full pointer-events-none z-0 opacity-25 sm:opacity-45 [mask-image:linear-gradient(to_bottom,black_45%,transparent_98%)] [-webkit-mask-image:linear-gradient(to_bottom,black_45%,transparent_98%)]'
      } ${className}`}
    />
  );
};
