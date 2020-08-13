import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class MovieInfo extends React.Component {
	constructor(){
		super();
		this.state={
		  displayOneMovie:null,
		}
	  } 
	handleClickFav = () => {
		fetch ("https://dateflix-backend.herokuapp.com/users/movies/5f300b2e2bf2340017767524", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({title:this.props.title, 
				overview: this.props.overview,
				poster_path: this.props.poster_path,
				popularity: this.props.popularity} ),
		}).then(response => response.json())
		.catch((error)=>{
			console.log('Error:', error);
		});
		console.log("clickfav", this.props.poster_path)
	}
	// handleClickViewOne = () =>{
	// 	const id = this.props.title
	// 	fetch(`http://dateflix-backend.herokuapp.com/favmovies/${title}`,{
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		}
	// 	}).catch((error)=>{
	// 		console.log('Error', error);
	// 	});
	// 	console.log(this.props)
	// }
	// handleClickViewOne = async () =>{
	// 	const id = this.props.id
	// 	const favMoviesOne = await axios.get(`http://dateflix-backend.herokuapp.com/favmovies/${id}`, {
	// 		params: {
	// 			id:`${this.props.movies.id}`
	// 	}})
	// 	this.setState({
	// 	  displayOneMovie: true,
	// 	})
	// 	console.log('this.state.favMoviesOne', this.state.favMoviesOne)
	//   } 
	// handleClickViewOne = () =>{
	// 	console.log("favmoviesid", this.props)
	// 	fetch(`http://dateflix-backend.herokuapp.com/favmovies/${this.props.favmovies}`,{
	// 		method: 'GET',
	// 		headers: {
	// 			'Content-Type': 'application/json',
	// 		}
	// 	}).then(response => {return response.json()})
	// 	.catch((error)=>{
	// 		console.log('Error', error);
	// 	});
	// }
	
	render() {
		const URL_HEAD = "https://image.tmdb.org/t/p/w500"
		const URL_TAIL = this.props.url
		return (
		<>
			<CardDeck>
				<Card>
					<Card.Body>
						<h3>Title: {this.props.title}</h3>
						<Card.Text>
							Description: {this.props.overview}
						</Card.Text>
						<img src= {URL_HEAD + URL_TAIL}/>
					</Card.Body>
					<Button onClick={this.handleClickFav} variant="primary"> Add to Fav</Button>
					<Button onClick={this.handleClickViewOne} varian="primary"> View </Button>
				</Card>
			</CardDeck>
		</>
		)
	}
	
}

export default MovieInfo;
