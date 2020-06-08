import React, { Component } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

import Giraffe from '../assets/images/giraffe.png';

export default class Login extends Component {
  state = {
    username: "",
    birthYear: "",
  };

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <div className="login">
        <div><img src={Giraffe} width="100%" alt="Giraffe" className="giraffe mt-5 mb-5" /></div>
        <div className="center-div">
          <h1>Hello again!</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Username"
              value={this.username}
              name="username"
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Birth year"
              value={this.birthYear}
              name="birthYear"
              onChange={this.handleInputChange}
            />
            <button className="nunito-font">
              <Link to="/home">Login</Link>
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
        <div className="blue-box"></div>
      </div>
    );
  }
}
