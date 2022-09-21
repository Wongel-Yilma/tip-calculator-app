import React from "react";

import Calculator from "./Calculator";
import Display from "./Display";

const initialState = {
  tipPercentage: 0,
  bill: 0,
  people: 0,
};

const useTipReducer = (state, action) => {
  switch (action.type) {
    case "TIP_PERCENTAGE":
      return { ...state, tipPercentage: action.newData };
    case "BILL":
      return { ...state, bill: action.newData };
    case "PEOPLE":
      return { ...state, people: action.newData };
    case "RESET":
      return { ...state, initialState };
    default:
      return state;
  }
};

const MainCalculator = () => {
  const [state, dispatch] = React.useReducer(useTipReducer, initialState);
  return (
    <div className="container">
      <Calculator state={state} dispatch={dispatch} />
      <Display state={state} dispatch={dispatch} />
    </div>
  );
};

export default MainCalculator;
