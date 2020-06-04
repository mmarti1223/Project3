import React, { Component } from "react";

export default class TriviaPage extends Component {
  state = {
    trivia: {},
  };

  componentDidMount() {
    this.setState({ trivia: this.props.location.state.Trivia[0] }); //only gets the first question
  }
  render() {
    return <div>{this.state.trivia.question}</div>;
  }
}
