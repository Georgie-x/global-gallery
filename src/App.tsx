import { Access, Header, Content, Footer } from "./components/layout-components/index.js"
import { GalleryProvider } from "./contexts/GalleryContext.ts"

function App() {
	sessionStorage.setItem("galleryList", JSON.stringify([]))
	return (
		<GalleryProvider>
			<Access />

			<div className='layout-container'>
				<Header />
				<Content />
				<Footer />
			</div>
		</GalleryProvider>
	)
}

export default App
