import axios from "axios"
import { aicDetails } from "../utils"

export const apiDetailsSearch = async (id: number) => {
	try {
		const response = await axios.get(aicDetails(id))
		const artList = response.data.data
		console.log(artList)		
		return { artList }
	} catch (error) {
		console.error("Error fetching data:", error)
	}
}
