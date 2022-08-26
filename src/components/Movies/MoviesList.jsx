import React from 'react';
import { Movie } from './Movie';

const MoviesList = ({ movies = [] }) => {
  return (
    <div className="movies">
      {movies.length ? (
        movies.map(movie => {
          return <Movie key={movie.imdbID} {...movie} />;
        })
      ) : (
        <h4>Nothing founded</h4>
      )}
    </div>
  );
};

export { MoviesList };
