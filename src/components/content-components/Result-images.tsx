import { ArtList, Artwork } from "../../utils/types.ts"
import { Thumbnail } from "./index"

function ResultImages({ artList }: { artList: ArtList}) {
	return (
		<ul className='result-images'>
			{artList &&
				artList.map((artwork: Artwork) => (
					<li className='thumbnail' key={artwork.id}>
						<Thumbnail artwork={artwork} />
					</li>
				))}
		</ul>
	)
}

export default ResultImages
