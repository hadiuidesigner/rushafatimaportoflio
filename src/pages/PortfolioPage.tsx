import React, { useState, useMemo } from 'react';
import { 
  Play, 
  Sparkles, 
  Search, 
  Maximize2, 
  Clock, 
  Grid, 
  Film, 
  X,
  Layers,
  ChevronRight
} from 'lucide-react';
import { portfolioVideos } from '../data/portfolioData';
import { VideoItem } from '../types';

interface PortfolioPageProps {
  onOpenVideoModal: (video: VideoItem) => void;
  onOpenContact: (prefillStyle?: string) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({
  onOpenVideoModal,
  onOpenContact
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<'grid' | 'feed'>('grid');

  // Filter categories
  const categories = [
    { id: 'all', label: 'All 15 Works', count: 15 },
    { id: 'commercial', label: 'Brand Commercials', count: 3 },
    { id: 'product', label: 'Product & E-Commerce', count: 5 },
    { id: 'cinematic', label: 'Cinematic & Sci-Fi', count: 5 },
    { id: 'short', label: 'Vertical Reels & Motion', count: 1 },
    { id: 'ugc', label: 'UGC & Direct Response', count: 1 },
  ];

  // Filtered list
  const filteredVideos = useMemo(() => {
    return portfolioVideos.filter((video) => {
      const matchesCategory =
        selectedCategory === 'all' || video.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        video.title.toLowerCase().includes(query) ||
        video.description.toLowerCase().includes(query) ||
        video.clientNiche.toLowerCase().includes(query) ||
        video.tools.some((t) => t.toLowerCase().includes(query));

      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="space-y-10 pb-20 bg-[#F7EDEC]">
      
      {/* Portfolio Header */}
      <section className="relative pt-6 sm:pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-3">
            {/* Clean Kicker */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#E8D2EB] rounded-full text-xs font-mono text-[#9B82BD] shadow-2xs">
              <span className="w-2 h-2 rounded-full bg-[#9B82BD] animate-pulse" />
              <span className="font-semibold uppercase tracking-wider">OFFICIAL PRODUCTION GALLERY</span>
              <span className="text-[#1E1A2B]/30">/</span>
              <span>15 PLAYABLE WORKS</span>
            </div>

            <h1 className="font-heading text-3xl sm:text-5xl font-extrabold text-[#1E1A2B] tracking-tight leading-tight">
              Curated Generative Portfolio
            </h1>

            <p className="text-sm sm:text-base text-[#1E1A2B]/80 leading-relaxed max-w-2xl font-body">
              Explore 15 playable AI video productions created by Syeda Rusha Fatima. From 9:16 viral vertical reels and luxury e-commerce commercials to widescreen cinematic narratives — all rendered in studio quality using next-generation neural architectures.
            </p>

            {/* Clean Unboxed Metadata */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#1E1A2B]/70 pt-1">
              <span>15 Verified Works</span>
              <span aria-hidden="true">·</span>
              <span>9:16 Vertical & 16:9 4K Cinema</span>
              <span aria-hidden="true">·</span>
              <span>Runway Gen-3 / Kling / Midjourney / Sora</span>
            </div>
          </div>

        </div>
      </section>

      {/* Sticky Interactive Filter & Search Controls */}
      <section className="sticky top-18 z-30 bg-[#F7EDEC]/95 backdrop-blur-md border-y border-[#E8D2EB] py-3.5 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-3 sm:space-y-0 sm:flex sm:items-center sm:justify-between sm:gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3.5 py-1.5 text-xs font-medium rounded-full whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#9B82BD] text-white shadow-xs font-semibold'
                    : 'bg-white/80 text-[#1E1A2B]/70 hover:text-[#1E1A2B] hover:bg-white border border-[#E8D2EB]'
                }`}
              >
                <span>{cat.label}</span>
                {cat.id !== 'all' && (
                  <span className="ml-1.5 text-[10px] font-mono opacity-80">
                    ({cat.count})
                  </span>
                )}
              </button>
            ))}
          </div>

          {/* Search & Layout View Toggle */}
          <div className="flex items-center gap-3">
            {/* Search Input */}
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#1E1A2B]/40" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search gym, perfume, tech..."
                className="w-full pl-8 pr-7 py-1.5 text-xs bg-white border border-[#E8D2EB] rounded-full text-[#1E1A2B] placeholder-[#1E1A2B]/40 focus:outline-none focus:border-[#9B82BD] transition-colors shadow-2xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-[#1E1A2B]/50 hover:text-[#1E1A2B]"
                >
                  <X className="w-3 h-3" />
                </button>
              )}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-white p-0.5 rounded-full border border-[#E8D2EB] shadow-2xs">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-[#9B82BD] text-white'
                    : 'text-[#1E1A2B]/60 hover:text-[#1E1A2B]'
                }`}
                title="Curated Gallery Grid"
              >
                <Grid className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setViewMode('feed')}
                className={`p-1.5 rounded-full transition-colors cursor-pointer ${
                  viewMode === 'feed'
                    ? 'bg-[#9B82BD] text-white'
                    : 'text-[#1E1A2B]/60 hover:text-[#1E1A2B]'
                }`}
                title="Expanded Theater View"
              >
                <Film className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* Main Gallery Display Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* If no matches found */}
        {filteredVideos.length === 0 ? (
          <div className="py-16 text-center space-y-4 bg-white border border-[#E8D2EB] rounded-3xl p-8 shadow-xs">
            <Film className="w-10 h-10 text-[#9B82BD] mx-auto opacity-70" />
            <h3 className="text-lg font-bold text-[#1E1A2B] font-heading">No videos match your search</h3>
            <p className="text-xs text-[#1E1A2B]/70 max-w-sm mx-auto font-body">
              Try searching with different terms like "perfume", "gym", "Alex", "clothing", or reset your category filter.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="px-5 py-2 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : viewMode === 'grid' ? (
          /* Gallery Grid View */
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => {
              const isInlinePlaying = playingVideoId === video.id;
              const isVertical = video.aspectRatio === '9:16';

              return (
                <div
                  key={video.id}
                  className="group relative bg-white border border-[#E8D2EB] hover:border-[#9B82BD] rounded-3xl overflow-hidden transition-all duration-300 flex flex-col shadow-xs hover:shadow-[0_12px_32px_rgba(212,177,227,0.3)]"
                >
                  {/* Media Viewport */}
                  <div
                    className={`relative w-full bg-[#1E1A2B] overflow-hidden flex items-center justify-center ${
                      isVertical ? 'aspect-[9/13]' : 'aspect-video'
                    }`}
                  >
                    {isInlinePlaying ? (
                      <div className="w-full h-full relative">
                        {/* Embed without YouTube channel UI */}
                        <iframe
                          src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?autoplay=1&modestbranding=1&rel=0&iv_load_policy=3&controls=1&playsinline=1`}
                          title={video.title}
                          className="w-full h-full border-0 absolute inset-0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                        <button
                          onClick={() => setPlayingVideoId(null)}
                          className="absolute top-2.5 right-2.5 z-20 p-1.5 bg-black/80 hover:bg-black text-white rounded-full transition-colors cursor-pointer"
                          title="Stop inline player"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    ) : (
                      <div
                        onClick={() => setPlayingVideoId(video.id)}
                        className="w-full h-full relative cursor-pointer group"
                      >
                        <img
                          src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                          alt={video.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                          onError={(e) => {
                            e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
                          }}
                        />

                        {/* Scrim */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent group-hover:from-black/85 transition-all" />

                        {/* Central Play Badge */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="w-14 h-14 rounded-full bg-white/95 group-hover:bg-[#9B82BD] text-[#1E1A2B] group-hover:text-white flex items-center justify-center shadow-xl group-hover:scale-115 transition-all duration-300">
                            <Play className="w-6 h-6 fill-current ml-0.5" />
                          </div>
                        </div>

                        {/* Top Badges */}
                        <div className="absolute top-3 left-3 flex items-center gap-1.5">
                          <span className="text-[10px] font-mono font-medium bg-black/75 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                            {video.categoryLabel}
                          </span>
                        </div>

                        <div className="absolute top-3 right-3 flex items-center gap-1">
                          <span className="text-[10px] font-mono bg-white/90 text-[#1E1A2B] px-2 py-0.5 rounded-full font-bold shadow-xs">
                            {video.aspectRatio}
                          </span>
                        </div>

                        {/* Bottom Overlay Hint */}
                        <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] text-white">
                          <span className="flex items-center gap-1 font-mono">
                            <Clock className="w-3 h-3 text-[#D4B1E3]" /> {video.duration}
                          </span>
                          <span className="text-[#D4B1E3] font-medium group-hover:underline">
                            Click to Stream
                          </span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Content & Details */}
                  <div className="p-5 flex-1 flex flex-col justify-between space-y-3.5 bg-white">
                    <div className="space-y-1.5">
                      <div className="text-[11px] font-mono font-medium text-[#9B82BD]">
                        {video.clientNiche}
                      </div>

                      <h3
                        onClick={() => onOpenVideoModal(video)}
                        className="text-base font-bold text-[#1E1A2B] hover:text-[#9B82BD] transition-colors cursor-pointer line-clamp-1 font-heading"
                      >
                        {video.title}
                      </h3>

                      <p className="text-xs text-[#1E1A2B]/75 line-clamp-2 leading-relaxed font-body">
                        {video.description}
                      </p>

                      {/* Toolchain tags */}
                      <div className="flex flex-wrap gap-1 pt-1">
                        {video.tools.slice(0, 3).map((t) => (
                          <span
                            key={t}
                            className="text-[10px] font-mono bg-[#F2E4ED] text-[#1E1A2B]/80 border border-[#E8D2EB] px-2 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action buttons */}
                    <div className="pt-3 border-t border-[#E8D2EB] flex items-center justify-between gap-2">
                      <button
                        onClick={() => onOpenVideoModal(video)}
                        className="text-xs font-semibold text-[#9B82BD] hover:text-[#8A71AC] flex items-center gap-1 cursor-pointer"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                        <span>Theater Mode</span>
                      </button>

                      <button
                        onClick={() => onOpenContact(video.title)}
                        className="px-3 py-1 text-[11px] font-medium text-[#1E1A2B] hover:text-white bg-[#F2E4ED] hover:bg-[#9B82BD] rounded-full transition-colors cursor-pointer"
                      >
                        Order This Style
                      </button>
                    </div>

                  </div>

                </div>
              );
            })}
          </div>
        ) : (
          /* Expanded Theater Feed View */
          <div className="space-y-8 max-w-4xl mx-auto">
            {filteredVideos.map((video) => {
              const isVertical = video.aspectRatio === '9:16';

              return (
                <div
                  key={video.id}
                  className="bg-white border border-[#E8D2EB] rounded-3xl overflow-hidden shadow-sm"
                >
                  <div className="p-4 sm:p-5 border-b border-[#E8D2EB] flex items-center justify-between bg-[#F2E4ED]/40">
                    <div>
                      <div className="flex items-center gap-2 text-xs text-[#1E1A2B]/70 mb-1">
                        <span className="font-mono text-[#9B82BD] font-semibold">{video.categoryLabel}</span>
                        <span>·</span>
                        <span>{video.clientNiche}</span>
                        <span>·</span>
                        <span className="font-mono">{video.duration}</span>
                      </div>
                      <h3 className="text-lg font-bold text-[#1E1A2B] font-heading">
                        {video.title}
                      </h3>
                    </div>

                    <button
                      onClick={() => onOpenContact(video.title)}
                      className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full transition-colors cursor-pointer shadow-2xs"
                    >
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>Order This Style</span>
                    </button>
                  </div>

                  {/* Clean Player Embed without YouTube channel metadata */}
                  <div className="bg-[#14111D] p-3 sm:p-6 flex items-center justify-center min-h-[350px]">
                    <div
                      className={`w-full relative rounded-2xl overflow-hidden shadow-2xl bg-black ${
                        isVertical
                          ? 'max-w-[340px] aspect-[9/16]'
                          : 'max-w-3xl aspect-video'
                      }`}
                    >
                      <iframe
                        src={`https://www.youtube-nocookie.com/embed/${video.youtubeId}?modestbranding=1&rel=0&iv_load_policy=3&controls=1&playsinline=1`}
                        title={video.title}
                        className="w-full h-full border-0 absolute inset-0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                      />
                    </div>
                  </div>

                  <div className="p-5 bg-white space-y-3">
                    <p className="text-xs sm:text-sm text-[#1E1A2B]/80 leading-relaxed font-body">
                      {video.description}
                    </p>
                    <div className="flex flex-wrap items-center justify-between gap-2 pt-2 border-t border-[#E8D2EB]">
                      <div className="flex flex-wrap gap-1.5">
                        {video.tools.map((t) => (
                          <span
                            key={t}
                            className="text-xs font-mono bg-[#F2E4ED] text-[#1E1A2B]/80 border border-[#E8D2EB] px-2.5 py-0.5 rounded-full"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                      <button
                        onClick={() => onOpenVideoModal(video)}
                        className="text-xs font-medium text-[#9B82BD] hover:underline flex items-center gap-1 cursor-pointer"
                      >
                        <span>Open in Lightbox</span>
                        <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

      </section>

      {/* Bottom Commission Pitch */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F2E4ED] via-white to-[#F2E4ED] border border-[#E8D2EB] text-center space-y-4 shadow-sm">
          <div className="max-w-2xl mx-auto space-y-2">
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E1A2B] tracking-tight">
              Have an Ambitious Video Idea in Mind?
            </h3>
            <p className="text-xs sm:text-sm text-[#1E1A2B]/75 font-body">
              Syeda Rusha Fatima turns commercial scripts, fragrance concepts, tech hardware launches, and cinematic stories into broadcast-ready 4K files in 48 to 72 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact()}
              className="px-8 py-3 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full transition-all shadow-md shadow-[#9B82BD]/30 flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Book Your AI Video Production</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
