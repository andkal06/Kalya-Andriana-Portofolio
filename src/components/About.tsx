import React from 'react';
import { profileData } from '../data/profile';
import { BirdSilhouette } from './BirdSilhouette';
import { ProfilePhotoCard } from './ProfilePhotoCard';

export const About: React.FC = () => {
  const { name, roleTitle, institution, location, storyParagraphs, focusAreas } = profileData;

  return (
    <section
      id="about"
      className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-about-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#B79FD1]/50"
    >
      {/* Soft Cloud Ambient Glows in Sky Background */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[12%] w-80 h-44 rounded-full bg-white/60 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[8%] w-96 h-48 rounded-full bg-[#7FA6D9]/45 blur-3xl pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#B79FD1]/50 gap-4">
        <div>
          <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75] block mb-1">
            Academic Background & Engineering Focus
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26]">
            About Kalya
          </h2>
        </div>
        <div className="flex items-center gap-2.5 text-sm font-medium text-[#382F47]">
          <span className="w-2 h-2 rounded-full sky-bullet" />
          <span>{location}</span>
          <span className="text-[#8E72A8]">•</span>
          <span>{institution}</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Beside About: Photo & Portrait Frame */}
        <div className="lg:col-span-5 space-y-6">
          {/* Dedicated Photo Section where Kalya can upload her photo */}
          <ProfilePhotoCard
            name={name}
            roleTitle={roleTitle}
            institution={institution}
          />

          {/* Core Technical Domains Card */}
          <div className="dreamy-card-outlined rounded-3xl p-7 space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="tracking-editorial text-[11px] uppercase font-bold text-[#8C3E75]">
                Core Technical Domains
              </h3>
              <BirdSilhouette size={20} opacity={0.65} />
            </div>
            <ul className="space-y-3 pt-1">
              {focusAreas.map((focus, idx) => (
                <li key={idx} className="flex items-center gap-3 text-sm text-[#241B2E]">
                  <span className="w-2 h-2 rounded-full sky-bullet shrink-0" />
                  <span className="font-semibold">{focus}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Narrative Paragraphs & Academic Journey */}
        <div className="lg:col-span-7 space-y-6">
          <div className="dreamy-card rounded-3xl p-7 sm:p-9 border border-[#E8A9C4]/60 space-y-5">
            <div className="flex items-center justify-between pb-3 border-b border-[#B79FD1]/40">
              <span className="tracking-editorial text-[11px] uppercase font-bold text-[#8C3E75]">
                Biography & Vision
              </span>
              <span className="text-xs text-[#524861] font-semibold">
                Undergraduate Journey
              </span>
            </div>

            <div className="space-y-4 text-base sm:text-lg text-[#2E2838] leading-relaxed font-normal">
              {storyParagraphs.map((paragraph, idx) => (
                <p key={idx} className="relative">
                  {paragraph}
                </p>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
