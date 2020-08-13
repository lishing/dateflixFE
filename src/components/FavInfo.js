import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import axios from 'axios'

class FavInfo extends React.Component {
	constructor(props) {
        super(props)
        this.state = {
			show: false,
			overview: this.props.overview,
        }
    }
	toggleOpen = () => {
        this.setState({
          show: true
        });
	}
	toggleClose = () => {
        this.setState({
          show: false
        });
    }
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
	handleClickViewOne = () =>{
		const id = this.props.id
		console.log(id)
		fetch(`http://dateflix-backend.herokuapp.com/favmovies/${id}`,{
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
			}
		}).catch((error)=>{
			console.log('Error', error);
		});
		console.log("clickone", this.props)
	}
	handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
	}
	handleUpdate = async (event) =>{
		event.preventDefault()
		const id = this.props.id
        const payload = {
            overview:this.state.overview,
        }
        await axios.put(`http://dateflix-backend.herokuapp.com/favmovies/${id}`, 
		payload)
		this.toggleClose()
		window.location.reload(false)
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
					<Button onClick={this.toggleOpen} varian="primary"> View </Button>
      <Modal show={this.state.show} onHide={this.toggleClose}>
	  <Form>
        <Modal.Header closeButton>
          <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{this.props.overview}</Modal.Body>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Overview</Form.Label>
                    <Form.Control as="textarea" rows="3" onChange={this.handleChange} name="overview" value={this.state.overview} />
                </Form.Group>     
        <Modal.Footer>
          <Button variant="secondary" onClick={this.toggleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={this.handleUpdate}>
            Save Changes
          </Button>
        </Modal.Footer>
		</Form>
      </Modal>	
                    
				</Card>
				
			</CardDeck>

		</>
		)
	}
	
}

export default FavInfo;