import React from 'react';
import { profileData } from '../data/profile';
import { BirdSilhouette, BirdFlock } from './BirdSilhouette';
import { Cloud } from './Cloud';
import { SunsetSun } from './SunsetSun';

interface HeroProps {
  onNavigate: (sectionId: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  const { name, roleTitle, tagline, location, focusAreas, quickStats } = profileData;

  return (
    <section
      id="hero"
      className="relative min-h-[88vh] flex flex-col justify-center pt-24 pb-16 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-hero-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#E8A9C4]/60"
    >
      {/* Sunlight Orb Glow directly behind the Hero Name */}
      <div
        aria-hidden="true"
        className="absolute top-10 sm:top-16 left-6 sm:left-24 w-[380px] h-[380px] sm:w-[560px] sm:h-[560px] rounded-full pointer-events-none -z-10"
        style={{
          background:
            'radial-gradient(circle, rgba(255, 226, 196, 0.9) 0%, rgba(244, 185, 209, 0.65) 35%, rgba(183, 159, 209, 0.35) 65%, transparent 80%)',
          filter: 'blur(70px)',
        }}
      />

      {/* Layered Soft Cloud Shapes in Hero Atmosphere */}
      <div
        aria-hidden="true"
        className="absolute -top-6 right-[4%] w-80 h-44 sm:w-[480px] sm:h-[220px] rounded-full bg-white/70 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-6 left-[4%] w-88 h-44 rounded-full bg-[#E8A9C4]/50 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute top-1/2 right-[0%] w-72 h-36 rounded-full bg-[#7FA6D9]/40 blur-3xl pointer-events-none -z-10"
      />

      {/* Quiet setting sun tucked into the upper edge of the sky */}
      <div
        aria-hidden="true"
        className="absolute top-[2%] right-[-8%] sm:top-[4%] sm:right-[5%] w-[360px] h-[360px] sm:w-[500px] sm:h-[500px] opacity-90 pointer-events-none z-0"
      >
        <SunsetSun className="w-full h-full" />
      </div>

      {/* Stylized Organic Sunset Clouds in Hero */}
      <div
        aria-hidden="true"
        className="absolute top-[2%] right-[8%] pointer-events-none z-[1] animate-cloud-drift-1 hidden sm:block"
      >
        <Cloud
          type="cumulus-puffy"
          width={390}
          opacity={0.94}
          highlightColor="rgba(255, 252, 242, 0.98)"
          midColor="rgba(245, 195, 218, 0.82)"
          shadowColor="rgba(180, 155, 210, 0.68)"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[3%] left-[-2%] pointer-events-none z-0 animate-cloud-drift-2 hidden md:block"
      >
        <Cloud
          type="stratus-drift"
          width={430}
          opacity={0.86}
          highlightColor="rgba(255, 245, 235, 0.94)"
          midColor="rgba(235, 185, 215, 0.76)"
          shadowColor="rgba(160, 145, 205, 0.62)"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[30%] left-[-100px] pointer-events-none z-0 animate-cloud-drift-1 hidden lg:block"
      >
        <Cloud
          type="fluffy-cluster"
          width={310}
          opacity={0.72}
          highlightColor="rgba(255, 249, 242, 0.92)"
          midColor="rgba(232, 190, 218, 0.68)"
          shadowColor="rgba(173, 157, 207, 0.5)"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute bottom-[18%] right-[-90px] pointer-events-none z-[1] animate-cloud-drift-2 hidden sm:block"
      >
        <Cloud
          type="stratus-drift"
          width={360}
          opacity={0.7}
          highlightColor="rgba(255, 245, 238, 0.9)"
          midColor="rgba(218, 183, 220, 0.66)"
          shadowColor="rgba(142, 151, 198, 0.48)"
        />
      </div>

      <div
        aria-hidden="true"
        className="absolute top-[18%] right-[-80px] pointer-events-none z-[1] animate-cloud-drift-2 hidden lg:block"
      >
        <Cloud
          type="fluffy-cluster"
          width={280}
          opacity={0.78}
          highlightColor="rgba(255, 247, 238, 0.94)"
          midColor="rgba(238, 182, 211, 0.7)"
          shadowColor="rgba(164, 143, 198, 0.56)"
        />
      </div>

      {/* Prominent Minimalist Bird Silhouettes in Upper Sky (Diagonal Flight) */}
      <div className="absolute top-10 right-10 sm:right-24 pointer-events-none animate-bird-glide hidden sm:block">
        <BirdFlock baseSize={22} opacity={0.78} />
      </div>

      <div className="absolute top-8 left-16 pointer-events-none hidden md:block">
        <BirdSilhouette size={18} opacity={0.65} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
        {/* Left Column: Name, Eyebrows, Tagline, CTAs */}
        <div className="lg:col-span-7 space-y-6">
          {/* Main Hero Name with Expressive Fraunces Typography */}
          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-serif-dreamy font-bold tracking-tight text-[#1A1924] leading-[1.03]">
              {name}
            </h1>
            <p className="text-lg sm:text-xl font-sans-humanist text-[#473B52] font-medium tracking-wide max-w-xl">
              {roleTitle} <span className="text-[#8E72A8]">—</span> <span className="text-[#2D2336]">{location}</span>
            </p>
          </div>

          {/* Tagline */}
          <p className="text-base sm:text-lg text-[#3E3547] leading-relaxed max-w-xl font-normal">
            {tagline}
          </p>

          {/* Focus Area Badges */}
          <div className="pt-1">
            <p className="tracking-editorial text-[11px] uppercase font-bold text-[#8C3E75] mb-2.5">
              Core Technical Focus
            </p>
            <div className="flex flex-wrap gap-2">
              {focusAreas.map((area, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 text-xs sm:text-sm font-sans-humanist font-medium rounded-xl dreamy-card text-[#261B30] border border-[#E8A9C4]/50 shadow-xs"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap items-center gap-4">
            <button
              onClick={() => onNavigate('projects')}
              className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide sky-accent-btn cursor-pointer"
            >
              Explore Projects
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="px-7 py-3.5 rounded-full text-sm font-semibold tracking-wide dreamy-card hover:border-[#C266A7] text-[#22172E] transition-all duration-300 cursor-pointer shadow-sm"
            >
              Get in Touch
            </button>
          </div>
        </div>

        {/* Right Column: Visually Distinct Stat Cards (Zero Mention of GPA!) */}
        <div className="lg:col-span-5 space-y-5">
          {/* Card 1: Filled Frosted Glass with Rose Highlight */}
          <div className="dreamy-card rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 group border border-[#E8A9C4]/70">
            <div className="flex items-center justify-between">
              <span className="text-4xl sm:text-5xl font-serif-dreamy font-bold text-[#1F1929] group-hover:text-[#8C3E75] transition-colors">
                {quickStats[0].value}
              </span>
              <span className="w-3 h-3 rounded-full sky-bullet" />
            </div>
            <div className="text-base font-semibold text-[#2B1F38] mt-3">
              {quickStats[0].label}
            </div>
            <div className="text-xs sm:text-sm text-[#4E445B] mt-2 pt-2.5 border-t border-[#B79FD1]/40 leading-relaxed font-light">
              {quickStats[0].detail}
            </div>
          </div>

          {/* Card 2: Distinct Asymmetrical Pill-Corner Outlined Glass with Magenta Accent */}
          <div className="dreamy-card-outlined rounded-3xl rounded-br-[40px] p-7 flex flex-col justify-between transition-all duration-300 group">
            <div className="flex items-center justify-between">
              <span className="text-4xl sm:text-5xl font-serif-dreamy font-bold text-[#1F1929] group-hover:text-[#8C3E75] transition-colors">
                {quickStats[1].value}
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#C266A7] text-white tracking-wide uppercase">
                Active
              </span>
            </div>
            <div className="text-base font-semibold text-[#2B1F38] mt-3">
              {quickStats[1].label}
            </div>
            <div className="text-xs sm:text-sm text-[#4E445B] mt-2 pt-2.5 border-t border-[#B79FD1]/40 leading-relaxed font-light">
              {quickStats[1].detail}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
