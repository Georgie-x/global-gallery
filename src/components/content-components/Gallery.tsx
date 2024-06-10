import { useGallery } from "../../contexts/GalleryContext.tsx"
import ImageGrid from "./ImageGrid.tsx"

function Gallery() {
	const { galleryList } = useGallery()
	console.log(galleryList)
	return (
		<>
			<section className='gallery-summary'>
				<h2>Gallery</h2>
				<div className='number-of-artworks'>
					{galleryList.length > 1
						? `Your gallery contains ${galleryList.length} artworks`
						: galleryList.length === 1
						? `Your gallery contains 1 artwork!`
						: "No art found"}
				</div>
				{galleryList.length === 0 ? (
					<a href='/search' className='add-art-link'>
						Add art to gallery &raquo;
					</a>
				) : (
					<a href='/exhibition' className='curate-exhibition'>
						Curate Exhibition &raquo;
					</a>
				)}
			</section>
			{galleryList && <ImageGrid artList={galleryList} />}
		</>
	)
}

export default Gallery
