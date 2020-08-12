import React, { Component } from 'react'

export class Profile extends Component {
    render() {
        console.log(this.props)
        return (
            <div>
                <h2>this is a profile page!</h2>
                <h3>{this.props.users.data[0].username}</h3>
                <h3>{this.props.users.data[0].gender}</h3>
                <h3>{this.props.users.data[0].interestedIn}</h3>
                <h3>{this.props.users.data[0].favMovies[0]}</h3>
            </div>
        )
    }
}

export default Profile
