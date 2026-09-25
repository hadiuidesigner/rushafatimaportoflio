import React, { useState } from 'react';
import { 
  Play, 
  Sparkles, 
  ArrowRight, 
  Film, 
  Clock, 
  CheckCircle2, 
  Instagram, 
  Linkedin, 
  Tv, 
  Smartphone, 
  Eye, 
  ChevronRight,
  MessageCircle,
  Layers,
  Zap,
  MapPin,
  ExternalLink,
  ShieldCheck,
  Video,
  Palette,
  Image as ImageIcon,
  Sparkle
} from 'lucide-react';
import { bioData, servicesData, toolsData, faqData } from '../data/siteData';
import { portfolioVideos } from '../data/portfolioData';
import { VideoItem, ServiceItem } from '../types';
import { PortraitCard } from '../components/PortraitCard';

interface HomePageProps {
  onNavigateToPortfolio: () => void;
  onOpenVideoModal: (video: VideoItem) => void;
  onOpenContact: (prefillStyle?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigateToPortfolio,
  onOpenVideoModal,
  onOpenContact
}) => {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [selectedService, setSelectedService] = useState<ServiceItem>(servicesData[0]);

  // Featured 4 videos to tease on home page
  const featuredTeasers = portfolioVideos.filter((v) => v.featured).slice(0, 4);

  return (
    <div className="space-y-20 md:space-y-28 pb-20 overflow-hidden bg-[#F7EDEC]">
      
      {/* 1. Hero Section */}
      <section className="relative pt-6 md:pt-14 lg:pt-18">
        {/* Soft Lavender and Blush Glow Backdrops */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-[#E8D2EB]/60 blur-[120px] rounded-full pointer-events-none -z-10" />
        <div className="absolute top-36 right-4 w-[380px] h-[320px] bg-[#F2E4ED] blur-[90px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
            
            {/* Left Narrative */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-7">
              
              {/* Clean Kicker */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/80 border border-[#E8D2EB] rounded-full text-xs font-mono text-[#9B82BD] shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-[#9B82BD] animate-pulse" />
                <span className="font-semibold uppercase tracking-wider">AI Video Creator & Creative Specialist</span>
              </div>

              {/* Main Headline */}
              <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#1E1A2B] tracking-tight leading-[1.08] text-balance">
                Bending reality with <span className="font-serif-accent italic font-normal text-[#9B82BD]">generative cinema</span>.
              </h1>

              {/* Authoritative Professional Pitch */}
              <p className="text-base sm:text-lg text-[#1E1A2B]/80 leading-relaxed max-w-2xl font-body">
                {bioData.headline} Syeda Rusha Fatima commands neural models to craft cinematic visual storytelling — delivering engaging 9:16 vertical reels, realistic product spots, and cinematic commercials in 48 to 72 hours.
              </p>

              {/* Primary Call to Actions */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <button
                  onClick={onNavigateToPortfolio}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full shadow-md shadow-[#9B82BD]/25 hover:shadow-[#9B82BD]/40 transition-all flex items-center gap-2 cursor-pointer group active:scale-95"
                >
                  <Film className="w-4 h-4" />
                  <span>Explore 15 Works Portfolio</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>

                <button
                  onClick={() => onOpenContact()}
                  className="px-6 py-3.5 text-xs sm:text-sm font-semibold text-[#1E1A2B] hover:text-[#9B82BD] bg-white hover:bg-[#F2E4ED] border border-[#E8D2EB] rounded-full transition-all flex items-center gap-2 cursor-pointer shadow-2xs active:scale-95"
                >
                  <Sparkles className="w-4 h-4 text-[#9B82BD]" />
                  <span>Commission a Video</span>
                </button>
              </div>

              {/* Metrics Strip */}
              <div className="pt-6 border-t border-[#E8D2EB] grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
                {bioData.stats.map((stat, i) => (
                  <div key={i} className="space-y-0.5">
                    <div className="font-heading text-2xl sm:text-3xl font-extrabold text-[#1E1A2B] tracking-tight tabular-nums">
                      {stat.value}
                    </div>
                    <div className="text-xs text-[#1E1A2B]/70 font-body">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

            </div>

            {/* Right Hero Visual: Syeda Rusha Fatima Portrait */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[380px] rounded-3xl p-2 bg-gradient-to-b from-white/90 via-[#F2E4ED]/80 to-[#E8D2EB]/50 border border-[#E8D2EB] shadow-[0_20px_50px_rgba(212,177,227,0.35)]">
                <PortraitCard variant="hero" />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. Featured Portfolio Teaser (4 Select Highlights) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div className="space-y-1.5">
            <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
              Curated Production Preview
            </div>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E1A2B] tracking-tight">
              Featured Video Work
            </h2>
            <p className="text-sm text-[#1E1A2B]/70 max-w-xl font-body">
              Click any production to view in full resolution, or browse the complete gallery of 15 playable video works.
            </p>
          </div>

          <button
            onClick={onNavigateToPortfolio}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#9B82BD] hover:text-[#8A71AC] transition-colors cursor-pointer group whitespace-nowrap self-start sm:self-auto"
          >
            <span>View All 15 Portfolio Videos</span>
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredTeasers.map((video) => (
            <div
              key={video.id}
              onClick={() => onOpenVideoModal(video)}
              className="group cursor-pointer bg-white rounded-3xl overflow-hidden border border-[#E8D2EB] hover:border-[#9B82BD] transition-all duration-300 flex flex-col shadow-xs hover:shadow-[0_12px_30px_rgba(212,177,227,0.35)]"
            >
              <div className="relative aspect-[9/12] overflow-hidden bg-[#1E1A2B]">
                <img
                  src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                  alt={video.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  onError={(e) => {
                    e.currentTarget.src = `https://img.youtube.com/vi/${video.youtubeId}/mqdefault.jpg`;
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent group-hover:from-black/90 transition-all" />

                {/* Aspect Badge */}
                <div className="absolute top-3 left-3 flex items-center gap-1.5">
                  <span className="text-[10px] font-mono font-medium bg-black/70 text-white backdrop-blur-md px-2.5 py-0.5 rounded-full border border-white/10">
                    {video.categoryLabel}
                  </span>
                </div>

                <div className="absolute top-3 right-3">
                  <span className="text-[10px] font-mono font-bold bg-white/90 text-[#1E1A2B] px-2 py-0.5 rounded-full shadow-xs">
                    {video.aspectRatio}
                  </span>
                </div>

                {/* Central Play Button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white/95 text-[#1E1A2B] group-hover:bg-[#9B82BD] group-hover:text-white flex items-center justify-center shadow-lg group-hover:scale-115 transition-all duration-300">
                    <Play className="w-5 h-5 fill-current ml-0.5" />
                  </div>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1">
                  <div className="text-[11px] font-mono text-[#D4B1E3]">
                    {video.clientNiche}
                  </div>
                  <div className="text-xs font-bold leading-snug line-clamp-1 font-heading">
                    {video.title}
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-white/75 pt-0.5">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-[#D4B1E3]" /> {video.duration}
                    </span>
                    <span className="text-[#D4B1E3] font-medium group-hover:underline">Play Video</span>
                  </div>
                </div>
              </div>

              <div className="p-4 flex-1 flex flex-col justify-between space-y-2 bg-white">
                <p className="text-xs text-[#1E1A2B]/75 line-clamp-2 leading-relaxed font-body">
                  {video.description}
                </p>
                <div className="pt-2 border-t border-[#E8D2EB] flex items-center justify-between text-[11px]">
                  <span className="text-[#9B82BD] font-medium font-mono">{video.keyFeature}</span>
                  <span className="text-xs font-semibold text-[#1E1A2B] group-hover:text-[#9B82BD]">Watch →</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Comprehensive 9 Creative Services Showcase (from Official PDF) */}
      <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-10 space-y-2">
          <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
            End-to-End Creative Offerings
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E1A2B] tracking-tight">
            9 Core Creative & AI Video Services
          </h2>
          <p className="text-sm text-[#1E1A2B]/75 font-body">
            Full-spectrum generative video synthesis, character consistency, and visual branding crafted for modern brands, creators, and agencies.
          </p>
        </div>

        {/* 9 Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((svc, index) => (
            <div
              key={svc.id}
              className="p-6 rounded-3xl bg-white border border-[#E8D2EB] hover:border-[#9B82BD] transition-all duration-300 flex flex-col justify-between space-y-4 shadow-xs hover:shadow-[0_12px_32px_rgba(212,177,227,0.25)] group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="w-8 h-8 rounded-full bg-[#F2E4ED] text-[#9B82BD] font-mono text-xs font-bold flex items-center justify-center border border-[#E8D2EB]">
                    0{index + 1}
                  </span>
                  <span className="text-[11px] font-mono text-[#9B82BD] bg-[#F2E4ED] border border-[#E8D2EB] px-2.5 py-0.5 rounded-full font-medium">
                    {svc.turnaround}
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-heading text-lg font-bold text-[#1E1A2B] group-hover:text-[#9B82BD] transition-colors">
                    {svc.title}
                  </h3>
                  <p className="text-xs text-[#9B82BD] font-medium leading-relaxed font-body">
                    {svc.subtitle}
                  </p>
                </div>

                <p className="text-xs text-[#1E1A2B]/75 leading-relaxed font-body">
                  {svc.description}
                </p>
              </div>

              <div className="space-y-3 pt-3 border-t border-[#E8D2EB]">
                <div className="space-y-1.5">
                  {svc.deliverables.slice(0, 3).map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#1E1A2B]/80">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#9B82BD] shrink-0 mt-0.5" />
                      <span className="line-clamp-1">{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => onOpenContact(svc.title)}
                  className="w-full py-2 px-3 text-xs font-semibold text-[#1E1A2B] hover:text-white bg-[#F2E4ED] hover:bg-[#9B82BD] rounded-full transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Sparkles className="w-3 h-3" />
                  <span>Inquire for {svc.title}</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. The Generative Advantage: Traditional Shoots vs AI Generative Filmmaking */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-6 sm:p-10 lg:p-12 rounded-3xl bg-white border border-[#E8D2EB] shadow-[0_10px_35px_rgba(212,177,227,0.2)] overflow-hidden">
          
          <div className="max-w-3xl mb-8 space-y-2">
            <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
              The Production Paradigm Shift
            </div>
            <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E1A2B] tracking-tight">
              Why Forward-Thinking Brands Choose Generative Video
            </h2>
            <p className="text-sm text-[#1E1A2B]/75 font-body">
              Comparing physical filming constraints with the speed and flexibility of modern AI video creation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Traditional Production Card */}
            <div className="p-6 rounded-2xl bg-[#F7EDEC] border border-[#E8D2EB] space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#1E1A2B]/70">TRADITIONAL VIDEO SHOOTS</span>
                <span className="text-xs text-[#1E1A2B]/60 bg-white/70 border border-[#E8D2EB] px-2.5 py-0.5 rounded-full font-medium">Physical Constraints</span>
              </div>
              <div className="text-xl font-bold text-[#1E1A2B] font-heading">High Friction & Logistics</div>
              <ul className="space-y-2.5 text-xs text-[#1E1A2B]/70 font-body">
                <li className="flex items-start gap-2">
                  <span className="text-[#1E1A2B]/40 font-bold">•</span>
                  <span>Lengthy lead times for crew scheduling, studio rentals, location permits, and post-production</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1E1A2B]/40 font-bold">•</span>
                  <span>Physical product samples must be shipped across countries and styled on location</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1E1A2B]/40 font-bold">•</span>
                  <span>Restricted to real-world physics — challenging to capture impossible zero-G or microscopic fluid paths</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#1E1A2B]/40 font-bold">•</span>
                  <span>Complex and slow to reshoot if a single camera angle or actor expression requires changes</span>
                </li>
              </ul>
            </div>

            {/* Syeda Rusha Fatima AI Studio Card */}
            <div className="p-6 rounded-2xl bg-[#F2E4ED] border border-[#9B82BD]/60 space-y-4 shadow-sm">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono text-[#9B82BD] font-bold">SYEDA RUSHA FATIMA AI STUDIO</span>
                <span className="text-xs text-purple-900 bg-[#E8D2EB] border border-[#D4B1E3] px-2.5 py-0.5 rounded-full font-semibold">Speed & Creative Freedom</span>
              </div>
              <div className="text-xl font-bold text-[#1E1A2B] font-heading">Direct Digital Synthesis</div>
              <ul className="space-y-2.5 text-xs text-[#1E1A2B]/85 font-body">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>48 to 72 hours turnaround</strong> from creative brief to final 4K video master</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>No physical shipping needed:</strong> generated directly from your clear product photos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Imaginative camera physics:</strong> macro fluid dynamics, zero-G sweeps, and custom studio lighting</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span><strong>Multi-aspect ratio deliverables:</strong> native 9:16 vertical reels + 16:9 widescreen cinema cuts</span>
                </li>
              </ul>
            </div>
          </div>

        </div>
      </section>

      {/* 5. Production Workflow & Neural Tech Stack */}
      <section id="workflow" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12 space-y-2">
          <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
            Structured Process
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#1E1A2B] tracking-tight">
            The 4-Step Prompt-to-Premiere Workflow
          </h2>
          <p className="text-sm text-[#1E1A2B]/75 font-body">
            How Syeda Rusha Fatima manages visual consistency, realistic motion, and studio audio finishing.
          </p>
        </div>

        {/* Workflow Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {[
            {
              step: '01',
              title: 'Concept & Prompt Blueprint',
              desc: 'Analyzing your brand identity, product details, and target audience hooks to draft precision prompt blueprints and storyboards.'
            },
            {
              step: '02',
              title: 'Multi-Engine Generation',
              desc: 'Utilizing Runway Gen-3 Alpha, Kling AI, and Midjourney to simulate refined lighting, fabric drapes, fluid dynamics, and camera trajectories.'
            },
            {
              step: '03',
              title: 'Consistency & Character Locks',
              desc: 'Applying character consistency, brand color themes, and optical coherence across camera angles and scene transitions.'
            },
            {
              step: '04',
              title: 'Mastering & Sound Engineering',
              desc: 'High-definition 4K enhancement, frame rate stabilization, cinematic foley, voice-over synthesis, and platform-specific exports.'
            }
          ].map((item) => (
            <div key={item.step} className="p-6 rounded-3xl bg-white border border-[#E8D2EB] space-y-3 shadow-2xs">
              <div className="font-mono text-xl font-bold text-[#9B82BD]">{item.step}.</div>
              <h3 className="text-sm font-bold text-[#1E1A2B] font-heading">{item.title}</h3>
              <p className="text-xs text-[#1E1A2B]/70 leading-relaxed font-body">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* Generative Stack Cards */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#F2E4ED]/60 border border-[#E8D2EB] space-y-4">
          <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
            Generative Video Engines & Post-Production Suite
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {toolsData.map((tool) => (
              <div key={tool.name} className="p-4 rounded-2xl bg-white border border-[#E8D2EB] space-y-1 shadow-2xs">
                <div className="text-xs font-bold text-[#1E1A2B] font-heading">{tool.name}</div>
                <div className="text-[11px] font-mono text-[#9B82BD] font-medium">{tool.category}</div>
                <p className="text-[11px] text-[#1E1A2B]/65 leading-snug font-body">{tool.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. About Syeda Rusha Fatima Bio */}
      <section id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-white border border-[#E8D2EB] shadow-[0_12px_40px_rgba(212,177,227,0.25)] relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-4 flex justify-center">
              <div className="w-56 h-56 sm:w-64 sm:h-64">
                <PortraitCard variant="avatar" className="w-full h-full" />
              </div>
            </div>

            <div className="lg:col-span-8 space-y-4">
              <div className="space-y-1">
                <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
                  About The Creator
                </div>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E1A2B] tracking-tight">
                  Syeda Rusha Fatima
                </h2>
                <div className="text-sm font-medium text-[#9B82BD] font-heading">
                  {bioData.role} · Layyah, Punjab, Pakistan
                </div>
              </div>

              <p className="text-sm text-[#1E1A2B]/80 leading-relaxed font-body">
                {bioData.aboutDetailed}
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-2">
                <a
                  href={bioData.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-[#1E1A2B] bg-[#F2E4ED] hover:bg-[#E8D2EB] rounded-full transition-colors flex items-center gap-2 border border-[#E8D2EB]"
                >
                  <Instagram className="w-4 h-4 text-[#9B82BD]" />
                  <span>@rusha_creator</span>
                </a>

                <a
                  href={bioData.socials.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-[#1E1A2B] bg-[#F2E4ED] hover:bg-[#E8D2EB] rounded-full transition-colors flex items-center gap-2 border border-[#E8D2EB]"
                >
                  <Linkedin className="w-4 h-4 text-[#9B82BD]" />
                  <span>LinkedIn Profile</span>
                </a>

                <a
                  href={bioData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 rounded-full transition-colors flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>Direct WhatsApp Chat</span>
                </a>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. Frequently Asked Questions */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 space-y-2">
          <div className="text-xs font-mono text-[#9B82BD] uppercase tracking-wider font-semibold">
            Clear Answers
          </div>
          <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#1E1A2B] tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {faqData.map((faq, index) => {
            const isOpen = activeFaq === index;
            return (
              <div
                key={index}
                className="rounded-2xl border border-[#E8D2EB] bg-white overflow-hidden transition-all shadow-2xs"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : index)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                >
                  <span className="text-sm font-semibold text-[#1E1A2B] font-heading">{faq.question}</span>
                  <span className="text-[#9B82BD] text-lg font-mono">{isOpen ? '−' : '+'}</span>
                </button>
                {isOpen && (
                  <div className="px-5 pb-5 text-xs sm:text-sm text-[#1E1A2B]/75 leading-relaxed border-t border-[#E8D2EB] pt-3 font-body">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* 8. Bottom Banner CTA */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#F2E4ED] via-white to-[#F2E4ED] border border-[#E8D2EB] text-center space-y-6 shadow-md relative">
          <div className="max-w-2xl mx-auto space-y-3">
            <h2 className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1E1A2B] tracking-tight text-balance">
              Ready to create compelling video content for your brand?
            </h2>
            <p className="text-sm text-[#1E1A2B]/75 font-body">
              Transform your script, product, or campaign concept into high-quality 4K motion within 48 to 72 hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={() => onOpenContact()}
              className="px-8 py-3.5 text-xs sm:text-sm font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full shadow-md shadow-[#9B82BD]/30 transition-all flex items-center gap-2 cursor-pointer active:scale-95"
            >
              <Sparkles className="w-4 h-4" />
              <span>Launch Your AI Video Project</span>
            </button>

            <button
              onClick={onNavigateToPortfolio}
              className="px-6 py-3.5 text-xs sm:text-sm font-medium text-[#1E1A2B] hover:text-[#9B82BD] bg-white border border-[#E8D2EB] rounded-full transition-colors cursor-pointer shadow-2xs active:scale-95"
            >
              Browse 15 Portfolio Videos →
            </button>
          </div>
        </div>
      </section>

    </div>
  );
};
