import axios from "axios"
import { aicKeywordSearch, aicDetails, aicImage } from "../../utils/apis"

export const apiAicKeywordSearch = async (keyword: string, pageNo: number) => {
	try {
		const response = await axios.get(aicKeywordSearch(keyword, pageNo))
		const resultsTotal = response.data.pagination.total
		const ids = response.data.data.map((artwork: { id: number }) => artwork.id)

		const details = await Promise.all(
			ids.map(async (id: string) => {
				const secondResponse = await axios.get(aicDetails(id))
				const artist = secondResponse.data.data.artist_title
				const origin = secondResponse.data.data.place_of_origin
				const title = secondResponse.data.data.title
				const date = secondResponse.data.data.date_end
				const medium = secondResponse.data.data.medium_display
				const image_url = aicImage(secondResponse.data.data.image_id)
				const description = secondResponse.data.data.description
				const more_info = `https://www.artic.edu/artworks/${id}`
				return { id, artist, image_url, origin, title, date, medium, description, more_info }
			})
		)
		const results = details
		return { results, resultsTotal }
	} catch (error) {
		console.error("AIC search API error", error)
		const results: number[] = []
		const resultsTotal = 0
		return { results, resultsTotal }
	}
}
