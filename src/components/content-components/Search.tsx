import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch, aicImage, aicDetails } from "../../utils"
import SearchInput from "./Search-input"

interface artList {
	id: string
	title: string
	image_id: string
}

function Search() {
	const [keyword, setKeyword] = useState<string>("")
	const [artList, setArtList] = useState<any[]>([])
	const [resultsTotal, setResultsTotal] = useState<number>(0)



	useEffect(() => {
		axios
			.get(aicSearch(keyword))
			.then(({ data }) => {
				console.log(data)
				const artList = data.data
				const numOfResults = data.pagination.total
				setArtList(artList)
				setResultsTotal(numOfResults)
			})
			.catch((error) => {
				console.log("Error fetching data:", error)
			})
	}, [keyword])

	return (
		<>
			<SearchInput setKeyword={setKeyword}/>
			<section className='resultsSummary'>
				<h2>Results</h2>
				<div className='numberOfResults'>
					{resultsTotal > 0 ? `Your search produced ${resultsTotal} results` : "No art found."}
				</div>
				<a href="#" className="nextResultsLink">Next results &raquo;</a>
			</section>
			<ul className='resultImages'>
				{artList.map((artwork) => (
					<li className='thumbnails' key={artwork.id}>
						
						<a href={aicDetails(artwork.id)}><img src={aicImage(artwork.image_id)} alt='' /></a>
					</li>
				))}
			</ul>
		</>
	)
}

export default Search
