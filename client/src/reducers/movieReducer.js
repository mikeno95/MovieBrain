import { SEARCH_MOVIE } from "../actions/types";

export default (state = [], action) => {
  switch(action.type) {
    case SEARCH_MOVIE:
      return [ ...state, action.payload];
    default:
      return state;
  }
}
