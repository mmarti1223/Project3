import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class AnimalGrid extends Component {
  state = {
    animals: [
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
      "https://www.nationalgeographic.com/content/dam/animals/2020/05/lion-evolution/01-lion-evolution-nationalgeographic_2711038.adapt.885.1.jpg",
    ],
  };

  render() {
    return (
      <div className="animal-grid">
        <div className="grid">
          {this.state.animals.map((animal, key) => (
            <AnimalCard key={key} src={animal} />
          ))}
        </div>
      </div>
    );
  }
}
