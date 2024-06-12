function ResultsSummary({ resultsTotal }: { resultsTotal: number }) {
	return (
		<section className='results-summary'>
			<h2>Results</h2>
			{resultsTotal?(
			<div className='number-of-results'>
				{resultsTotal > 2
					? `Your search produced ${resultsTotal} results. Select an image for more details`
					: resultsTotal === 1
					? `Your search produced ${resultsTotal} result. Select image for more details`
					: "No art found"}
			</div>): ("loading")}
		</section>
	)
}

export default ResultsSummary
