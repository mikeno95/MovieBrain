// actions/index.js
import axios from "axios";
// import { browserHistory } from "react-router";
import { SEARCH_MOVIE, AUTH_USER, AUTH_ERROR, UNAUTH_USER, FETCH_USER } from "./types";

const GENRE_PATH = "";
const userAuth = { headers: { authorization: localStorage.getItem("token") } };

export const searchMovie = searchTerm => async dispatch => {
  const result = await axios.post("/api/movies", searchTerm);
  dispatch({ type: SEARCH_MOVIE, payload: result.data });
};

export const googleLogin = () => async dispatch => {
  const res = await axios.get("/auth/google");
  dispatch({ type: AUTH_USER });
  localStorage.setItem("token", res.data.token);
  // browserHistory.push("/dashboard");
};

export const localSignIn = form => async dispatch => {
  axios
    .post("/auth/signin", form)
    .then(res => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem("token", res.data.token);
      // browserHistory.push("/dashboard");
    })
    .catch(res => dispatch(authError("Email or password is incorrect")));
};

export const localSignUp = form => async dispatch => {
  axios
    .post("/auth/signup", form)
    .then(res => {
      dispatch({ type: AUTH_USER });
      localStorage.setItem("token", res.data.token);
      // browserHistory.push("/dashboard");
    })
    .catch(res => dispatch(authError(res.data.error)));
};

export const authError = error => {
  return {
    type: AUTH_ERROR,
    payload: error
  };
};

export const fetchUser = () => async dispatch => {
  const res = await axios.get("/api/current_user", userAuth);
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const signoutUser = () => {
  localStorage.removeItem("token");
  return { type: UNAUTH_USER };
};
