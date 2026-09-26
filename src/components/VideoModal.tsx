import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Sparkles, Clock, Layers } from 'lucide-react';
import { VideoItem } from '../types';

interface VideoModalProps {
  video: VideoItem | null;
  allVideos: VideoItem[];
  isOpen: boolean;
  onClose: () => void;
  onSelectVideo: (video: VideoItem) => void;
  onInquireStyle: (title: string) => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  video,
  allVideos,
  isOpen,
  onClose,
  onSelectVideo,
  onInquireStyle
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !video) return;
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, video]);

  if (!isOpen || !video) return null;

  const currentIndex = allVideos.findIndex((v) => v.id === video.id);
  const handlePrev = () => {
    const prevIndex = (currentIndex - 1 + allVideos.length) % allVideos.length;
    onSelectVideo(allVideos[prevIndex]);
  };
  const handleNext = () => {
    const nextIndex = (currentIndex + 1) % allVideos.length;
    onSelectVideo(allVideos[nextIndex]);
  };

  const isVertical = video.aspectRatio === '9:16';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200">
      
      {/* Background click dismiss */}
      <div className="absolute inset-0" onClick={onClose} />

      {/* Main Lightbox Player Modal Container */}
      <div className="relative z-10 w-full max-w-5xl bg-[#1E1A2B] border border-[#D4B1E3]/30 rounded-3xl overflow-hidden shadow-2xl flex flex-col max-h-[92vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-[#14111D]">
          <div className="flex items-center gap-2.5 truncate pr-4">
            <span className="w-2 h-2 rounded-full bg-[#9B82BD] animate-pulse" />
            <span className="text-xs font-mono text-[#D4B1E3] uppercase tracking-wider">
              {video.categoryLabel}
            </span>
            <span className="text-white/30">/</span>
            <span className="text-xs text-white/70 truncate font-heading font-medium">
              {video.title}
            </span>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {/* Nav Arrows */}
            <button
              onClick={handlePrev}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Previous Video"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-xs font-mono text-white/50">
              {currentIndex + 1}/{allVideos.length}
            </span>
            <button
              onClick={handleNext}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              title="Next Video"
            >
              <ChevronRight className="w-4 h-4" />
            </button>

            <span className="w-px h-4 bg-white/10 mx-1" />

            {/* Close Button */}
            <button
              onClick={onClose}
              className="p-1.5 rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Video Player Display Zone */}
        <div className="relative bg-black flex items-center justify-center p-2 sm:p-4 min-h-[300px] flex-1 overflow-hidden">
          <div
            className={`w-full relative rounded-2xl overflow-hidden shadow-2xl bg-zinc-950 flex items-center justify-center ${
              isVertical
                ? 'max-w-[340px] aspect-[9/16]'
                : 'max-w-4xl aspect-video'
            }`}
          >
            {/* Embedded Stream without YouTube Channel Branding */}
            <iframe
              src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&playsinline=1`}
              title={video.title}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>

        {/* Video Metadata & Commission Bar */}
        <div className="p-4 sm:p-6 bg-[#161220] border-t border-white/10 space-y-3 shrink-0">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs text-white/60 mb-1">
                <span className="font-mono text-[#D4B1E3]">{video.clientNiche}</span>
                <span>·</span>
                <span className="flex items-center gap-1 font-mono">
                  <Clock className="w-3 h-3 text-[#9B82BD]" /> {video.duration}
                </span>
                <span>·</span>
                <span className="font-mono bg-white/10 text-white/80 px-1.5 py-0.2 rounded text-[10px]">
                  {video.aspectRatio}
                </span>
              </div>
              <h2 className="text-base sm:text-lg font-bold text-white font-heading">
                {video.title}
              </h2>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquireStyle(video.title);
              }}
              className="px-5 py-2.5 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full shadow-sm hover:shadow-[0_0_15px_rgba(155,130,189,0.4)] transition-all flex items-center justify-center gap-2 cursor-pointer self-start sm:self-auto shrink-0 active:scale-95"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Inquire About This Style</span>
            </button>
          </div>

          <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-body">
            {video.description}
          </p>

          {/* AI Engines Employed */}
          <div className="pt-2 flex flex-wrap items-center gap-1.5 border-t border-white/5">
            <span className="text-[11px] font-mono text-white/50 flex items-center gap-1 mr-1">
              <Layers className="w-3 h-3 text-[#9B82BD]" /> Generative Stack:
            </span>
            {video.tools.map((tool) => (
              <span
                key={tool}
                className="text-[10px] font-mono bg-white/5 text-white/80 border border-white/10 px-2 py-0.5 rounded-full"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};
