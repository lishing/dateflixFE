import React from 'react';
import MovieInfo from './MovieInfo.js';

class MovieList extends React.Component {
	render() {
		const movies = this.props.moviesProps;
		return (
			<MovieInfo singleMovie={movies[0]} />
		)
	}
}

export default MovieList;