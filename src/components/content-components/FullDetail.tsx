import { Artwork } from "../../utils/types"

function FullDetail({ artwork }: { artwork: Artwork }) {
	return (
		<>
			<div className='full-details'>
				{artwork.title && (
					<>
						<h3>Title</h3>
						<p>{artwork.title}</p>
					</>
				)}
				{artwork.artist && (
					<>
						<h3>Artist</h3>
						<p>{artwork.artist}</p>
					</>
				)}
				{artwork.origin && (
					<>
						<h3>Origin</h3>
						<p>{artwork.origin}</p>
					</>
				)}
				{artwork.date && (
					<>
						<h3>Date</h3>
						<p>{artwork.date}</p>
					</>
				)}
				{artwork.medium && (
					<>
						<h3>Medium</h3>
						<p>{artwork.medium}</p>
					</>
				)}
				{artwork.description && (
					<>
						<h3>Description</h3>
						<p>{artwork.description}</p>
					</>
				)}
				{artwork.more_info && (
					<>
						<h3>More Info</h3>
						<a href={artwork.more_info}>{artwork.more_info}</a>
					</>
				)}
			</div>
		</>
	)
}

export default FullDetail
