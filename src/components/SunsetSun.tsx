import React from 'react';

interface SunsetSunProps {
  className?: string;
  size?: number | string;
  scrollProgress?: number;
}

/**
 * SunsetSun: Poetic and visible "Matahari Terbenam" (Setting Sun).
 * Features:
 * - Radiant multi-stop golden/peach/amber glowing sun disk
 * - Multiple corona rings with soft atmospheric pulse
 * - Subtle radiant twilight crepuscular sunbeams (god rays)
 * - Soft cloud silhouette crossing the bottom half of the sun disk,
 *   evoking the classic sunset descending into evening clouds.
 */
export const SunsetSun: React.FC<SunsetSunProps> = ({
  className = '',
  size,
  scrollProgress = 0,
}) => {
  // Sinks subtly as the user scrolls, shifting slightly towards deeper orange-magenta twilight
  const translateY = scrollProgress * 140;
  const opacity = Math.max(1 - scrollProgress * 0.95, 0.4);

  const dimensionStyle = size ? { width: size, height: size } : {};

  return (
    <div
      className={`pointer-events-none select-none relative transition-transform duration-500 ${className}`}
      style={{
        ...dimensionStyle,
        transform: `translateY(${translateY}px)`,
        opacity,
      }}
      aria-hidden="true"
    >
      {/* Outer Atmospheric Sunburst Warmth Aura (Wide Golden Halo) */}
      <div
        className="absolute inset-[-60%] rounded-full pointer-events-none transition-opacity duration-700"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 218, 160, 0.65) 0%, rgba(255, 160, 140, 0.45) 35%, rgba(210, 145, 195, 0.25) 60%, transparent 75%)',
          filter: 'blur(55px)',
          animation: 'sunCoronaPulse 8s ease-in-out infinite',
        }}
      />

      {/* Mid Corona Glow Ring */}
      <div
        className="absolute inset-[-25%] rounded-full pointer-events-none"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 240, 200, 0.75) 0%, rgba(255, 185, 130, 0.5) 45%, rgba(240, 145, 180, 0.25) 70%, transparent 80%)',
          filter: 'blur(28px)',
        }}
      />

      {/* Sun Ray Radiance Beams (Subtle Crepuscular Rays) */}
      <svg
        className="absolute inset-[-45%] w-[190%] h-[190%] pointer-events-none opacity-40 animate-sun-rays"
        viewBox="0 0 200 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="sunRayGrad" x1="50%" y1="50%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF2D6" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#FFBA7A" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#FF7A95" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Soft radial angled beams */}
        <g stroke="url(#sunRayGrad)" strokeWidth="3.5" opacity="0.65">
          <line x1="100" y1="10" x2="100" y2="45" strokeLinecap="round" />
          <line x1="164" y1="36" x2="139" y2="61" strokeLinecap="round" />
          <line x1="190" y1="100" x2="155" y2="100" strokeLinecap="round" />
          <line x1="164" y1="164" x2="139" y2="139" strokeLinecap="round" />
          <line x1="10" y1="100" x2="45" y2="100" strokeLinecap="round" />
          <line x1="36" y1="36" x2="61" y2="61" strokeLinecap="round" />
          <line x1="36" y1="164" x2="61" y2="139" strokeLinecap="round" />
        </g>
      </svg>

      {/* Main Setting Sun Disc */}
      <div
        className="relative w-full h-full rounded-full overflow-hidden shadow-2xl transition-all duration-700"
        style={{
          background:
            'radial-gradient(circle at 45% 42%, #FFFFEB 0%, #FFE28A 22%, #FFA858 52%, #FF6B8B 82%, #D44E82 100%)',
          boxShadow:
            '0 0 50px rgba(255, 205, 120, 0.8), 0 0 100px rgba(255, 140, 110, 0.55), inset 0 -8px 20px rgba(212, 78, 130, 0.6), inset 0 6px 14px rgba(255, 255, 255, 0.9)',
        }}
      >
        {/* Soft Horizon Cloud Strata Cutting Across Lower Sun (Classic Setting Sun Horizon Effect) */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[48%] pointer-events-none"
          style={{
            background:
              'linear-gradient(to top, rgba(183, 159, 209, 0.85) 0%, rgba(232, 169, 196, 0.6) 45%, transparent 100%)',
          }}
        />

        {/* Soft horizontal cloud bar in lower half of sun disk */}
        <div
          className="absolute bottom-[24%] left-[-10%] right-[-10%] h-[16%] rounded-full blur-[2px] opacity-75"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(244, 185, 209, 0.95) 30%, rgba(200, 165, 220, 0.9) 70%, transparent 100%)',
          }}
        />

        <div
          className="absolute bottom-[8%] left-[5%] right-[5%] h-[12%] rounded-full blur-[2px] opacity-85"
          style={{
            background:
              'linear-gradient(90deg, transparent 0%, rgba(180, 150, 210, 0.95) 25%, rgba(220, 160, 190, 0.9) 80%, transparent 100%)',
          }}
        />
      </div>
    </div>
  );
};
