import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pill' | 'rect';
  color?: 'default' | 'core';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'pill', color = 'default', className = '', children }) => {
  let baseClass = 'tag'; // default pill
  if (variant === 'rect') {
    baseClass = 'project-type-badge';
  }
  if (color === 'core') {
    baseClass += ' tag-core';
  }
  
  return <span className={`${baseClass} ${className}`.trim()}>{children}</span>;
};
