import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default class AnimalPage extends Component {
    state = {
        currentAnimal: []
    };

    componentDidMount() {
      //const currentID = this.props.match.params;
      //console.log(currentID);
        axios.get(`/api/animals/${this.props.match.params.id}`)
          .then(res => {
            this.setState({currentAnimal: res.data});
          })
      }; 

    render() {
      return (
        <div>
            <img src={this.state.currentAnimal.picture} alt={this.state.currentAnimal.name} width="400px" />
            <h2>{this.state.currentAnimal.name}</h2>
            <h3>Home: {this.state.currentAnimal.origin}</h3>
            <p>{this.state.currentAnimal.description}</p>
            <Link to={`/trivia-page/${this.state.currentAnimal.id}`}>
              <button>Get Points!</button>
            </Link>
            
        </div>
      );
    }
  }