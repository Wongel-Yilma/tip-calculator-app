import React from "react";

import "../css/style.css";
import CalculatorStateContext from "./contexts/CalculatorContext";

const ResetButton = ({ value, isSelected }) => {
  const [, dispatch] = React.useContext(CalculatorStateContext);
  const handleClick = (e) => {
    e.preventDefault();
    dispatch({ type: "RESET" });
  };
  return (
    <button onClick={handleClick} className="button button--reset">
      RESET
    </button>
  );
};

export default ResetButton;
