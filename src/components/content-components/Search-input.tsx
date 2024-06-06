import { useEffect } from "react"
import { SearchInputProps } from "../../utils/types"

function SearchInput({ setKeyword, keyword }: SearchInputProps) {
	useEffect(() => {
		const savedKeyword = sessionStorage.getItem("keyword")
		if (savedKeyword) {
			setKeyword(savedKeyword)
		}
	}, [setKeyword])

	useEffect(() => {
		if (keyword) {
			sessionStorage.setItem("keyword", keyword)
		}
	}, [keyword])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		const newKeyword = e.currentTarget.keywordSearch.value
		setKeyword(newKeyword)
		sessionStorage.setItem("keyword", newKeyword)
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
