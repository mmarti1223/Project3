import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Col from "react-bootstrap/Col";

export default class AnimalCard extends Component {
  
  render() {
    return (
      <div className="animal-card">
        <Link to={`/animal-page/${this.props.id}`}>
          <img src={this.props.src} alt={this.props.name} width="100%" />
        </Link>
      </div>
    );
  }
}
