function SearchInput({ setKeyword }: { setKeyword: (keyword: string) => void }) {
    
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		console.log("Form submitted!")
		console.log(e.currentTarget.keywordSearch.value)
		setKeyword(e.currentTarget.keywordSearch.value)
	}

	return (
		<section className='searchInput'>
			<h2>Search</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='keywordSearch'>Keyword:</label>
				<input type='text' id='keywordSearch' name='keywordSearch'></input>
				<button type='submit'>Search</button>
			</form>
			<a href='#' className='advancedSearch'>
				Advanced search &raquo;
			</a>
		</section>
	)
}

export default SearchInput