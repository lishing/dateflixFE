import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header.js';
import MovieList from './components/MovieList.js';

// class renderMovie extends React.Component{
//   constructor(props){
//     super(props)
//     this.state({
//       title: "",
//       _id: "",
//       overview: "",
//       poster_path: ""
//     });
//   }
// }

// const movies = () =>{
//   fetch('https://dateflix-backend.herokuapp.com/movies', {
//     method: 'GET',
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   //body: JSON.stringify(data),
//   .then(response => response.json())
//   .then(movies => {
//     this.setState({
//       movies:movies
//     });
//   });
// };
// console.log(movies);

class App extends React.Component {
  constructor(){
    super();
    this.state={data:[]};
  }
  async componentDidMount(){
    const response = await fetch('https://dateflix-backend.herokuapp.com/movies', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    }
  })
  //body: JSON.stringify(data),
  .then(response => response.json())
  .then(movies => {
    this.setState({
      movies:movies
    });
  });
  }
	render() {
    // console.log(this.state)
		return (
			<div>
        {/* {this.state.data.map()} */}
				<Header />
        <MovieList movies={this.state.movies ? this.state.movies : []}/>
			</div>
		)
	}
}




 //shows undefined

const movies = [
	{
		title: "Spider Man: Far From Home",
    description: "Peter Parker + Nic Fury + some handsome man",
    path: "https://image.tmdb.org/t/p/w500"
	},
	{
		title: "simba",
    description: "blablabla",
    genre: "educational"
	},
	{
		title: "little mermaid",
    description: "blablabla",
    genre: "weird"
	}
];

export default App;

