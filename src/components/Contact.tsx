import React, { useState } from 'react';
import { contactData } from '../data/contact';
import { profileData } from '../data/profile';
import { BirdSilhouette } from './BirdSilhouette';

export const Contact: React.FC = () => {
  const { email, location, availabilityStatus, invitationNote, socialLinks } = contactData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    } catch {
      setCopied(true);
      setTimeout(() => setCopied(false), 2600);
    }
  };

  return (
    <footer
      id="contact"
      className="relative pt-20 pb-16 px-6 sm:px-10 lg:px-16 max-w-6xl mx-auto section-contact-sky rounded-3xl sm:rounded-[36px] overflow-hidden border border-[#8E72A8]/60 text-[#EDE7F6]"
    >
      {/* Upper Contact Card: Nightfall Dusk Glass */}
      <div className="dreamy-card rounded-3xl p-8 sm:p-12 relative overflow-hidden mb-16 border border-[#B79FD1]/40">
        {/* Ambient background sky glow: deep twilight violet & periwinkle aura */}
        <div
          aria-hidden="true"
          className="absolute -bottom-20 -right-20 w-80 h-80 rounded-full bg-[#C266A7]/30 blur-3xl pointer-events-none"
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -left-16 w-72 h-72 rounded-full bg-[#7FA6D9]/30 blur-3xl pointer-events-none"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative">
          {/* Left info */}
          <div className="lg:col-span-7 space-y-5">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full text-xs font-semibold sky-gradient-badge text-[#241530] shadow-sm">
              <span className="w-2.5 h-2.5 rounded-full sky-bullet animate-pulse" />
              <span>{availabilityStatus}</span>
            </div>

            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-serif-dreamy font-bold text-[#1C1E26] leading-tight">
              Get in Touch
            </h2>

            <p className="text-base sm:text-lg text-[#3C3247] leading-relaxed font-normal max-w-xl">
              {invitationNote}
            </p>

            <div className="pt-2 flex items-center gap-3">
              <span className="tracking-editorial text-xs font-bold uppercase text-[#8C3E75]">
                Base of Operations:
              </span>
              <span className="text-sm font-semibold text-[#291F33]">{location}</span>
            </div>
          </div>

          {/* Right Action Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {/* Email Copy Card */}
            <div className="dreamy-card rounded-2xl p-6 shadow-sm transition-all hover:border-[#C266A7]/80 border border-[#E8A9C4]/60">
              <div className="flex items-center justify-between gap-3 mb-2">
                <span className="tracking-editorial text-[11px] font-bold uppercase text-[#8C3E75]">
                  Direct Inquiries
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="text-xs font-bold text-[#8C3E75] hover:text-[#C266A7] transition-colors cursor-pointer px-3 py-1 rounded-lg dreamy-card border border-[#B79FD1]/50"
                >
                  {copied ? '✓ Copied to clipboard' : 'Copy address'}
                </button>
              </div>
              <a
                href={`mailto:${email}`}
                className="font-serif-dreamy text-xl sm:text-2xl font-bold text-[#1C1E26] hover:text-[#8C3E75] transition-colors break-all"
              >
                {email}
              </a>
            </div>

            {/* Social Channels mapped strictly from data */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-4 rounded-2xl dreamy-card transition-all duration-300 flex items-center justify-between group border border-[#B79FD1]/45"
                >
                  <div>
                    <div className="text-xs text-[#635575] font-semibold">{social.name}</div>
                    <div className="text-sm font-bold text-[#1F172B] group-hover:text-[#8C3E75] transition-colors">
                      {social.handle}
                    </div>
                  </div>
                  <div className="text-[#8C3E75] group-hover:text-[#C266A7] transition-colors">
                    {social.iconType === 'github' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                        <path d="M9 18c-4.51 2-5-2-7-2" />
                      </svg>
                    )}
                    {social.iconType === 'linkedin' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    )}
                    {social.iconType === 'email' && (
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <rect width="20" height="16" x="2" y="4" rx="2" />
                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                      </svg>
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Note */}
      <div className="pt-8 border-t border-[#B79FD1]/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D8C7E8]">
        <div className="flex items-center gap-2">
          <BirdSilhouette size={18} opacity={0.7} />
          <span>
            © {new Date().getFullYear()} {profileData.name} — {profileData.institution}
          </span>
        </div>
        <div className="text-center sm:text-right italic font-serif-dreamy text-sm text-[#F3D9E4]">
          Crafted under dusk skies turning to twilight night.
        </div>
      </div>
    </footer>
  );
};
