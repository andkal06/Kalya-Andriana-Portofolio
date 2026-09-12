import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import { BirdSilhouette } from './BirdSilhouette';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', target: 'about' },
    { label: 'Education', target: 'education' },
    { label: 'Experience', target: 'experience' },
    { label: 'Projects', target: 'projects' },
    { label: 'Skills', target: 'skills' },
    { label: 'Contact', target: 'contact' },
  ];

  const handleLinkClick = (target: string) => {
    onNavigate(target);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[rgba(255,255,255,0.65)] backdrop-blur-xl border-b border-[#E8A9C4]/60 py-3.5 shadow-sm'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between">
        {/* Logo / Personal Mark */}
        <button
          onClick={() => handleLinkClick('hero')}
          className="flex items-center gap-2.5 text-left group cursor-pointer"
        >
          <BirdSilhouette
            size={22}
            opacity={0.8}
            className="text-[#2D1B38] group-hover:scale-110 transition-transform"
          />
          <span className="font-serif-dreamy text-2xl font-bold tracking-tight text-[#1C1E26] group-hover:text-[#8C3E75] transition-colors">
            {profileData.name}
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="tracking-editorial text-xs uppercase font-bold text-[#3E344A] hover:text-[#8C3E75] transition-colors cursor-pointer relative group py-1"
            >
              <span>{link.label}</span>
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#C266A7] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
          <button
            onClick={() => handleLinkClick('contact')}
            className="px-5 py-2 rounded-full text-xs font-bold tracking-wide sky-accent-btn cursor-pointer"
          >
            Say Hello
          </button>
        </nav>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-xl text-[#261733] hover:bg-[#E8A9C4]/40 transition-colors cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            {mobileMenuOpen ? (
              <path d="M18 6L6 18M6 6l12 12" />
            ) : (
              <path d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[rgba(255,255,255,0.92)] backdrop-blur-2xl border-b border-[#E8A9C4]/60 px-6 py-5 shadow-xl space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.target}
              onClick={() => handleLinkClick(link.target)}
              className="block w-full text-left py-2 text-sm font-bold text-[#3A2F45] hover:text-[#8C3E75] transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-3 border-t border-[#B79FD1]/40">
            <button
              onClick={() => handleLinkClick('contact')}
              className="w-full py-2.5 rounded-full text-xs font-bold text-center sky-accent-btn"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
