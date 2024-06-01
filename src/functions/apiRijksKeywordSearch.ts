import axios from "axios"
import { rijksKeywordSearch, rijksDetails } from "../utils"

export const apiRijksKeywordSearch = async (keyword: string) => {
	try {
		const response = await axios.get(rijksKeywordSearch(keyword))
		const resultsTotal = response.data.count
		const ids = response.data.artObjects.map(
			(artwork: { objectNumber: string }) => artwork.objectNumber
		)

		const details = await Promise.all(
			ids.map(async (id: string) => {
				const secondResponse = await axios.get(rijksDetails(id))
				const artist = secondResponse.data.artObject.principalOrFirstMaker
				const origin = secondResponse.data.artObject.productionPlaces[0]
				const title = secondResponse.data.artObject.title
				const date = secondResponse.data.artObject.dating.sortingDate
				const medium = secondResponse.data.artObject.physicalMedium
				const image_url = secondResponse.data.artObject.webImage.url
				const description = secondResponse.data.plaqueDescriptionEnglish
				return { id, artist, image_url, origin, title, date, medium, description }
			})
		)

		const results = details

		console.log(results, resultsTotal)
		return { results, resultsTotal }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}
