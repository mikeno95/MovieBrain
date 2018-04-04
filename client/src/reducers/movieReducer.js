import { SEARCH_MOVIE } from "../actions/types";

export default (state = [], action) => {
  switch(action.type) {
    case SEARCH_MOVIE:
      console.log('reducer')
      console.log(action.payload);
      return action.payload;
    default:
      return state;
  }
}
