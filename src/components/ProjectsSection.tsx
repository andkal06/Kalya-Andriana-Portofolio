import React, { useState } from 'react';
import { projectsData } from '../data/projects';
import { BirdSilhouette } from './BirdSilhouette';

export const ProjectsSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Endeavors' },
    { id: 'cybersecurity', label: 'Cybersecurity & Defense' },
    { id: 'ai', label: 'AI & Deep Learning' },
    { id: 'iot', label: 'IoT & Embedded' },
    { id: 'software', label: 'Software & Systems' },
    { id: 'research', label: 'Algorithmic Research' }
  ];

  const filteredProjects = projectsData.filter((proj) => {
    if (activeFilter === 'all') return true;
    if (Array.isArray(proj.category)) {
      return proj.category.includes(activeFilter as any);
    }
    return proj.category === activeFilter;
  });

  return (
    <section
      id="projects"
      className="relative py-20 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-projects-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#7FA6D9]/50"
    >
      {/* Background Soft Cloud Glows */}
      <div
        aria-hidden="true"
        className="absolute top-10 left-[10%] w-88 h-44 rounded-full bg-white/65 blur-3xl pointer-events-none -z-10"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-10 right-[8%] w-80 h-44 rounded-full bg-[#D48BAE]/40 blur-3xl pointer-events-none -z-10"
      />

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[#B79FD1]/40 gap-4">
        <div>
          <span className="tracking-editorial text-xs uppercase font-bold text-[#8C3E75] block mb-1">
            Applied Engineering & Prototypes
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26]">
            Featured Projects
          </h2>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveFilter(cat.id)}
              className={`px-4 py-1.5 rounded-full text-xs font-semibold transition-all duration-300 cursor-pointer ${
                activeFilter === cat.id
                  ? 'sky-accent-btn'
                  : 'dreamy-card text-[#473B52] hover:text-[#1A1924] border border-[#B79FD1]/40'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
        {filteredProjects.map((project, idx) => (
          <div
            key={project.id}
            className={`dreamy-card rounded-3xl p-7 sm:p-9 flex flex-col justify-between transition-all duration-300 relative group border border-[#E8A9C4]/55 ${
              idx % 3 === 0 ? 'md:col-span-2 lg:col-span-1' : ''
            }`}
          >
            {/* Top metadata */}
            <div>
              <div className="flex items-start justify-between gap-4 mb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8C3E75]">
                  {project.role}
                </span>
                <span className="text-xs text-[#524461] font-semibold whitespace-nowrap px-3 py-1 rounded-full dreamy-card">
                  {project.period}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-dreamy font-bold text-[#1C1E26] group-hover:text-[#8C3E75] transition-colors leading-snug mb-3">
                {project.title}
              </h3>

              <p className="text-sm sm:text-base text-[#382E42] leading-relaxed mb-5 font-normal">
                {project.description}
              </p>

              {/* Highlights */}
              {project.highlights && (
                <div className="mb-6 space-y-2 pt-2 border-t border-[#B79FD1]/35">
                  {project.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="text-xs sm:text-sm text-[#4A3F57] flex items-start gap-2.5">
                      <span className="w-2 h-2 rounded-full sky-bullet shrink-0 mt-1.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Bottom tags and link */}
            <div className="pt-4 border-t border-[#B79FD1]/40 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex flex-wrap gap-1.5">
                {project.tags.map((tag, tIdx) => (
                  <span
                    key={tIdx}
                    className="px-2.5 py-1 rounded-lg text-xs font-medium dreamy-card text-[#352B3F] border border-[#B79FD1]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8C3E75] hover:text-[#C266A7] transition-colors self-end sm:self-auto shrink-0"
                >
                  <span>Repository</span>
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M7 17l9.2-9.2M17 17V8H8" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {filteredProjects.length === 0 && (
        <div className="text-center py-16 text-[#5E5270]">
          No projects found in this specific category.
        </div>
      )}

      {/* Floating bird accent */}
      <div className="flex justify-center pt-8 opacity-60">
        <BirdSilhouette size={22} />
      </div>
    </section>
  );
};
