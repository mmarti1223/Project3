import React, { Component } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../store";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "../assets/css/navbar.css";
import HomeIcon from "../assets/images/home-icon.svg";
import PointsIcon from "../assets/images/gift-icon.svg";

class Navbar extends Component {
  componentDidMount() {
    if (this.context.globalState.currentAccount.points === 0) {
      let user = JSON.parse(localStorage.getItem("user"));

      this.context.dispatch({
        type: "updatePoints",
        payload: user.points,
      });
    } else {
      localStorage.setItem(
        "points",
        this.context.globalState.currentAccount.points
      );
    }
  }

  render() {
    return (
      <Container>
        <Row className="main-navbar">
          <Col xs={4} className="home-btn">
            <Link to="/home">
              <img
                src={HomeIcon}
                alt="Click here to redeem your points"
                className="nav-icon"
              />
            </Link>
          </Col>
          <Col xs={8}>
            <Link to="/prizes">
              <Row className="points-btn py-3">
                <Col xs={6}>
                  <img
                    src={PointsIcon}
                    alt="Click here to redeem your points"
                    className="nav-icon"
                  />
                </Col>
                <Col xs={6} className="points-info nunito-font text-center">
                  <h2>
                    <span className="larger-font">
                      {this.context.globalState.currentAccount.points}
                    </span>
                    <br />
                    <small>POINTS</small>
                  </h2>
                </Col>
              </Row>
            </Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

Navbar.contextType = GlobalContext;
export default Navbar;
