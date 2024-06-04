import { GallerySummary, GalleryImages } from "./index"
import { ArtList } from "../../types"
import { useState, useEffect } from "react"

function Gallery() {
	const [galleryList, setGalleryList] = useState<ArtList>([])

	useEffect(() => {
		const galleryList = sessionStorage.getItem("galleryList")
		if (galleryList) {
			try {
				const parsedArtList: ArtList = JSON.parse(galleryList)
				setGalleryList(parsedArtList)
			} catch (error) {
				console.error("Error parsing stored artList:", error)
			}
		}
	}, [])

	return (
		<>
			<GallerySummary galleryList={galleryList} />
			<GalleryImages galleryList={galleryList} />
		</>
	)
}

export default Gallery
