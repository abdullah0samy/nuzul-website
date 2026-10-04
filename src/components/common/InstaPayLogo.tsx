import React from 'react';

interface InstaPayLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'wordmark' | 'badge';
  showInstantTag?: boolean;
}

/**
 * Authentic Official InstaPay Egypt Brand Typographic Identity
 * Displays the signature 'insta' in white/plum and 'pay' in vibrant Egyptian Orange (#FF7A00).
 */
export const InstaPayLogo: React.FC<InstaPayLogoProps> = ({
  className = '',
  size = 'md',
  variant = 'wordmark',
  showInstantTag = false,
}) => {
  const sizeMap = {
    sm: 'text-xs tracking-tight',
    md: 'text-sm tracking-tight',
    lg: 'text-base tracking-tight',
    xl: 'text-xl tracking-tight',
  };

  const wordmark = (
    <span
      className={`font-sans font-black select-none inline-flex items-center ${sizeMap[size]} ${className}`}
      dir="ltr"
    >
      <span className="text-white font-black drop-shadow-sm">insta</span>
      <span className="text-[#FF7A00] font-black drop-shadow-sm">pay</span>
    </span>
  );

  if (variant === 'wordmark') {
    return wordmark;
  }

  return (
    <div
      className={`inline-flex items-center gap-1.5 rounded-xl border border-purple-500/40 bg-gradient-to-r from-[#2c0830] via-[#1a051d] to-[#120314] px-2.5 py-1 text-white shadow-md transition-all ${className}`}
    >
      {wordmark}
      {showInstantTag && (
        <span className="rounded-md bg-emerald-500/20 border border-emerald-500/40 px-1.5 py-0.2 text-[9px] font-mono font-bold text-emerald-400">
          تحويل لحظي
        </span>
      )}
    </div>
  );
};
