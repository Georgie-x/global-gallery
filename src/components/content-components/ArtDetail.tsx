import { Artwork, OnClose } from "../../types/index.ts"
import { aicImage, aicDetails } from "../../utils/index.ts"

function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: OnClose }) {
	return (
		<div className='art-detail-container'>
			<div className='art-detail'>
					<img
						className='largeImage'
						src={aicImage(artwork.image_id)}
						alt={`${aicDetails(artwork.id)}`}
					/>
				<div className='fullDetails'>
                   
					<h3>Title </h3><p> {artwork.title}</p>

				</div>
				<div className='addArt'>
					<button>&#10003;</button>
					<p>Add this artwork to your gallery</p>
				</div>
				<div className='closeWindow'>
					<p>Close Window</p>
					<button onClick={onClose}>&#10799;</button>
				</div>
			</div>
		</div>
	)
}

export default ArtDetail
