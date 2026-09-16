import React, { useState, useEffect, useCallback } from 'react';
import {
  User,
  GraduationCap,
  Briefcase,
  FolderGit2,
  Sparkles,
  Mail,
  Menu,
  X,
  Github,
  Linkedin,
  Compass,
} from 'lucide-react';
import { profileData } from '../data/profile';
import { contactData } from '../data/contact';
import { BirdSilhouette } from './BirdSilhouette';

interface SidebarProps {
  onNavigate: (sectionId: string) => void;
}

interface NavItem {
  label: string;
  target: string;
  icon: React.ComponentType<{ size?: number; className?: string }>;
}

const navLinks: NavItem[] = [
  { label: 'About', target: 'about', icon: User },
  { label: 'Education', target: 'education', icon: GraduationCap },
  { label: 'Experience', target: 'experience', icon: Briefcase },
  { label: 'Projects', target: 'projects', icon: FolderGit2 },
  { label: 'Skills', target: 'skills', icon: Sparkles },
  { label: 'Contact', target: 'contact', icon: Mail },
];

export const Sidebar: React.FC<SidebarProps> = ({ onNavigate }) => {
  const [activeSection, setActiveSection] = useState<string>('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth navigation handler
  const handleNavClick = useCallback(
    (target: string) => {
      setActiveSection(target);
      onNavigate(target);
      setMobileMenuOpen(false);
    },
    [onNavigate]
  );

  // Close mobile drawer on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  // Intersection Observer Scrollspy implementation
  useEffect(() => {
    const sectionIds = ['hero', ...navLinks.map((item) => item.target)];
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const visibleEntries = new Map<string, number>();

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleEntries.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleEntries.delete(entry.target.id);
          }
        });

        if (visibleEntries.size > 0) {
          let maxRatio = -1;
          let bestSection = '';
          visibleEntries.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              bestSection = id;
            }
          });
          if (bestSection) {
            setActiveSection(bestSection);
          }
        }
      },
      {
        rootMargin: '-18% 0px -45% 0px',
        threshold: [0.1, 0.3, 0.5, 0.7, 0.9],
      }
    );

    sections.forEach((section) => observer.observe(section));

    // Fallback scroll listener for top and bottom boundary conditions
    const handleScrollEdgeCases = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      if (scrollY < 100) {
        setActiveSection('hero');
      } else if (windowHeight + scrollY >= fullHeight - 80) {
        setActiveSection('contact');
      }
    };

    window.addEventListener('scroll', handleScrollEdgeCases, { passive: true });

    return () => {
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollEdgeCases);
    };
  }, []);

  return (
    <>
      {/* ========================================================= */}
      {/* MOBILE TOP BAR (< lg) with Glassmorphism                  */}
      {/* ========================================================= */}
      <header
        className="lg:hidden fixed top-0 left-0 right-0 z-40 h-16 px-5 flex items-center justify-between transition-all duration-300"
        style={{
          background: 'rgba(255, 255, 255, 0.2)',
          backdropFilter: 'blur(14px)',
          WebkitBackdropFilter: 'blur(14px)',
          borderBottom: 'none',
          boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.04)',
        }}
      >
        <button
          onClick={() => handleNavClick('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer focus:outline-none"
          aria-label="Scroll to top / hero section"
        >
          <BirdSilhouette
            size={20}
            opacity={0.9}
            className="text-[#15131C] group-hover:scale-110 transition-transform duration-300"
          />
          <div>
            <span className="font-serif-dreamy text-lg font-bold tracking-tight text-[#15131C] group-hover:text-[#4A2040] transition-colors block leading-tight">
              {profileData.name}
            </span>
            <span className="text-[10px] font-bold text-[#382E47] uppercase tracking-wider block">
              Portfolio
            </span>
          </div>
        </button>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-xl text-[#15131C] hover:bg-white/30 active:scale-95 transition-all cursor-pointer focus:outline-none"
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open navigation menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </header>

      {/* ========================================================= */}
      {/* MOBILE SLIDE-OUT DRAWER OVERLAY (< lg)                    */}
      {/* ========================================================= */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          {/* Backdrop Blur Overlay */}
          <div
            onClick={() => setMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/25 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
            aria-hidden="true"
          />

          {/* Drawer Panel with Pure Glassmorphism */}
          <div
            className="relative w-[260px] max-w-[85vw] h-full shadow-2xl flex flex-col justify-between p-5 z-10 overflow-y-auto animate-slideRight"
            style={{
              background: 'rgba(255, 255, 255, 0.35)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderRight: 'none',
              boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.08)',
            }}
          >
            {/* Drawer Header */}
            <div>
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/20">
                <button
                  onClick={() => handleNavClick('hero')}
                  className="flex items-center gap-2.5 text-left group cursor-pointer"
                >
                  <BirdSilhouette
                    size={20}
                    opacity={0.9}
                    className="text-[#15131C]"
                  />
                  <div>
                    <span className="font-serif-dreamy text-lg font-bold tracking-tight text-[#15131C]">
                      {profileData.name}
                    </span>
                    <span className="text-[10px] font-bold text-[#382E47] uppercase tracking-wider block">
                      UGM · Semester 5
                    </span>
                  </div>
                </button>

                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 rounded-lg text-[#15131C] hover:bg-white/30 transition-colors cursor-pointer"
                  aria-label="Close navigation drawer"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="space-y-1.5" aria-label="Mobile Navigation">
                {navLinks.map((link) => {
                  const Icon = link.icon;
                  const isActive = activeSection === link.target;
                  return (
                    <button
                      key={link.target}
                      onClick={() => handleNavClick(link.target)}
                      className={`w-full flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-xs tracking-wide transition-all duration-200 text-left cursor-pointer group ${
                        isActive
                          ? 'active text-[#110E17] font-bold shadow-2xs'
                          : 'text-[#1F1928] hover:text-[#110E17] font-semibold'
                      }`}
                      style={{
                        background: isActive
                          ? 'rgba(255, 255, 255, 0.45)'
                          : undefined,
                      }}
                      onMouseEnter={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background =
                            'rgba(255, 255, 255, 0.25)';
                        }
                      }}
                      onMouseLeave={(e) => {
                        if (!isActive) {
                          e.currentTarget.style.background = '';
                        }
                      }}
                    >
                      <Icon
                        size={16}
                        className={`transition-colors shrink-0 ${
                          isActive ? 'text-[#110E17] stroke-[2.3]' : 'text-[#2D2338]'
                        }`}
                      />
                      <span>{link.label}</span>
                    </button>
                  );
                })}
              </nav>
            </div>

            {/* Mobile Drawer Bottom Social Links */}
            <div className="pt-4 border-t border-white/20 flex items-center justify-between text-[#15131C]">
              <div className="flex items-center gap-2">
                {contactData.socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/25 hover:bg-white/50 text-[#15131C] transition-all"
                    aria-label={`Visit ${social.name} profile`}
                  >
                    {social.name === 'GitHub' ? (
                      <Github size={15} />
                    ) : (
                      <Linkedin size={15} />
                    )}
                  </a>
                ))}
              </div>
              <span className="text-[10px] text-[#332A3E] font-semibold">
                © {new Date().getFullYear()}
              </span>
            </div>
          </div>
        </div>
      )}

      {/* ========================================================= */}
      {/* FIXED VERTICAL SIDEBAR (DESKTOP >= lg)                   */}
      {/* Pure Glassmorphism: No solid bg, no right border          */}
      {/* ========================================================= */}
      <aside
        className="hidden lg:flex fixed top-0 left-0 bottom-0 w-[240px] z-40 flex-col justify-between transition-all duration-300 select-none"
        style={{
          background: 'rgba(255, 255, 255, 0.15)',
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          borderRight: 'none',
          boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.04)',
        }}
        aria-label="Sidebar Navigation"
      >
        {/* Top Branding Section */}
        <div className="pt-7 px-5 pb-5">
          <button
            onClick={() => handleNavClick('hero')}
            className="w-full text-left group cursor-pointer focus:outline-none block"
            aria-label="Scroll to top / hero section"
          >
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white/30 backdrop-blur-sm flex items-center justify-center shadow-2xs group-hover:scale-105 group-hover:bg-white/45 transition-all duration-200 shrink-0">
                <BirdSilhouette
                  size={18}
                  opacity={0.92}
                  className="text-[#15131C] group-hover:text-[#4A2040] transition-colors"
                />
              </div>
              <div className="min-w-0">
                <span className="font-serif-dreamy text-lg font-bold tracking-tight text-[#15131C] group-hover:text-[#4A2040] transition-colors block leading-tight truncate">
                  {profileData.name}
                </span>
                <span className="text-[10px] font-bold text-[#352B42] uppercase tracking-wider block truncate">
                  UGM · Engineering
                </span>
              </div>
            </div>
          </button>
        </div>

        {/* Middle Navigation Section */}
        <div className="flex-1 py-3 px-3 overflow-y-auto">
          <div className="px-2 mb-2">
            <span className="tracking-editorial text-[9px] uppercase font-bold text-[#3A2F48]">
              Menu
            </span>
          </div>

          <nav className="space-y-1.5" aria-label="Main Sections">
            {navLinks.map((link) => {
              const Icon = link.icon;
              const isActive = activeSection === link.target;
              return (
                <button
                  key={link.target}
                  onClick={() => handleNavClick(link.target)}
                  className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-xl text-xs tracking-wide transition-all duration-200 text-left cursor-pointer group ${
                    isActive
                      ? 'active text-[#110E17] font-bold shadow-2xs'
                      : 'text-[#241D2E] hover:text-[#110E17] font-semibold'
                  }`}
                  style={{
                    background: isActive
                      ? 'rgba(255, 255, 255, 0.4)'
                      : undefined,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        'rgba(255, 255, 255, 0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background = '';
                    }
                  }}
                  aria-current={isActive ? 'page' : undefined}
                >
                  <Icon
                    size={15}
                    className={`shrink-0 transition-transform duration-200 ${
                      isActive
                        ? 'text-[#110E17] scale-105 stroke-[2.3]'
                        : 'text-[#2D243A] group-hover:text-[#110E17]'
                    }`}
                  />
                  <span className="tracking-normal">{link.label}</span>

                  {isActive && (
                    <span className="ml-auto w-1.5 h-1.5 rounded-full bg-[#110E17]/80" />
                  )}
                </button>
              );
            })}
          </nav>
        </div>

        {/* Bottom Social Links Area (Pure Glass, No Border) */}
        <div className="p-4 flex items-center justify-between text-[#15131C]">
          <div className="flex items-center gap-1.5">
            {contactData.socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-xl bg-white/20 hover:bg-white/40 text-[#15131C] transition-all hover:scale-105"
                aria-label={`Visit ${social.name} profile`}
                title={social.name}
              >
                {social.name === 'GitHub' ? (
                  <Github size={14} />
                ) : (
                  <Linkedin size={14} />
                )}
              </a>
            ))}
            <button
              onClick={() => handleNavClick('hero')}
              className="p-2 rounded-xl bg-white/20 hover:bg-white/40 text-[#15131C] transition-all hover:scale-105 cursor-pointer"
              aria-label="Back to top"
              title="Back to Top"
            >
              <Compass size={14} />
            </button>
          </div>

          <span className="text-[9px] text-[#332A3E] font-bold">
            © {new Date().getFullYear()}
          </span>
        </div>
      </aside>
    </>
  );
};
