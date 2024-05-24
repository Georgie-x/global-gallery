import { aicImage, aicDetails } from "../../utils"

type ResultImagesProps = {
	artList: artwork[]
}

type artwork = {
	id: number
	title: string
	image_id: string
}

function ResultImages({ artList }: ResultImagesProps) {
	return (
		<ul className='resultImages'>
			{artList.map((artwork) => (
				<li className='thumbnails' key={artwork.id}>
					<a href={aicDetails(artwork.id)}>
						<img src={aicImage(artwork.image_id)} alt='' />
					</a>
				</li>
			))}
		</ul>
	)
}

export default ResultImages
