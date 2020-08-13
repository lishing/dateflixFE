import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';
import FavMovie from './components/FavMovie';
import Profile from './components/Profile';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      allMovies:null,
      favMovies:null,
      displayAllMovie:null,
      displayFavMovie:null,
      users:null,
      displayProfile:null,
    }
  }    
  handleClickFav = async () =>{
    const favMoviesList = await axios.get('https://dateflix-backend.herokuapp.com/favmovies')
    this.setState({
      favMovies: favMoviesList,
      displayFavMovie: true,
      displayAllMovie: false,
      displayProfile: false
    })
    console.log('this.state.favMovies', this.state.favMovies)
  } 
  handleClickHome = async () =>{
    const allMoviesList = await axios.get('https://dateflix-backend.herokuapp.com/movies')
    this.setState({
      allMovies: allMoviesList,
      displayFavMovie: false,
      displayAllMovie: true,
      displayProfile: false
    })
    console.log(this.state.allMovies)
  }
  handleClickProfile = async () =>{
    const users = await axios.get('https://dateflix-backend.herokuapp.com/users')
    this.setState({
      users: users,
      displayFavMovie: false,
      displayAllMovie: false,
      displayProfile: true
    })
    console.log(this.state.users)
  } 

  componentDidMount = async () =>{
    const allMoviesList = await axios.get('https://dateflix-backend.herokuapp.com/movies')
    this.setState({
      allMovies: allMoviesList,
      displayAllMovie : true
    })
    console.log('this.state.allMovies', this.state.allMovies) 
  }
  
	render() {
    if (this.state.allMovies === null){
      return (
        <h1>Loading...</h1>
      )
    } else {
      return (
        <div>
          <Header handleClickFav={this.handleClickFav} handleClickHome={this.handleClickHome} handleClickProfile={this.handleClickProfile}/>
          {this.state.displayAllMovie ? 
          <MovieList movies={this.state.allMovies ? this.state.allMovies : []} /> : 
          null }
          {this.state.displayProfile ? 
           <Profile users={this.state.users ? this.state.users : []}/> : 
          null }
          {this.state.displayFavMovie ? 
           <FavMovie fav={this.state.favMovies ? this.state.favMovies : []}/> : 
          null }
        </div>
      )
    }
	}
}
 //shows undefined

// const movies = [
// 	{
// 		title: "Spider Man: Far From Home",
//     description: "Peter Parker + Nic Fury + some handsome man",
//     path: "https://image.tmdb.org/t/p/w500"
// 	},
// 	{
// 		title: "simba",
//     description: "blablabla",
//     genre: "educational"
// 	},
// 	{
// 		title: "little mermaid",
//     description: "blablabla",
//     genre: "weird"
// 	}
// ];

export default App;

