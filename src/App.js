import React, { useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { MoviesList } from './components/MoviesList';
import { searchTMDB } from './utils/TMDB'

const App = () => {
  const [darkMode, setDarkMode] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');

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

      <MoviesList
        movies={movies}
      />
      <Footer
      />
    </div>
  );
}

export default App;
