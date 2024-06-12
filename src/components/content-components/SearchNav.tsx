import { useEffect } from "react"
import { SetPageNoFunction } from "../../utils/types"

function SearchNav({ pageNo, setPageNo }: { pageNo: number; setPageNo: SetPageNoFunction }) {
	const handleNextPage = () => {
		const newPageNo = pageNo + 1
		setPageNo(newPageNo)
		sessionStorage.setItem("pageNo", newPageNo.toString())
	}

	const handlePrevPage = () => {
		if (pageNo > 1) {
			const newPageNo = pageNo - 1
			setPageNo(newPageNo)
			sessionStorage.setItem("pageNo", newPageNo.toString())
		}
	}

	useEffect(() => {
		const prevPageNo = sessionStorage.getItem("pageNo")
		if (prevPageNo) {
			setPageNo(parseInt(prevPageNo))
		}
	}, [])

	return (
		<nav className='search-nav'>
			{pageNo > 1 && (
				<a href='#' className='prev-results-link' onClick={handlePrevPage}>
					&laquo; Previous Page
				</a>
			)}
			<a href='#' className='new-search-link'>
				New Search
			</a>
			<a href='#' className='next-results-link' onClick={handleNextPage}>
				Next Page &raquo;
			</a>
		</nav>
	)
}

export default SearchNav
