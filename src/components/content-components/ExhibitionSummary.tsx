import { useGallery } from "../../contexts/GalleryContext"

function ExhibitionSummary() {
	const { galleryList } = useGallery()
	return (
		<section className='exhibition-summary'>
			<h2>Exhibition</h2>

			{galleryList.length === 0 ? (
				<div className="no art summary">
					<p>Add images to your gallery to curate an exhibition</p>
					<a href='/search' className='curate-exhibition'>
						Search artworks &raquo;
					</a>
				</div>
			) : (
				<>
					<p>Exhibition title</p>
					<a href='/exhibition' className='curate-exhibition-options'>
						Options &raquo;
					</a>
				</>
			)}
		</section>
	)
}

export default ExhibitionSummary