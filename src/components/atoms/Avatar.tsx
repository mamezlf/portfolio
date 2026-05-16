import React from 'react';

interface AvatarProps {
  src: string;
  alt: string;
  className?: string;
}

export const Avatar: React.FC<AvatarProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`bio-avatar ${className}`.trim()}>
      <img
        src={src}
        alt={alt}
        style={{ width: "52%", height: "52%", objectFit: "contain" }}
      />
    </div>
  );
};
