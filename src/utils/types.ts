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


export type SetKeyword = (keyword: string) => void
export type SetPageNo = (pageNo: number) => void
export type SetResultsTotal = (resultsTotal:number) => void
export type SetArtList = (artList : ArtList) => void

export type SearchInputProps = {
	keyword: string
	setKeyword: SetKeyword
	pageNo: number
	setPageNo: SetPageNo
	resultsTotal: number
	setResultsTotal: SetResultsTotal
	artList: ArtList
	setArtList: SetArtList
}
