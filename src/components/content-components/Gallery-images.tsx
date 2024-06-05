import { ArtList, Artwork } from "../../utils/types.ts"
import { Thumbnail } from "./index"

function GalleryImages({ galleryList }: { galleryList: ArtList }) {
	return (
		<ul className='resultImages'>
			{galleryList &&
				galleryList.map((artwork: Artwork) => (
					<li className='thumbnail' key={artwork.id}>
						<Thumbnail artwork={artwork} />
					</li>
				))}
		</ul>
	)
}

export default GalleryImages
