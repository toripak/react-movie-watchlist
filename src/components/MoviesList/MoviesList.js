import React from 'react';
import { Movie } from '../Movie/Movie';
import './MoviesList.css';

export const MoviesList = ({ movies, watchlist, WatchListComponent, handleFavClick }) => {
  return (
    <div className={watchlist ? 'movie--favorites' : 'movie--container'}>
      {movies?.map(movie => <Movie key={movie.id} movie={movie} WatchListComponent={WatchListComponent} handleFavClick={handleFavClick} />)}
    </div>
  );
}