import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../store";

import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../assets/css/navbar.css";
import HomeIcon from '../assets/images/home-icon.svg';
import PointsIcon from '../assets/images/gift-icon.svg';

const Navbar = () => {
  const context = useContext(GlobalContext);

  return (
    <Container>
      <Row className="main-navbar">
        <Col xs={4} className="home-btn">
        <Link to="/home">
          <img src={HomeIcon} alt="Click here to redeem your points" className="nav-icon" />
          </Link>
        </Col>
        <Col xs={8}>
        <Link to="/redeem">
          <Row className="points-btn py-3">
              <Col xs={6}>
              <img src={PointsIcon} alt="Click here to redeem your points" className="nav-icon" />
              </Col>
              <Col xs={6} className="points-info nunito-font text-center">
                  <h2><span className="larger-font">{context.globalState.currentAccount.points} </span>
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
};

export default Navbar;
