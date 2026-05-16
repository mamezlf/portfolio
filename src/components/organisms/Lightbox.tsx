import React, { useEffect } from 'react';
import { Button } from '../atoms/Button';

export interface LightboxState {
  images: string[];
  index: number;
  direction: "left" | "right" | null;
}

interface LightboxProps {
  state: LightboxState | null;
  onClose: () => void;
  onChangeState: (newState: LightboxState) => void;
}

export const Lightbox: React.FC<LightboxProps> = ({ state, onClose, onChangeState }) => {
  useEffect(() => {
    if (!state || state.images.length <= 1) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        onChangeState({
          ...state,
          direction: "right",
          index: (state.index - 1 + state.images.length) % state.images.length,
        });
      } else if (e.key === "ArrowRight") {
        onChangeState({
          ...state,
          direction: "left",
          index: (state.index + 1) % state.images.length,
        });
      } else if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [state, onClose, onChangeState]);

  if (!state) return null;

  return (
    <div className="lightbox" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <Button variant="close" onClick={onClose} aria-label="閉じる">
          ✕
        </Button>
        {state.images.length > 1 && (
          <Button
            variant="icon"
            className="prev"
            onClick={(e) => {
              e.stopPropagation();
              onChangeState({
                ...state,
                direction: "right",
                index: (state.index - 1 + state.images.length) % state.images.length,
              });
            }}
            aria-label="前の画像"
          >
            ←
          </Button>
        )}
        <img
          key={state.index}
          src={`${import.meta.env.BASE_URL}${state.images[state.index]}`}
          alt="Preview"
          className={`lightbox-img ${
            state.direction === "left"
              ? "slide-from-right"
              : state.direction === "right"
              ? "slide-from-left"
              : ""
          }`}
        />
        {state.images.length > 1 && (
          <Button
            variant="icon"
            className="next"
            onClick={(e) => {
              e.stopPropagation();
              onChangeState({
                ...state,
                direction: "left",
                index: (state.index + 1) % state.images.length,
              });
            }}
            aria-label="次の画像"
          >
            →
          </Button>
        )}
        <div className="lightbox-counter">
          {state.index + 1} / {state.images.length}
        </div>
      </div>
    </div>
  );
};
