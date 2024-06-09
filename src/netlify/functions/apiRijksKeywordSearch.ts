import axios from "axios"
import { rijksKeywordSearch, rijksDetails } from "../../utils/apis"
import { Artwork, RijksSummary } from "../../utils/types"

export const apiRijksKeywordSearch = async (keyword: string, pageNo: number) => {
	try {
		const response = await axios.get(rijksKeywordSearch(keyword, pageNo))
		const resultsTotal = response.data.count
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
		return { results, resultsTotal }
	} catch (error) {
		console.error("Rijksmuseum search API error", error)
		const results: number[] = []
		const resultsTotal = 0
		return { results, resultsTotal }
	}
}
