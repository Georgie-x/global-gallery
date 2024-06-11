import { useGallery } from "../../contexts/GalleryContext"

function GallerySummary() {
	const { galleryList } = useGallery()

	return (
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
	)
}

export default GallerySummary
