import axios from "axios"
import { aicKeywordSearch } from "../utils"

export const apiAicKeywordSearch = async (keyword: string) => {
	try {
		const response = await axios.get(aicKeywordSearch(keyword))
		const results = response.data.data
		const resultsTotal = response.data.pagination.total
		return { results, resultsTotal }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}
