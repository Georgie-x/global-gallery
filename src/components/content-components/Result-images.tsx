import { ArtList, Artwork} from "../../types/index.tsx"
import { Thumbnail } from "./index"

function ResultImages({ artList }: { artList: ArtList }) {
	return (
		<ul className='resultImages'>
			<li className="thumbnail">
				{artList.map((artwork:Artwork) => (
					<Thumbnail artwork={artwork} />
				))}
			</li>
		</ul>
	)
}

export default ResultImages
