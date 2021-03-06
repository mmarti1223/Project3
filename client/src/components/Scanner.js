import React, { Component } from "react";
import QrReader from "react-qr-reader";
import Navbar from "./Navbar";
import Container from "react-bootstrap/Container";
import { GlobalContext } from "../store";
import { withRouter } from "react-router-dom";
import axios from "axios";

class Scanner extends Component {
  handleScan = (data) => {
    if (data) {
      let data2 = JSON.parse(data);
      axios.get(`/api/animals/${data2.id}`).then((res) => {
        //this.setState({ currentAnimal: res.data });
        console.log(res.data);
        this.context.dispatch({
          type: "setCurrentAnimal",
          payload: res.data,
        });
      });

      // // Update here what to do with the data
      // // logging to confirm data
      // console.log(data2.id);

      this.props.history.push(`/animal-page`);
    }
  };

  handleError = (err) => {
    console.error(err);
  };

  render() {
    return (
      <div>
        <Navbar />
        <Container className="text-center">
          <h2 className="font-blue worksans-light py-4">
            Scan the code with your camera to play!
          </h2>
          <QrReader
            delay={500}
            onError={this.handleError}
            onScan={this.handleScan}
            style={{ width: "100%" }}
          />
          {/* <p className="font-blue worksans-light">{this.state.result}</p> */}
        </Container>
      </div>
    );
  }
}

Scanner.contextType = GlobalContext;
export default withRouter(Scanner);
