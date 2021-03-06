import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from "./components/Nav";
import Search from "./pages/Search";
import Saved from "./pages/Saved";

class App extends Component {

  state = {
    saved: 0
  };

  addSavedBook = () => {
    this.setState({ saved: this.state.saved + 1});
  }

  render() {
    return (
      <Router>
        <div>
          <Nav saved={this.state.saved} />
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
            <Route component={Search} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
