
import React, { createContext, useState, useEffect, useContext, ReactNode } from "react";
import { loadGallery, saveGallery } from "../utils/storage";
import { ArtList } from "../utils/types";


const GalleryContext = createContext<ArtList | undefined>(undefined)

export const GalleryProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [galleryList, setGalleryList] = useState<ArtList>(() => loadGallery());

  useEffect(() => {
    saveGallery(galleryList);
  }, [galleryList]);

  return (
    <GalleryContext.Provider value={galleryList}>
      {children}
    </GalleryContext.Provider>
  );
};


export const useGallery = (): ArtList => {
  const context = useContext(GalleryContext);
  if (!context) {
    throw new Error("useGallery must be used within a GalleryProvider");
  }
  return context;
};


