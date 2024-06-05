import { Artwork, OnClose } from "../../utils/types.ts"
import { useState } from "react"
import { addToGallery, removeFromGallery, artInGallery, loadGallery } from "../../utils/storage.ts"

function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: OnClose }) {
	const [artworkInGallery, setArtworkInGallery] = useState<boolean>(
		artInGallery(artwork, loadGallery())
	)

	const handleAddClick = (artwork: Artwork) => {
		addToGallery(artwork)
		setArtworkInGallery(true)
		onClose()
	}
	const handleRemoveClick = (artwork: Artwork) => {
		removeFromGallery(artwork)
		setArtworkInGallery(false)
		onClose()
	}

	console.log(artwork)
	return (
		<div className='art-detail-container'>
			<div className='art-detail'>
				<div className="container">
				<img className='largeImage' src={artwork.image_url} alt={artwork.alt_text} />
				<div className='fullDetails'>
					<h3>Title</h3>
					<p>{artwork.title}</p>
					<h3>Artist</h3>
					<p>{artwork.artist}</p>
					<h3>Origin</h3>
					<p>{artwork.origin}</p>
					<h3>Date</h3>
					<p>{artwork.date}</p>
					<h3>Medium</h3>
					<p>{artwork.medium}</p>
					<h3>Description</h3>
					<p>{artwork.description}</p>
				</div></div>
				{artworkInGallery ? (
					<div className='removeArt'>
						<button onClick={() => handleRemoveClick(artwork)}>hello</button>
						<p>Remove this artwork from your gallery</p>
					</div>
				) : (
					<div className='addArt'>
						<button onClick={() => handleAddClick(artwork)}>&#10003;</button>
						<p>Add this artwork to your gallery</p>
					</div>
				)}

				<div className='closeWindow'>
					<p>Close Window</p>
					<button onClick={onClose}>&#10799;</button>
				</div>
			</div>
		</div>
	)
}

export default ArtDetail
