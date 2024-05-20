function Nav() {
	return (
		<nav className='menu'>
			<label htmlFor='menu-select'>&#x2630;</label>

			<select name='page' id='menu-select'>
				<option value='home'>Home</option>
				<option value='search'>Search</option>
				<option value='gallery'>Gallery</option>
				<option value='exhibition'>Exhibition</option>
			</select>
		</nav>
	)
}

export default Nav
