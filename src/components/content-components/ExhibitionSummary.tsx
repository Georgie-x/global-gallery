import { ChangeEvent } from "react"
import { ArtList } from "../../utils/types"

function ExhibitionSummary({
	handleExhibitionChange,
	exhibitionList,
}: {
	handleExhibitionChange: (e: ChangeEvent<HTMLSelectElement>) => void
	exhibitionList: ArtList
}) {
	return (
		<section className='exhibition-summary'>
			<h2>Exhibition</h2>
			{exhibitionList.length > 1 ? (
				<div className='exhibition'>
					<select
						className='select'
						name='exhibition'
						id='exhibition'
						onChange={handleExhibitionChange}
					>
						<option value='gallery'>Your Gallery</option>
						<option value='aic'>Best of the Art Museum of Chicago</option>
						<option value='rijks'>Best of Rijksmuseum</option>
					</select>
				</div>
			) : (
                <a href='/search' className='search-link'>
                Add more art to view exhibition &raquo;
            </a>
			)}
		</section>
	)
}

export default ExhibitionSummary
