import React from 'react';

interface ExternalLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  children: React.ReactNode;
  variant?: 'inline' | 'block';
}

export const ExternalLink: React.FC<ExternalLinkProps> = ({ 
  children, 
  variant = 'inline', 
  className = '', 
  ...props 
}) => {
  // Let the caller pass specific class names if needed, 
  // but standard rel/target are applied here.
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      {...props}
    >
      {children}
    </a>
  );
};
