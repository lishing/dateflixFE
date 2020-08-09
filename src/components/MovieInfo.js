import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';

class MovieInfo extends React.Component {
	render() {
		const singleMovie = this.props.singleMovie;
		console.log("title >>> ", singleMovie.title)
		console.log("description >>> ", singleMovie.description)
		return (
			<>
				<CardDeck>
					<Card>
						<Card.Body>
							<Card.Text>
							</Card.Text>
							<Button variant="primary">Add to Fav</Button>
						</Card.Body>
					</Card>
				</CardDeck>
            </>
        )
    }
}

export default MovieInfo;