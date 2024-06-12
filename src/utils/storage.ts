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

export function loadKeyword(): string {
	const keyword = sessionStorage.getItem("keyword")
	return keyword ? JSON.parse(keyword) : ""
}

export function loadResultsTotal() {
	const resultsTotal = sessionStorage.getItem("resultsTotal")
	return resultsTotal ? JSON.parse(resultsTotal) : 0
}

export function loadArtList() {
	const artList = sessionStorage.getItem("artList")
	return artList ? JSON.parse(artList) : []
}

export function loadPageNo() {
	const pageNo = sessionStorage.getItem("pageNo")
	return pageNo ? JSON.parse(pageNo) : 0
}

export function saveKeyword(keyword: string) {
	sessionStorage.setItem("keyword", JSON.stringify(keyword))
}

export function saveResultsTotal(resultsTotal: number) {
	sessionStorage.setItem("resultsTotal", JSON.stringify(resultsTotal))
}

export function saveArtList(artList: ArtList) {
	sessionStorage.setItem("artList", JSON.stringify(artList))
}

export function savePageNo(pageNo: number) {
	sessionStorage.setItem("pageNo", JSON.stringify(pageNo))
}
