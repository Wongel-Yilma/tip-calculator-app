import React from "react";
import "../css/style.css";

import DisplayBox from "./DisplayBox";
import ResetButton from "./ResetButton";
import CalculatorContext from "./contexts/CalculatorContext";

const Display = (props) => {
  const [state, dispatch] = React.useContext(CalculatorContext);
  return (
    <div className="display">
      <DisplayBox amount={state.bill} name="Tip Amount" />
      <DisplayBox amount={state.bill} name="Total" />
      <ResetButton />
    </div>
  );
};

export default Display;
