import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch, aicImage } from "../../utils"

interface artList {
	id: string
	title: string
	image_id: string
}

function Search() {
	const [keyword, setKeyword] = useState<string>("")
	const [artList, setArtList] = useState<any[]>([])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log("Form submitted!")
		console.log(e.currentTarget.keywordSearch.value)
		setKeyword(e.currentTarget.keywordSearch.value)
	}

	useEffect(() => {
		axios
			.get(aicSearch(keyword))
			.then(({ data }) => {
				console.log(data)
				const artList = data.data
				setArtList(artList)
			})
			.catch((error) => {
				console.log("Error fetching data:", error)
			})
	}, [keyword])

	return (
		<>
			<section className='searchInput'>
				<h2>Search</h2>
				<form onSubmit={handleSubmit}>
					<label htmlFor='keywordSearch'>Keyword:</label>
					<input type='text' id='keywordSearch' name='keywordSearch'></input>
					<button type='submit'>Search</button>
				</form>
			</section>
			<section className='searchResults'>
				<h2>Results</h2>
				<div>{artList.length > 0 ? `yes, art ${artList.length}` : "No art found."}</div>

				<ul id='searchAnswer'>
					{artList.map((artwork) => (
						<li className='answers' key={artwork.id}>
							<img
								src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
							/>
						</li>
					))}
				</ul>
			</section>
		</>
	)
}

export default Search
