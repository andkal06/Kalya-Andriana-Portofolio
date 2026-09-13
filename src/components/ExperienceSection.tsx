import React, { useState } from 'react';
import { experienceData } from '../data/experience';
import { BirdSilhouette } from './BirdSilhouette';

type TabCategory = 'all' | 'work' | 'committee';

export const ExperienceSection: React.FC = () => {
  // Default active tab is "All Journey" (combined)
  const [activeTab, setActiveTab] = useState<TabCategory>('all');

  const filteredItems = experienceData.filter((item) => {
    if (activeTab === 'all') return true;
    if (activeTab === 'work') return item.category === 'work' || item.category === 'teaching';
    return item.category === 'committee';
  });

  return (
    <section
      id="experience"
      className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-experience-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#E8A9C4]/50"
    >
      {/* Background Soft Cloud Glows */}
      <div
        aria-hidden="true"
        className="absolute top-12 right-[10%] w-88 h-48 rounded-full bg-white/65 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 left-[8%] w-80 h-44 rounded-full bg-[#B79FD1]/45 blur-3xl pointer-events-none -z-10"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#B79FD1]/40 gap-4">
        <div>
          <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75] block mb-1">
            Career Milestones & Leadership
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26]">
            Experience
          </h2>
        </div>

        {/* Tab Controls: "All Journey" first as visual anchor, then filters */}
        <div className="inline-flex p-1.5 rounded-full dreamy-card self-start md:self-auto shadow-md border border-[#E8A9C4]/60">
          <button
            onClick={() => setActiveTab('all')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'all'
                ? 'sky-accent-btn'
                : 'text-[#44384F] hover:text-[#1A1924]'
              }`}
          >
            All Journey
          </button>
          <button
            onClick={() => setActiveTab('work')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'work'
                ? 'sky-accent-btn'
                : 'text-[#44384F] hover:text-[#1A1924]'
              }`}
          >
            Work & Teaching
          </button>
          <button
            onClick={() => setActiveTab('committee')}
            className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${activeTab === 'committee'
                ? 'sky-accent-btn'
                : 'text-[#44384F] hover:text-[#1A1924]'
              }`}
          >
            Leadership & Committees
          </button>
        </div>
      </div>

      {/* Experience Timeline Stream */}
      <div className="space-y-6">
        {filteredItems.map((item, idx) => (
          <div
            key={item.id}
            className={`dreamy-card p-7 sm:p-9 relative transition-all duration-300 group ${idx % 2 === 0 ? 'rounded-3xl' : 'rounded-3xl rounded-tl-[42px]'
              }`}
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 sm:gap-6 mb-4">
              <div>
                <div className="flex items-center gap-3 flex-wrap">
                  <h3 className="text-2xl sm:text-3xl font-serif-dreamy font-bold text-[#1C1E26] group-hover:text-[#8C3E75] transition-colors">
                    {item.role}
                  </h3>
                  <span
                    className={`text-[11px] font-bold uppercase tracking-wider px-3 py-0.5 rounded-full ${item.category === 'work' || item.category === 'teaching'
                        ? 'bg-[#C266A7] text-white shadow-xs'
                        : 'bg-[#B79FD1]/45 text-[#2B1B36] border border-[#8E72A8]/50'
                      }`}
                  >
                    {item.category === 'work'
                      ? 'Engineering'
                      : item.category === 'teaching'
                        ? 'Teaching'
                        : 'Leadership'}
                  </span>
                </div>
                <p className="text-base font-semibold text-[#4A3D57] mt-1">
                  {item.organization}
                  {item.location && (
                    <span className="text-[#756885] font-normal"> — {item.location}</span>
                  )}
                </p>
              </div>

              <div className="text-xs sm:text-sm text-[#3E344A] font-semibold whitespace-nowrap self-start px-3.5 py-1.5 rounded-full dreamy-card border border-[#E8A9C4]/50">
                {item.period}
              </div>
            </div>

            <p className="text-base text-[#3A3245] leading-relaxed mb-4 font-normal">
              {item.description}
            </p>

            {item.highlights && item.highlights.length > 0 && (
              <div className="pt-3.5 border-t border-[#B79FD1]/40">
                <ul className="space-y-2">
                  {item.highlights.map((highlight, hIdx) => (
                    <li
                      key={hIdx}
                      className="text-sm text-[#4E4459] flex items-start gap-2.5"
                    >
                      <span className="w-2 h-2 rounded-full sky-bullet mt-1.5 shrink-0" />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating bird accent */}
      <div className="flex justify-end pt-8 pr-4">
        <BirdSilhouette size={26} opacity={0.65} />
      </div>
    </section>
  );
};
