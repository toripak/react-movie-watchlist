import React from 'react';
import {Movie} from './Movie';

export const MoviesList = ({movies}) => {
  return (
    <div className='movie--container'>
      {movies.map(movie => <Movie key={movie.id} movie={movie}/>)}
    </div>
  )
}


// "results": [
//   {
//       "adult": false,
//       "backdrop_path": "/zqkmTXzjkAgXmEWLRsY4UpTWCeo.jpg",
//       "genre_ids": [
//           12,
//           28,
//           878
//       ],
//       "id": 11,
//       "original_language": "en",
//       "original_title": "Star Wars",
//       "overview": "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire.",
//       "popularity": 90.661,
//       "poster_path": "/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg",
//       "release_date": "1977-05-25",
//       "title": "Star Wars",
//       "video": false,
//       "vote_average": 8.2,
//       "vote_count": 16921
//   },