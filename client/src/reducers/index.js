// reducers/index.js - root file to store all reducers
import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import authReducer from "./authReducer";

export default combineReducers({
  searchedMovies: movieReducer,
  auth: authReducer
});
