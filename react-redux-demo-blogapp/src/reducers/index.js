import { combineReducers } from "redux";
import posts from "./posts";
import onclick from "./onClick";

const reducer = combineReducers({
  //reducer names
  posts,
  onclick
});
export default reducer;
