export type ArtList = Artwork[]

export type Artwork = {
	id: number
	title: string
	image_id: string
	_score: string
}

export type ArtworkDetail = {
	id: number
	title: string
	artist: string
	image_id: string
	_score: string
	artist_title: string
	date_display: string
	medium_display: string
	thumbnail: {
		alt_text: string
	}
}

export type OnClose = () => void

export type ResultsTotal = number

export type AicKeywordResponse =
	| {
			artList: ArtList
			resultsTotal: ResultsTotal
	  }
	| undefined
