export function aicKeywordSearch(keyword: string): string {
	return `https://api.artic.edu/api/v1/artworks/search?q=${keyword}&query[term][is_public_domain]=true&fields=id,title,image_id`
}

export function aicImage(image_id: string): string {
	return `https://www.artic.edu/iiif/2/${image_id}/full/843,/0/default.jpg`
}

export function aicDetails(id: number): string {
	return `https://api.artic.edu/api/v1/artworks/${id}?fields=id,title,image_id,thumbnail.alt_text`
}
