import React, { Component } from "react";
import "../assets/css/signup.css";
import { Link } from "react-router-dom";

import ZebraImg from '../assets/images/zebra.png';

export default class SignUp extends Component {
  state = {
    name: "",
    email: "",
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
      <div className="sign-up">
        <div><img src={ZebraImg} width="100%" alt="Zebra" className="zebra" /></div>
        <div className="center-div mt-5">
          
          <h1 className="mt-5">Sign Up</h1>

          <div className="form">
            <input
              type="text"
              placeholder="Name"
              value={this.state.name}
              name="name"
              onChange={this.handleInputChange}
            />
            <input
              type="email"
              placeholder="Email"
              value={this.state.email}
              name="email"
              onChange={this.handleInputChange}
            />
            <input
              type="text"
              placeholder="Username"
              value={this.state.username}
              name="username"
              onChange={this.handleInputChange}
            />
            <input
              type="number"
              placeholder="Birth year"
              value={this.state.birthYear}
              name="birthYear"
              onChange={this.handleInputChange}
            />
            
            <div className="mt-2">
              <button className="nunito-font">
                <Link to="/home">Sign Up</Link>
              </button>
            </div>
          </div>
          
          <p>
            Have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </div>
    );
  }
}
