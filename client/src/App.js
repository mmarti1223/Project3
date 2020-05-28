import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/main.css";

import { AppContext, initialState } from "./utils";
import Landing from "./components/Landing";
import Home from "./components/Home";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AppContext.Provider value={initialState}>
        <Router>
          <Route exact path="/" component={Landing} />
          <Route path="/home" component={Home} />
        </Router>
      </AppContext.Provider>
    );
  }
}
