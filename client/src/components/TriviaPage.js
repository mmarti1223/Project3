import React, { Component } from "react";
import "../assets/css/trivia-page.css";

import StarIcon from "../assets/images/star_icon.svg";
import TriviaBgrd from "../assets/images/trivia_bgrd.svg";

import { initialState, GlobalContext } from "../store";
import { withRouter } from "react-router-dom";

class TriviaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ...initialState,
      trivia: {},
    };
  }

  componentDidMount() {
    this.setState({ trivia: this.props.location.state.Trivia[0] }); // only gets the first question
  }

  // render buttons with click hanlder
  // check for if the button text matches correct answer
  // and redirct to correspondig path

  checkAnswer = (choice) => {
    let correctAnswer = this.state.trivia.answer;
    if (choice === correctAnswer) {
      this.context.dispatch({
        type: "addPoints",
        payload: 20,
      });
      this.props.history.push("/correct");
    } else {
      this.props.history.push("/incorrect");
    }
  };

  componentDidUpdate() {
    console.log(this.context.globalState.currentAccount);
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
            {/* eslint-disable-next-line */}
            {this.state.trivia.answer == 1 ? (
              <span>
                <button
                  className="trivia-btn nunito-font mb-4"
                  onClick={() => this.checkAnswer("1")}
                >
                  True
                </button>
                <button
                  className="trivia-btn nunito-font"
                  onClick={() => this.checkAnswer("0")}
                >
                  False
                </button>
              </span>
            ) : (
              <span>
                <button
                  className="trivia-btn nunito-font mb-4"
                  value="incorrectAnswer"
                >
                  True
                </button>
                <button
                  className="trivia-btn nunito-font"
                  value="correctAnswer"
                >
                  False
                </button>
              </span>
            )}
          </div>
        </div>
        <div className="trivia-bgrd">
          <img src={TriviaBgrd} alt="trivia background" />
        </div>
      </div>
    );
  }
}

TriviaPage.contextType = GlobalContext;
export default withRouter(TriviaPage);
