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
					: "No art found"}
			</div>
			{galleryList.length === 0 ? <a href='/search' className='Curate Exhibition'>
				Add art to gallery &raquo;
			</a> : <a href='/exhibition' className='Curate Exhibition'>
				Curate Exhibition &raquo;
			</a> }
			
		</section>
	)
}

export default GallerySummary
