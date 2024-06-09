import { GallerySummary, GalleryImages } from "./index";
import { ArtList } from "../../utils/types";
import { useState, useEffect } from "react";

function Gallery() {
    const [galleryList, setGalleryList] = useState<ArtList>(() =>
        JSON.parse(localStorage.getItem("galleryList") || "[]")
    );

    useEffect(() => {
        localStorage.setItem("galleryList", JSON.stringify(galleryList));
    }, [galleryList]);

    return (
        <>
            <GallerySummary galleryList={galleryList} />
            <GalleryImages galleryList={galleryList} />
        </>
    );
}

export default Gallery;