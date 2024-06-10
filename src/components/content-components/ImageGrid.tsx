import { ArtList, Artwork } from "../../utils/types.ts"
import { Thumbnail } from "./index"

function ImageGrid({ artList }: { artList: ArtList }) {
	return (
		<ul className='image-grid'>
			{artList &&
				artList.map((artwork: Artwork) => (
					<li className='thumbnail' key={artwork.id}>
						<Thumbnail artwork={artwork} />
					</li>
				))}
		</ul>
	)
}

export default ImageGrid
