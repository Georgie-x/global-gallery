import axios from "axios"
import { rijksKeywordSearch } from "../utils"

export const apiRijksKeywordSearch = async (keyword: string) => {
	try {
		const response = await axios.get(rijksKeywordSearch(keyword))
		const artList = response.data.data
		const resultsTotal = response.data.pagination.total
		return { artList, resultsTotal }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}

