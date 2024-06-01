import axios from "axios"
import { rijksKeywordSearch, rijksDetails } from "../utils"
import { Artwork } from "../types"

export const apiRijksKeywordSearch = async (keyword: string) => {
	try {
	  const response = await axios.get(rijksKeywordSearch(keyword))
	  const resultsTotal = response.data.count
	  console.log("rijks1", response)
  
	  const artworks = response.data.artObjects.map(
		(artwork) => ({ id: artwork.objectNumber, image_url: artwork.webImage.url })
	  )
  
	  const details = await Promise.all(
		artworks.map(async (artwork:Artwork) => {
		  const secondResponse = await axios.get(rijksDetails(artwork.id))
		  const artist = secondResponse.data.artObject.principalOrFirstMaker
		  const origin = secondResponse.data.artObject.productionPlaces[0]
		  const title = secondResponse.data.artObject.title
		  const date = secondResponse.data.artObject.dating.sortingDate
		  const medium = secondResponse.data.artObject.physicalMedium
		  const description = secondResponse.data.plaqueDescriptionEnglish
		  const image_url = artwork.image_url 
		  return { id: artwork.id, artist, image_url, origin, title, date, medium, description }
		})
	  )
  
	  const results = details
  
	  console.log("rijksresults", results, resultsTotal)
	  return { results, resultsTotal }
	} catch (error) {
	  console.error("Error fetching data:", error)
	}
  }