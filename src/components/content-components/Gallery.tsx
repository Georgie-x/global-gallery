import { GallerySummary, GalleryImages } from "./index"
import { ArtList } from "../../utils/types"
import { useState, useEffect } from "react"
import { loadGallery } from "../../utils/storage"

function Gallery() {
	const [galleryList, setGalleryList] = useState<ArtList>([])

	useEffect(() => {
		const gallery = loadGallery();
		setGalleryList(gallery);
	  }, []);

	return (
		<>
			<GallerySummary galleryList={galleryList} />
			<GalleryImages galleryList={galleryList} />
		</>
	)
}

export default Gallery
