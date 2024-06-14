import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { ArtList, Artwork } from "../../utils/types"

function ExhibitionImages({ exhibitionList }: { exhibitionList: ArtList }) {
	return (
		<>
			<Swiper navigation={true} modules={[Navigation]} className='swiper' loop={true}> 
				{exhibitionList &&
					exhibitionList.map((artwork: Artwork) => (
						<SwiperSlide key={artwork.id}>
							<figure>
								<img className='large-image' src={artwork.image_url} alt='' />
								<figcaption className="plaque">Details</figcaption>
							</figure>
						</SwiperSlide>
					))}
			</Swiper>
		</>
	)
}

export default ExhibitionImages
