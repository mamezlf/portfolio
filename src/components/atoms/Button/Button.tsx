import React, { type ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'ghost' | 'tab' | 'icon' | 'close' | 'unstyled';
  active?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  variant = 'primary', 
  active, 
  className = '', 
  children, 
  ...props 
}) => {
  let baseClass = '';
  switch (variant) {
    case 'primary':
      baseClass = styles.primary;
      break;
    case 'ghost':
      baseClass = styles.ghost;
      break;
    case 'tab':
      baseClass = `${styles.tab} ${active ? styles.tabActive : ''}`;
      break;
    case 'icon':
      baseClass = styles.icon;
      if (className.includes('prev')) baseClass += ` ${styles.iconPrev}`;
      if (className.includes('next')) baseClass += ` ${styles.iconNext}`;
      break;
    case 'close':
      baseClass = styles.close;
      break;
    case 'unstyled':
      baseClass = '';
      break;
  }

  return (
    <button className={`${baseClass} ${className}`.trim()} {...props}>
      {children}
    </button>
  );
};
