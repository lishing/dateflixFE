import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FavMovies from './components/FavMovie';
import axios from 'axios';

class MyFav extends React.Component {
    constructor(){
      super();
      this.state={
        username:'',
        movies: [],
      };
    }
    async componentDidMount(){
      const favMovieList = await axios.get('https://dateflix-backend.herokuapp.com/favmovies')
      const jsonresponse = await favMovieList.json()
    //body: JSON.stringify(data),
    // .then(response => response.json())
    // .then(movies => {
    //   this.setState({
    //     movies
    //   })
    //});
    console.log(jsonresponse);
  }
      render() {
      //console.log(this.state)
          return (
            <div>
            {/* {this.state.data.map()}
            <FavMovies movies={this.state.movies ? this.state.movies : []}/> */}
            <h1>THIS IS MY FAV.JS</h1>
            </div>
          )
      }
  } 

export default MyFav;