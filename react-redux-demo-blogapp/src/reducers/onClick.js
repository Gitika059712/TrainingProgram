import { initialState } from "./posts";
import {
  ON_CLICK_POST_LIST,
  ON_CLICK_POST_DETAIL,
  ON_CLICK_NEW_POST
} from "../actions/actionCreators";
function onclick(state = initialState, action) {
  switch (action.type) {
    case ON_CLICK_POST_LIST:
      return {
        ...state,
        postlistbtn: true,
        postdetailbtn: false,
        newpostbtn: false
      };
    case ON_CLICK_POST_DETAIL:
      return {
        ...state,
        postdetailbtn: true,
        postlistbtn: false,
        newpostbtn: false
      };
    case ON_CLICK_NEW_POST:
      return {
        ...state,
        newpostbtn: true,
        postdetailbtn: false,
        postlistbtn: false
      };
    default:
      return state;
  }
}
export default onclick;
