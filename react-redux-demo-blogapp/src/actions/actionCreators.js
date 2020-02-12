export const NEW_POST = "NEW_POST";
export const REQUEST_POST = "REQUEST_POST";
export const RECIEVE_POST = "RECIEVE_POST";
export const ON_CLICK_POST_LIST = "ON_CLICK_POST_LIST";
export const ON_CLICK_POST_DETAIL = "ON_CLICK_POST_DETAIL";
export const ON_CLICK_NEW_POST = "ON_CLICK_NEW_POST";

export function reqPost(list) {
  return {
    type: REQUEST_POST,
    list
  };
}
export function receivePosts(json) {
  return {
    type: RECIEVE_POST,
    posts: json
  };
}
export function onclickPostList() {
  return {
    type: ON_CLICK_POST_LIST
  };
}
export function onclickPostDetail() {
  return {
    type: ON_CLICK_POST_DETAIL
  };
}

export function onclickNewPost() {
  return {
    type: ON_CLICK_NEW_POST
  };
}
export function newPostadd(post) {
  console.log(post);
  return { type: NEW_POST, posts: post };
}
export function fetchPosts() {
  return dispatch => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(response => response.json())
      .then(json => {
        return dispatch(receivePosts(json));
      });
  };
}
