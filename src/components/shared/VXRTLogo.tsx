import React from 'react';
interface VXRTLogoProps {
  size?: 'sm' | 'md' | 'lg';
  showWordmark?: boolean;
  className?: string;
}
export function VXRTLogo({
  size = 'md',
  showWordmark = true,
  className = ''
}: VXRTLogoProps) {
  const sizeClasses = {
    sm: 'h-6',
    md: 'h-8',
    lg: 'h-12'
  };
  const textSizeClasses = {
    sm: 'text-lg',
    md: 'text-xl',
    lg: 'text-2xl'
  };
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <img
        src="/VXRT_Icon_Dark_1080x1080.png"
        alt="VXRT Logo"
        className={sizeClasses[size]} />
      
      {showWordmark &&
      <span
        className={`font-heading font-bold text-ghost-white ${textSizeClasses[size]}`}>
        
          VXRT
        </span>
      }
    </div>);

}