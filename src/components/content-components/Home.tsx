import { useState, ChangeEvent } from "react"
import { ArtList } from "../../utils/types"
import { bestOfAic, bestOfRijks } from "../../utils/db"
import ImageGrid from "./ImageGrid"

function Home() {
	const [collection, setCollection] = useState<ArtList>(bestOfAic)

	const handleCollectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value
		if (selectedValue === "aic") {
			setCollection(bestOfAic)
		} else if (selectedValue === "rijks") {
			setCollection(bestOfRijks)
		}
	}

	return (
		<>
			<section className='welcome' id="welcome">
				<h2>Welcome to Global Gallery!</h2>
				<p>
					Discover art from our collections around the World. Save artworks to your gallery and
					curate an exhibition with your favourites!
				</p>
			</section>
			<section className='browse'>
				<h2>Discover art</h2>
				<div className='presets'>
					<label htmlFor='collections'>Browse collections: </label>
					<select
						className='select'
						name='collections'
						id='collections'
						onChange={handleCollectionChange}
					>
						<option value='aic'>Best of the Art Inst. of Chicago</option>
						<option value='rijks'>Best of Rijksmuseum</option>
					</select>
				</div>
				<a href='/search' className='search-link'>
					Keyword search &raquo;
				</a>
			</section>
			<ImageGrid artList={collection} />
		</>
	)
}

export default Home
