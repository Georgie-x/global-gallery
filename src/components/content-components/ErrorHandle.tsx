function ErrorHandle() {
	return (
	  <div className="error-container">
		<img
		  src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg/220px-Edvard_Munch%2C_1893%2C_The_Scream%2C_oil%2C_tempera_and_pastel_on_cardboard%2C_91_x_73_cm%2C_National_Gallery_of_Norway.jpg"
		  className="large-image"
		  alt="A tortured looking man on a bridge - painting of The Scream by Edvard Munch"
		/>
		<div className="error-overlay">
		<a href='/search' className='search-link'>
					Exhibition error - Add more artwork to your gallery to view exhibition
				</a>
		</div>
	  </div>
	);
  }
  
  export default ErrorHandle;