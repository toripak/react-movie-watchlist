import React, { useEffect, useState } from 'react';
import './App.css';
import { SearchBar } from './components/SearchBar/SearchBar';
import { Navbar } from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import { MoviesList } from './components/MoviesList/MoviesList';
import { searchTMDB } from './utils/TMDB';
import { WatchListComponent } from './components/WatchListComponent/WatchListComponent';
import { RemoveFromWatchlist } from './components/RemoveFromWatchlist/RemoveFromWatchlist';

const App = () => {
  const [darkMode, setDarkMode] = useState('');
  const [movies, setMovies] = useState([]);
  const [query, setQuery] = useState('');
  const [watchlist, setWatchlist] = useState(
    JSON.parse(localStorage.getItem('watchlist')) || []
    );

  const styles = {
    backgroundColor: darkMode ? '#363c48' : '#FDFDFD',
    color: darkMode ? '#F0F0F0' : '#363c48'
  };

  const toggleDarkMode = () => {
    setDarkMode(prevMode => prevMode === "" ? "dark" : "");
  };

  const searchMovies = (query) => {
    searchTMDB(query).then(movies => setMovies(movies));
  }

  const addToWatchlist = movie => {
    const newWatchlist = watchlist.filter(({ id }) => id !== movie.id);
    setWatchlist([movie, ...newWatchlist]);
    const newMovies = movies.filter(({ id }) => id !== movie.id);

    setMovies(newMovies);
  }

  const removeFavMovie = movie => {
    const newWatchlist = watchlist.filter(({ id }) => id !== movie.id);
    setWatchlist(newWatchlist);

    const newMovies = movies.filter(({ id }) => id !== movie.id);

    setMovies([movie, ...newMovies]);
  }

  useEffect(() => {
    localStorage.setItem('watchlist', JSON.stringify(watchlist))
  }, [watchlist]);

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

      {watchlist?.length > 0 && <h4>My watchlist</h4>}

      <MoviesList
        watchlist={watchlist}
        movies={watchlist}
        WatchListComponent={RemoveFromWatchlist}
        handleFavClick={removeFavMovie}
      />
      {watchlist?.length > 0 && <hr />}

      <MoviesList
        movies={movies}
        WatchListComponent={WatchListComponent}
        handleFavClick={addToWatchlist}
      />
      <Footer
      />
    </div>
  );
}

export default App;
