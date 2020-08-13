import React from 'react';
import MovieInfo from './MovieInfo.js';

const MovieList = (props) => {
	return(
		<div className="all-movie-container">
			{props.movies.data.map((movie, index)=>
				<MovieInfo
				key={index}
				title={movie.title}
				id={movie._id}
				overview={movie.overview}
				url={movie.poster_path}/>
			)}
		</div>
	)
}

export default MovieList;