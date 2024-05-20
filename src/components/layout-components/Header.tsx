import Nav from "./Nav"

function Header() {
	return (
		<header>
			<div className='header-container'>
				<img src='https://banner2.cleanpng.com/20171217/e4e/globe-png-5a3748028ed0b9.564178151513572354585.jpg'></img>
				<h1>Global Gallery</h1>
				<Nav />
			</div>
		</header>
	)
}

export default Header
