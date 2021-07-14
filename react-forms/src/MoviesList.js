import React from 'react'

export default function MoviesList(props) {
	const list = props.movies.map(movie => {
		let oscarMessage = '';
		if (movie.hasOscars) {
			oscarMessage = 'Oscar winning movie';
		} else {
			oscarMessage = 'No Oscar'
		}
		return (
			<div key={movie.id}>
				<h2>{movie.title}</h2>
				<p>{movie.director}</p>
				{/* if statement in react */}
				{movie.rate > 9.1 && <p>{movie.rate}</p>}
				{/* {movie.hasOscars ? <p>Oscar winning movie 🤩</p> : <p>No Oscar 🙀</p>} */}
				<p>{oscarMessage}</p>
			</div>
		)
	})
	return (
		<>
			{list}
		</>
	)
}
