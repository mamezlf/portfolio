import React from 'react';
import styles from './ExternalLink.module.css';

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
  let baseClass = styles.inline;
  if (className.includes('research-doc-link')) {
    baseClass = styles.doc;
    className = className.replace('research-doc-link', '').trim();
  } else if (className.includes('research-link')) {
    baseClass = styles.inline;
    className = className.replace('research-link', '').trim();
  } else if (className.includes('project-link')) {
    baseClass = styles.project;
    className = className.replace('project-link', '').trim();
  } else if (className.includes('closing-text-link')) {
    baseClass = styles.closing;
    className = className.replace('closing-text-link', '').trim();
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClass} ${className}`.trim()}
      {...props}
    >
      {children}
    </a>
  );
};
