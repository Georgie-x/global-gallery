import { Artwork, VoidFunction } from "../../utils/types.ts"
import { addToGallery, removeFromGallery, artInGallery } from "../../utils/storage.ts"
import { useGallery } from "../../contexts/GalleryContext.tsx"

function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: VoidFunction }) {
	const { galleryList } = useGallery()
	

	const handleAddClick = (artwork: Artwork) => {
		addToGallery(artwork)
		onClose()
	}
	const handleRemoveClick = (artwork: Artwork) => {
		removeFromGallery(artwork)
		onClose()
	}

	return (
		<div className='art-detail-container'>
			<div className='art-display'>
				<img className='large-image' src={artwork.image_url} alt={artwork.alt_text} />
				<div className='full-details'>
					{artwork.title && (
						<>
							<h3>Title</h3>
							<p>{artwork.title}</p>
						</>
					)}
					{artwork.artist && (
						<>
							<h3>Artist</h3>
							<p>{artwork.artist}</p>
						</>
					)}
					{artwork.origin && (
						<>
							<h3>Origin</h3>
							<p>{artwork.origin}</p>
						</>
					)}
					{artwork.date && (
						<>
							<h3>Date</h3>
							<p>{artwork.date}</p>
						</>
					)}
					{artwork.medium && (
						<>
							<h3>Medium</h3>
							<p>{artwork.medium}</p>
						</>
					)}
					{artwork.description && (
						<>
							<h3>Description</h3>
							<p>{artwork.description}</p>
						</>
					)}
					{artwork.more_info && (
						<>
							<h3>More Info</h3>
							<a href={artwork.more_info}>{artwork.more_info}</a>
						</>
					)}
				</div>
				<div className='detail-actions'>
					<div className='add-art'>
						{artInGallery(artwork, galleryList)? (
							<>
								<button onClick={() => handleRemoveClick(artwork)}>-</button>
								<p>Remove from your gallery</p>
							</>
						) : (
							<>
								<button onClick={() => handleAddClick(artwork)}>&#10003;</button>
								<p>Add to your gallery</p>
							</>
						)}
					</div>

					<div className='close-window'>
						<p>Close Window</p>
						<button onClick={onClose}>&#10799;</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default ArtDetail
