
import { Artwork, OnClose } from "../../types/index.ts"



function ArtDetail({ artwork, onClose }: { artwork: Artwork; onClose: OnClose }) {

  

	return (
		<div className='art-detail-container'>
            <div className='art-detail'>
			<button onClick={onClose}>X</button>
            <p>{artwork.id}</p>
            <p>{artwork.title}</p>
            <p>{artwork._score}</p>
         </div>
		</div>
	)
}

export default ArtDetail
