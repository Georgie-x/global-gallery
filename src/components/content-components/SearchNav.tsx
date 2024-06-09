import { useEffect } from "react"
import { SetPageNo } from "../../utils/types"

function SearchNav({ setPageNo }: { setPageNo: SetPageNo }) {
	const handleNextPage = () => {
		const prevPageNo = sessionStorage.getItem("prevPageNo")
		const newPageNo = prevPageNo ? parseInt(prevPageNo) + 1 : 2
		setPageNo(newPageNo)
	}

	useEffect(() => {
		const prevPageNo = sessionStorage.getItem("prevPageNo")
		if (prevPageNo) {
			setPageNo(parseInt(prevPageNo))
		}
	}, [])

	return (
		<nav className='search-nav'>
			<a href='#' className='next-results-link' onClick={handleNextPage}>
				Next results &raquo;
			</a>
		</nav>
	)
}

export default SearchNav
