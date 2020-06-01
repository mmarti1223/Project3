import React, { Component } from "react";
import { Link } from "react-router-dom";
// import Col from "react-bootstrap/Col";

export default class AnimalCard extends Component {
  render() {
    return (
      <div className="animal-card">
        <Link to="/animal-page/:id">
          <img src={this.props.src} alt={this.props.src} width="100%" />
        </Link>
      </div>
    );
  }
}
