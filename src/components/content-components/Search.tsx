import { useState, useEffect } from "react"
import { SearchInput, ResultsSummary, SearchNav, ImageGrid } from "./index"
import { ArtList } from "../../utils/types.ts"
import { apiAicKeywordSearch } from "../../netlify/functions/apiAicKeywordSearch.ts"
import { apiRijksKeywordSearch } from "../../netlify/functions/apiRijksKeywordSearch.ts"
import {
	loadArtList,
	loadKeyword,
	loadPageNo,
	loadResultsTotal,
	saveArtList,
	saveResultsTotal,
} from "../../utils/storage.ts"

function Search() {
	const [keyword, setKeyword] = useState<string>(() => loadKeyword())
	const [artList, setArtList] = useState<ArtList>(() => loadArtList())
	const [pageNo, setPageNo] = useState<number>(() => loadPageNo())
	const [resultsTotal, setResultsTotal] = useState<number>(() => loadResultsTotal())
	const [isLoading, setIsLoading] = useState<boolean>(false)

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
					saveArtList(combinedArtList)
					setResultsTotal(combinedResultsTotal)
					saveResultsTotal(combinedResultsTotal)
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

	useEffect(() => {
		fetchData()
	}, [keyword, pageNo])

	return (
		<>
			<SearchInput
				setKeyword={setKeyword}
				keyword={keyword}
				pageNo={pageNo}
				setPageNo={setPageNo}
				resultsTotal={resultsTotal}
				setResultsTotal={setResultsTotal}
				artList={artList}
				setArtList={setArtList}
			/>
			{keyword && <ResultsSummary resultsTotal={resultsTotal} />}
			{isLoading ? (
				<div className='loader'></div>
			) : (
				<>
					<ImageGrid artList={artList} />
					{resultsTotal > 10 && <SearchNav pageNo={pageNo} setPageNo={setPageNo} />}
				</>
			)}
		</>
	)
}

export default Search
