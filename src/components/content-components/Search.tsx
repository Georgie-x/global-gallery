import { useState, useEffect } from "react"
import { SearchInput, ResultsSummary, ResultImages, SearchNav } from "./index"
import { ArtList, ResultsTotal } from "../../utils/types.ts"
import { apiAicKeywordSearch } from "../../netlify/functions/apiAicKeywordSearch.ts"
import { apiRijksKeywordSearch } from "../../netlify/functions/apiRijksKeywordSearch.ts"

function Search() {
	const [keyword, setKeyword] = useState<string>(() => localStorage.getItem("keyword") || "")
	const [artList, setArtList] = useState<ArtList>(() =>
		JSON.parse(localStorage.getItem("artList") || "[]")
	)
	const [resultsTotal, setResultsTotal] = useState<ResultsTotal>(() =>
		parseInt(localStorage.getItem("resultsTotal") || "0")
	)
	const [pageNo, setPageNo] = useState<number>(() =>
		parseInt(localStorage.getItem("pageNo") || "1")
	)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		const fetchData = async () => {
			if (keyword) {
				setIsLoading(true)
				try {
					const [aicResponse, rijksResponse] = await Promise.all([
						apiAicKeywordSearch(keyword, pageNo),
						apiRijksKeywordSearch(keyword, pageNo),
					])

					if (aicResponse && rijksResponse) {
						const combinedArtList = [...aicResponse.results, ...rijksResponse.results]
						const combinedResultsTotal = aicResponse.resultsTotal + rijksResponse.resultsTotal
						setArtList(combinedArtList)
						setResultsTotal(combinedResultsTotal)
						sessionStorage.setItem("artList", JSON.stringify(combinedArtList))
						sessionStorage.setItem("resultsTotal", combinedResultsTotal.toString())
					} else {
						console.error("API calls cannot be combined")
					}
				} catch (error) {
					console.error("Error fetching data:", error)
				} finally {
					setIsLoading(false)
				}
			}
		}

		fetchData()
	}, [keyword, pageNo])

	return (
		<>
		<SearchInput setKeyword={setKeyword} keyword={keyword} />
		{isLoading ? (
			<div className="loader">Loading...</div>
		) : (
			<>
				<ResultsSummary resultsTotal={resultsTotal} />
				<ResultImages artList={artList} />
				{resultsTotal < 10 && <SearchNav pageNo={pageNo} setPageNo={setPageNo} />}
			</>
		)}
		
	</>
	)
}

export default Search
