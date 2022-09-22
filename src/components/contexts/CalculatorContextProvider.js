import React from "react";
import CalculatorStateContext from "./CalculatorContext";
import useTipReducer from "../reducers/useTipReducer";

const initialState = {
  tipPercentage: 0,
  bill: undefined,
  people: undefined,
};

const CalculatorContextProvider = (props) => {
  const [state, dispatch] = React.useReducer(useTipReducer, initialState);

  return (
    <CalculatorStateContext.Provider value={[state, dispatch]} {...props} />
  );
};

export default CalculatorContextProvider;
