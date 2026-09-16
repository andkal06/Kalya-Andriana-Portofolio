import React from 'react';
import { achievementsData } from '../data/achievements';
import { BirdSilhouette } from './BirdSilhouette';

export const Achievements: React.FC = () => {
  return (
    <section
      id="achievements"
      className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-achievements-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#B79FD1]/50"
    >
      {/* Background Soft Cloud Glow */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[20%] w-88 h-44 rounded-full bg-white/65 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-6 right-[15%] w-80 h-40 rounded-full bg-[#E8A9C4]/40 blur-3xl pointer-events-none -z-10"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#B79FD1]/40 gap-4">
        <div>
          <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75] block mb-1">
            Honors & Competitions
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26]">
            Recognition
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#463B54] max-w-sm font-normal">
          Competitive milestones recognizing architectural innovation, technical viability, and market strategy.
        </p>
      </div>

      {/* Achievements Showcase */}
      <div className="grid grid-cols-1 gap-6">
        {achievementsData.map((item) => (
          <div
            key={item.id}
            className="dreamy-card rounded-3xl p-7 sm:p-10 relative overflow-hidden transition-all duration-300 group border border-[#E8A9C4]/55"
          >
            {/* Ambient dusk aura inside card */}
            <div
              aria-hidden="true"
              className="absolute -top-16 -right-16 w-52 h-52 rounded-full bg-[#E8A9C4]/40 blur-3xl pointer-events-none"
            />

            <div className="relative flex flex-col md:flex-row md:items-start justify-between gap-6">
              {/* Left Column: Trophy Glyph & Core Information */}
              <div className="flex items-start gap-4 sm:gap-6">
                {/* Minimalist Line Laurel/Award Glyph with Magenta Border */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl sky-gradient-badge flex items-center justify-center shrink-0 text-[#2B1B38] shadow-sm">
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6" />
                    <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18" />
                    <path d="M4 22h16" />
                    <path d="M10 14.66V17c0 .55-.45 1-1 1H8c-.55 0-1 .45-1 1v1c0 .55.45 1 1 1h8c.55 0 1-.45 1-1v-1c0-.55-.45-1-1-1h-1c-.55 0-1-.45-1-1v-2.34" />
                    <path d="M18 4H6v7a6 6 0 0 0 12 0V4Z" />
                  </svg>
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2.5 flex-wrap">
                    <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75]">
                      {item.category || 'National Competition'}
                    </span>
                    {item.badge && (
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#C266A7] text-white shadow-xs">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-serif-dreamy font-bold text-[#1C1E26] leading-tight">
                    {item.title} — {item.event}
                  </h3>

                  <p className="text-sm sm:text-base text-[#382E44] leading-relaxed max-w-2xl font-normal pt-1">
                    {item.description}
                  </p>
                </div>
              </div>

              {/* Right Column: Year pill */}
              <div className="self-start md:self-auto shrink-0">
                <span className="inline-block px-4 py-1.5 rounded-full text-xs sm:text-sm font-bold dreamy-card text-[#261733] border border-[#B79FD1]/50">
                  Year {item.year}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Subtle bird silhouette flight accent */}
      <div className="flex justify-end pt-6 pr-4">
        <BirdSilhouette size={22} opacity={0.65} />
      </div>
    </section>
  );
};
