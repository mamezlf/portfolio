import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'pill' | 'rect';
  color?: 'default' | 'core';
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ variant = 'pill', color = 'default', className = '', children }) => {
  let baseClass = styles.badge; // default pill
  if (variant === 'rect') {
    baseClass = styles.rect;
  }
  if (color === 'core') {
    baseClass += ` ${styles.core}`;
  }
  
  return <span className={`${baseClass} ${className}`.trim()}>{children}</span>;
};
