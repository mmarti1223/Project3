import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./assets/css/main.css";

import { GlobalContext, initialState, reducer } from "./store";

// import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import AnimalPage from "./components/AnimalPage";
import QrPage from './components/QrPage';
import TriviaPage from "./components/TriviaPage";
import Correct from "./components/Correct";
import Incorrect from "./components/Incorrect";
import Redeem from "./components/redeemPage";

const App = () => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);

  return (
    <GlobalContext.Provider value={{ globalState, dispatch }}>
      <Router>
        {/* <Navbar /> */}
        <Route exact path="/" component={Landing} />
        <Route path="/home" component={Home} />
        <Route path="/signup" component={SignUp} />
        <Route path="/login" component={Login} />
        <Route path="/qrpage" component={QrPage} />
        <Route path="/animal-page/:id" component={AnimalPage} />
        <Route path="/trivia-page" component={TriviaPage} />
        <Route path="/correct" component={Correct} />
        <Route path="/incorrect" component={Incorrect} />
        <Route path="/redeem" component={Redeem} />
      </Router>
    </GlobalContext.Provider>
  );
};

export default App;
