import { Artwork } from "../types"

export function rijksKeywordSearch(keyword: string): string {
	const apiKey = import.meta.env.VITE_RIJKS_API_KEY
	return `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&q=${keyword}&imgonly=true`
}

export function aicKeywordSearch(keyword: string): string {
	return `https://api.artic.edu/api/v1/artworks/search?q=${keyword}&query[term][is_public_domain]=true&fields=id,title,image_id,thumbnail.alt_text,place_of_origin,medium_display,artist_title`
}

export function aicImage(image_id: string): string {
	return (
		`https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg` ||
		`https://www.artic.edu/iiif/2/${image_id}/full/400,/0/default.jpg`
	)
}

export function aicDetails(id: string): string {
	return `https://api.artic.edu/api/v1/artworks/${id}?`
}
export function rijksDetails(id: string): string {
	const apiKey = import.meta.env.VITE_RIJKS_API_KEY
	return `https://www.rijksmuseum.nl/api/en/collection/${id}?key=${apiKey}`
}

export function addToGallery(artwork: Artwork) {
	let galleryString = sessionStorage.getItem("galleryList")
	let gallery: Artwork[] = []
	if (galleryString) {
		gallery = JSON.parse(galleryString)
	}
	const artworkInGallery = gallery.some((item: Artwork) => item.id === artwork.id)
	if (!artworkInGallery) {
		gallery.push(artwork)
		sessionStorage.setItem("galleryList", JSON.stringify(gallery))
	} else {
		console.log("Artwork already exists in gallery")
	}
}

export function removeFromGallery(artwork: Artwork) {
	let galleryString = sessionStorage.getItem("galleryList")
	let gallery: Artwork[] = []
	if (galleryString) {
		gallery = JSON.parse(galleryString)
	}
	const updatedGallery = gallery.filter((item: Artwork) => item.id !== artwork.id)
	if (gallery != updatedGallery) {
		sessionStorage.setItem("galleryList", JSON.stringify(updatedGallery))
	} else {
		console.log("Artwork not in gallery")
	}
}
