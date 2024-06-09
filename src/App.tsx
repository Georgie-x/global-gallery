import { Access, Header, Content, Footer } from "./components/layout-components/index.js"

function App() {
	sessionStorage.setItem("galleryList", JSON.stringify([]))
	return (
		<>
			<Access />
		
			<div className='layout-container'>
				<Header />
				<Content />
				<Footer />
			</div>
		</>
	)
}

export default App
