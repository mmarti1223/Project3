import React, { Component } from "react";
import "../assets/css/login.css";
import { Link } from "react-router-dom";

export default class Login extends Component {
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
            />
            <input
              type="number"
              placeholder="Birth year"
              value=""
              name="birthYear"
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
