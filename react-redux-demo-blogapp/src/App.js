import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import reducer from "./reducers";
import thunkMiddleware from "redux-thunk";
import { fetchPosts } from "./actions/actionCreators";
import ContentContainer from "./containers/ContentContainer";

export const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.dispatch(fetchPosts());
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <hr />
        <ContentContainer />
        <hr className="Footer" />
        <Footer />
      </Provider>
    </div>
  );
}

export default App;
