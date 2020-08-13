import React, { Component } from 'react'
import {Form, Button} from 'react-bootstrap'
import axios from 'axios'



export class Profile extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: this.props.users.data[0].username,
            gender: this.props.users.data[0].gender,
            age: this.props.users.data[0].age,
            
        }
    }
    toggle = () => {
        this.setState({
          modal: !this.state.modal
        });
    }
    componentDidMount = () =>{
        this.setState({
            username: this.props.users.data[0].username,
            gender: this.props.users.data[0].gender,
            age: this.props.users.data[0].age,
        })
    }
    handleUpdate = async (event) =>{
        event.preventDefault()
        const payload = {
            username:this.state.username,
            age:this.state.age,
            gender:this.state.gender
        }
        await axios.put(`https://dateflix-backend.herokuapp.com/users/${this.props.users.data[0]._id}`, 
        payload)
    }
    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render() {
        //console.log(this.props)
        return (
            <div>
                <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="username" value={this.state.username} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Gender</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="gender" value={this.state.gender} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Age</Form.Label>
                    <Form.Control type="text" onChange={this.handleChange} name="age" value={this.state.age} />
                </Form.Group>
                <Button onClick={this.handleUpdate} varian="primary"> Update </Button>
                </Form>
                {/* Show Page */}
                <h2>Hi {this.state.username}</h2>
                <h3>Gender: {this.state.gender}</h3>
                <h3>Age:{this.state.age}</h3>
                <h3>Fav Movies: </h3>
                {this.props.users.data[0].favMovies.map ( (movie,index) => {
                    return <p key={index}>{movie.title} </p> })}
                
            </div>
        )
    }
}

export default Profile
