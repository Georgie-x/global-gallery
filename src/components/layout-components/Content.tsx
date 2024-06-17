import { Routes, Route } from "react-router-dom"
import { Home, Search, Gallery, Exhibition, ErrorHandle } from "../content-components/index"

function Content() {
	return (
		<main>
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/home' element={<Home />} />
				<Route path='/search' element={<Search />} />
				<Route path='/gallery' element={<Gallery />} />
				<Route path='/exhibition' element={<Exhibition />} />
				<Route path='/*' element={<ErrorHandle />} />
			</Routes>
		</main>
	)
}

export default Content