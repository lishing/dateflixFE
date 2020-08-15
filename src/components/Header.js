import React from 'react'
import Button from 'react-bootstrap/Button'
  
class Header extends React.Component {

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
        // we use button instead of direct links, did not use Router.
        return (
            <div>
                <Button onClick={this.handleClickHome} variant="primary"> Home</Button>
                <Button onClick={this.handleClickProfile} variant="primary"> Profile</Button>
                <Button onClick={this.handleClickFav} variant="primary">View All Favorites</Button>
            </div>

        )
    }
}

export default Header;

