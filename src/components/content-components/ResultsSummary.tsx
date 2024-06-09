
import { ResultsTotal } from "../../utils/types"

function ResultsSummary({ resultsTotal }: { resultsTotal: ResultsTotal }) {
	
	return (
		<section className='results-summary'>
			<h2>Results</h2>
			<div className='number-of-results'>
				{resultsTotal > 2
					? `Your search produced ${resultsTotal} results`
					: resultsTotal === 1
					? `Your search produced ${resultsTotal} result`
					: "No art found"}
			</div>
			<div className="instructions">
			{resultsTotal > 1
					? `Select an image for more details`
					: "No art found"}
			</div>
		
		</section>
	)
}

export default ResultsSummary
