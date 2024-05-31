import axios from "axios"
import { rijksKeywordSearch } from "../utils"
import { Artwork } from "../types"

export const apiRijksKeywordSearch = async (keyword: string) => {
	try {
		const response = await axios.get(rijksKeywordSearch(keyword))
		console.log(response)
		const resultsTotal = response.data.count
		const results = response.data.artObjects

		const resultsList = results.map((artwork: Artwork) => ({
			id: artwork.id,
			title: artwork.title,
			image_url: artwork.webImage.url
		}))
		console.log(resultsTotal)

		return { resultsList, resultsTotal }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}
