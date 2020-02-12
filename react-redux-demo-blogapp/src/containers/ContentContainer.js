import Content from "../components/Content";
import { connect } from "react-redux";
import {
  fetchPosts,
  onclickNewPost,
  onclickPostDetail,
  onclickPostList,
  newPostadd
} from "../actions/actionCreators";

const mapStateToProps = state => ({
  contentposts: state.posts,
  postlistbtn: state.onclick.postlistbtn,
  postdetailbtn: state.onclick.postdetailbtn,
  newpostbtn: state.onclick.newpostbtn
});

const mapDispatchToProps = dispatch => ({
  postdetail: () => dispatch(onclickPostDetail()),
  postlist: () => dispatch(onclickPostList()),
  newpost: () => dispatch(onclickNewPost()),
  newPostadd: post => dispatch(newPostadd(post)),
  fetch: () => dispatch(fetchPosts())
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Content);
