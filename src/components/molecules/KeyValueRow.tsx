import React from 'react';

interface KeyValueRowProps {
  label: string;
  value: React.ReactNode;
  variant?: 'info' | 'lang';
  className?: string;
}

export const KeyValueRow: React.FC<KeyValueRowProps> = ({ 
  label, 
  value, 
  variant = 'info', 
  className = '' 
}) => {
  if (variant === 'lang') {
    return (
      <div className={`lang-item ${className}`.trim()}>
        <span className="lang-name">{label}</span>
        <span className="lang-level">{value}</span>
      </div>
    );
  }

  return (
    <div className={`bio-info-item ${className}`.trim()}>
      <span className="bio-info-label">{label}</span>
      <span className="bio-info-value">{value}</span>
    </div>
  );
};
