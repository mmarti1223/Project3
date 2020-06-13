import React from "react";
import { Link } from "react-router-dom";

import "../assets/css/navbar.css";
import HomeIcon from '../assets/images/home-icon.svg';

const HomeNavbar = () => {
  return (
    <div className="home-btn single text-center">
        <Link to="/home">
          <img src={HomeIcon} alt="Click here to redeem your points" className="nav-icon py-3" />
        </Link>
    </div>
  );
};

export default HomeNavbar;
