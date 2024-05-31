
export function rijksKeywordSearch(keyword: string): string {
	const apiKey = import.meta.env.VITE_RIJKS_API_KEY
	return `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}&search?q=${keyword}&imgonly=true`
}

export function aicKeywordSearch(keyword: string): string {
	return `https://api.artic.edu/api/v1/artworks/search?q=${keyword}&query[term][is_public_domain]=true&fields=id,title,image_id`
}

export function rijksImage(image_id: string): string {
	return `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
}

export function aicImage(image_id: string): string {
	return `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
}

export function aicDetails(id: number): string {
	return `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,thumbnail.alt_text`
}
