import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';

const movies = [
	{
		title: "titanic",
		description: "blablabla",
	},
	{
		title: "simba",
		description: "blablabla"
	},
	{
		title: "little mermaid",
		description: "blablabla"
	}
];

class App extends React.Component {
	render() {
		return (
			<div>
				<Header />
				<MovieList moviesProps={movies} />
			</div>
		)
	}
}

export default App;