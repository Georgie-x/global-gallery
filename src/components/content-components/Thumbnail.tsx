import { useState } from "react"
import { aicImage, aicDetails } from "../../utils/index.ts"
import { Artwork } from "../../types/index.ts"
import { ArtDetail } from "./index"

function Thumbnail({ artwork }: { artwork: Artwork }) {
	const [showArtDetails, setShowArtDetails] = useState<boolean>(false)

	const handleImageClick = () => {
		setShowArtDetails(true)
	}

	const onClose = () => {
		setShowArtDetails(false)
	}

	return (
		<>
			<img className="smallImage"
				src={aicImage(artwork.image_id)}
				alt={`${aicDetails(artwork.id)}`}
				onClick={handleImageClick}
			/>
			{showArtDetails && <ArtDetail artwork={artwork} onClose={onClose} />}
		</>
	)
}

export default Thumbnail
