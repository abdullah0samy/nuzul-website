import React from 'react';

interface InstaPayLogoProps {
  className?: string;
  size?: number;
}

export const InstaPayLogo: React.FC<InstaPayLogoProps> = ({ className = '', size = 28 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`shrink-0 ${className}`}
      aria-label="InstaPay Logo"
    >
      <rect width="48" height="48" rx="12" fill="var(--accent)" />
      {/* Fast transfer arrows */}
      <path
        d="M15 19H31L26 14M33 29H17L22 34"
        stroke="var(--accent-contrast)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="24" cy="24" r="3" fill="var(--accent-contrast)" />
    </svg>
  );
};
