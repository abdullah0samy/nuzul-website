import React from 'react';
import { motion, Variants, Transition, useReducedMotion } from 'framer-motion';

export interface RevealOnScrollProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  delay?: number;
  duration?: number;
  distance?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
  scale?: number;
  blur?: boolean;
  spring?: boolean;
}

export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.6,
  distance = 32,
  threshold = 0.15,
  once = true,
  className = '',
  scale = 1,
  blur = false,
  spring = true,
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getInitialOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const initialOffset = getInitialOffset();

  const transition: Transition = shouldReduceMotion
    ? { duration: 0.2, delay }
    : spring
    ? {
        type: 'spring',
        damping: 24,
        stiffness: 110,
        mass: 0.8,
        delay,
      }
    : {
        duration,
        ease: [0.21, 0.47, 0.32, 0.98],
        delay,
      };

  return (
    <motion.div
      initial={{
        opacity: 0,
        x: initialOffset.x,
        y: initialOffset.y,
        scale: !shouldReduceMotion && scale !== 1 ? scale : 1,
        filter: !shouldReduceMotion && blur ? 'blur(6px)' : 'blur(0px)',
      }}
      whileInView={{
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, amount: threshold }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerContainerProps {
  children: React.ReactNode;
  staggerDelay?: number;
  delayChildren?: number;
  threshold?: number;
  once?: boolean;
  className?: string;
}

export const StaggerContainer: React.FC<StaggerContainerProps> = ({
  children,
  staggerDelay = 0.1,
  delayChildren = 0.05,
  threshold = 0.1,
  once = true,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : staggerDelay,
        delayChildren: shouldReduceMotion ? 0 : delayChildren,
      },
    },
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export interface StaggerItemProps {
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right' | 'none';
  distance?: number;
  scale?: number;
  spring?: boolean;
  className?: string;
}

export const StaggerItem: React.FC<StaggerItemProps> = ({
  children,
  direction = 'up',
  distance = 24,
  scale = 0.96,
  spring = true,
  className = '',
}) => {
  const shouldReduceMotion = useReducedMotion();

  const getOffset = () => {
    if (shouldReduceMotion) return { x: 0, y: 0 };
    switch (direction) {
      case 'up':
        return { y: distance, x: 0 };
      case 'down':
        return { y: -distance, x: 0 };
      case 'left':
        return { x: distance, y: 0 };
      case 'right':
        return { x: -distance, y: 0 };
      case 'none':
      default:
        return { x: 0, y: 0 };
    }
  };

  const offset = getOffset();

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      x: offset.x,
      y: offset.y,
      scale: shouldReduceMotion ? 1 : scale,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      transition: shouldReduceMotion
        ? { duration: 0.2 }
        : spring
        ? {
            type: 'spring',
            damping: 22,
            stiffness: 120,
            mass: 0.7,
          }
        : {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
          },
    },
  };

  return (
    <motion.div variants={itemVariants} className={className}>
      {children}
    </motion.div>
  );
};

// Common animation variants for reuse
export const fadeInUpVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', damping: 24, stiffness: 120 },
  },
};

export const scaleInVariants: Variants = {
  hidden: { opacity: 0, scale: 0.92 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: 'spring', damping: 20, stiffness: 130 },
  },
};

export const FadeIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <RevealOnScroll direction="none" delay={delay} className={className}>
    {children}
  </RevealOnScroll>
);

export const ScaleIn: React.FC<{ children: React.ReactNode; delay?: number; className?: string }> = ({
  children,
  delay = 0,
  className = '',
}) => (
  <RevealOnScroll direction="none" scale={0.92} delay={delay} className={className}>
    {children}
  </RevealOnScroll>
);

export const SlideIn: React.FC<{
  children: React.ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  className?: string;
}> = ({ children, direction = 'up', delay = 0, className = '' }) => (
  <RevealOnScroll direction={direction} delay={delay} className={className}>
    {children}
  </RevealOnScroll>
);

