import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

class Header extends React.Component {
    render (){
        return (
            <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Dateflix</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#profile">Profile</Nav.Link>
                <Nav.Link href="#profile">Explore</Nav.Link>
            </Nav>
            </Navbar>
        )
    }
}

export default Header;