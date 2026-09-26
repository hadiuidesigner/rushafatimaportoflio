import React from 'react';
import { Instagram, Linkedin, Mail, MessageCircle, ArrowUp, Sparkles, MapPin } from 'lucide-react';
import { bioData } from '../data/siteData';

interface FooterProps {
  onOpenContact: () => void;
  onNavigate: (page: 'home' | 'portfolio', sectionId?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenContact, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E8D2EB] bg-[#F2E4ED]/80 text-[#1E1A2B]/80 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 mb-12">
          
          {/* Brand & Bio Column */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#9B82BD] shadow-[0_0_8px_#D4B1E3]" />
              <span className="font-heading text-lg font-bold text-[#1E1A2B] tracking-tight">
                {bioData.name}
              </span>
            </div>
            
            <p className="text-[#1E1A2B]/75 text-xs leading-relaxed max-w-sm font-body">
              {bioData.role} & Generative Visual Director. Creating commercial storytelling, hyper-realistic brand imagery, and viral social video assets with cutting-edge neural architectures.
            </p>

            <div className="flex items-center gap-1.5 text-xs text-[#1E1A2B]/70 font-mono">
              <MapPin className="w-3.5 h-3.5 text-[#9B82BD]" />
              <span>{bioData.location}</span>
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-2.5 pt-2">
              <a
                href={bioData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram Profile @rusha_creator"
                className="p-2 text-[#1E1A2B] hover:text-[#9B82BD] bg-white/80 hover:bg-white rounded-full transition-all border border-[#E8D2EB] shadow-2xs"
                title="Instagram @rusha_creator"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={bioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile Rusha Fatima"
                className="p-2 text-[#1E1A2B] hover:text-[#9B82BD] bg-white/80 hover:bg-white rounded-full transition-all border border-[#E8D2EB] shadow-2xs"
                title="LinkedIn: Rusha Fatima"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={bioData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp Contact"
                className="p-2 text-[#1E1A2B] hover:text-emerald-600 bg-white/80 hover:bg-white rounded-full transition-all border border-[#E8D2EB] shadow-2xs"
                title="WhatsApp Direct Chat"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${bioData.socials.email}`}
                aria-label="Email Rusha Fatima"
                className="p-2 text-[#1E1A2B] hover:text-[#9B82BD] bg-white/80 hover:bg-white rounded-full transition-all border border-[#E8D2EB] shadow-2xs"
                title={`Email: ${bioData.socials.email}`}
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Page Links */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E1A2B] font-heading">
              Navigation
            </h3>
            <ul className="space-y-2 text-[#1E1A2B]/75">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-[#9B82BD] transition-colors cursor-pointer"
                >
                  Home Overview
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('portfolio')}
                  className="hover:text-[#9B82BD] transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <span>15-Video Portfolio</span>
                  <span className="text-[10px] bg-[#E8D2EB] text-[#1E1A2B] px-1.5 py-0.2 rounded-full font-mono font-bold">15</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'services')}
                  className="hover:text-[#9B82BD] transition-colors cursor-pointer"
                >
                  AI Creative Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('home', 'about')}
                  className="hover:text-[#9B82BD] transition-colors cursor-pointer"
                >
                  About Syeda Rusha Fatima
                </button>
              </li>
            </ul>
          </div>

          {/* Direct Commission Card */}
          <div className="md:col-span-4 space-y-3 bg-white/70 p-5 rounded-2xl border border-[#E8D2EB] shadow-2xs">
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#1E1A2B] font-heading">
              Commission an AI Video
            </h3>
            <p className="text-xs text-[#1E1A2B]/70 leading-relaxed font-body">
              Available for brand commercials, social viral reels, product ads, and visual identity. Rapid delivery in 48h to 4 days.
            </p>
            <div className="text-[11px] font-mono text-[#9B82BD]">
              {bioData.socials.email}
            </div>
            <button
              onClick={onOpenContact}
              className="w-full py-2.5 px-4 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full transition-all shadow-xs flex items-center justify-center gap-2 cursor-pointer active:scale-98"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>Request Treatment & Quote</span>
            </button>
          </div>

        </div>

        {/* Bottom Hairline */}
        <div className="pt-8 border-t border-[#E8D2EB] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-[#1E1A2B]/60 text-xs">
            <span>© 2026 Syeda Rusha Fatima. All rights reserved.</span>
            <span>·</span>
            <span>Layyah, Punjab, Pakistan</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-[#1E1A2B]/70 hover:text-[#9B82BD] transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
