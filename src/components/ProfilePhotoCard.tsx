import React from 'react';

interface ProfilePhotoCardProps {
  name: string;
  roleTitle: string;
  institution: string;
}

const PHOTO_URL = '/profile-portrait.jpeg';

export const ProfilePhotoCard: React.FC<ProfilePhotoCardProps> = ({
  name,
  roleTitle,
  institution,
}) => {
  return (
    <div className="dreamy-card rounded-3xl p-6 sm:p-7 border border-[#E8A9C4]/60 shadow-lg relative flex flex-col justify-between">
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#B79FD1]/40">
        <span className="tracking-editorial text-[11px] uppercase font-bold text-[#8C3E75]">
          Personal Portrait
        </span>
        <div className="flex items-center gap-1.5 text-xs text-[#524461] font-medium">
          <span className="w-2 h-2 rounded-full sky-bullet" />
          <span>Profile Photo</span>
        </div>
      </div>

      <div className="relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] rounded-2xl overflow-hidden border-2 border-[#E8A9C4]/70 shadow-md">
        <img src={PHOTO_URL} alt={name} className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E26]/45 via-transparent to-transparent" />
      </div>

      <div className="mt-4 pt-3 border-t border-[#B79FD1]/40 flex items-center justify-between">
        <div>
          <p className="font-serif-dreamy text-lg font-bold text-[#1C1E26] leading-tight">
            {name}
          </p>
          <p className="text-xs text-[#524461] font-medium mt-0.5">
            {roleTitle} • {institution}
          </p>
        </div>
        <div className="w-2.5 h-2.5 rounded-full sky-bullet" />
      </div>
    </div>
  );
};
