import axios from "axios"
import {
	aicKeywordSearch,
	aicDetails,
	aicImage600,
	aicImage400,
	aicImage200,
} from "../../utils/apis"

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
				const image_id = secondResponse.data.data.image_id
				let image_url

				try {
					image_url = aicImage600(image_id)
				} catch (error) {
					try {
						image_url = aicImage400(image_id)
					} catch (error) {
						try {
							image_url = aicImage200(image_id)
						} catch (error) {
							console.error(`Error fetching image for id ${id}: ${error}`)
						}
					}
				}

				if (!image_url) return null
				const description = secondResponse.data.data.description
					? secondResponse.data.data.description.replace(/(<([^>]+)>)/gi, "")
					: ""
				const alt_text =
					secondResponse.data.data.medium_display ||
					"Artwork image from the Art Insitute of Chicago"
				const more_info = `https://www.artic.edu/artworks/${id}`

				return {
					id,
					artist,
					image_url,
					alt_text,
					origin,
					title,
					date,
					medium,
					description,
					more_info,
				}
			})
		)
		const filteredDetails = details.filter((detail) => detail !== null)
		const results = filteredDetails
		return { results, resultsTotal }
	} catch (error) {
		console.error("AIC search API error", error)
		const results: number[] = []
		const resultsTotal = 0
		return { results, resultsTotal }
	}
}
