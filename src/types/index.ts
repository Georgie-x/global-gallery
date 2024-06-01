export type ArtList = Artwork[]

export type Artwork = {
	id: number | string
	image_id: string
	title: string
	artist: string
	date: string
	medium: string
	origin: string
	alt_text: string
	
}

export type OnClose = () => void

export type ResultsTotal = number

export type KeywordResponse =
	| {
			artList: ArtList

	  }
	| undefined
