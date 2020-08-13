import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import axios from 'axios'

class MovieInfo extends React.Component {

	handleClick = () => {
		fetch ("https://dateflix-backend.herokuapp.com/users/movies/5f300b2e2bf2340017767524", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({title:this.props.title, 
				overview: this.props.overview,
				poster_path: "https://image.tmdb.org/t/p/500" + this.props.poster_path} ),
		}).then(response => response.json())
		.catch((error)=>{
			console.log('Error:', error);
		});
	}
	handleSubmit = () =>{
		fetch("http://dateflix-backend.herokuapp.com/favmovies/:id",{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		}).then(response => {return response.json()})
		.catch((error)=>{
			console.log('Error', error);
		});
	}
	
	render() {
		return (
		<>
			<CardDeck>
				<Card>
					<Card.Body>
						<h3>Title: {this.props.title}</h3>
						<Card.Text>
							Description: {this.props.overview}
						</Card.Text>
						<img src={"https://image.tmdb.org/t/p/w500" + this.props.url} alt={this.props.title}/>
					</Card.Body>
					<Button onClick={this.handleClick} variant="primary"> Add to Fav</Button>
					<Button onClick={this.handleSubmit} varian="primary"> View </Button>
				</Card>
			</CardDeck>
		</>
		)
	}
	
}

export default MovieInfo;
