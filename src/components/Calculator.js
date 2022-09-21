import React from "react";

import "../css/style.css";

import Button from "./Button";
import InputBox from "./InputBox";

const percentages = [5, 10, 15, 25, 50, "Custom"];

const option = { minimumFractionDigits: 2, maximumFractionDigits: 2 };

const Calculator = ({ state, dispatch }) => {
  const [selected, setSelected] = React.useState(null);
  return (
    <div className="calculator">
      <form className="form">
        <InputBox
          state={state.bill}
          dispatch={dispatch}
          label="Bill"
          actionType="BILL"
          type="number"
          formatOption={option}
        />
        <div className="tips">
          <p>Select Tip %</p>
          <div className="tip-buttons">
            {percentages.map((percentage, i) => (
              <Button key={i} value={percentage} />
            ))}
          </div>
        </div>
        <div className="people">
          <InputBox
            state={state.people}
            dispatch={dispatch}
            label="Number of People"
            actionType="PEOPLE"
            type="number"
          />
        </div>
      </form>
    </div>
  );
};

export default Calculator;
