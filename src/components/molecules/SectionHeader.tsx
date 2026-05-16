import React from 'react';
import { Eyebrow } from '../atoms/Eyebrow';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, className = '' }) => {
  return (
    <div className={`projects-header ${className}`.trim()}>
      <Eyebrow>{label}</Eyebrow>
      <h2 className="section-title">{title}</h2>
      {subtitle && <p className="projects-sub">{subtitle}</p>}
    </div>
  );
};
