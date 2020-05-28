import React, { Component } from "react";
import "../assets/css/home.css";
import AnimalGrid from "./common/AnimalGrid";

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>Howdy explorer!</h1>
        <p>Click on an animal to get started!</p>

        <AnimalGrid />
      </div>
    );
  }
}
