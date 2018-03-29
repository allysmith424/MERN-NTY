import React, { Component } from 'react';
import './App.css';
import Nav from "./components/Nav";
import SearchCard from "./components/SearchCard";
import ResultsCard from "./components/ResultsCard";

class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <SearchCard />
        <ResultsCard />
      </div>
    );
  }
}

export default App;
