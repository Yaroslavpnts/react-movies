import React from 'react';
import { MoviesList } from '../components/Movies/MoviesList';
import { Preloader } from '../Common/Preloader';
import { Search } from '../components/Search';

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    movies: [],
    isLoading: false,
  };

  componentDidMount() {
    // fetch('http://www.omdbapi.com/?apikey=d1477f58&s=matrix')
    //   .then(response => response.json())
    //   .then(data => {
    //     this.setState({ movies: data.Search });
    //   });
    this.getMovies();
  }

  getMovies(str = 'matrix', type = 'all') {
    this.setState({ isLoading: true });
    fetch(
      `http://www.omdbapi.com/?apikey=${API_KEY}&s=${str}${type !== 'all' ? `&type=${type}` : ''}`
    )
      .then(response => response.json())
      .then(data => {
        this.setState({ movies: data.Search, isLoading: false });
      });
  }

  render() {
    const { movies, isLoading } = this.state;

    return (
      <main className="container content">
        <Search getMovies={this.getMovies.bind(this)} />

        {isLoading ? <Preloader /> : <MoviesList movies={movies} />}
      </main>
    );
  }
}

export { Main };
