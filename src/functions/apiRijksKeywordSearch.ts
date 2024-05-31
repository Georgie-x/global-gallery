import axios from "axios"
import { rijksKeywordSearch, rijksDetails } from "../utils"
import { Artwork } from "../types"

export const apiRijksKeywordSearch = async (keyword: string) => {
	try {
		const response = await axios.get(rijksKeywordSearch(keyword))
		console.log(response)
		const rijksResultsTotal = response.data.count
		const results = response.data.artObjects

		const details = await Promise.all(
			results.map(async (artwork: Artwork) => {
			  const secondResponse = await axios.get(`rijksDetails(id)`);
			  console.log(secondResponse)
			  const altText = secondResponse.data.altText
				const image_url = secondResponse.data.img_url}))
				
				const rijksResults = {
					altText
					
				}
console.log(rijksResults, rijksResultsTotal)
		return { rijksResults, rijksResultsTotal }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}
