function Home() {
	return (
		<>
			<section className='welcome'>
				<h2>Welcome to Global Gallery!</h2>
				<p>
					Discover art from our collections around the World. Save artworks to your gallery and
					curate an exhibition with your favourites!
				</p>
			</section>
			<section className='browse'>
				<h2>Discover art</h2>
				<div className="presets">
				<label htmlFor='collections'>Browse collections: </label>
				<select name='collections' id='collections'>
					<option value='aic'>Best of the Art Museum of Chicago</option>
					<option value='rijks'>Best of Rijksmuseum</option>
				</select></div>
				<a href='/search' className='search-link'>
				Keyword search &raquo;
			</a>
			</section>
		</>
	)
}

export default Home
