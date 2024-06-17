import { Artwork, VoidFunction } from "../../utils/types.ts"
import { saveGallery, artInGallery } from "../../utils/storage.ts"
import { useGallery } from "../../contexts/GalleryContext.tsx"
import FullDetail from "./FullDetail.tsx"

function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: VoidFunction }) {
	const { galleryList, setGalleryList } = useGallery()

	const handleAddClick = (artwork: Artwork) => {
		setGalleryList((prevList) => {
			const newList = [...prevList, artwork]
			saveGallery(newList)
			return newList
		})
		onClose()
	}

	const handleRemoveClick = (artwork: Artwork) => {
		setGalleryList((prevList) => {
			const newList = prevList.filter((art) => art.id !== artwork.id)
			saveGallery(newList)
			return newList
		})
		onClose()
	}
	return (
		<div className='art-detail-container'>
			<div className='art-display'>
				<img className='large-image' src={artwork.image_url} alt={artwork.alt_text} />
				<FullDetail artwork={artwork} />
				<div className='detail-actions'>
					<div className='add-art'>
						{artInGallery(artwork, galleryList) ? (
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
