type ResultsSummaryProps = {
    resultsTotal: number;
  };
  
  function ResultsSummary({ resultsTotal }: ResultsSummaryProps){

    
    return(
        <section className='resultsSummary'>
        <h2>Results</h2>
        <div className='numberOfResults'>
            {resultsTotal > 0 ? `Your search produced ${resultsTotal} results` : "No art found."}
        </div>
        <a href="#" className="nextResultsLink">Next results &raquo;</a>
    </section>
    )
}

export default ResultsSummary