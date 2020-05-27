import React from "react";
import { AppContext } from "../utils";

const Landing = () => {
  const context = React.useContext(AppContext);
  return (
    <div>
      <h1>{context.name}</h1>
    </div>
  );
};

export default Landing;
