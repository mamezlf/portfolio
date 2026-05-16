import React from 'react';

interface SectionTemplateProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
}

export const SectionTemplate: React.FC<SectionTemplateProps> = ({ id, className = '', children }) => {
  return (
    <section id={id} className={className}>
      <div className="section-container">
        {children}
      </div>
    </section>
  );
};
