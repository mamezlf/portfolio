import React from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`${styles.avatar} ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        style={{ width: "52%", height: "52%", objectFit: "contain" }}
      />
    </div>
  );
};
