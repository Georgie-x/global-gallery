import { Thumbnail } from "./index"
import { Artwork } from "../../utils/types"
import {useGallery} from '../../contexts/GalleryContext.ts'

function Gallery() {
	const { galleryList } = useGallery()

	return (
		<>
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
			<ul className='result-images'>
				{galleryList &&
					galleryList.map((artwork: Artwork) => (
						<li className='thumbnail' key={artwork.id}>
							<Thumbnail artwork={artwork} />
						</li>
					))}
			</ul>
			)
		</>
	)
}

export default Gallery
