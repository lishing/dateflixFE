import React from 'react';
import MovieInfo from './MovieInfo.js';

// class MovieList extends React.Component {
// 	render() {
// 		const movies = this.props.moviesProps;
// 		return (
// 			<MovieInfo singleMovie={movies[0].title} />
// 		)
// 	}
// }

const MovieList = (props) => {
	return(
		<div className="all-movie-container">
			{props.movies.map(movie=>
				<MovieInfo
				title={movie.title}
				id={movie.id}
				overview={movie.overview}
				url={movie.poster_path}/>
			)}
		</div>
	)
}

export default MovieList;