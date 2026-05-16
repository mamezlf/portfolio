import React from 'react';
import { Badge } from '../atoms/Badge';

interface AccordionHeaderProps {
  period: string;
  typeLabel: string;
  title: string;
  subtitle: string;
  tags: string[];
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
    <div
      className="project-card-header"
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && onToggle()}
    >
      <div className="project-meta">
        <span className="project-period">{period}</span>
        <Badge variant="rect">{typeLabel}</Badge>
      </div>
      <h3 className="project-name">{title}</h3>
      <p className="project-tagline">{subtitle}</p>
      <div className="project-tags">
        {tags.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>

      <span className="expand-indicator">
        {isExpanded ? "閉じる" : "詳しく読む"}
        <span className="expand-arrow">
          {isExpanded ? " ↑" : " ↓"}
        </span>
      </span>
    </div>
  );
};
