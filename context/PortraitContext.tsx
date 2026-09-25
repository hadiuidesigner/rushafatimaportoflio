import React, { createContext, useContext, useState, useEffect } from 'react';
import { bioData } from '../data/siteData';

interface PortraitContextType {
  portraitUrl: string;
  isCustom: boolean;
  uploadCustomPortrait: (file: File) => Promise<boolean>;
  resetToDefault: () => void;
}

const STORAGE_KEY = 'rusha_fatima_exact_portrait_data';

const PortraitContext = createContext<PortraitContextType>({
  portraitUrl: bioData.portraitImage,
  isCustom: false,
  uploadCustomPortrait: async () => false,
  resetToDefault: () => {},
});

export const PortraitProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [portraitUrl, setPortraitUrl] = useState<string>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && saved.startsWith('data:image')) {
        return saved;
      }
    } catch (e) {
      console.warn('Could not read custom portrait from localStorage:', e);
    }
    return bioData.portraitImage;
  });

  const [isCustom, setIsCustom] = useState<boolean>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      return Boolean(saved && saved.startsWith('data:image'));
    } catch {
      return false;
    }
  });

  const uploadCustomPortrait = (file: File): Promise<boolean> => {
    return new Promise((resolve) => {
      if (!file || !file.type.startsWith('image/')) {
        resolve(false);
        return;
      }

      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        if (result) {
          try {
            localStorage.setItem(STORAGE_KEY, result);
            setPortraitUrl(result);
            setIsCustom(true);
            resolve(true);
          } catch (err) {
            console.error('Failed to store portrait image in localStorage:', err);
            // If image is too large for localStorage, still update state for this session
            setPortraitUrl(result);
            setIsCustom(true);
            resolve(true);
          }
        } else {
          resolve(false);
        }
      };
      reader.onerror = () => resolve(false);
      reader.readAsDataURL(file);
    });
  };

  const resetToDefault = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch (e) {
      console.warn(e);
    }
    setPortraitUrl(bioData.portraitImage);
    setIsCustom(false);
  };

  return (
    <PortraitContext.Provider
      value={{
        portraitUrl,
        isCustom,
        uploadCustomPortrait,
        resetToDefault,
      }}
    >
      {children}
    </PortraitContext.Provider>
  );
};

export const usePortrait = () => useContext(PortraitContext);
