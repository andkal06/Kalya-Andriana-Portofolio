import React, { useState } from 'react';
import { skillCategoryGroups, skillsData } from '../data/skills';
import { BirdSilhouette } from './BirdSilhouette';

type ToolFilter = 'ALL' | 'SECURITY' | 'FORENSICS' | 'DEV_NET';

export const SkillsSection: React.FC = () => {
  const [activeToolFilter, setActiveToolFilter] = useState<ToolFilter>('ALL');

  // Categories 1 to 4
  const coreCategories = skillCategoryGroups.filter((g) => g.id !== 'tools');
  const toolsGroup = skillCategoryGroups.find((g) => g.id === 'tools');
  const allTools = toolsGroup ? toolsGroup.skills : [];

  // Filter tools based on active tab
  const filteredTools = allTools.filter((tool) => {
    if (activeToolFilter === 'ALL') return true;
    if (activeToolFilter === 'SECURITY') {
      return ['Burp Suite', 'OWASP ZAP', 'Nmap', 'Wazuh', 'Wireshark', 'tshark'].includes(tool.name);
    }
    if (activeToolFilter === 'FORENSICS') {
      return ['FTK Imager', 'CyberChef', 'Ghidra', 'Binwalk', "Aperi'Solve"].includes(tool.name);
    }
    if (activeToolFilter === 'DEV_NET') {
      return ['GitHub', 'VS Code', 'Google Colab', 'Node-RED', 'Cisco Packet Tracer'].includes(tool.name);
    }
    return true;
  });

  return (
    <section
      id="skills"
      className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-skills-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#7FA6D9]/50"
    >
      {/* Background Soft Cloud Glow */}
      <div
        aria-hidden="true"
        className="absolute top-10 right-[10%] w-88 h-44 rounded-full bg-white/65 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-8 left-[8%] w-80 h-40 rounded-full bg-[#E8A9C4]/40 blur-3xl pointer-events-none -z-10"
      />

      {/* Editorial Breadcrumb / Sub-header */}
      <div className="flex items-center justify-between pb-3 mb-6 border-b border-[#B79FD1]/40 text-xs font-mono text-[#6B517F]">
        <div className="flex items-center gap-2">
          <span className="text-[#8C3E75] font-bold">{'>'}_ 04 //</span>
          <span className="tracking-widest uppercase font-semibold text-[#382E47]">
            SKILLS ARCHITECTURE & TOOLS VALIDATION
          </span>
        </div>
        <span className="hidden sm:inline-block uppercase tracking-wider text-[#735A8A] font-bold text-[11px]">
          PROFESSIONAL CAPABILITIES
        </span>
      </div>

      {/* Main Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[#B79FD1]/40 gap-4">
        <div>
          <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75] block mb-1">
            Technical Foundations & Proficiencies
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26]">
            Skills & Expertise
          </h2>
        </div>
        <p className="text-sm sm:text-base text-[#3E344A] max-w-md font-normal leading-relaxed">
          Structured competencies across offensive & defensive cybersecurity, systems programming, AI computer vision, and network engineering.
        </p>
      </div>

      {/* 2x2 Grid for Core Skill Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-7">
        {coreCategories.map((group) => (
          <div
            key={group.id}
            className="dreamy-card rounded-3xl p-7 sm:p-8 space-y-5 border border-[#E8A9C4]/50 hover:border-[#C266A7]/70 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Category Card Header */}
              <div className="border-b border-[#B79FD1]/35 pb-3 flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  {/* Category Glyphs */}
                  <div className="w-8 h-8 rounded-xl bg-white/60 border border-[#B79FD1]/40 flex items-center justify-center text-[#8C3E75] shrink-0">
                    {group.id === 'cybersecurity' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    )}
                    {group.id === 'programming' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    )}
                    {group.id === 'ai' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
                      </svg>
                    )}
                    {group.id === 'networking' && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="6" height="6" rx="1" />
                        <rect x="16" y="2" width="6" height="6" rx="1" />
                        <rect x="9" y="16" width="6" height="6" rx="1" />
                        <path d="M5 8v3a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8" />
                        <path d="M12 13v3" />
                      </svg>
                    )}
                  </div>
                  <div>
                    <h3 className="text-xl sm:text-2xl font-serif-dreamy font-bold text-[#1C1E26]">
                      {group.label}
                    </h3>
                    <p className="text-xs text-[#524461] font-medium mt-0.5">{group.sublabel}</p>
                  </div>
                </div>
                <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-white/50 text-[#7A406B] border border-[#B79FD1]/40">
                  {group.skills.length} skills
                </span>
              </div>

              {/* Tag / Pill Badges with dot prefix (matching reference image style) */}
              <div className="flex flex-wrap gap-2.5 pt-4">
                {group.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="inline-flex items-center gap-2 px-3.5 py-2 rounded-full text-xs sm:text-sm font-semibold font-sans-humanist transition-all duration-200 dreamy-card hover:border-[#C266A7] hover:bg-white/80 text-[#1F2430] border border-[#B79FD1]/45 shadow-xs cursor-default group"
                  >
                    <span className="w-2 h-2 rounded-full sky-bullet group-hover:scale-125 transition-transform" />
                    <span>{skill.name}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 5. Software & Tools Validation Section (Full-width Card matching screenshot) */}
      {toolsGroup && (
        <div className="dreamy-card rounded-3xl p-7 sm:p-9 space-y-6 border border-[#E8A9C4]/60">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-[#B79FD1]/35 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-white/60 border border-[#B79FD1]/40 flex items-center justify-center text-[#8C3E75] shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
                </svg>
              </div>
              <div>
                <h3 className="text-2xl font-serif-dreamy font-bold text-[#1C1E26]">
                  {toolsGroup.label}
                </h3>
                <p className="text-xs text-[#524461] font-medium mt-0.5">
                  {toolsGroup.sublabel}
                </p>
              </div>
            </div>

            {/* Filter Tabs (similar to screenshot: ALL, SECURITY, FORENSICS, DEV & NET) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 rounded-2xl bg-white/40 border border-[#B79FD1]/35">
              {(
                [
                  { id: 'ALL', label: 'All Tools' },
                  { id: 'SECURITY', label: 'Security & Pentest' },
                  { id: 'FORENSICS', label: 'Forensics & RE' },
                  { id: 'DEV_NET', label: 'Dev & Networks' }
                ] as const
              ).map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveToolFilter(tab.id)}
                  className={`px-3 py-1 text-xs font-bold rounded-xl transition-all cursor-pointer ${activeToolFilter === tab.id
                      ? 'sky-accent-btn shadow-xs'
                      : 'text-[#4A3E59] hover:text-[#1C1E26] hover:bg-white/50'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Tools as Elegant Cards with Name + Sublabel / Tag */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
            {filteredTools.map((tool, tIdx) => (
              <div
                key={tIdx}
                className="dreamy-card rounded-2xl p-3.5 sm:p-4 border border-[#B79FD1]/40 hover:border-[#C266A7] hover:bg-white/80 transition-all duration-200 group flex flex-col justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#C266A7] group-hover:scale-125 transition-transform shrink-0" />
                  <span className="text-sm font-bold text-[#1C1E26] group-hover:text-[#8C3E75] transition-colors truncate">
                    {tool.name}
                  </span>
                </div>
                {tool.tag && (
                  <span className="text-[10px] uppercase font-bold tracking-wider text-[#8C3E75] mt-1.5 ml-3.5 block">
                    {tool.tag}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Gentle floating bird silhouette */}
      <div className="absolute bottom-4 right-10 pointer-events-none opacity-40">
        <BirdSilhouette size={24} opacity={0.6} />
      </div>
    </section>
  );
};
