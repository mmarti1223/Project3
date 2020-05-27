import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./assets/css/main.css";

import { AppContext, initialState } from "./utils";
import Landing from "./components/Landing";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <AppContext.Provider value={initialState}>
        <Router>
          <Switch>
            <Route path="/" component={Landing} />
          </Switch>
        </Router>
      </AppContext.Provider>
    );
  }
}
