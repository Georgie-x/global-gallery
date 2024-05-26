import { aicImage, aicAlt_text, aicDetails } from "../../services/index.ts"
import { Artwork } from "../../types/index.ts"

function Thumbnail({artwork}:{artwork: Artwork}) {
	return (
		<a href={aicDetails(artwork.id)}>
			<img  src={aicImage(artwork.image_id)} alt={`${aicAlt_text(artwork.id)}`} />
		</a>
	)
}

export default Thumbnail
