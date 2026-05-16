import React, { type ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'tab' | 'icon' | 'close' | 'unstyled';
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
      baseClass = 'btn-primary';
      break;
    case 'tab':
      baseClass = `filter-tab ${active ? 'active' : ''}`;
      break;
    case 'icon':
      baseClass = 'lightbox-nav';
      break;
    case 'close':
      baseClass = 'lightbox-close';
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
