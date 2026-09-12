import React from 'react';

export type CloudType = 'cumulus-puffy' | 'stratus-drift' | 'fluffy-cluster';

interface CloudProps {
  type?: CloudType;
  className?: string;
  width?: number | string;
  opacity?: number;
  highlightColor?: string;
  midColor?: string;
  shadowColor?: string;
  style?: React.CSSProperties;
}

/**
 * Organic SVG Sunset Cloud with rim lighting:
 * - Golden-peach/apricot sunlit highlight on top
 * - Soft blush-rose belly in the middle
 * - Lavender/periwinkle evening shadow along the underside
 */
export const Cloud: React.FC<CloudProps> = ({
  type = 'cumulus-puffy',
  className = '',
  width,
  opacity = 0.85,
  highlightColor = 'rgba(255, 245, 230, 0.95)',
  midColor = 'rgba(248, 195, 215, 0.75)',
  shadowColor = 'rgba(175, 150, 205, 0.55)',
  style,
}) => {
  const uniqueId = React.useId().replace(/:/g, '');
  const baseStyle: React.CSSProperties = {
    ...(width ? { width } : {}),
    opacity,
    ...style,
  };

  if (type === 'stratus-drift') {
    return (
      <svg
        viewBox="0 0 320 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={baseStyle}
        className={`pointer-events-none select-none transition-opacity duration-700 ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`stratusGrad_${uniqueId}`} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={highlightColor} />
            <stop offset="45%" stopColor={midColor} />
            <stop offset="100%" stopColor={shadowColor} />
          </linearGradient>
          <filter id={`stratusGlow_${uniqueId}`} x1="-15%" y1="-20%" width="130%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        <path
          d="M15 50 C 35 40, 60 42, 85 45 C 110 32, 140 28, 175 35 C 205 25, 240 28, 270 38 C 295 35, 310 44, 312 52 C 300 62, 275 60, 250 58 C 220 65, 180 66, 145 60 C 110 65, 75 62, 45 58 C 28 62, 12 58, 15 50 Z"
          fill={`url(#stratusGrad_${uniqueId})`}
          filter={`url(#stratusGlow_${uniqueId})`}
        />
        {/* Soft upper rim highlight */}
        <path
          d="M60 43 C 95 30, 145 27, 185 34 C 215 26, 250 30, 280 40"
          stroke="rgba(255, 255, 255, 0.6)"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          opacity="0.8"
        />
      </svg>
    );
  }

  if (type === 'fluffy-cluster') {
    return (
      <svg
        viewBox="0 0 280 140"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={baseStyle}
        className={`pointer-events-none select-none transition-opacity duration-700 ${className}`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={`clusterGrad_${uniqueId}`} x1="30%" y1="0%" x2="50%" y2="100%">
            <stop offset="0%" stopColor={highlightColor} />
            <stop offset="50%" stopColor={midColor} />
            <stop offset="100%" stopColor={shadowColor} />
          </linearGradient>
          <filter id={`clusterGlow_${uniqueId}`} x1="-15%" y1="-15%" width="130%" height="130%">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Back softer layer */}
        <path
          d="M40 95 C 40 80, 55 70, 75 72 C 85 55, 115 48, 140 55 C 160 42, 195 45, 215 62 C 235 62, 255 75, 250 95 C 240 108, 210 115, 180 110 C 150 115, 110 115, 80 110 C 55 112, 38 108, 40 95 Z"
          fill={shadowColor}
          opacity="0.45"
          filter={`url(#clusterGlow_${uniqueId})`}
        />

        {/* Front cluster */}
        <path
          d="M25 90 C 25 72, 45 60, 65 65 C 80 42, 115 35, 145 42 C 170 28, 210 32, 230 52 C 250 54, 268 70, 262 90 C 255 106, 225 112, 195 108 C 160 114, 120 114, 85 108 C 55 112, 25 106, 25 90 Z"
          fill={`url(#clusterGrad_${uniqueId})`}
          filter={`url(#clusterGlow_${uniqueId})`}
        />

        {/* Soft Golden Sunset Highlight Puff on Top */}
        <ellipse cx="140" cy="50" rx="42" ry="18" fill="rgba(255, 255, 255, 0.55)" />
        <ellipse cx="88" cy="62" rx="30" ry="14" fill="rgba(255, 255, 255, 0.45)" />
      </svg>
    );
  }

  // Default: cumulus-puffy
  return (
    <svg
      viewBox="0 0 340 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={baseStyle}
      className={`pointer-events-none select-none transition-opacity duration-700 ${className}`}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={`cumulusGrad_${uniqueId}`} x1="35%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor={highlightColor} />
          <stop offset="42%" stopColor={midColor} />
          <stop offset="100%" stopColor={shadowColor} />
        </linearGradient>
        <radialGradient id={`cumulusRim_${uniqueId}`} cx="45%" cy="30%" r="55%">
          <stop offset="0%" stopColor="rgba(255, 255, 255, 0.9)" />
          <stop offset="50%" stopColor="rgba(255, 235, 210, 0.5)" />
          <stop offset="100%" stopColor="rgba(255, 255, 255, 0)" />
        </radialGradient>
        <filter id={`cumulusGlow_${uniqueId}`} x="-20%" y="-20%" width="140%" height="140%">
          <feGaussianBlur stdDeviation="4" result="blur" />
          <feComposite in="SourceGraphic" in2="blur" operator="over" />
        </filter>
      </defs>

      {/* Cloud main body */}
      <path
        d="M30 110 C 25 90, 42 75, 68 76 C 75 50, 110 38, 140 45 C 165 24, 215 22, 245 44 C 275 42, 305 60, 310 85 C 322 105, 305 125, 280 128 C 240 132, 190 130, 150 128 C 110 132, 65 130, 42 125 C 28 122, 22 118, 30 110 Z"
        fill={`url(#cumulusGrad_${uniqueId})`}
        filter={`url(#cumulusGlow_${uniqueId})`}
      />

      {/* Sunlit top puff highlight */}
      <path
        d="M95 65 C 120 42, 155 38, 185 45 C 215 32, 250 36, 275 55"
        stroke="rgba(255, 255, 255, 0.7)"
        strokeWidth="3"
        strokeLinecap="round"
        fill="none"
        opacity="0.85"
      />

      {/* Inner radial golden glow */}
      <ellipse
        cx="190"
        cy="55"
        rx="55"
        ry="24"
        fill={`url(#cumulusRim_${uniqueId})`}
        opacity="0.6"
      />
    </svg>
  );
};
