import {
	createContext,
	useState,
	useEffect,
	useContext,
	Dispatch,
	SetStateAction,
	FC,
	PropsWithChildren,
} from "react"
import { loadGallery, saveGallery } from "../utils/storage"
import { ArtList } from "../utils/types"

type GalleryContextValue = {
	galleryList: ArtList
	setGalleryList: Dispatch<SetStateAction<ArtList>>
}

const GalleryListContext = createContext<GalleryContextValue | undefined>(undefined)

export const GalleryProvider: FC<PropsWithChildren> = ({ children }) => {
	const [galleryList, setGalleryList] = useState<ArtList>(loadGallery() || [])

	useEffect(() => {
		saveGallery(galleryList)
	}, [galleryList])

	useEffect(() => {
		const handleStorageChange = (event: StorageEvent) => {
			if (event.key === "gallery") {
				console.log("Handling storage change")
				setGalleryList(loadGallery() || [])
			}
		}

		console.log("Adding storage event listener")
		window.addEventListener("storage", handleStorageChange)

		return () => {
			console.log("Removing storage event listener")
			window.removeEventListener("storage", handleStorageChange)
		}
	}, [])

	const contextValue = {
		galleryList,
		setGalleryList,
	}

	return <GalleryListContext.Provider value={contextValue}>{children}</GalleryListContext.Provider>
}

export const useGallery = (): GalleryContextValue => {
	const context = useContext(GalleryListContext)
	if (context === undefined) {
		throw new Error("useGallery must be used within a GalleryProvider")
	}
	return context
}
