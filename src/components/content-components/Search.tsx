import { useState, useEffect } from "react"
import { SearchInput, ResultsSummary, ResultImages } from "./index"
import { ArtList, ResultsTotal } from "../../utils/types.ts"
import { apiAicKeywordSearch } from "../../functions/apiAicKeywordSearch.ts"
import { apiRijksKeywordSearch } from "../../functions/apiRijksKeywordSearch.ts"

function Search() {
	const [keyword, setKeyword] = useState<string>("")
	const [artList, setArtList] = useState<ArtList>([])
	const [resultsTotal, setResultsTotal] = useState<ResultsTotal>(0)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true)
			if (keyword) {
				try {
					const [aicResponse, rijksResponse] = await Promise.all([
						apiAicKeywordSearch(keyword),
						apiRijksKeywordSearch(keyword),
					])

					if (aicResponse && rijksResponse) {
						const combinedArtList = [...aicResponse.results, ...rijksResponse.results]

						const combinedResultsTotal = aicResponse.resultsTotal + rijksResponse.resultsTotal

						setArtList(combinedArtList)
						setResultsTotal(combinedResultsTotal)
						setIsLoading(false)
					} else {
						console.error("API calls cannot be combined")
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
			<ResultImages artList={artList} isLoading={isLoading} />
		</>
	)
}

export default Search
