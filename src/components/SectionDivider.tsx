import React from 'react';
import { BirdSilhouette } from './BirdSilhouette';

interface SectionDividerProps {
  className?: string;
}

export const SectionDivider: React.FC<SectionDividerProps> = ({ className = '' }) => {
  return (
    <div
      className={`w-full max-w-3xl mx-auto my-8 sm:my-12 flex items-center justify-center gap-4 px-6 pointer-events-none select-none ${className}`}
      aria-hidden="true"
    >
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C266A7]/45 to-transparent" />
      <BirdSilhouette size={16} opacity={0.6} className="text-[#8C3E75]" />
      <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent via-[#C266A7]/45 to-transparent" />
    </div>
  );
};
