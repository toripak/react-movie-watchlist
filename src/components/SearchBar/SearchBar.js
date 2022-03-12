import React from 'react';
import './SearchBar.css';

export const SearchBar = ({ searchMovies, query, setQuery }) => {

  const handleSubmit = e => {
    e.preventDefault();
    searchMovies(query);
  }

  return (
    <form
      onSubmit={handleSubmit}
    >
      <label htmlFor='query'>Movie Name: </label>
      <input
        id='query'
        placeholder='i.e. Doctor Who'
        type='text'
        name={query}
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      >
      </input>
      <button
        className='search--btn'
        type='submit'
      >
        Search
      </button>
    </form>
  )
}