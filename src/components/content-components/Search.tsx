import { useState, useEffect } from "react"
import { SearchInput, ResultsSummary, ResultImages, SearchNav } from "./index"
import { ArtList, ResultsTotal } from "../../utils/types.ts"
import { apiAicKeywordSearch } from "../../netlify/functions/apiAicKeywordSearch.ts"
import { apiRijksKeywordSearch } from "../../netlify/functions/apiRijksKeywordSearch.ts"

type SearchState = {
	keyword: string
	artList: ArtList
	resultsTotal: ResultsTotal
	pageNo: number
}

const initialState: SearchState = {
	keyword: "",
	artList: [],
	resultsTotal: 0,
	pageNo: 1,
}

function Search() {
	const [searchState, setSearchState] = useState<SearchState>(() => {
		const storedState = sessionStorage.getItem("searchState")
		return storedState ? JSON.parse(storedState) : initialState
	})
	const [isLoading, setIsLoading] = useState<boolean>(false)

	useEffect(() => {
		sessionStorage.setItem("searchState", JSON.stringify(searchState))
	}, [searchState])

	useEffect(() => {
		const fetchData = async () => {
			if (searchState.keyword) {
				setIsLoading(true)
				try {
					const [aicResponse, rijksResponse] = await Promise.all([
						apiAicKeywordSearch(searchState.keyword, searchState.pageNo),
						apiRijksKeywordSearch(searchState.keyword, searchState.pageNo),
					])

					if (aicResponse && rijksResponse) {
						const combinedArtList = [...aicResponse.results, ...rijksResponse.results]
						const combinedResultsTotal = aicResponse.resultsTotal + rijksResponse.resultsTotal
						setSearchState((prev) => ({
							...prev,
							artList: combinedArtList,
							resultsTotal: combinedResultsTotal,
						}))
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
	}, [searchState.keyword, searchState.pageNo])

	const handleClearSearch = () => {
		setSearchState(initialState)
		sessionStorage.removeItem("searchState")
	}

	const setKeyword = (keyword: string) => {
		setSearchState((prev) => ({ ...prev, keyword, pageNo: 1, artList: [], resultsTotal: 0 }))
	}

	const setPageNo = (pageNo: number) => {
		setSearchState((prev) => ({ ...prev, pageNo }))
	}

	return (
		<>
			<SearchInput setKeyword={setKeyword} keyword={searchState.keyword} />
			{isLoading ? (
				<div className='loader'>Loading...</div>
			) : (
				<>
					{searchState.keyword && <ResultsSummary resultsTotal={searchState.resultsTotal} />}
					<ResultImages artList={searchState.artList} />
					{searchState.resultsTotal > 10 && (
						<SearchNav
							pageNo={searchState.pageNo}
							setPageNo={setPageNo}
							handleClearSearch={handleClearSearch}
						/>
					)}
				</>
			)}
		</>
	)
}

export default Search
