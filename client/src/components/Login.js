import React, { Component } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

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
        <div className="center-div">
          <h1>Login</h1>
          <div className="form">
            <input
              type="text"
              placeholder="Username"
              value=""
              name="username"
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Birth year"
              value=""
              name="birthYear"
              onChange={this.handleInputChange}
            />
            <button>
              <Link to="/home">Login</Link>
            </button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </div>
    );
  }
}
