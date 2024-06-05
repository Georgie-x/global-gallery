export function rijksKeywordSearch(keyword: string): string {
	const apiKey = import.meta.env.VITE_RIJKS_API_KEY
	return `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&q=${keyword}&imgonly=true`
}
export function rijksDetails(id: string): string {
	const apiKey = import.meta.env.VITE_RIJKS_API_KEY
	return `https://www.rijksmuseum.nl/api/en/collection/${id}?key=${apiKey}`
}

export function aicKeywordSearch(keyword: string): string {
	return `https://api.artic.edu/api/v1/artworks/search?q=${keyword}&query[term][is_public_domain]=true&fields=id,title,image_id,thumbnail.alt_text,place_of_origin,medium_display,artist_title`
}
export function aicImage(image_id: string): string {
	return `https://www.artic.edu/iiif/2/${image_id}/full/600,/0/default.jpg`
}
export function aicDetails(id: string): string {
	return `https://api.artic.edu/api/v1/artworks/${id}?`
}

