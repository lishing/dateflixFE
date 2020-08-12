import React from 'react';
import FavInfo from './FavInfo.js'

const FavMovie = (props) => {
	console.log("this fav", props)
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