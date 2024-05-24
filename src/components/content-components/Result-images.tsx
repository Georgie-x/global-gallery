import { aicImage, aicDetails } from "../../services"
import { ArtList, Artwork } from "../../types.tsx"

type ResultImagesProps = {
    resultImages: unknown;
  };
  
  function ResultImages({ artList }: ResultImagesProps){
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