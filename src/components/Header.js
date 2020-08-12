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
        return (
            <div>
                <Button onClick={this.handleClickHome} variant="primary"> Home</Button>
                <Button onClick={this.handleClickProfile} variant="primary"> Profile</Button>
                <Button onClick={this.handleClickFav} variant="primary">View Fav</Button>
            </div>

        )
    }
}

export default Header;

