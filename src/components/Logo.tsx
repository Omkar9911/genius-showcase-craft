import React from 'react';

interface LogoProps {
  variant?: 'light' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

export const Logo: React.FC<LogoProps> = ({ 
  variant = 'dark', 
  size = 'md',
  className = '' 
}) => {
  const sizeClasses = {
    sm: 'h-8',
    md: 'h-10',
    lg: 'h-12'
  };

  const iconColor = variant === 'light' ? '#ffffff' : '#1e293b';
  const textColor = variant === 'light' ? '#ffffff' : '#1e293b';

  return (
    <div className={`flex items-center space-x-3 ${className}`}>
      {/* Icon */}
      <div className={`${sizeClasses[size]} aspect-square`}>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          className="w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="48"
            height="48"
            rx="12"
            fill={iconColor}
          />
          <path
            d="M14 32V16h8.5c4.14 0 7.5 3.36 7.5 7.5v1c0 4.14-3.36 7.5-7.5 7.5H14zm6-12v8h2.5c1.38 0 2.5-1.12 2.5-2.5v-3c0-1.38-1.12-2.5-2.5-2.5H20z"
            fill={variant === 'light' ? '#1e293b' : '#ffffff'}
          />
          <path
            d="M32 32c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"
            fill={variant === 'light' ? '#3b82f6' : '#60a5fa'}
          />
        </svg>
      </div>
      
      {/* Wordmark */}
      <span 
        className={`font-bold text-xl tracking-tight`}
        style={{ color: textColor }}
      >
        GENIUS
      </span>
    </div>
  );
};

export default Logo;