import { useGallery } from "../../contexts/GalleryContext"

function ExhibitionSummary() {
	const { galleryList } = useGallery()
	return (
		<section className='exhibition-summary'>
			<h2>Exhibition</h2>

			{galleryList.length === 0 ? (
				<>
					<p>Add images to your gallery to curate an exhibition</p>
					<a href='/search' className='curate-exhibition'>
						Search artworks &raquo;
					</a>
				</>
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
