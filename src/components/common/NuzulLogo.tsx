import React from 'react';
import { useApp } from '../../context/AppContext';

interface NuzulLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
}

export const NuzulLogo: React.FC<NuzulLogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
}) => {
  const { locale, theme } = useApp();
  const isAr = locale === 'ar';
  const isDark = theme === 'dark';

  // Sizing definitions matching the 230x48 aspect ratio
  const logoHeights = {
    sm: 'h-7 sm:h-8',
    md: 'h-8 sm:h-9 md:h-10',
    lg: 'h-10 sm:h-11 md:h-12',
  };

  const logoSrc = isDark
    ? '/assets/aistudio/nuzul-clean-dark_0fce6014.svg'
    : '/assets/aistudio/nuzul-clean-light_cf8663fc.svg';

  return (
    <div className={`flex flex-col select-none ${className}`}>
      <div className="flex items-center gap-2">
        <img
          src={logoSrc}
          alt="Nuzul Tech | نُزول تِك"
          className={`${logoHeights[size]} w-auto object-contain transition-transform duration-200 group-hover:scale-[1.02] filter drop-shadow-[0_1px_4px_rgba(16,185,129,0.15)]`}
          loading="eager"
        />
      </div>

      {showSubtitle && (
        <span
          className={`hidden lg:block text-[9px] font-medium tracking-wider uppercase mt-1 leading-none ${
            isDark ? 'text-slate-400' : 'text-slate-500'
          }`}
        >
          {isAr ? 'حلول واستشارات تقنية المعلومات' : 'IT Solutions & Consulting'}
        </span>
      )}
    </div>
  );
};

