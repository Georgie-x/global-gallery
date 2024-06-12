import { useState } from "react"
import { Artwork } from "../../utils/types.ts"
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
			<img className='small-image' src={artwork.image_url} onClick={handleImageClick} />
			{showArtDetails && <ArtDetail artwork={artwork} onClose={onClose} />}
		</>
	)
}

export default Thumbnail
