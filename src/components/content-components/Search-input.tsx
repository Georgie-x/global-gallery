function SearchInput({ setKeyword }: { setKeyword: (keyword: string) => void }) {
    
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setKeyword(e.currentTarget.keywordSearch.value)
	}

	return (
		<section className='searchInput'>
			<h2>Search</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='keywordSearch'>Keyword: </label>
				<input type='text' id='keywordSearch' name='keywordSearch' size={12}></input>
				<button type='submit'>Search</button>
			</form>
			<a href='#' className='advancedSearch'>
				Advanced search &raquo;
			</a>
		</section>
	)
}

export default SearchInput
