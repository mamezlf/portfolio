import React from 'react';
import styles from './Eyebrow.module.css';

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
  let baseClass = styles.default;
  if (variant === 'subtle') baseClass = styles.subtle;
  if (className.includes('skills-heading')) {
    baseClass = styles.skillsHeading;
    className = className.replace('skills-heading', '').trim();
  }
  if (className.includes('section-label')) {
    className = className.replace('section-label', '').trim();
  }
  
  return (
    <Component className={`${baseClass} ${className}`.trim()}>
      {children}
    </Component>
  );
};
