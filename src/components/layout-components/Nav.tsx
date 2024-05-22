import { Link } from "react-router-dom"

function Nav() {
	return (
		<nav>
			<ul className='menu'>
				<li>
					<Link to='/home'>Home</Link>
				</li>
				<li>
					<Link to='/search'>Search</Link>
				</li>
				<li>
					<Link to='/gallery'>Gallery</Link>
				</li>

				<li>
					<Link to='/exhibition'>Exhibition</Link>
				</li>
			</ul>
		</nav>
	)
}

export default Nav
