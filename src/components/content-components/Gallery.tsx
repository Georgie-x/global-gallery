import { GallerySummary, GalleryImages } from "./index"
import { ArtList } from "../../utils/types"
import { useState, useEffect } from "react"
import { loadGallery, saveGallery } from "../../utils/storage"

function Gallery() {
	const [galleryList, setGalleryList] = useState<ArtList>(() => loadGallery())

	useEffect(() => {
		saveGallery(galleryList)
	}, [galleryList])

	return (
		<>
			<GallerySummary galleryList={galleryList} />
			<GalleryImages galleryList={galleryList} />
		</>
	)
}

export default Gallery
