import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../store";

const Navbar = () => {
  const context = useContext(GlobalContext);

  return (
    <div>
      <Link to="/redeem">
        <h1>{context.globalState.currentAccount.points}</h1>
      </Link>
    </div>
  );
};

export default Navbar;
