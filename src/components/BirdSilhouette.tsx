import React from 'react';

interface BirdSilhouetteProps {
  className?: string;
  size?: number;
  opacity?: number;
  flip?: boolean;
}

/**
 * Minimalist poetic SVG silhouette of a bird gliding in evening skies.
 * Clean, fluid double-curve contours inspired by birds at twilight.
 */
export const BirdSilhouette: React.FC<BirdSilhouetteProps> = ({
  className = '',
  size = 22,
  opacity = 0.75,
  flip = false,
}) => {
  return (
    <svg
      width={size}
      height={size * 0.42}
      viewBox="0 0 100 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`pointer-events-none select-none transition-opacity duration-700 text-[#2A1D33] ${className}`}
      style={{
        opacity,
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
      aria-hidden="true"
    >
      <path
        d="M2 38 C 22 22, 38 4, 50 14 C 62 4, 78 22, 98 38 C 82 30, 66 18, 50 22 C 34 18, 18 30, 2 38 Z"
        fill="currentColor"
      />
    </svg>
  );
};

interface BirdFlockProps {
  className?: string;
  baseSize?: number;
  opacity?: number;
  flip?: boolean;
}

/**
 * BirdFlock: A loose, peaceful diagonal formation of 3-4 small birds gliding across the sky.
 */
export const BirdFlock: React.FC<BirdFlockProps> = ({
  className = '',
  baseSize = 20,
  opacity = 0.75,
  flip = false,
}) => {
  return (
    <div
      className={`pointer-events-none select-none relative inline-block text-[#2A1D33] ${className}`}
      style={{
        transform: flip ? 'scaleX(-1)' : undefined,
      }}
      aria-hidden="true"
    >
      {/* Lead Bird */}
      <div className="relative">
        <BirdSilhouette size={baseSize * 1.25} opacity={opacity} />
      </div>
      {/* Second Bird - trailing diagonal up-right */}
      <div className="absolute -top-4 left-8">
        <BirdSilhouette size={baseSize * 0.95} opacity={opacity * 0.9} />
      </div>
      {/* Third Bird - trailing further back */}
      <div className="absolute -top-1 left-16">
        <BirdSilhouette size={baseSize * 0.78} opacity={opacity * 0.8} />
      </div>
      {/* Fourth Bird - gentle low flanker */}
      <div className="absolute top-5 left-11">
        <BirdSilhouette size={baseSize * 0.7} opacity={opacity * 0.7} />
      </div>
    </div>
  );
};
