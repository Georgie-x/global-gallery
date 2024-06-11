export type ArtList = Artwork[]

export type Artwork = {
	id: string | number
	image_url: string
	title: string | null
	artist: string | null
	date: number | string | null
	medium: string
	origin: string
	description: string | null
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
	id: string | number
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
