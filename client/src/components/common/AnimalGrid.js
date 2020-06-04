import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import axios from "axios" ;

export default class AnimalGrid extends Component {
  state = {
    animals: [],
  };

  componentDidMount() {
    axios.get("/api/animals").then((res) => {
      this.setState({ animals: res.data });
    });
  }

  render() {
    return (
      <div className="animal-grid">
        <div className="grid">
          {this.state.animals.map((animal, key) => (
            <AnimalCard
              key={key}
              src={animal.thumbnail}
              id={animal.id}
              name={animal.name}
            />
          ))}
        </div>
      </div>
    );
  }
}
