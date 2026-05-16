import React from 'react';

interface EyebrowProps {
  children: React.ReactNode;
  variant?: 'default' | 'subtle';
  className?: string;
  as?: 'span' | 'h4' | 'p';
}

export const Eyebrow: React.FC<EyebrowProps> = ({ 
  children, 
  variant = 'default', 
  className = '',
  as: Component = 'span' 
}) => {
  const baseClass = variant === 'default' ? 'section-label' : 'welcome-eyebrow';
  
  return (
    <Component className={`${baseClass} ${className}`.trim()}>
      {children}
    </Component>
  );
};
