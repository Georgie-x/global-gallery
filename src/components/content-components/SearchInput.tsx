import { SearchInputProps } from "../../utils/types"

function SearchInput({ setKeyword, keyword }: SearchInputProps) {
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const newKeyword = e.currentTarget.keywordSearch.value
    setKeyword(newKeyword)
  }

  return (
    <section className='search-input'>
      <h2>Search</h2>
      <form onSubmit={handleSubmit} className="search-input-form">
        <label htmlFor='keywordSearch'>Keyword: </label>
        <input 
          type='text' 
          id='keywordSearch' 
          name='keywordSearch' 
          defaultValue={keyword}
        />
        <button type='submit'>Search</button>
      </form>
      <a href='#' className='advancedSearch'>
        Advanced search &raquo;
      </a>
    </section>
  )
}

export default SearchInput