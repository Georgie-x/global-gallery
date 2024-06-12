import { SetPageNo } from "../../utils/types"
import { savePageNo } from "../../utils/storage"

function SearchNav({ pageNo, setPageNo }: { pageNo: number; setPageNo: SetPageNo }) {
	const handleNextPage = () => {
		const newPageNo = pageNo + 1
		setPageNo(newPageNo)
		savePageNo(newPageNo)
	}

	const handlePrevPage = () => {
		if (pageNo > 1) {
			const newPageNo = pageNo - 1
			setPageNo(newPageNo)
			savePageNo(newPageNo)
		}
	}

	return (
		<nav className='search-nav'>
			{pageNo > 1 && (
				<a href='#' className='prev-results-link' onClick={handlePrevPage}>
					&laquo; Last Page
				</a>
			)}
			<a href='#' className='keywordSearch'>
				New Search
			</a>
			<a href='#' className='next-results-link' onClick={handleNextPage}>
				Next Page &raquo;
			</a>
		</nav>
	)
}

export default SearchNav
