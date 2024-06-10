import {
	createContext,
	useState,
	useEffect,
	useContext,
	Dispatch,
	SetStateAction,
	FC,
	PropsWithChildren,
  } from "react";
  import { loadGallery, saveGallery } from "../utils/storage";
  import { ArtList } from "../utils/types";
  
  type GalleryContextValue = {
	galleryList: ArtList;
	setGalleryList: Dispatch<SetStateAction<ArtList>>;
  };
  
  const GalleryListContext = createContext<GalleryContextValue | undefined>(undefined);
  
  export const GalleryProvider: FC<PropsWithChildren> = ({ children }) => {
	const [galleryList, setGalleryList] = useState(loadGallery);
  
	useEffect(() => {
	  saveGallery(galleryList);
	}, [galleryList]);
  
	const contextValue = {
	  galleryList,
	  setGalleryList,
	};
  
	return (
	  <GalleryListContext.Provider value={contextValue}>
		{children}
	  </GalleryListContext.Provider>
	);
  };
  
  export const useGallery = (): GalleryContextValue => {
	const context = useContext(GalleryListContext);
	if (context === undefined) {
	  throw new Error("useGallery must be used within a GalleryProvider");
	}
	return context;
  };