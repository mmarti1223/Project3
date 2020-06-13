import React, { Component } from "react";
import "../assets/css/correct.css";
import correctIcon from "../assets/images/correct-icon.svg";
import { Link } from "react-router-dom";

export default class Correct extends Component {
  render() {
    return (
      <div className="correct">
        <div className="content">
          <div className="top pt-5">
            <img src={correctIcon} alt="correct icon" />
            <h1 className="font-yellow">Correct!</h1>
            {/* <p>
              Gorillas live in large groups that can have as many as 21 memebrs.
            </p> */}
          </div>

          <div className="center nunito-font center-div mt-5">
            <div className="center-content">
              <h3>You won</h3>
              <h2 className="font-yellow larger">20</h2>
              <h3>POINTS</h3>
            </div>
          </div>

          <div className="bottom">
            <Link className="bttn yellow-bg nunito-font" to="/home">
              Find more animals
            </Link>
          </div>
        </div>
      </div>
    );
  }
}
