import { RECIEVE_POST, NEW_POST } from "../actions/actionCreators";

export const initialState = {
  postscontent: {
    posts: [],
    newpost: []
  },
  postlistbtn: false,
  postdetailbtn: false,
  newpostbtn: false,
  npost: {
    title: "",
    body: ""
  }
};

function posts(state = initialState.postscontent.posts, action) {
  switch (action.type) {
    case RECIEVE_POST:
      return [...state, ...action.posts];
    case NEW_POST:
      return [...state, ...action.posts];
    default:
      return state;
  }
}
export default posts;
