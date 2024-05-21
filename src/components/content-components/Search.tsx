import { useState, useEffect } from "react"
import axios from "axios"
import { aicSearch } from "../../utils"

function Search() {
	const [keyword, setKeyword] = useState<string>("cats")
	const [artList, setArtList] = useState<any[]>([])

	function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
		e.preventDefault()
		setKeyword(e.currentTarget.keywordSearch.value)
	}

	useEffect(() => {
		axios.get(aicSearch(keyword)).then(({ data }) => {
			const artList = data
			setArtList(artList)
		})   .catch((error) => {
            console.error("Error fetching data:", error);
     
        });
	}, [keyword])

	return (
		<>
			<h2>search</h2>
			<form onSubmit={handleSubmit}>
				<label htmlFor='keywordSearch'>Keyword:</label>
				<input type='text' id='keywordSearch' name='keywordSearch'></input>
				<button type='submit'>Search</button>
			</form>

			<div>{artList.length > 0 ? artList : "No art found."}</div>
		</>
	)
}

export default Search
