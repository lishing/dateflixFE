import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class FavInfo extends React.Component {

	//does not appear on the page, but it is recorded in mongoDB.
	handleDelete = () =>{
		const id = this.props.id
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
		console.log("poster", this.props.poster_path)
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
						<img src={"https://image.tmdb.org/t/p/w500" + this.props.poster_path} alt={this.props.title}/>
					</Card.Body>
					<Button onClick={this.handleDelete} varian="primary"> Delete </Button>
				</Card>
			</CardDeck>
		</>
		)
	}
	
}

export default FavInfo;