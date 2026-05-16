import React from 'react';
import styles from './KeyValueRow.module.css';

interface KeyValueRowProps {
  label: string;
  value: React.ReactNode;
  variant?: 'bio' | 'lang';
}

export const KeyValueRow: React.FC<KeyValueRowProps> = ({ label, value, variant = 'bio' }) => {
  if (variant === 'lang') {
    return (
      <div className={styles.langRow}>
        <span className={styles.langLabel}>{label}</span>
        <span className={styles.langValue}>{value}</span>
      </div>
    );
  }

  return (
    <div className={styles.bioRow}>
      <span className={styles.bioLabel}>{label}</span>
      <span className={styles.bioValue}>{value}</span>
    </div>
  );
};
