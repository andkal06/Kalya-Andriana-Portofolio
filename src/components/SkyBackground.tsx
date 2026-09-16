import React, { useEffect, useState, useMemo } from 'react';
import { BirdSilhouette, BirdFlock } from './BirdSilhouette';
import { SunsetSun } from './SunsetSun';
import { Cloud } from './Cloud';

/**
 * SkyBackground: Implements the "Rich Sunset & Twilight Sky" atmosphere.
 * - Dynamic scroll-reactive multi-stop sky gradient:
 *   Dusty Rose Pink (#E8A9C4) -> Soft Violet (#B79FD1) -> Periwinkle Blue (#7FA6D9) -> Dusk Indigo (#3D4A6B)
 * - Luminous Setting Sun (Matahari Terbenam) with corona pulse and sunbeams
 * - Organic drifting sunset clouds with golden rim lighting and lavender shadows
 * - Painted sky texture via fine subtle SVG grain/noise overlay
 * - Minimalist bird silhouettes gliding in peaceful diagonal formation
 */
export const SkyBackground: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const progress = Math.min(Math.max(scrollY / maxScroll, 0), 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Multi-stop gradient calculation with rich chroma saturation
  const skyBackgroundStyle = useMemo(() => {
    const p = scrollProgress;
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    // Palette stops:
    // Golden Hour/Sunset top (p=0): Rose Pink (232, 169, 196) -> Violet (183, 159, 209) -> Periwinkle (127, 166, 217)
    // Deep Twilight bottom (p=1): Soft Dusk Violet (142, 114, 168) -> Slate Blue (91, 123, 179) -> Evening Indigo (45, 35, 59)
    const topR = Math.round(lerp(232, 142, p));
    const topG = Math.round(lerp(169, 114, p));
    const topB = Math.round(lerp(196, 168, p));

    const midR = Math.round(lerp(183, 91, p));
    const midG = Math.round(lerp(159, 123, p));
    const midB = Math.round(lerp(209, 179, p));

    const btmR = Math.round(lerp(127, 45, p));
    const btmG = Math.round(lerp(166, 35, p));
    const btmB = Math.round(lerp(217, 59, p));

    return {
      background: `linear-gradient(155deg, rgb(${topR}, ${topG}, ${topB}) 0%, rgb(${midR}, ${midG}, ${midB}) 50%, rgb(${btmR}, ${btmG}, ${btmB}) 100%)`,
    };
  }, [scrollProgress]);

  return (
    <div
      className="fixed inset-0 pointer-events-none -z-10 overflow-hidden transition-colors duration-700"
      style={skyBackgroundStyle}
      aria-hidden="true"
    >
      {/* Subtle Analog Painted Sky Grain/Noise Overlay */}
      <svg className="fixed inset-0 w-full h-full opacity-[0.04] pointer-events-none mix-blend-overlay">
        <filter id="skyNoiseFilter">
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.75"
            numOctaves="3"
            stitchTiles="stitch"
          />
          <feColorMatrix type="saturate" values="0" />
        </filter>
        <rect width="100%" height="100%" filter="url(#skyNoiseFilter)" />
      </svg>

      {/* Sun/Sunburst Golden Warmth Glow in Upper Horizon */}
      <div
        className="absolute w-[600px] h-[600px] sm:w-[950px] sm:h-[950px] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none transition-opacity duration-700"
        style={{
          top: '-12%',
          right: '5%',
          background:
            'radial-gradient(circle, rgba(255, 218, 185, 0.85) 0%, rgba(244, 182, 206, 0.6) 38%, rgba(183, 159, 209, 0.35) 65%, transparent 80%)',
          opacity: Math.max(1 - scrollProgress * 1.3, 0.3),
        }}
      />

      {/* Sunset Orange & Peach Ambient Gradient Mesh (Flows directly underneath the left Sidebar) */}
      <div
        className="absolute w-[650px] h-[650px] sm:w-[900px] sm:h-[900px] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none transition-opacity duration-700"
        style={{
          top: '-10%',
          left: '-15%',
          background:
            'radial-gradient(circle, rgba(255, 175, 120, 0.85) 0%, rgba(244, 160, 195, 0.6) 35%, rgba(194, 102, 167, 0.35) 65%, transparent 80%)',
          opacity: Math.max(1 - scrollProgress * 1.1, 0.45),
        }}
      />

      {/* Mid/Dusk Purple & Rose Mesh Glow (Flows along lower-left boundary) */}
      <div
        className="absolute w-[600px] h-[600px] sm:w-[850px] sm:h-[850px] rounded-full blur-[90px] sm:blur-[150px] pointer-events-none transition-opacity duration-700"
        style={{
          bottom: '15%',
          left: '-10%',
          background:
            'radial-gradient(circle, rgba(212, 139, 174, 0.55) 0%, rgba(183, 159, 209, 0.5) 40%, rgba(127, 166, 217, 0.35) 70%, transparent 85%)',
          opacity: 0.75,
        }}
      />

      {/* Luminous Setting Sun (Matahari Terbenam) */}
      <div className="absolute top-[2%] sm:top-[4%] right-[4%] sm:right-[8%] pointer-events-none z-0">
        <SunsetSun
          className="w-[210px] h-[210px] sm:w-[300px] sm:h-[300px]"
          scrollProgress={scrollProgress}
        />
      </div>

      {/* Organic Sunset Clouds around the Setting Sun & Upper Horizon */}
      {/* Cloud 1: Drifting in front of lower rim of the Sun */}
      <div
        className="absolute top-[16%] sm:top-[18%] right-[1%] sm:right-[4%] pointer-events-none animate-cloud-drift-1 z-[1]"
      >
        <Cloud
          type="stratus-drift"
          className="w-[260px] sm:w-[340px]"
          opacity={0.85}
          highlightColor="rgba(255, 248, 235, 0.95)"
          midColor="rgba(248, 195, 215, 0.75)"
          shadowColor="rgba(165, 140, 200, 0.6)"
        />
      </div>

      {/* Cloud 2: Fluffy Cumulus on Upper-Left drifting across Sunset Horizon */}
      <div
        className="absolute top-[6%] sm:top-[8%] left-[2%] sm:left-[6%] pointer-events-none animate-cloud-drift-2"
      >
        <Cloud
          type="cumulus-puffy"
          className="w-[250px] sm:w-[360px]"
          opacity={0.88}
          highlightColor="rgba(255, 250, 240, 0.95)"
          midColor="rgba(244, 190, 215, 0.72)"
          shadowColor="rgba(175, 150, 205, 0.55)"
        />
      </div>

      {/* Cloud 3: Fluffy Cluster drifting in mid-sky */}
      <div
        className="absolute top-[35%] sm:top-[38%] -right-[3%] sm:right-[3%] pointer-events-none animate-cloud-drift-1"
      >
        <Cloud
          type="fluffy-cluster"
          className="w-[240px] sm:w-[320px]"
          opacity={0.8}
          highlightColor="rgba(255, 240, 230, 0.9)"
          midColor="rgba(225, 180, 220, 0.7)"
          shadowColor="rgba(145, 130, 190, 0.6)"
        />
      </div>

      {/* Cloud 4: Elongated Evening Stratus Cloud on mid-left */}
      <div
        className="absolute top-[56%] sm:top-[58%] left-[1%] sm:left-[5%] pointer-events-none animate-cloud-drift-2"
      >
        <Cloud
          type="stratus-drift"
          className="w-[280px] sm:w-[400px]"
          opacity={0.75}
          highlightColor="rgba(250, 235, 245, 0.85)"
          midColor="rgba(195, 170, 218, 0.65)"
          shadowColor="rgba(125, 145, 190, 0.55)"
        />
      </div>

      {/* Cloud 5: Low Horizon Fluffy Cloud */}
      <div
        className="absolute bottom-[10%] right-[6%] pointer-events-none animate-cloud-drift-1"
      >
        <Cloud
          type="cumulus-puffy"
          className="w-[270px] sm:w-[380px]"
          opacity={0.7}
          highlightColor="rgba(240, 225, 245, 0.8)"
          midColor="rgba(170, 155, 205, 0.6)"
          shadowColor="rgba(95, 115, 160, 0.55)"
        />
      </div>

      {/* Mid-sky Violet-Amethyst Atmospheric Glow */}
      <div
        className="absolute w-[550px] h-[550px] sm:w-[850px] sm:h-[850px] rounded-full blur-[90px] sm:blur-[150px] pointer-events-none transition-opacity duration-700"
        style={{
          top: '32%',
          left: '-12%',
          background:
            'radial-gradient(circle, rgba(183, 159, 209, 0.7) 0%, rgba(157, 178, 224, 0.5) 45%, transparent 75%)',
          opacity: Math.min(Math.max(scrollProgress * 1.4, 0.4), 0.85),
        }}
      />

      {/* Lower Periwinkle-Indigo Horizon Glow */}
      <div
        className="absolute w-[600px] h-[600px] sm:w-[900px] sm:h-[900px] rounded-full blur-[100px] sm:blur-[160px] pointer-events-none transition-opacity duration-700"
        style={{
          bottom: '-15%',
          right: '-8%',
          background:
            'radial-gradient(circle, rgba(127, 166, 217, 0.65) 0%, rgba(91, 123, 179, 0.45) 45%, transparent 80%)',
          opacity: Math.min(scrollProgress * 1.6, 0.9),
        }}
      />

      {/* Layered Soft-Blur Cloud Formations */}
      {/* Cloud 1: Upper Drift (Soft White & Blush Pink) */}
      <div className="absolute top-[6%] -left-[6%] w-[62vw] min-w-[360px] h-[260px] sm:h-[360px] animate-cloud-slow-1 opacity-80">
        <div
          className="w-full h-full rounded-full blur-[50px] sm:blur-[75px]"
          style={{
            background:
              'radial-gradient(ellipse at 42% 50%, rgba(255, 255, 255, 0.9) 0%, rgba(244, 201, 219, 0.65) 45%, rgba(183, 159, 209, 0.35) 75%, transparent 100%)',
          }}
        />
      </div>

      {/* Cloud 2: Mid-Right Drift (Soft Lilac & Rose) */}
      <div className="absolute top-[36%] -right-[8%] w-[58vw] min-w-[340px] h-[240px] sm:h-[340px] animate-cloud-slow-2 opacity-75">
        <div
          className="w-full h-full rounded-full blur-[55px] sm:blur-[80px]"
          style={{
            background:
              'radial-gradient(ellipse at 58% 48%, rgba(255, 255, 255, 0.85) 0%, rgba(216, 182, 230, 0.65) 48%, rgba(127, 166, 217, 0.4) 80%, transparent 100%)',
          }}
        />
      </div>

      {/* Cloud 3: Lower Periwinkle Horizon Cloud */}
      <div className="absolute bottom-[6%] left-[8%] w-[68vw] min-w-[380px] h-[280px] sm:h-[380px] animate-cloud-slow-1 opacity-70">
        <div
          className="w-full h-full rounded-full blur-[60px] sm:blur-[90px]"
          style={{
            background:
              'radial-gradient(ellipse at 50% 50%, rgba(255, 255, 255, 0.8) 0%, rgba(157, 178, 224, 0.6) 42%, rgba(127, 166, 217, 0.4) 75%, transparent 100%)',
          }}
        />
      </div>

      {/* Ambient Bird Silhouettes Flying Across Upper Horizon */}
      <div
        className="absolute top-[14%] left-0 pointer-events-none"
        style={{
          animation: 'birdFlightCross 90s linear infinite 3s',
        }}
      >
        <BirdFlock baseSize={18} opacity={0.65} />
      </div>

      <div
        className="absolute top-[52%] left-0 pointer-events-none"
        style={{
          animation: 'birdFlightCross 110s linear infinite 35s',
        }}
      >
        <BirdSilhouette size={20} opacity={0.55} flip />
      </div>
    </div>
  );
};
