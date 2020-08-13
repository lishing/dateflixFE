import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class FavInfo extends React.Component {

	handleClick = () => {
		fetch ("https://dateflix-backend.herokuapp.com/users/movies/5f300b2e2bf2340017767524", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({title:this.props.title}),
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
	//does not appear on the page, but it is recorded in mongoDB.
	handleDelete = () =>{
		const id = this.props.id
		console.log("this is id", id)
		fetch(`http://dateflix-backend.herokuapp.com/favmovies/${id}`,{
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json',
			}
		}).then(response => {
			//this is a forced restart of the browser, need a better way to handle a new page from a deleted item
			window.location.reload(false)	
		})
		.catch((error)=>{
			console.log('Error', error);
		});
	}
	
	render() {
		console.log(this.props.url)
		return (
		<>
			<CardDeck>
				<Card>
					<Card.Body>
						<h3>Title: {this.props.title}</h3>
						<Card.Text>
							Description: {this.props.overview}
						</Card.Text>
						{/* image does not work properly*/}
						<img src={"https://image.tmdb.org/t/p/w500"+this.props.url} alt={this.props.title}/>
					</Card.Body>
					<Button onClick={this.handleDelete} varian="primary"> Delete </Button>
				</Card>
			</CardDeck>
		</>
		)
	}
	
}

export default FavInfo;