import React from 'react';
import { educationData, highSchoolData } from '../data/education';
import { BirdSilhouette } from './BirdSilhouette';

export const EducationSection: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-education-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#B79FD1]/50"
    >
      {/* Background Soft Cloud Glows */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[8%] w-80 h-44 rounded-full bg-white/60 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[10%] w-88 h-48 rounded-full bg-[#E8A9C4]/45 blur-3xl pointer-events-none -z-10"
      />

      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#B79FD1]/50 gap-4">
        <div>
          <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75] block mb-1">
            Academic Background & Professional Credentials
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26]">
            Education
          </h2>
        </div>
      </div>

      <div className="space-y-6">

        <div className="flex items-center justify-between mb-1">
          <h3 className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75]">
            Formal Academic Education
          </h3>
          <span className="text-xs text-[#524461] font-medium">Timeline Journey</span>
        </div>

        {/* 1. Higher Education: Universitas Gadjah Mada (UGM) */}
        <div className="dreamy-card rounded-3xl p-7 sm:p-8 border border-[#E8A9C4]/60 space-y-4 relative">
          <div className="flex items-center justify-between pb-3 border-b border-[#B79FD1]/40">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#8C3E75] bg-white/60 border border-[#E8A9C4]/60">
              <span className="w-2 h-2 rounded-full sky-bullet" />
              Higher Education
            </span>
            <span className="text-xs text-[#524861] font-semibold">
              {educationData.period}
            </span>
          </div>

          <div>
            <h4 className="text-2xl sm:text-3xl font-serif-dreamy font-bold text-[#1C1E26] leading-snug">
              {educationData.institution}
            </h4>
            <p className="text-base font-semibold text-[#8C3E75] mt-1">
              {educationData.major}
            </p>
            <p className="text-xs text-[#524461] mt-0.5">
              {educationData.degree} • {educationData.location}
            </p>
          </div>

          {/* Academic Standing & Cumulative GPA */}
          <div className="p-4 rounded-2xl bg-white/45 border border-[#B79FD1]/35 flex items-center justify-between">
            <div>
              <span className="text-xs text-[#524461] font-medium block">
                Cumulative Academic Standing
              </span>
              <span className="text-xs text-[#8C3E75] font-bold">
                {educationData.status}
              </span>
            </div>
            <span className="inline-block px-3.5 py-1.5 text-sm font-bold rounded-xl sky-gradient-badge text-[#241730] shadow-xs">
              GPA: {educationData.gpa}
            </span>
          </div>

          {/* Honors */}
          {educationData.honors && (
            <div className="space-y-1.5 pt-1">
              {educationData.honors.map((honor, hIdx) => (
                <div key={hIdx} className="text-xs text-[#382E42] flex items-start gap-2">
                  <span className="w-1.5 h-1.5 rounded-full sky-bullet shrink-0 mt-1.5" />
                  <span className="font-medium">{honor}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 2. Secondary Education / Senior High School: SMAN 1 Yogyakarta */}
        <div className="dreamy-card rounded-3xl p-7 sm:p-8 border border-[#B79FD1]/60 space-y-4 relative">
          <div className="flex items-center justify-between pb-3 border-b border-[#B79FD1]/40">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold text-[#64417A] bg-white/60 border border-[#B79FD1]/50">
              <span className="w-2 h-2 rounded-full bg-[#8E72A8]" />
              Sekolah Menengah Atas (SMA)
            </span>
            <span className="text-xs text-[#524861] font-semibold">
              {highSchoolData.period}
            </span>
          </div>

          <div>
            <div className="flex items-baseline justify-between gap-2">
              <h4 className="text-2xl sm:text-3xl font-serif-dreamy font-bold text-[#1C1E26] leading-snug">
                {highSchoolData.institution}
              </h4>
            </div>
            <p className="text-base font-semibold text-[#64417A] mt-1">
              {highSchoolData.major}
            </p>
            <p className="text-xs text-[#524461] mt-0.5">
              {highSchoolData.degree} • {highSchoolData.location} • <span className="text-[#8C3E75] font-semibold">{highSchoolData.status}</span>
            </p>
          </div>

          {/* Narrative / Context */}
          {highSchoolData.description && (
            <p className="text-xs sm:text-sm text-[#382F47] leading-relaxed bg-white/40 p-4 rounded-2xl border border-[#B79FD1]/30">
              {highSchoolData.description}
            </p>
          )}

          {/* Coursework & Foundations */}
          {highSchoolData.relevantCoursework && (
            <div className="pt-2 border-t border-[#B79FD1]/40">
              <span className="text-[11px] font-bold text-[#524461] uppercase tracking-wider block mb-1.5">
                Academic Focus & Foundations
              </span>
              <div className="flex flex-wrap gap-1.5">
                {highSchoolData.relevantCoursework.map((subj, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium bg-white/50 text-[#382F47] border border-[#B79FD1]/30"
                  >
                    {subj}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};