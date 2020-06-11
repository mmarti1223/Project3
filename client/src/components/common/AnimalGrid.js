import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import axios from "axios";
import Spinner from "react-bootstrap/Spinner";

export default class AnimalGrid extends Component {
  state = {
    animals: [],
    loading: true,
  };

  componentDidMount() {
    axios.get("/api/animals").then((res) => {
      this.setState({ animals: res.data, loading: false });
    });
  }

  render() {
    return (
      <div className="animal-grid">
        {this.state.loading ? (
          <Spinner animation="grow" role="status" className="spinner">
            <span className="sr-only">Loading...</span>
          </Spinner>
        ) : (
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
        )}
        {/* <div className="grid">
          {this.state.animals.map((animal, key) => (
            <AnimalCard
              key={key}
              src={animal.thumbnail}
              id={animal.id}
              name={animal.name}
            />
          ))}
        </div> */}
      </div>
    );
  }
}
