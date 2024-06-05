import { ArtList } from "../../utils/types"

function GallerySummary({ galleryList }: { galleryList: ArtList }) {
	return (
		<section className='gallerySummary'>
			<h2>Gallery</h2>
			<div className='numberOfArtworks'>
				{galleryList.length > 1
					? `Your gallery contains ${galleryList.length} artworks`
					: galleryList.length === 1
					? `Your gallery contains 1 artwork!`
					: "No art found."}
			</div>
			<a href='#' className='Curate Exhibition'>
				Curate Exhibition &raquo;
			</a>
		</section>
	)
}

export default GallerySummary
