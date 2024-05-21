import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch } from "../../utils"

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
			<h2>search</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='keywordSearch'>Keyword:</label>
				<input type='text' id='keywordSearch' name='keywordSearch'></input>
				<button type='submit'>Search</button>
			</form>

			<div>{artList.length > 0 ? `yes, art ${artList.length}` : "No art found."}</div>

			<div id='searchAnswer'>
				<ul>
					{artList.map((artwork) => (
						<li className='answers' key={artwork.id}><a href={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}>link</a>
							
						</li>
					))}
				</ul>
			</div>
		</>
	)
}

export default Search
