import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch } from "../../services"
import { SearchInput, ResultsSummary, ResultImages } from "./index"
import { ArtList } from "../../types.tsx"

function Search() {
	const [keyword, setKeyword] = useState<string>("")
	const [artList, setArtList] = useState<ArtList[]>([])
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
			<ResultImages artList={artList} />
		</>
	)
}

export default Search
