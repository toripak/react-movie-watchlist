const API_KEY = process.env.REACT_APP_API_KEY;

export const searchTMDB = async (query) => {
  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`);
    if (response.ok) {
      const responseJSON = await response.json();
      return responseJSON.results;
    }
  } catch (e) {
    console.error(e);
  }
}