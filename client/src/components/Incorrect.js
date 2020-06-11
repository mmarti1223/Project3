import React, { Component } from "react";
import "../assets/css/incorrect.css";
import wrongIcon from "../assets/images/wrong-icon.svg";
import { Link } from "react-router-dom";

export default class Incorrect extends Component {
  render() {
    return (
      <div className="incorrect">
        <div className="content">
          <div className="top">
            <img src={wrongIcon} alt="" />
            <h1 className="font-yellow">Wrong!</h1>
            {/* <p>
              Gorillas live in large groups that can have as many as 21 memebrs.
            </p> */}
          </div>

          <div className="center nunito-font center-div">
            <h2>YOU EARNED</h2>
            <h2 className="font-yellow">0</h2>
            <h2>POINTS</h2>
          </div>

          <div className="bottom">
            <Link className="bttn yellow-bg" to="/home">
              HOME
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
