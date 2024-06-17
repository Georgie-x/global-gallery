import { ChangeEvent, useState } from "react"
import { useGallery } from "../../contexts/GalleryContext"
import { bestOfAic, bestOfRijks } from "../../utils/db"
import { ArtList } from "../../utils/types"
import ExhibitionImages from "./ExhibitionImages"
import ExhibitionSummary from "./ExhibitionSummary"

function Exhibition() {
	const { galleryList } = useGallery()
	const [exhibitionList, setExhibitionList] = useState<ArtList>(galleryList || bestOfAic)


	const handleExhibitionChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value

		if (selectedValue === "gallery") {
			setExhibitionList(galleryList)
		} else if (selectedValue === "aic") {
			setExhibitionList(bestOfAic)
		} else if (selectedValue === "rijks") {
			setExhibitionList(bestOfRijks)
		}
	}
	return (
		<>
			<ExhibitionSummary handleExhibitionChange={handleExhibitionChange} />
			<ExhibitionImages exhibitionList={exhibitionList} />
		</>
	)
}

export default Exhibition
