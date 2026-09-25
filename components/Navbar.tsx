import React, { useState } from 'react';
import { Instagram, Linkedin, Menu, X, Sparkles, Film } from 'lucide-react';
import { bioData } from '../data/siteData';

interface NavbarProps {
  activePage: 'home' | 'portfolio';
  setActivePage: (page: 'home' | 'portfolio') => void;
  onOpenContact: () => void;
  onScrollToSection?: (sectionId: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activePage,
  setActivePage,
  onOpenContact,
  onScrollToSection
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleNavClick = (page: 'home' | 'portfolio', sectionId?: string) => {
    setActivePage(page);
    setMobileMenuOpen(false);
    if (page === 'home' && sectionId && onScrollToSection) {
      setTimeout(() => {
        onScrollToSection(sectionId);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="sticky top-0 z-40 w-full bg-[#F7EDEC]/90 backdrop-blur-md border-b border-[#E8D2EB]/80 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
        
        {/* Brand Identity Wordmark */}
        <button
          onClick={() => handleNavClick('home')}
          className="group flex items-center gap-2.5 text-left focus:outline-none cursor-pointer"
          aria-label="Syeda Rusha Fatima Portfolio"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#9B82BD] shadow-[0_0_10px_#D4B1E3] group-hover:scale-125 transition-transform duration-200"></span>
          <div className="flex flex-col">
            <span className="font-heading text-lg sm:text-xl font-bold tracking-tight text-[#1E1A2B] group-hover:text-[#9B82BD] transition-colors">
              Syeda Rusha Fatima
            </span>
            <span className="text-[10px] font-mono uppercase tracking-wider text-[#9B82BD] -mt-0.5">
              AI Video Creator & Specialist
            </span>
          </div>
        </button>

        {/* 2 Main Navigation Pages + Quick Anchors */}
        <nav className="hidden md:flex items-center gap-1.5 p-1 bg-[#F2E4ED]/80 border border-[#E8D2EB] rounded-full shadow-xs">
          <button
            onClick={() => handleNavClick('home')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all cursor-pointer ${
              activePage === 'home'
                ? 'bg-white text-[#1E1A2B] shadow-xs font-semibold'
                : 'text-[#1E1A2B]/70 hover:text-[#1E1A2B] hover:bg-white/40'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('portfolio')}
            className={`px-4 py-1.5 rounded-full text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
              activePage === 'portfolio'
                ? 'bg-white text-[#1E1A2B] shadow-xs font-semibold'
                : 'text-[#1E1A2B]/70 hover:text-[#1E1A2B] hover:bg-white/40'
            }`}
          >
            <Film className="w-3.5 h-3.5 text-[#9B82BD]" />
            <span>Portfolio</span>
            <span className="text-[10px] font-mono bg-[#E8D2EB] text-[#1E1A2B] px-1.5 py-0.2 rounded-full font-bold">
              15
            </span>
          </button>

          <span className="w-px h-4 bg-[#D4B1E3]/60 mx-1" />

          <button
            onClick={() => handleNavClick('home', 'services')}
            className="px-3 py-1.5 rounded-full text-xs text-[#1E1A2B]/70 hover:text-[#1E1A2B] hover:bg-white/40 transition-colors cursor-pointer"
          >
            Services
          </button>

          <button
            onClick={() => handleNavClick('home', 'about')}
            className="px-3 py-1.5 rounded-full text-xs text-[#1E1A2B]/70 hover:text-[#1E1A2B] hover:bg-white/40 transition-colors cursor-pointer"
          >
            About
          </button>
        </nav>

        {/* Direct Social Links & Action Button */}
        <div className="hidden md:flex items-center gap-3">
          <div className="flex items-center gap-1.5 pr-2">
            <a
              href={bioData.socials.instagram}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram @rusha_creator"
              className="p-2 text-[#1E1A2B]/70 hover:text-[#9B82BD] hover:bg-[#F2E4ED] rounded-full transition-all border border-transparent hover:border-[#E8D2EB]"
              title="Instagram @rusha_creator"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={bioData.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Rusha Fatima"
              className="p-2 text-[#1E1A2B]/70 hover:text-[#9B82BD] hover:bg-[#F2E4ED] rounded-full transition-all border border-transparent hover:border-[#E8D2EB]"
              title="LinkedIn: Rusha Fatima"
            >
              <Linkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={onOpenContact}
            className="px-4 py-2 text-xs font-semibold text-white bg-[#9B82BD] hover:bg-[#8A71AC] rounded-full shadow-sm hover:shadow-[0_4px_16px_rgba(155,130,189,0.35)] transition-all cursor-pointer flex items-center gap-1.5 active:scale-95"
          >
            <Sparkles className="w-3.5 h-3.5 text-white/90" />
            <span>Commission Video</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={onOpenContact}
            className="px-3 py-1.5 text-xs font-semibold text-white bg-[#9B82BD] rounded-full"
          >
            Commission
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-[#1E1A2B] hover:bg-[#F2E4ED] rounded-lg focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F7EDEC] border-b border-[#E8D2EB] px-4 py-4 space-y-2 shadow-lg">
          <button
            onClick={() => handleNavClick('home')}
            className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activePage === 'home' ? 'bg-[#F2E4ED] text-[#9B82BD] font-semibold' : 'text-[#1E1A2B]'
            }`}
          >
            Home
          </button>
          
          <button
            onClick={() => handleNavClick('portfolio')}
            className={`flex items-center justify-between w-full px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
              activePage === 'portfolio' ? 'bg-[#F2E4ED] text-[#9B82BD] font-semibold' : 'text-[#1E1A2B]'
            }`}
          >
            <span className="flex items-center gap-2">
              <Film className="w-4 h-4 text-[#9B82BD]" />
              <span>Portfolio Showcase</span>
            </span>
            <span className="text-xs font-mono bg-[#E8D2EB] text-[#1E1A2B] px-2 py-0.5 rounded-full font-bold">
              15 Videos
            </span>
          </button>

          <button
            onClick={() => handleNavClick('home', 'services')}
            className="w-full text-left px-4 py-2 rounded-xl text-sm text-[#1E1A2B]/80 hover:bg-[#F2E4ED]"
          >
            Creative Services
          </button>

          <button
            onClick={() => handleNavClick('home', 'about')}
            className="w-full text-left px-4 py-2 rounded-xl text-sm text-[#1E1A2B]/80 hover:bg-[#F2E4ED]"
          >
            About Syeda Rusha Fatima
          </button>

          <div className="pt-3 border-t border-[#E8D2EB] flex items-center justify-between px-2">
            <div className="flex items-center gap-3">
              <a
                href={bioData.socials.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#1E1A2B]/80 hover:text-[#9B82BD] bg-[#F2E4ED] rounded-full"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={bioData.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-[#1E1A2B]/80 hover:text-[#9B82BD] bg-[#F2E4ED] rounded-full"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="px-4 py-2 text-xs font-semibold text-white bg-[#9B82BD] rounded-full shadow-sm"
            >
              Start Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
