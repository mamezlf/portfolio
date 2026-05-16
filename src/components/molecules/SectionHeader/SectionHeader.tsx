import React from 'react';
import { Eyebrow } from '../../atoms/Eyebrow';
import styles from './SectionHeader.module.css';

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: React.ReactNode;
  className?: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ label, title, subtitle, className = '' }) => {
  return (
    <div className={`${styles.header} ${className}`.trim()}>
      <Eyebrow>{label}</Eyebrow>
      <h2 className={`section-title ${styles.title}`}>{title}</h2>
      {subtitle && <p className={styles.sub}>{subtitle}</p>}
    </div>
  );
};
