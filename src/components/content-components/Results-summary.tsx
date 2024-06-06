import { useEffect } from "react"
import { ResultsTotal, SetPageNo } from "../../utils/types"

function ResultsSummary({
	resultsTotal,
	setPageNo,
}: {
	resultsTotal: ResultsTotal
	setPageNo: SetPageNo
}) {
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
		<section className='resultsSummary'>
			<h2>Results</h2>
			<div className='numberOfResults'>
				{resultsTotal > 2
					? `Your search produced ${resultsTotal} results - select an image for more details`
					: resultsTotal === 1
					? `Your search produced 1 result - select image for more details`
					: "No art found"}
			</div>
			{resultsTotal > 2 && (
				<a href='#' className='nextResultsLink' onClick={handleNextPage}>
					Next results &raquo;
				</a>
			)}
		</section>
	)
}

export default ResultsSummary
