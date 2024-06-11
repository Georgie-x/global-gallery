import { useGallery } from "../../contexts/GalleryContext"
import GallerySummary from "./GallerySummary"
import ImageGrid from "./ImageGrid"

function Gallery() {
	const { galleryList } = useGallery()

	return (
		<>
			<GallerySummary />
			{galleryList && <ImageGrid artList={galleryList} />}
		</>
	)
}

export default Gallery
