import React, { Component } from "react";
import AnimalCard from "./AnimalCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

export default class AnimalGrid extends Component {
  state = {
    animals: [
      "https://ucarecdn.com/54e453ed-16a8-4f76-90e4-130c183ac5cd/basilisk_btn.jpg",
      "https://ucarecdn.com/e7a117c0-a1bb-4d26-88b5-0e40b9a6701d/parrot_btn.jpg",
      "https://ucarecdn.com/78183a8d-c3d7-434f-bc53-8976a09d035d/elephant_btn.jpg",
      "https://ucarecdn.com/e8292661-536a-4809-b1ad-78ed29a8a176/whitetiger_btn.jpg",
      "https://ucarecdn.com/7997ebb6-d302-4d14-ac7a-629437df93b8/gorilla_btn.jpg",
      "https://ucarecdn.com/3a6089f2-ebb6-48e8-9cd1-8f76a315ae61/whitecheekedgibbon_btn.jpg",
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
