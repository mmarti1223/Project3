import React, { Component } from "react";
import "../assets/css/signup.css";
import { Link } from "react-router-dom";
import axios from "axios";

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
  
  signUp = () => {
    const user = {
      username: this.state.username,
      name: this.state.name,
      password: this.state.birthYear,
      email:this.state.email
    }
    axios.post("/api/registerUser",user)
    .then (result=>
      {console.log(result)
        localStorage.setItem("user",JSON.stringify(result.data))
        this.props.history.push("/home")
      })
  }

  render() {
    return (
      <div className="sign-up">
        <div><img src={ZebraImg} width="100%" alt="Zebra" className="zebra" /></div>
        <div className="center-div mt-2">
          
          <h1 className="mt-2">Sign Up</h1>

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
              <button className="nunito-font" onClick={this.signUp}>
                Sign Up
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
