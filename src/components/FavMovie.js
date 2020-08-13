import React from 'react';
import FavInfo from './FavInfo.js'

const FavMovie = (props) => {
	const url = "https://image.tmdb.org/t/p/w500" + props.poster_path
	return(
		<div className="all-movie-container">
			{props.fav.data.map((movie, index)=>
				<FavInfo
				key={index}
				title={movie.title}
				id={movie._id}
				overview={movie.overview}
				url={movie.poster_path}/>
			)}
		</div>
	)
}

export default FavMovie;