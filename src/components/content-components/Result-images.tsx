import { ArtList, Artwork } from "../../utils/types.ts"
import { Thumbnail } from "./index"

function ResultImages({ artList, isLoading }: { artList: ArtList; isLoading: boolean }) {
	return (
		<ul className='resultImages'>
			{artList &&
				artList.map((artwork: Artwork) => (
					<li className='thumbnail' key={artwork.id}>
						<Thumbnail artwork={artwork} isLoading={isLoading} />
					</li>
				))}
		</ul>
	)
}

export default ResultImages
