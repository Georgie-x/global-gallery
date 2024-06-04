import axios from "axios"
import { rijksKeywordSearch, rijksDetails } from "../utils"
import { Artwork, RijksSummary } from "../types"

export const apiRijksKeywordSearch = async (keyword: string) => {
	try {
		const response = await axios.get(rijksKeywordSearch(keyword))
		const resultsTotal = response.data.count
		console.log("rijks1", response)

		const ids = response.data.artObjects.map((artwork: RijksSummary) => ({
			id: artwork.objectNumber,
			image_url: artwork.webImage.url,
		}))

		const details = await Promise.all(
			ids.map(async (artwork: Artwork) => {
				const id = artwork.id
				const image_url = artwork.image_url
				const secondResponse = await axios.get(rijksDetails(id))
				const artist = secondResponse.data.artObject.principalOrFirstMaker
				const origin = secondResponse.data.artObject.productionPlaces[0]
				const title = secondResponse.data.artObject.title
				const date = secondResponse.data.artObject.dating.sortingDate
				const medium = secondResponse.data.artObject.physicalMedium
				const description = secondResponse.data.artObject.plaqueDescriptionEnglish

				return { id, artist, image_url, origin, title, date, medium, description }
			})
		)

		const results = details

		console.log("rijksresults", results, resultsTotal)
		return { results, resultsTotal }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}
