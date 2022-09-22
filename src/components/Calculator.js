import React from "react";

import "../css/style.css";

import Button from "./Button";
import InputBox from "./InputBox";
import { ReactComponent as PersonIcon } from "../images/icon-person.svg";
import { ReactComponent as DollarIcon } from "../images/icon-dollar.svg";
import CalculatorStateContext from "./contexts/CalculatorContext";
const percentages = [5, 10, 15, 25, 50, "Custom"];

const Trial = () => {
  return <div>Hello</div>;
};



const Calculator = () => {
  const [state, dispatch] = React.useContext(CalculatorStateContext);
  console.log(state.bill);
  const [selected, setSelected] = React.useState(null);
  React.useEffect(() => {
    dispatch({ type: "TIP_PERCENTAGE", newData: selected });
  }, [selected,dispatch]);
  return (
    <div className="calculator">
      <form className="form">
        <InputBox
          value={state.bill}
          dispatch={dispatch}
          label="Bill"
          actionType="BILL"
          type="number"
          Icon={<PersonIcon />}
        >
          <Trial />
        </InputBox>
        <div className="tips">
          <p>Select Tip %</p>
          <div className="tip-buttons">
            {percentages.map((percentage, i) => (
              <Button
                key={i}
                setSelected={setSelected}
                selected={selected}
                value={percentage}
              />
            ))}
          </div>
        </div>
        <div className="people">
          <InputBox
            value={state.people}
            dispatch={dispatch}
            label="Number of People"
            actionType="PEOPLE"
            type="number"
            Icon={<DollarIcon />}
          >
            {DollarIcon}
          </InputBox>
        </div>
      </form>
    </div>
  );
};

export default Calculator;
