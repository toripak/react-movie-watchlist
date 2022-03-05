import React from 'react';
import { Movie } from './Movie';

export const MoviesList = ({ movies, FavoriteComponent, handleFavClick }) => {
  return (
    <div className='movie--container'>
      {movies.map(movie => <Movie key={movie.id} movie={movie} FavoriteComponent={FavoriteComponent} handleFavClick={handleFavClick} />)}
    </div>
  );
}