import React, { Component } from "react";
import "../assets/css/trivia-page.css";

import StarIcon from "../assets/images/star_icon.svg";
import TriviaBgrd from "../assets/images/trivia_bgrd.svg";

export default class TriviaPage extends Component {
  state = {
    trivia: {},
  };

  componentDidMount() {
    console.log(this.props.location.state.Trivia[0]);
    this.setState({ trivia: this.props.location.state.Trivia[0] }); //only gets the first question
  }
  render() {
    return (
      <div className="trivia">
        <div className="blue-zigzag"></div>
        <div className="mt-5">
          <img src={StarIcon} width="40px" alt="star icon" />
          <h1 className="font-yellow">Trivia time!</h1>
          <p className="text-light mt-5">True or False</p>
          <h3 className="nunito-font text-light">
            {this.state.trivia.question}
          </h3>
          <div className="mt-4">
            <button className="trivia-btn nunito-font mb-4">True</button>
            <button className="trivia-btn nunito-font">False</button>
          </div>
        </div>
        <div className="trivia-bgrd">
          <img src={TriviaBgrd} alt="trivia background" />
        </div>
      </div>
    );
  }
}
