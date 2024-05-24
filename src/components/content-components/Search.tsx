import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch, aicImage, aicDetails } from "../../utils"
import {SearchInput} from "./index"
import {ResultsSummary} from "./index"



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
			<SearchInput setKeyword={setKeyword} />
			<ResultsSummary resultsTotal={resultsTotal} />
			<ul className='resultImages'>
				{artList.map((artwork) => (
					<li className='thumbnails' key={artwork.id}>
						<a href={aicDetails(artwork.id)}>
							<img src={aicImage(artwork.image_id)} alt='' />
						</a>
					</li>
				))}
			</ul>
		</>
	)
}

export default Search
