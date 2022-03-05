import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MoviesList } from './components/MoviesList';
import { searchTMDB } from './utils/TMDB';
import { AddFavorite } from './components/AddFavorite';
import { RemoveFavorite } from './components/RemoveFavorites';

const App = () => {
  const [darkMode, setDarkMode] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [favorites, setFavorites] = useState([]);

  const styles = {
    backgroundColor: darkMode ? '#363c48' : '#FDFDFD',
    color: darkMode ? '#F0F0F0' : '#363c48'
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => prevMode === "" ? "dark" : "");
  };

  const searchMovies = query => {
    searchTMDB(query).then(movies => setMovies(movies));
  }

  const addFavMovie = movie => {
    const newFavorites = favorites.filter(({id}) => id !== movie.id);
    setFavorites([...newFavorites, movie]);
  }

  const removeFavoriteMovie = movie => {
    const newFavorites = favorites.filter(fav => fav.id !== movie.id);
    setFavorites(newFavorites);
  }

  return (
    <div className="App" style={styles}>
      <Navbar
        darkMode={darkMode}
        toggleDarkMode={toggleDarkMode}
      />
      <SearchBar
        query={query}
        setQuery={setQuery}
        searchMovies={searchMovies}
      />

      {favorites.length > 0 && <h4>Favorite Movies</h4>}

      <MoviesList
        movies={favorites}
        FavoriteComponent={RemoveFavorite}
        handleFavClick={removeFavoriteMovie}
      />
      {favorites.length > 0 && <hr />}

      <MoviesList
        movies={movies}
        FavoriteComponent={AddFavorite}
        handleFavClick={addFavMovie}
      />
      <Footer
      />
    </div>
  );
}

export default App;
