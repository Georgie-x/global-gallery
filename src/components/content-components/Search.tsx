import { useState, useEffect } from "react"
import { SearchInput, ResultsSummary, ResultImages } from "./index"
import { ArtList, ResultsTotal, AicKeywordResponse } from "../../types/index.tsx"
import { apiAicKeywordSearch } from "../../functions/apiAicKeywordSearch.ts"
import { apiRijksKeywordSearch } from "../../functions/apiRijksKeywordSearch.ts"

function Search() {
	const [keyword, setKeyword] = useState<string>("")
	const [artList, setArtList] = useState<ArtList>([])
	const [resultsTotal, setResultsTotal] = useState<ResultsTotal>(0)

	useEffect(() => {
		const fetchData = async () => {
			if (keyword) {
				try {
					const response: AicKeywordResponse = await apiRijksKeywordSearch(keyword)
					if (response) {
						setArtList(response.artList)
						setResultsTotal(response.resultsTotal)
					} else {
						console.error("API call returned undefined")
					}
				} catch (error) {
					console.error("Error fetching data:", error)
				}
			}
		}

		fetchData()
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
