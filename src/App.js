import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';
import {BrowserRouter as Route, Router, Switch} from "react-router-dom"
import FavMovie from './components/FavMovie';
import MyFav from './MyFav';
import axios from 'axios';

class App extends React.Component {
  constructor(){
    super();
    this.state={
      allMovies:null,
      favMovies:null,
      displayAllMovie:null,
      displayFavMovie:null
    }
  }    
  handleClickFav = async () =>{
    const favMoviesList = await axios.get('https://dateflix-backend.herokuapp.com/favmovies')
    this.setState({
      favMovies: favMoviesList,
      displayFavMovie: true,
      displayAllMovie: false
    })
    console.log('this.state.favMovies', this.state.favMovies)
  } 
  handleClickHome = async () =>{
    const allMoviesList = await axios.get('https://dateflix-backend.herokuapp.com/movies')
    this.setState({
      allMovies: allMoviesList 
    })
    console.log(this.state.allMovies)
  }
  handleClickProfile = async () =>{
    const favMoviesList = await axios.get('https://dateflix-backend.herokuapp.com/favmovies')
    this.setState({
      favMovies: favMoviesList
    })
    console.log(this.state.favMovies)
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
          {this.state.displayFavMovie ? 
           <FavMovie fav={this.state.favMovies ? this.state.favMovies : []}/> : 
          null }
          {/* {this.state.displayProfile ? 
           <Profile fav={this.state.Profile ? this.state.Profile : []}/> : 
          null } */}
         
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

