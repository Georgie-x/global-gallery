export type ArtList = Artwork[]

export type Artwork = {
	id: number
	title: string
	image_id: string
	thumbnail:{
		alt_text: string
	}
}

export type OnClose = () => void;
