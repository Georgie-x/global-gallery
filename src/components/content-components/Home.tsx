import { useState, ChangeEvent } from "react"
import { ArtList } from "../../utils/types"
import { demoGall1, demoGall2 } from "../../utils/db"
import ImageGrid from "./ImageGrid"

function Home() {
	const [collection, setCollection] = useState<ArtList>(demoGall1)

	const handleCollectionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value
		if (selectedValue === "aic") {
			setCollection(demoGall1)
		} else if (selectedValue === "rijks") {
			setCollection(demoGall2)
		}
	}

	return (
		<>
			<section className='welcome'>
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
					<select name='collections' id='collections' onChange={handleCollectionChange}>
						<option value='aic'>Best of the Art Museum of Chicago</option>
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
