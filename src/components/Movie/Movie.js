import React from "react";
import './Movie.css';

export const Movie = ({ movie, WatchListComponent, handleFavClick }) => {

  const {
    title,
    poster_path: src,
    release_date: releaseDate,
    vote_average: rating,
    overview
  } = movie;

  return (
    <div className="movie--card">
      <img
        className="movie--img"
        src={`https://image.tmdb.org/t/p/w500/${src}`}
        alt={`${title} movie poster`}
      />

      <div
        className="movie--overview">
          <p>{overview.slice(0, 77)}...</p>
      </div>
      
      <div 
        className="add-to-favorites"
        onClick={() => handleFavClick(movie)}
      >
        <WatchListComponent />
      </div>

      <p className="movie--desc">
        {title}・{releaseDate?.slice(0, 4)} ⭐{rating}
      </p>
    </div>
  )
}
