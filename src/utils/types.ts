export type ArtList = Artwork[]

export type Artwork = {
	id: string
	image_url: string
	title: string
	artist: string
	date: string
	medium: string
	origin: string
	alt_text: string
	description: string
	more_info: string
}

export type VoidFunction = () => void

export type SetPageNo = (pageNo: number) => void

export type ResultsTotal = number

export type KeywordResponse =
	| {
			artList: ArtList
	  }
	| undefined

export type RijksSummary = {
	id: string
	image_url: string
	objectNumber: string
	webImage: {
		url: string
	}
}

export type SetKeywordFunction = (keyword: string) => void

export type SearchInputProps = {
  keyword: string
  setKeyword: SetKeywordFunction
}