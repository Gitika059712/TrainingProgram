import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <hr />
      <Content />
      <hr className="Footer" />
      <Footer />
    </div>
  );
}

export default App;
