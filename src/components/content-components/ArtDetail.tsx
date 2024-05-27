import { Artwork, OnClose } from "../../types/index.ts"

function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: OnClose }) {
	return (
		<div className='box'>
			<button onClick={onClose}></button>
		</div>
	)
}

export default ArtDetail
