import React, { useRef, useState } from 'react';
import { Camera, Check, Upload, RefreshCw, Sparkles } from 'lucide-react';
import { usePortrait } from '../context/PortraitContext';

interface PortraitCardProps {
  className?: string;
  variant?: 'hero' | 'avatar';
  altText?: string;
}

export const PortraitCard: React.FC<PortraitCardProps> = ({
  className = '',
  variant = 'hero',
  altText = 'Syeda Rusha Fatima - AI Video Creator & Creative Specialist'
}) => {
  const { portraitUrl, isCustom, uploadCustomPortrait, resetToDefault } = usePortrait();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [justUploaded, setJustUploaded] = useState(false);

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const ok = await uploadCustomPortrait(file);
      if (ok) {
        setJustUploaded(true);
        setTimeout(() => setJustUploaded(false), 3000);
      }
    }
  };

  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      const ok = await uploadCustomPortrait(file);
      if (ok) {
        setJustUploaded(true);
        setTimeout(() => setJustUploaded(false), 3000);
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  if (variant === 'avatar') {
    return (
      <div className={`relative group ${className}`}>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept="image/*"
          className="hidden"
        />
        <div
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          className={`w-full h-full rounded-full overflow-hidden border-3 border-[#E8D2EB] p-1 bg-gradient-to-b from-[#F2E4ED] to-[#E8D2EB] shadow-lg relative ${
            isDragging ? 'ring-4 ring-[#9B82BD]' : ''
          }`}
        >
          <img
            src={portraitUrl}
            alt={altText}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover rounded-full filter contrast-102"
          />

          {/* Quick upload overlay */}
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Update to your exact photo"
            className="absolute inset-0 bg-black/40 text-white rounded-full flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer p-2"
          >
            <Camera className="w-5 h-5 text-white mb-1" />
            <span className="text-[10px] font-medium font-mono text-center leading-tight">
              Update Photo
            </span>
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative group ${className}`}>
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="image/*"
        className="hidden"
      />

      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`relative w-full aspect-[4/5] rounded-[22px] overflow-hidden bg-[#F2E4ED] flex flex-col justify-end shadow-inner transition-all ${
          isDragging ? 'ring-4 ring-[#9B82BD] scale-[0.99]' : ''
        }`}
      >
        {/* Main Image */}
        <img
          src={portraitUrl}
          alt={altText}
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1E1A2B]/90 via-[#1E1A2B]/20 to-transparent pointer-events-none" />

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-auto">
          {/* Status Indicator */}
          <div className="bg-white/95 backdrop-blur-md border border-[#E8D2EB] px-3 py-1 rounded-full flex items-center gap-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-[11px] font-medium text-[#1E1A2B]">Open for Projects</span>
          </div>

          {/* Quick Photo update trigger */}
          <button
            onClick={() => fileInputRef.current?.click()}
            title="Update photo file"
            className="bg-white/90 hover:bg-white text-[#1E1A2B] hover:text-[#9B82BD] border border-[#E8D2EB] px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-xs transition-all cursor-pointer text-[11px] font-medium active:scale-95"
          >
            <Camera className="w-3.5 h-3.5 text-[#9B82BD]" />
            <span>Update Photo</span>
          </button>
        </div>

        {/* Drag Over Hint */}
        {isDragging && (
          <div className="absolute inset-0 bg-[#9B82BD]/80 backdrop-blur-xs flex flex-col items-center justify-center text-white z-20">
            <Upload className="w-10 h-10 mb-2 animate-bounce" />
            <p className="text-sm font-semibold">Drop your exact photo here</p>
          </div>
        )}

        {/* Temporary Notification on Upload Success */}
        {justUploaded && (
          <div className="absolute top-14 left-4 right-4 bg-emerald-700 text-white text-xs px-3 py-1.5 rounded-xl shadow-lg flex items-center justify-center gap-1.5 z-20 animate-fade-in">
            <Check className="w-4 h-4" />
            <span>Exact photo applied successfully!</span>
          </div>
        )}

        {/* Bottom Portrait Card */}
        <div className="relative z-10 p-5 space-y-1.5 text-white">
          <div className="flex items-center justify-between">
            <div>
              <div className="font-heading text-lg font-bold text-white">
                Syeda Rusha Fatima
              </div>
              <div className="text-xs text-[#D4B1E3] font-mono">
                Layyah, Punjab, Pakistan
              </div>
            </div>
            <div className="text-[10px] font-mono bg-[#9B82BD] text-white px-2 py-0.5 rounded-full font-semibold">
              Creative Specialist
            </div>
          </div>

          <p className="text-xs text-white/80 line-clamp-2 pt-1 font-body">
            Generative Commercial Filmmaker creating photorealistic visuals and video campaigns.
          </p>

          <div className="flex items-center justify-between pt-2 text-[11px] border-t border-white/10">
            <span className="text-white/70 font-mono">Official Profile</span>
            {isCustom && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  resetToDefault();
                }}
                className="text-[#D4B1E3] hover:text-white flex items-center gap-1 text-[10px] cursor-pointer"
                title="Reset to default image"
              >
                <RefreshCw className="w-2.5 h-2.5" />
                <span>Reset</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
