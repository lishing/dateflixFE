import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'


export class FavMovieOne extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: this.props.title,
            overview: this.props.overview,
            id:this.props._id,
        }
    }
    componentDidMount = () =>{
        this.setState({
            title: this.props.title,
            overview: this.props.overview,
        })
    }
    handleUpdate = async (event) =>{
        event.preventDefault()
        const payload = {
            title:this.state.title,
            overview:this.state.overview,
            id:this.state.id
        }
        await axios.put(`https://dateflix-backend.herokuapp.com/favmovies/${_id}`, 
        payload)
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="title" value={this.state.title} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Overview</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="overview" value={this.state.overview} />
                </Form.Group>
                <Button onClick={this.handleUpdate} varian="primary"> UPDATE </Button>
                </Form>
                {/* Show Page */}
                <h2>Title: {this.state.title}</h2>
                <p>Overview: {this.state.overview}</p>
                {/* {this.props.users.data[0].favMovies.map ( (movie,index) => {
                    return <p key={index}>{movie.title} </p> })} */}
            </div>
        )
    }
}

export default FavMovieOne
