import React from 'react';
import { useApp } from '../../context/AppContext';

interface NuzulLogoProps {
  className?: string;
  size?: number | 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark' | 'auto';
}

export const NuzulLogo: React.FC<NuzulLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'auto',
}) => {
  const { lang, resolvedTheme } = useApp();
  const effectiveVariant = variant === 'auto' ? resolvedTheme : variant;

  const iconHeight =
    typeof size === 'number'
      ? size
      : size === 'sm'
      ? 26
      : size === 'lg'
      ? 36
      : 32;

  const isDarkSurface = effectiveVariant === 'dark';
  const primaryWordClass = isDarkSurface ? 'text-[var(--navy-text)]' : 'text-[var(--text)]';
  const accentWordClass = isDarkSurface ? 'text-[var(--logo-arrow-on-dark)]' : 'text-[var(--accent)]';
  const cloudStroke = isDarkSurface ? 'var(--logo-cloud-on-dark)' : 'var(--logo-cloud)';
  const arrowStroke = isDarkSurface ? 'var(--logo-arrow-on-dark)' : 'var(--accent)';

  return (
    <div
      className={`inline-flex items-center gap-2.5 select-none shrink-0 ${className}`}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 90 58"
        height={iconHeight}
        width={Math.round(iconHeight * (90 / 58))}
        aria-hidden="true"
        className="shrink-0 block"
      >
        <path
          d="M 36 53 L 24 53 C 13 53 5 45 5 34 C 5 25 12 17 22 16 C 25 7 35 2 47 2 C 59 2 69 9 72 19 C 80 20 86 27 86 35 C 86 45 78 53 68 53 L 52 53"
          fill="none"
          stroke={cloudStroke}
          strokeWidth="6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M 28 53 L 44 25 C 45.5 22 48.5 22 49.5 25 L 55 41 C 56 44 58.5 44 60 41 L 68 22"
          fill="none"
          stroke={arrowStroke}
          strokeWidth="6.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <polygon points="71,13 60,21 73,26" fill={arrowStroke} />
      </svg>

      <span className="text-lg sm:text-[1.2rem] font-bold tracking-tight leading-none whitespace-nowrap">
        {lang === 'ar' ? (
          <>
            <span className={primaryWordClass}>نزول</span>{' '}
            <span className={accentWordClass}>تك</span>
          </>
        ) : (
          <bdi dir="ltr" className="ltr-num">
            <span className={primaryWordClass}>Nuzul</span>{' '}
            <span className={accentWordClass}>Tech</span>
          </bdi>
        )}
      </span>
    </div>
  );
};
