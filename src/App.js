import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';

const response = fetch('https://dateflix-backend.herokuapp.com/movies', {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
  //body: JSON.stringify(data),
})
.then(response=>response.json())
.then(movies =>{
  this.setState({
    title: "",
    _id: "",
    overview: "",
    poster_path: ""
  })
  console.log(movies[0].title);
});

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
        <MovieList />
			</div>
		)
	}
}

export default App;


 //shows undefined

// const movies = [
// 	{
// 		title: "Spider Man: Far From Home",
//     description: "Peter Parker + Nic Fury + some handsome man",
//     path: "https://image.tmdb.org/t/p/w500" + singleMovie.poster_path
// 	},
// 	{
// 		title: "simba",
//     description: "blablabla",
//     genre: "educational"
// 	},
// 	{
// 		title: "little mermaid",
//     description: "blablabla",
//     genre: "weird"
// 	}
// ];

