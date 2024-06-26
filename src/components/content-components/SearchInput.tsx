import { saveArtList, saveKeyword, savePageNo, saveResultsTotal } from "../../utils/storage"
import { SearchInputProps } from "../../utils/types"

function SearchInput({
	setKeyword,
	keyword,
	setPageNo,
	setArtList,
	setResultsTotal,
}: SearchInputProps) {
	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const newKeyword = e.currentTarget.keywordSearch.value
		setArtList([])
		saveArtList([])
		setResultsTotal(0)
		saveResultsTotal(0)
		setKeyword(newKeyword)
		saveKeyword(newKeyword)
		setPageNo(1)
		savePageNo(1)
		
	}

	return (
		<section className='search-input'>
			<h2>Search</h2>
			<form onSubmit={handleSubmit} className='search-input-form'>
				<label htmlFor='keywordSearch'>Keyword: </label>
				<input type='text' id='keywordSearch' name='keywordSearch' defaultValue={keyword} />
				<button type='submit'>Search</button>
			</form>
			<a href="/home">Browse &raquo;</a>
		</section>
	)
}

export default SearchInput
