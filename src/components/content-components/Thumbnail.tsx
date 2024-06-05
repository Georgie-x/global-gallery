import { useState } from "react"
import { Artwork } from "../../utils/types.ts"
import { ArtDetail } from "./index"

function Thumbnail({ artwork, isLoading }: { artwork: Artwork; isLoading: boolean }) {
	const [showArtDetails, setShowArtDetails] = useState<boolean>(false)

	const handleImageClick = () => {
		setShowArtDetails(true)
	}

	const onClose = () => {
		setShowArtDetails(false)
	}

	return (
		<>
			{isLoading ? (
				<div className='loader'></div>
			) : (
				<img
					className='smallImage'
					src={artwork.image_url}
					alt={artwork.alt_text}
					onClick={handleImageClick}
				/>
			)}
			{showArtDetails && <ArtDetail artwork={artwork} onClose={onClose} />}
		</>
	)
}

export default Thumbnail
