import React from "react";
import MainCalculator from "./MainCalculator";
import "../css/style.css";

const App = () => {
  return (
    <div className="main-container">
      <div className="logo-box">
        <img src={require("../images/logo.svg").default} alt="logo" />
      </div>
      <MainCalculator />
    </div>
  );
};

export default App;
