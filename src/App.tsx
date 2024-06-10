import { useEffect } from "react";
import { Access, Header, Content, Footer } from "./components/layout-components/index.js"
import { GalleryProvider } from "./contexts/GalleryContext.tsx"

function App() {

	useEffect(() => {
        if (!sessionStorage.getItem("galleryList")) {
            sessionStorage.setItem("galleryList", JSON.stringify([]));
        }
    }, [])




	return (
		<>
			<Access />
			<GalleryProvider>
				<div className='layout-container'>
					<Header />
					<Content />
					<Footer />
				</div>
			</GalleryProvider>
		</>
	)
}

export default App
