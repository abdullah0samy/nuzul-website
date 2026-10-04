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

  // Dimension settings
  const imgSizes = {
    sm: 'h-8 w-8',
    md: 'h-10 w-10',
    lg: 'h-12 w-12',
  };

  const titleSizes = {
    sm: 'text-sm',
    md: 'text-base sm:text-lg',
    lg: 'text-xl',
  };

  const logoSrc = isDark ? '/brand/nuzul-logo-dark.png' : '/brand/nuzul-logo-light.png';

  return (
    <div className={`flex items-center gap-2.5 sm:gap-3 select-none ${className}`}>
      {/* Official Original Brand Logo Image */}
      <div className={`relative shrink-0 flex items-center justify-center ${imgSizes[size]}`}>
        <img
          src={logoSrc}
          alt="Nuzul Tech | نُزول تِك"
          className="h-full w-full object-contain filter drop-shadow-[0_2px_8px_rgba(16,185,129,0.25)] transition-transform duration-200 group-hover:scale-105"
          onError={(e) => {
            const target = e.currentTarget;
            if (target.src.indexOf('dark') !== -1) {
              target.src = '/brand/nuzul-logo-light.png';
            }
          }}
        />
      </div>

      {/* Brand Name & Typography */}
      <div className="flex flex-col">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className={`font-black tracking-tight transition-colors ${titleSizes[size]} ${
              isDark ? 'text-white' : 'text-slate-900'
            }`}
          >
            {isAr ? 'نُزول تِك' : 'Nuzul Tech'}
          </span>
        </div>

        {showSubtitle && (
          <span
            className={`text-[10px] font-medium tracking-wide mt-0.5 leading-none ${
              isDark ? 'text-slate-400' : 'text-slate-500'
            }`}
          >
            {isAr ? 'حلول واستشارات تقنية المعلومات' : 'IT Solutions & Consulting'}
          </span>
        )}
      </div>
    </div>
  );
};
