import React, { Component } from "react";
import "./App.css";
import Header from "./components/Header/Header.js"
import BookSearch from "./components/BookSearch/BookSearch.js"

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <BookSearch />
      </div>
    );
  }
}

export default App;
