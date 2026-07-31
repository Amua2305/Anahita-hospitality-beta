import React, { useState } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  variant?: 'full' | 'horizontal' | 'mark';
}

export const Logo: React.FC<LogoProps> = ({ size = 'md', variant = 'full', className = '' }) => {
  // Height and sizing presets
  const sizeClasses = {
    sm: 'h-10 sm:h-12 w-auto',
    md: 'h-14 sm:h-16 w-auto',
    lg: 'h-20 sm:h-24 w-auto',
    xl: 'h-28 sm:h-36 w-auto',
  };

  // Primary image source with automatic fallback on image load error
  const defaultSrc = variant === 'horizontal' ? '/logo-horizontal.svg' : '/logo.png';
  const [imgSrc, setImgSrc] = useState(defaultSrc);

  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <img
        src={imgSrc}
        alt="ANAHITA HOSPITALITY"
        onError={() => {
          if (imgSrc !== '/logo.svg') {
            setImgSrc('/logo.svg');
          }
        }}
        className={`${sizeClasses[size]} object-contain filter drop-shadow-[0_2px_10px_rgba(232,120,149,0.2)] hover:scale-[1.02] transition-transform duration-300`}
      />
    </div>
  );
};
