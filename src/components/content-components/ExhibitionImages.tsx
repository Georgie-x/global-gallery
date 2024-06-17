import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css"
import "swiper/css/navigation"
import { Navigation } from "swiper/modules"
import { ArtList, Artwork } from "../../utils/types"
import ErrorHandle from "./ErrorHandle"
import { useState } from "react"
import FullDetail from "./FullDetail"

function ExhibitionImages({ exhibitionList }: { exhibitionList: ArtList }) {
    const [showDetails, setShowDetails] = useState<boolean>(false)

    const toggleDetails = () => {
        setShowDetails(!showDetails)
    }

    return (
        <>
            {exhibitionList.length > 1 ? (
                <Swiper navigation={true} modules={[Navigation]} className='swiper' loop={true}>
                    {exhibitionList &&
                        exhibitionList.map((artwork: Artwork) => (
                            <SwiperSlide key={artwork.id}>
                                <figure>
                                    <img className='large-image' src={artwork.image_url} alt={artwork.alt_text} />
                                    {showDetails && (
                                        <div className="details-overlay">
                                            <FullDetail artwork={artwork} />
                                        </div>
                                    )}
                                    <figcaption className='plaque' onClick={toggleDetails}>
                                        {showDetails ? "Image" : "Details"}
                                    </figcaption>
                                </figure>
                            </SwiperSlide>
                        ))}
                </Swiper>
            ) : (
                <ErrorHandle />
            )}
        </>
    )
}

export default ExhibitionImages