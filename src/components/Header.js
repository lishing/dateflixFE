import React, {Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button'

import {
    BrowserRouter as Router,
    Redirect,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import FavMovies from './FavMovie';
import MyFav from '../MyFav';
  

class Header extends React.Component {

    // onSubmit = () =>{
    //     return <Redirect to='/fav'/>
    // }

    handleClickFav =() =>{
        this.props.handleClickFav()
    }
    handleClickHome =() =>{
        this.props.handleClickHome()
    }
    handleClickProfile =() =>{
        this.props.handleClickProfile()
    }
    render (){
        return (
            // <Navbar bg="dark" variant="dark">
            //     <Navbar.Brand Link to="/home">Dateflix</Navbar.Brand>
            //     <Nav className="mr-auto">
            //         <Nav.Link href="/home">Home</Nav.Link>
            //         <Nav.Link href="/profile">Profile</Nav.Link>
            //         <Nav.Link href='/fav'>View Fav</Nav.Link>
            //     </Nav>
            // </Navbar> 
            <div>
                <Button onClick={this.handleClickHome} variant="primary"> Home</Button>
                <Button onClick={this.handleClickProfile} variant="primary"> Profile</Button>
                <Button onClick={this.handleClickFav} variant="primary">View Fav</Button>
            </div>

        )
    }
}

export default Header;

