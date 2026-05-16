import React from 'react';
import { Badge } from '../../atoms/Badge';
import styles from './AccordionHeader.module.css';

interface AccordionHeaderProps {
  period: string;
  typeLabel: string;
  title: string;
  subtitle: string;
  tags: readonly string[];
  isExpanded: boolean;
  onToggle: () => void;
}

export const AccordionHeader: React.FC<AccordionHeaderProps> = ({
  period,
  typeLabel,
  title,
  subtitle,
  tags,
  isExpanded,
  onToggle
}) => {
  return (
    <div className={styles.header} onClick={onToggle} role="button" tabIndex={0} onKeyDown={(e) => e.key === "Enter" && onToggle()}>
      <div className={styles.meta}>
        <span className={styles.period}>{period}</span>
        <Badge variant="rect">{typeLabel}</Badge>
      </div>
      <h3 className={styles.name}>{title}</h3>
      <p className={styles.tagline}>{subtitle}</p>
      <div className={styles.tags}>
        {tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <span className={styles.indicator}>
        {isExpanded ? "閉じる" : "詳しく読む"}
        <span className={styles.arrow}>
          {isExpanded ? " ↑" : " ↓"}
        </span>
      </span>
    </div>
  );
};
