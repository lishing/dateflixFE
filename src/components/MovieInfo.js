import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class MovieInfo extends React.Component {

	handleClick () {
		fetch ("https://dateflix-backend.herokuapp.com/users/movies/5f3010c97e67b6001761f6eb", {
			method: 'PUT',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(this.props.title),
	}).then(response => response.json())
	// .then(data =>{
	// 	console.log('Success:', this.props.title);
	// })
	.catch((error)=>{
		console.log('Error:', error);
	});
	}
	//FETCH TEMPLATE
// 	fetch('https://example.com/profile', {
//   method: 'POST', // or 'PUT'
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(this.props.title),
// })
// .then(response => response.json())
// .then(data => {
//   console.log('Success:', data);
// })
// .catch((error) => {
//   console.error('Error:', error);
// });
	// }
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
						<Button onClick={this.handleClick()} variant="primary">Add to Fav</Button>
					</Card>
				</CardDeck>
            </>
        )
    }
}

// class MovieInfo extends React.Component {
// 	render(){
// 		console.log(this.props)
// 		return (
// 		<div> 
// 			<h1>Title: {this.props.title}</h1>
// 			<p>Description: {this.props.overview}</p>
// 			<img src= {"https://image.tmdb.org/t/p/w500" + this.props.url}></img>
// 			<Button variant="primary">Add to Fav</Button>
// 		</div>
// 		)
// 	}
// }


export default MovieInfo;