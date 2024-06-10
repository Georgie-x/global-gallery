import { Artwork, ArtList } from "./types"

export function loadGallery(): ArtList {
	const gallery = sessionStorage.getItem("galleryList")
	return gallery ? JSON.parse(gallery) : []
}

export function saveGallery(gallery: ArtList) {
	sessionStorage.setItem("galleryList", JSON.stringify(gallery))
}

export function artInGallery(artwork: Artwork, gallery: ArtList): boolean {
	return gallery.some((item: Artwork) => item.id === artwork.id)
}

export function addToGallery(artwork: Artwork) {
	const gallery = loadGallery()
	const artExists = artInGallery(artwork, gallery)
	if (!artExists) {
		gallery.push(artwork)
		saveGallery(gallery)
	} else {
		console.error("Artwork already exists in gallery")
	}
}

export function removeFromGallery(artwork: Artwork) {
	const gallery = loadGallery()
	const updatedGallery = gallery.filter((item: Artwork) => item.id !== artwork.id)
	if (updatedGallery.length !== gallery.length) {
		saveGallery(updatedGallery)
	} else {
		console.error("Artwork not in gallery")
	}
}
