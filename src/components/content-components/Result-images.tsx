import { ArtList, Artwork } from "../../types/index.tsx"
import { Thumbnail } from "./index"

function ResultImages({ artList }: { artList: ArtList }) {
	return (
		<ul className='resultImages'>
			{artList.map((artwork: Artwork) => (
				<li className='thumbnail' key={artwork.id}>
					<Thumbnail artwork={artwork} />
				</li>
			))}
		</ul>
	)
}

export default ResultImages
