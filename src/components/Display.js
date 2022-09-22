import React from "react";
import "../css/style.css";

import DisplayBox from "./DisplayBox";
import ResetButton from "./ResetButton";
import CalculatorContext from "./contexts/CalculatorContext";

const Display = (props) => {
  const [{ bill, tipPercentage, people }] = React.useContext(CalculatorContext);
  const billPerPerson = bill && people ? bill / people : 0;
  const tipPerPerson =
    bill && tipPercentage && people
      ? (bill * tipPercentage) / (100 * people)
      : 0;
  return (
    <div className="display">
      <DisplayBox amount={tipPerPerson} name="Tip Amount" />
      <DisplayBox amount={billPerPerson} name="Total" />
      <ResetButton />
    </div>
  );
};

export default Display;
