import React, { Component } from "react";
import "../assets/css/signup.css";
import { Link } from "react-router-dom";

export default class SignUp extends Component {
  render() {
    return (
      <div className="sign-up">
        <div className="center-div">
          <h1>Sign Up</h1>

          <div className="form">
            <input type="text" placeholder="Name" value="" name="name" />
            <input type="email" placeholder="Email" value="" name="email" />
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
              <Link to="/home">Sign Up</Link>
            </button>
          </div>
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}
