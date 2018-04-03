// reducers/index.js - root file to store all reducers
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";

export default combineReducers({
  searchedMovies: movieReducer
});
