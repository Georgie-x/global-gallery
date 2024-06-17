import { ArtList, SetPageNo } from "../../utils/types"
import { savePageNo } from "../../utils/storage"

function SearchNav({
	pageNo,
	setPageNo,
	artList,
}: {
	pageNo: number
	setPageNo: SetPageNo
	artList: ArtList
}) {
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
			{artList.length > 10 && (
				<a href='#' className='next-results-link' onClick={handleNextPage}>
					Next Page &raquo;
				</a>
			)}
		</nav>
	)
}

export default SearchNav
