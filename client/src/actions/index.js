import axios from "axios";
import { SEARCH_MOVIE } from './types';

const ROOT_URL = "https://api.themoviedb.org/3";
const GENRE_PATH = "genre/movie/list?";

export const searchMovie = (searchTerm) => async dispatch => {
  console.log("action creator");
  // const result = await axios.get(`${ROOT_URL}/search/movie?api_key=${process.env.REACT_APP_MOVIEDB_KEY}&query=${searchTerm}`);
  const result = await axios.get("/api/movies")
  // dispatch({ type: SEARCH_MOVIE, payload: result.data.results });
  dispatch({ type: SEARCH_MOVIE, payload: result.results });
}
