/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { PortfolioPage } from './pages/PortfolioPage';
import { VideoModal } from './components/VideoModal';
import { ContactModal } from './components/ContactModal';
import { PortraitProvider } from './context/PortraitContext';
import { portfolioVideos } from './data/portfolioData';
import { VideoItem } from './types';

export default function App() {
  const [activePage, setActivePage] = useState<'home' | 'portfolio'>('home');
  const [modalVideo, setModalVideo] = useState<VideoItem | null>(null);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [contactPrefill, setContactPrefill] = useState('');

  // Handle URL hash changes or browser history if desired
  useEffect(() => {
    const handleHash = () => {
      const hash = window.location.hash.toLowerCase();
      if (hash.includes('portfolio')) {
        setActivePage('portfolio');
      } else if (hash.includes('home')) {
        setActivePage('home');
      }
    };
    handleHash();
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, []);

  const handleOpenVideo = (video: VideoItem) => {
    setModalVideo(video);
    setIsVideoModalOpen(true);
  };

  const handleOpenContact = (prefillStyle?: string) => {
    setContactPrefill(prefillStyle || '');
    setIsContactModalOpen(true);
  };

  const handleScrollToSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigate = (page: 'home' | 'portfolio', sectionId?: string) => {
    setActivePage(page);
    window.location.hash = page;
    if (page === 'home' && sectionId) {
      setTimeout(() => {
        handleScrollToSection(sectionId);
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <PortraitProvider>
      <div className="min-h-screen flex flex-col bg-[#F7EDEC] text-[#1E1A2B] selection:bg-[#D4B1E3] selection:text-[#1E1A2B]">
        {/* Top 3-Zone Navigation */}
        <Navbar
          activePage={activePage}
          setActivePage={(page) => handleNavigate(page)}
          onOpenContact={() => handleOpenContact()}
          onScrollToSection={handleScrollToSection}
        />

        {/* Main 2-Page Viewport Content */}
        <main className="flex-1">
          {activePage === 'home' ? (
            <HomePage
              onNavigateToPortfolio={() => handleNavigate('portfolio')}
              onOpenVideoModal={handleOpenVideo}
              onOpenContact={(style) => handleOpenContact(style)}
            />
          ) : (
            <PortfolioPage
              onOpenVideoModal={handleOpenVideo}
              onOpenContact={(style) => handleOpenContact(style)}
            />
          )}
        </main>

        {/* Site Footer */}
        <Footer
          onOpenContact={() => handleOpenContact()}
          onNavigate={handleNavigate}
        />

        {/* Cinema Lightbox / Video Modal */}
        <VideoModal
          video={modalVideo}
          allVideos={portfolioVideos}
          isOpen={isVideoModalOpen}
          onClose={() => setIsVideoModalOpen(false)}
          onSelectVideo={(video) => setModalVideo(video)}
          onInquireStyle={(title) => handleOpenContact(title)}
        />

        {/* Commission & Contact Modal */}
        <ContactModal
          isOpen={isContactModalOpen}
          onClose={() => setIsContactModalOpen(false)}
          prefillNote={contactPrefill}
        />
      </div>
    </PortraitProvider>
  );
}
