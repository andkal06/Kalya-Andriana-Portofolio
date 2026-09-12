import React, { useState, useEffect, useRef } from 'react';
import { BirdSilhouette } from './BirdSilhouette';

interface ProfilePhotoCardProps {
  name: string;
  roleTitle: string;
  institution: string;
}

const STORAGE_KEY = 'kalya_portfolio_profile_photo';

export const ProfilePhotoCard: React.FC<ProfilePhotoCardProps> = ({
  name,
  roleTitle,
  institution,
}) => {
  const [photoUrl, setPhotoUrl] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        setPhotoUrl(saved);
      }
    } catch {
      // localStorage may fail in restricted iframes
    }
  }, []);

  const handleFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      if (result) {
        setPhotoUrl(result);
        try {
          localStorage.setItem(STORAGE_KEY, result);
        } catch {
          // storage quota exceeded or disabled
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleRemovePhoto = (e: React.MouseEvent) => {
    e.stopPropagation();
    setPhotoUrl(null);
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // ignore
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="dreamy-card rounded-3xl p-6 sm:p-7 border border-[#E8A9C4]/60 shadow-lg relative group flex flex-col justify-between">
      {/* Hidden File Input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={(e) => {
          if (e.target.files && e.target.files[0]) {
            handleFile(e.target.files[0]);
          }
        }}
      />

      {/* Header Label */}
      <div className="flex items-center justify-between mb-4 pb-2 border-b border-[#B79FD1]/40">
        <span className="tracking-editorial text-[11px] uppercase font-bold text-[#8C3E75]">
          Personal Portrait
        </span>
        <div className="flex items-center gap-1.5 text-xs text-[#524461] font-medium">
          <span className="w-2 h-2 rounded-full sky-bullet" />
          <span>Profile Photo</span>
        </div>
      </div>

      {/* Photo Frame Container */}
      <div
        onClick={() => fileInputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative w-full aspect-[4/4.5] sm:aspect-[4/4.8] rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 border-2 ${
          isDragging
            ? 'border-[#C266A7] bg-white/60 scale-[1.02]'
            : photoUrl
            ? 'border-[#E8A9C4]/70 shadow-md hover:border-[#C266A7]'
            : 'border-dashed border-[#B79FD1]/70 bg-white/30 hover:bg-white/50 hover:border-[#C266A7]'
        }`}
      >
        {photoUrl ? (
          <>
            <img
              src={photoUrl}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Subtle Gradient Shade at the bottom */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1C1E26]/60 via-transparent to-transparent opacity-80" />

            {/* Hover Action Overlay */}
            <div className="absolute inset-0 bg-[#2D1B38]/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center gap-2 p-4 text-white text-center">
              <svg
                width="28"
                height="28"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
              <span className="text-xs font-bold tracking-wide">Klik untuk Ganti Foto</span>
              <span className="text-[10px] text-white/80">atau seret file gambar baru</span>
            </div>

            {/* Delete button */}
            <button
              onClick={handleRemovePhoto}
              title="Hapus Foto"
              className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 hover:bg-red-500/80 text-white backdrop-blur-md transition-colors z-10"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </>
        ) : (
          /* Empty / Upload Placeholder with Warm Sunset Aesthetics */
          <div className="w-full h-full flex flex-col items-center justify-center p-6 text-center select-none">
            {/* Soft Warm Avatar Placeholder Halo */}
            <div className="relative w-24 h-24 mb-4 rounded-full flex items-center justify-center bg-gradient-to-tr from-[#E8A9C4] to-[#B79FD1] shadow-inner">
              <div className="w-20 h-20 rounded-full bg-white/70 backdrop-blur-sm flex items-center justify-center">
                <BirdSilhouette size={28} opacity={0.8} className="text-[#8C3E75]" />
              </div>
              <span className="absolute bottom-0 right-0 w-6 h-6 rounded-full sky-accent-btn flex items-center justify-center shadow-md">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="5" y1="12" x2="19" y2="12" />
                </svg>
              </span>
            </div>

            <h4 className="text-base font-serif-dreamy font-bold text-[#1C1E26] mb-1">
              Pasang Foto Kamu
            </h4>
            <p className="text-xs text-[#524461] leading-relaxed max-w-[210px] mb-3">
              Klik di sini atau tarik foto kamu (PNG, JPG, WebP) untuk menampilkannya di samping About.
            </p>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold sky-accent-btn shadow-xs">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              Pilih Foto
            </span>
          </div>
        )}
      </div>

      {/* Caption & Identity Footer */}
      <div className="mt-4 pt-3 border-t border-[#B79FD1]/40 flex items-center justify-between">
        <div>
          <p className="font-serif-dreamy text-lg font-bold text-[#1C1E26] leading-tight">
            {name}
          </p>
          <p className="text-xs text-[#524461] font-medium mt-0.5">
            {roleTitle} • {institution}
          </p>
        </div>
        <div className="w-2.5 h-2.5 rounded-full sky-bullet animate-pulse" />
      </div>
    </div>
  );
};
