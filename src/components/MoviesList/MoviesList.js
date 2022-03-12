import React from 'react';
import { Movie } from '../Movie/Movie';
import './MoviesList.css';

export const MoviesList = ({ movies, favorites, FavoriteComponent, handleFavClick }) => {
  return (
    <div className={favorites ? 'movie--favorites' : 'movie--container'}>
      {movies.map(movie => <Movie key={movie.id} movie={movie} FavoriteComponent={FavoriteComponent} handleFavClick={handleFavClick} />)}
    </div>
  );
}