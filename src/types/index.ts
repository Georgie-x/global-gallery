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
}

export type OnClose = () => void

export type OnClick = () => void

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
