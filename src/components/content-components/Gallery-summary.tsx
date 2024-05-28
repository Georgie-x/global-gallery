import { ArtList} from "../../types"

function GallerySummary({ galleryList }: { galleryList:ArtList }) {
	return (
		<section className='gallerySummary'>
			<h2>Gallery</h2>
			<div className='numberOfArtworks'>
				{galleryList.length > 0 ? `Your gallery contains ${galleryList.length} results` : "No art found."}
			</div>
			<a href='#' className='nextResultsLink'>
				Next results &raquo;
			</a>
		</section>
	)
}

export default GallerySummary
