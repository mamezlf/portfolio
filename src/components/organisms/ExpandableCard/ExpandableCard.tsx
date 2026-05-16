import React from 'react';
import { AccordionHeader } from '../../molecules/AccordionHeader';
import styles from './ExpandableCard.module.css';

interface ExpandableCardProps {
  id: string;
  period: string;
  typeLabel: string;
  title: string;
  subtitle: string;
  tags: readonly string[];
  isExpanded: boolean;
  onToggle: (id: string) => void;
  children: React.ReactNode;
}

export const ExpandableCard: React.FC<ExpandableCardProps> = ({
  id,
  period,
  typeLabel,
  title,
  subtitle,
  tags,
  isExpanded,
  onToggle,
  children
}) => {
  return (
    <div className={styles.item}>
      <AccordionHeader
        period={period}
        typeLabel={typeLabel}
        title={title}
        subtitle={subtitle}
        tags={tags}
        isExpanded={isExpanded}
        onToggle={() => onToggle(id)}
      />
      <div className={`${styles.wrapper} ${isExpanded ? styles.wrapperExpanded : ""}`.trim()}>
        <div className={styles.detail}>
          {children}
        </div>
      </div>
    </div>
  );
};
