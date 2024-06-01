import { Artwork, OnClose } from "../../types/index.ts"


function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: OnClose }) {
	console.log(artwork)
	return (
		<div className='art-detail-container'>
			<div className='art-detail'>
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
