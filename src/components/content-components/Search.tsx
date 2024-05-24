import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch } from "../../utils"
import { SearchInput, ResultsSummary, ResultImages} from "./index"

type artList = {
	id: number
	title: string
	image_id: string
}

function Search() {
	const [keyword, setKeyword] = useState<string>("")
	const [artList, setArtList] = useState<artList[]>([])
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
